import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

export const loadAllPreviews = createAsyncThunk(
  "subredditPreviews/loadAllPreviews",
  async (arg) => {
    const data = await fetch(`https://www.reddit.com/${arg.subreddit}.json`);
    const json = await data.json();
    return json;
  }
);

const sliceOptions = {
  name: "subredditPreviews",
  initialState: {
    subreddits: ["hello"],
    isLoadingSubredditsPreviews: false,
    hasError: false,
  },
  extraReducers: (builder) => {
    builder
      .addCase(loadAllPreviews.pending, (state, action) => {
        state.isLoadingSubredditsPreviews = true;
        state.hasError = false;
      })
      .addCase(loadAllPreviews.rejected, (state, action) => {
        state.isLoadingSubredditsPreviews = false;
        state.hasError = true;
      })
      .addCase(loadAllPreviews.fulfilled, (state, action) => {
        state.isLoadingSubredditsPreviews = false;
        state.hasError = false;
        state.subreddits = action.payload;
      });
  },
};

const previewsSlice = createSlice(sliceOptions);

export const selectPreviews = (state) => state.subredditPreviews.subreddits;

export const isLoading = (state) =>
  state.subredditPreviews.isLoadingSubredditsPreviews;

export default previewsSlice.reducer;
