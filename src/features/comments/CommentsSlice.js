import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

export const loadComments = createAsyncThunk(
  "commentsPage/loadComments",
  async (arg) => {
    try {
      const data = await fetch(
        `https://www.reddit.com/r/${arg.subreddit}/comments/${arg.id}.json`
      );
      const json = await data.json();
      return json;
    } catch (err) {
      return err.message;
    }
  }
);

const sliceOptions = {
  name: "commentsPage",
  initialState: {
    comments: undefined,
    isLoadingComments: false,
  },
  extraReducers: (builder) => {
    builder
      .addCase(loadComments.pending, (state) => {
        state.isLoadingComments = true;
        state.hasError = false;
      })
      .addCase(loadComments.rejected, (state) => {
        state.isLoadingComments = false;
        state.hasError = true;
      })
      .addCase(loadComments.fulfilled, (state, action) => {
        state.isLoadingComments = false;
        state.hasError = false;
        state.comments = action.payload;
      });
  },
};

const commentsSlice = createSlice(sliceOptions);

export const selectComments = (state) => state.commentsPage.comments;

export const isLoadingComments = (state) =>
  state.commentsPage.isLoadingComments;

export default commentsSlice.reducer;
