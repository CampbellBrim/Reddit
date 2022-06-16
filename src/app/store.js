import { configureStore } from "@reduxjs/toolkit";
// import counterReducer from "../features/counter/counterSlice";
import subredditPreviewsSLice from "../features/subredditPreview/subredditPreviewSlice";

export const store = configureStore({
  reducer: {
    // counter: counterReducer,
    subredditPreviews: subredditPreviewsSLice,
  },
});
