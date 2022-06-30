// needs to load posts from a specified catagory. default to most popular on home.

import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

// https://www.reddit.com/r/popular.json

// eventually this wil be managed by search slice of state
const subredditSearch = "popular";

export const loadAllPreviews = createAsyncThunk(
  "subredditPreviews/loadAllPreviews",
  async () => {
    const data = await fetch(
      `https://www.reddit.com/r/${subredditSearch}.json`
    );
    const json = await data.json();
    return json;
  }
);

const sliceOptions = {
  name: "subredditPreviews",
  initialState: {
    // subreddits: {
    //   hi: "HI",
    // },
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
        // state is not updating correctly
        state.subreddits = action.payload;
        // state.subreddits = ["goodbye"];
      });
  },
};

const previewsSlice = createSlice(sliceOptions);

export const selectPreviews = (state) => state.subredditPreviews.subreddits;

// export const selectSubredditSearch = (state) => state.subredditPreviews.

export const isLoading = (state) =>
  state.subredditPreviews.isLoadingSubredditsPreviews;

export default previewsSlice.reducer;
