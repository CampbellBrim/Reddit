//  does not need to be async?
import { createSlice } from "@reduxjs/toolkit";

const sliceOptions = {
  name: "searchSubreddit",
  initialState: {
    subredditSearch: "popular",
  },
  reducers: {
    // update searchSubreddit
    //
  },
};

const subredditSearchSlice = createSlice(sliceOptions);

export default subredditSearchSlice.reducer;
