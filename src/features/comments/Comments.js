// needs to make a call to fetch the current page

// import { useParams } from "react-router-dom";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  isLoadingComments,
  loadComments,
  selectComments,
} from "./CommentsSlice";

import { useParams } from "react-router-dom";

import { Container, Grid, Typography } from "@mui/material";
import { Post } from "../../components/post/post";
import { Comment } from "../../components/comment/Comment";

import { v4 } from "uuid";

export const Comments = () => {
  const dispatch = useDispatch();
  const comments = useSelector(selectComments);
  const loading = useSelector(isLoadingComments);
  let { subreddit, id } = useParams();
  // let { id } = useParams();

  useEffect(() => {
    dispatch(loadComments({ subreddit: subreddit, id: id }));
  }, []);

  console.log(comments);

  if (loading) {
    return (
      <Container style={{ marginTop: "150px" }}>
        <Grid container>
          <Grid item align="center">
            <Typography>Loading</Typography>
          </Grid>
        </Grid>
      </Container>
    );
  }
  if (typeof comments !== "undefined") {
    return (
      <>
        <Post key={v4()} props={comments[0]}></Post>

        {comments[1].data.children.slice(0, 10).map((item, index) => {
          return <Comment key={v4()} props={item} align="center"></Comment>;

          // comments[1].data.children.map((child) => {
          //   // return <Comment key={v4()} props={child}></Comment>;
          //   return <h3 key={v4()}>this will be comments</h3>;
          // });

          // comments.map((child) => {
          //   // return <Comment key={v4()} props={child}></Comment>;
          //   return <h3 key={v4()}>this will be comments</h3>;
          // });
        })}
        {/* <h1>{subreddit}</h1>

{/* <h2>{JSON.stringify(comments)}</h2> */}
      </>
    );
  }
};
