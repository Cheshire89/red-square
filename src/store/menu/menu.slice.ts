import { createSlice, createAsyncThunk, AsyncThunk } from "@reduxjs/toolkit";
import { MenuState } from "./menu.model";
import PocketBase, { ListResult, RecordModel } from "pocketbase";
import _ from "lodash";
import { MenuItem } from "@mui/material";

const initialState: MenuState = {
  page: null,
  data: null,
  status: "idle",
  error: null,
};

const pb = new PocketBase(process.env.REACT_APP_API_URL_ALT);

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
          const filter = categories
            .map(({ id }) => `category_id?~"${id}"`)
            .join("||");
          const expand = "category_id";
          return Promise.all([
            pb.collection("menuItem").getFullList({
              filter,
              expand,
            }),
            pb.collection("wineItem").getFullList({
              filter,
              expand: "category_id",
              sort: "price_glass",
            }),
          ]).then((data) => data.flat());
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
          return {
            ...acc,
            [expand.category_id[0].name]: [
              ...(acc[expand.category_id[0].name] || []),
              menuItem,
            ],
          };
        }, {});

        if (res?.wine) {
          res.wine = res.wine.reduce(
            (acc: any, cur: any) => ({
              ...acc,
              [cur.type]: [...(acc[cur.type] || []), cur],
            }),
            {}
          );
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
