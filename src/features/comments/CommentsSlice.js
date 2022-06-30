import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { useParams } from "react-router-dom";

// only need use params here?

//   let { subreddit, id } = useParams();

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
    // hasError: false,
  },
  extraReducers: (builder) => {
    builder
      .addCase(loadComments.pending, (state, action) => {
        state.isLoadingComments = true;
        state.hasError = false;
      })
      .addCase(loadComments.rejected, (state, action) => {
        state.isLoadingComments = false;
        state.hasError = true;
        // state.comments = action.payload;
      })
      .addCase(loadComments.fulfilled, (state, action) => {
        state.isLoadingComments = false;
        state.hasError = false;
        // state is not updating correctly
        state.comments = action.payload;
        // state.subreddits = ["goodbye"];
      });
  },
};

const commentsSlice = createSlice(sliceOptions);

export const selectComments = (state) => state.commentsPage.comments;

export const isLoadingComments = (state) =>
  state.commentsPage.isLoadingComments;

export default commentsSlice.reducer;
