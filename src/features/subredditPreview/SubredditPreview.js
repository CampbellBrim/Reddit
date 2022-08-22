import React, { useEffect } from "react";
import { Container, Grid } from "@mui/material";

import { v4 } from "uuid";

import { useDispatch, useSelector } from "react-redux";

import {
  isLoading,
  loadAllPreviews,
  selectPreviews,
} from "./SubredditPreviewSlice";

import { SyncLoader } from "react-spinners";
// import { Post } from "../../components/post/Post";
import { Post } from "../../components/post/post.js";

export const SubredditPreview = ({ subreddit }) => {
  const dispatch = useDispatch();
  const dataObject = useSelector(selectPreviews);
  const loading = useSelector(isLoading);

  useEffect(() => {
    dispatch(loadAllPreviews({ subreddit: subreddit }));
  }, [subreddit]);

  if (loading) {
    return (
      <Container
        sx={{ marginTop: "50vh", marginLeft: "45vw", position: "absolute" }}
      >
        <SyncLoader color="blue" />
      </Container>
    );
  }

  if (typeof dataObject.data !== "undefined") {
    return (
      <Container align="center" style={{ align: "center" }}>
        <Grid container spacing={2}>
          {dataObject.data.children.slice(0, 15).map((subreddit) => (
            <Post props={subreddit.data} page={"preview"} key={v4()}></Post>
          ))}
        </Grid>
      </Container>
    );
  }
};
