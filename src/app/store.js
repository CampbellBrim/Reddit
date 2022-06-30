import { configureStore } from "@reduxjs/toolkit";
// import counterReducer from "../features/counter/counterSlice";
import subredditPreviewsSlice from "../features/subredditPreview/subredditPreviewSlice";
import commentsSlice from "../features/comments/CommentsSlice";

export const store = configureStore({
  reducer: {
    // counter: counterReducer,
    subredditPreviews: subredditPreviewsSlice,
    commentsPage: commentsSlice,
  },
});
