import { configureStore } from "@reduxjs/toolkit";
import SubredditPreviewSlice from "../features/subredditPreview/SubredditPreviewSlice.js";
// Cannot find file '../features/subredditPreview/SubredditPreviewSlice.js' in './src/app'.
import commentsSlice from "../features/comments/CommentsSlice";

export const store = configureStore({
  reducer: {
    subredditPreviews: SubredditPreviewSlice,
    commentsPage: commentsSlice,
  },
});
