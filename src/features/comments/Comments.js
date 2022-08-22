import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  isLoadingComments,
  loadComments,
  selectComments,
} from "./CommentsSlice";

import { useParams } from "react-router-dom";

import { Container, Grid } from "@mui/material";
import { Post } from "../../components/post/Post";
import { Comment } from "../../components/comment/Comment";

import { v4 } from "uuid";
import { SyncLoader } from "react-spinners";

export const Comments = () => {
  const dispatch = useDispatch();
  const comments = useSelector(selectComments);
  const loading = useSelector(isLoadingComments);
  let { subreddit, id } = useParams();

  useEffect(() => {
    dispatch(loadComments({ subreddit: subreddit, id: id }));
  }, [useEffect, subreddit, id]);

  if (loading) {
    return (
      <Container
        sx={{ marginTop: "50vh", marginLeft: "45vw", position: "absolute" }}
      >
        <SyncLoader color="blue" />
      </Container>
    );
  }
  if (typeof comments !== "undefined") {
    return (
      <>
        <Container>
          <Grid
            container
            spacing={2}
            alignItems="center"
            justifyContent={"center"}
          >
            <Post key={v4()} page={"comments"} props={comments[0]}></Post>

            {comments[1].data.children.slice(0, 10).map((item) => {
              return <Comment key={v4()} props={item} align="center"></Comment>;
            })}
          </Grid>
        </Container>
      </>
    );
  }
};
