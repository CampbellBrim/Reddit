import { configureStore } from "@reduxjs/toolkit";
import subredditPreviewSlice from "../features/subredditPreview/SubredditPreviewSlice.js";
import commentsSlice from "../features/comments/CommentsSlice";

export const store = configureStore({
  reducer: {
    subredditPreviews: subredditPreviewSlice,
    commentsPage: commentsSlice,
  },
});
