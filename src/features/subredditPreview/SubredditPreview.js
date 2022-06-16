// import
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { useEffect } from "react";
import { LoadAllPreviews } from "./subredditPreviewSlice";
import { useDispatch, useSelector } from "react-redux";
import { Paper, Typography } from "@mui/material";

const SubredditPreviews = () => {
  const dispatch = useDispatch();
  // const isLoading = useSelector(); selector for slice of state for loading subreddits
  // const sebreddits = useSelector(); selector for slice of state for sebreddits

  useEffect(() => {
    dispatch(LoadAllPreviews());
  }, [dispatch]);

  if (isLoading) {
    // would be nice to download spinner to use here
    return <h1>Loading...</h1>;
  }

  return {
    /*object with subreddit slice*/
  }
    .slice(
      {
        /*first index */
      },
      {
        /*last index */
      }
    )
    .map((sub) => {
      <Paper>
        <Typography variant="h3" component="h3">
          {/*sub.data.title */}
        </Typography>
        <Typography variant="h3" component="h3">
          {/*sub.data.title */}
        </Typography>
        <image src={} alt=""></image>
        <Typography variant="h4" component="h4">
          {" "}
          {/*sub.data.number of comments */} Comments src=sub.data.url
        </Typography>
      </Paper>;
    });
};
