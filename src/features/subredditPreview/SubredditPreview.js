import React, { useEffect } from "react";
import { Container, Grid } from "@mui/material";

import { v4 } from "uuid";

import { useDispatch, useSelector } from "react-redux";

import {
  isLoading,
  loadAllPreviews,
  selectPreviews,
} from "./subredditPreviewSlice";

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
        style={{
          height: "100%",
          width: "100%",
          display: "flex",
          justifyContent: "center",
        }}
      >
        <SyncLoader
          color="blue"
          style={{
            top: "50%",
            position: "absolute",
          }}
        />
      </Container>
    );
  }

  if (typeof dataObject.data !== "undefined") {
    return (
      <Container align="center">
        <Grid container spacing={2}>
          {dataObject.data.children.slice(0, 15).map((subreddit) => (
            <Post props={subreddit.data} page={"preview"} key={v4()}></Post>
          ))}
        </Grid>
      </Container>
    );
  }
};
