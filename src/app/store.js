import { configureStore } from "@reduxjs/toolkit";
import SubredditPreviewSlice from "../features/subredditPreview/subredditPreviewSlice.js";
import commentsSlice from "../features/comments/CommentsSlice";

export const store = configureStore({
  reducer: {
    subredditPreviews: SubredditPreviewSlice,
    commentsPage: commentsSlice,
  },
});
