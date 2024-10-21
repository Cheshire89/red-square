import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { Collections, ContentRecord, ContentResponse } from "../../pbmodels";
import PocketBase from "pocketbase";
import { ContentRecordState } from "./content.model";

const pb = new PocketBase(process.env.REACT_APP_API_URL);

export const getPageConent = createAsyncThunk(
  "content/getPageConent",
  async (pageName: string) => {
    try {
      const data: any = await pb
        .collection(Collections.Content)
        .getFirstListItem(
          `profile_id="${process.env.REACT_APP_ID}" && page_name="${pageName}"`
        );
      return data;
    } catch (e) {
      return e;
    }
  }
);

const initialState: ContentRecordState = {
  page_name: null,
  content: null,
  profile_id: null,
  status: "idle",
  error: null,
};

const contentSlice = createSlice({
  name: "content",
  initialState,
  reducers: {
    setContent: (state, action) => {
      state.page_name = action.payload;
      state.status = "idle";
    },
  },
  selectors: {
    getContent: ({ content }) => content,
    getContentStatus: ({ status }) => status,
    getContentError: ({ error }) => error,
  },
  extraReducers(builder) {
    builder
      .addCase(getPageConent.pending, (state, action) => {
        state.page_name = action.meta.arg;
        state.status = "loading";
      })
      .addCase(
        getPageConent.fulfilled,
        (state, { payload }: { payload: ContentRecord }) => {
          state.page_name = payload.page_name;
          state.content = payload.content;
          state.profile_id = payload.profile_id;
          state.status = "succeeded";
        }
      )
      .addCase(getPageConent.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error.message;
      });
  },
});

export const { setContent } = contentSlice.actions;
export const { getContent, getContentStatus, getContentError } =
  contentSlice.selectors;
export default contentSlice.reducer;
