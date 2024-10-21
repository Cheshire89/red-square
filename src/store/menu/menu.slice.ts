import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { MenuState } from "./menu.model";
import PocketBase, { RecordModel } from "pocketbase";
import { Util } from "../../services/Util.service";
import { MenuUtil } from "./menu.util";

const initialState: MenuState = {
  page: null,
  data: null,
  status: "idle",
  error: null,
};

const pb = new PocketBase(process.env.REACT_APP_API_URL);

const requestCollectionData = (categories: any[]): Promise<RecordModel[]>[] => {
  const categoryNames = categories.map(({ name }) => name);
  const expand = "category_id";
  const filter = categories.map(({ id }) => `category_id?~"${id}"`).join("||");

  const collections = [
    pb.collection("menuItem").getFullList({
      filter,
      expand,
    }),
  ];

  if (categoryNames.includes("wine")) {
    collections.push(
      pb.collection("wineItem").getFullList({
        filter,
        expand,
        sort: "type, price_bottle",
      })
    );
  }

  if (categoryNames.includes("vodka")) {
    collections.push(
      pb.collection("vodkaItem").getFullList({
        filter,
        expand,
        sort: "country",
      })
    );
  }

  return collections;
};

export const getMenuDataByPageName = createAsyncThunk(
  "menu/getMenuData",
  async (pageName: string) => {
    try {
      const data: RecordModel[] = await pb
        .collection("menu")
        .getFirstListItem(
          `profile_id="${process.env.REACT_APP_ID}" && name="${pageName}"`
        )
        .then((menu) =>
          pb.collection("category").getFullList({
            filter: `menu_id?~"${menu.id}"`,
          })
        )
        .then((categories) => {
          const collections = requestCollectionData(categories);
          if (categories.length) {
            return Promise.all(collections).then((data) =>
              MenuUtil.parseByCategorySection(data.flat())
            );
          }
          return Promise.resolve([]);
        });
      return data;
    } catch (e) {
      return e;
    }
  }
);

const menuSlice = createSlice({
  name: "menu",
  initialState,
  reducers: {
    setPage: (state, action) => {
      if (action.payload !== state.page) {
        state.page = action.payload;
        state.status = "idle";
      }
    },
  },
  selectors: {
    getPage: ({ page }) => page,
    getMenuData: ({ data }) => data,
    getMenuStatus: ({ status }) => status,
    getMenuError: ({ error }) => error,
  },
  extraReducers(builder) {
    builder
      .addCase(getMenuDataByPageName.pending, (state, action) => {
        state.page = action.meta.arg;
        state.status = "loading";
      })
      .addCase(
        getMenuDataByPageName.fulfilled,
        (state, { payload }: { payload: any }) => {
          state.status = "succeeded";

          if (payload?.wine) {
            payload.wine = Util.sortBy(payload.wine, "type");
          }

          if (payload?.vodka) {
            payload.vodka = Util.sortBy(payload.vodka, "country");
          }

          state.data = payload;
        }
      )
      .addCase(getMenuDataByPageName.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error.message;
      });
  },
});

export const { setPage } = menuSlice.actions;
export const { getMenuData, getMenuStatus, getMenuError, getPage } =
  menuSlice.selectors;
export default menuSlice.reducer;
