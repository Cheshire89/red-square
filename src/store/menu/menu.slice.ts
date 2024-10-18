import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { MenuState } from "./menu.model";
import PocketBase, { RecordModel } from "pocketbase";
import { Util } from "../../services/Util.service";

const initialState: MenuState = {
  page: null,
  data: null,
  status: "idle",
  error: null,
};

const pb = new PocketBase(process.env.REACT_APP_API_URL_ALT);

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
    // console.log("pagename", pageName);
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
          console.log("categories", categories);
          const collections = requestCollectionData(categories);
          if (categories.length) {
            return Promise.all(collections).then((data) => {
              console.log("data");
              return data.flat();
            });
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
      .addCase(getMenuDataByPageName.fulfilled, (state, action) => {
        state.status = "succeeded";

        const data = action.payload as any[];

        const res = data.reduce((acc, cur) => {
          const { expand, ...menuItem } = cur;
          const key = expand.category_id.name || expand.category_id[0].name;
          return {
            ...acc,
            [key]: [...(acc[key] || []), menuItem],
          };
        }, {});

        if (res?.wine) {
          res.wine = Util.sortBy(res.wine, "type");
        }

        if (res?.vodka) {
          res.vodka = Util.sortBy(res.vodka, "country");
        }

        state.data = res;
      })
      .addCase(getMenuDataByPageName.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error.message;
      });
    //   .addCase(getMenuDataByPageName.settled, (state.action) => {});
  },
});

export const { setPage } = menuSlice.actions;
export const { getMenuData, getMenuStatus, getMenuError, getPage } =
  menuSlice.selectors;
export default menuSlice.reducer;
