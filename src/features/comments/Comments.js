// needs to make a call to fetch the current page

// import { useParams } from "react-router-dom";
import React, { useEffect, useState } from "react";
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
import { SyncLoader } from "react-spinners";

import { IconButton } from "@mui/material";

import ArrowUpwardOutlinedIcon from "@mui/icons-material/ArrowUpwardOutlined";
import ArrowDownwardOutlinedIcon from "@mui/icons-material/ArrowDownwardOutlined";
import ModeCommentOutlinedIcon from "@mui/icons-material/ModeCommentOutlined";

export const Comments = () => {
  const dispatch = useDispatch();
  const comments = useSelector(selectComments);
  const loading = useSelector(isLoadingComments);
  let { subreddit, id } = useParams();
  // let { id } = useParams();

  useEffect(() => {
    dispatch(loadComments({ subreddit: subreddit, id: id }));
  }, [useEffect, subreddit, id]);

  // console.log(comments);

  const [upArrow, setUpArrow] = useState(false);
  const [downArrow, setDownArrow] = useState(false);

  const handleUp = (e) => {
    e.preventDefault();
    setUpArrow(true);
    setDownArrow(false);
  };
  const handleDown = (e) => {
    e.preventDefault();
    setUpArrow(false);
    setDownArrow(true);
  };

  if (loading) {
    return (
      // <Container style={{ marginTop: "150px" }}>
      //   <Grid container>
      //     <Grid item align="center">
      //       <Typography>Loading</Typography>
      //     </Grid>
      //   </Grid>
      // </Container>
      <Container
        sx={{ marginTop: "50vh", marginLeft: "45vw", position: "absolute" }}
      >
        <SyncLoader
          // sx={{ top: "50vh", right: "50vw" }}
          color="blue"
        />
      </Container>
    );
  }
  if (typeof comments !== "undefined") {
    // if (comments?) {
    return (
      <>
        <Container>
          <Grid
            container
            // xs={12}
            spacing={2}
            alignItems="center"
            // justifyItems={"center"}
            justifyContent={"center"}
            // direction="column"
          >
            {/* <p>{JSON.stringify(comments)}</p> */}
            <Post key={v4()} page={"comments"} props={comments[0]}></Post>
            {/* action color is gray and primary is blue */}
            {/* <Container align="center">
            <IconButton onClick={handleUp}>
              <ArrowUpwardOutlinedIcon
                color={upArrow ? "primary" : "action"}
                //   onClick={handleUp}
              ></ArrowUpwardOutlinedIcon>
            </IconButton>
            <IconButton onClick={handleDown}>
              <ArrowDownwardOutlinedIcon
                color={downArrow ? "primary" : "action"}
                //   onClick={handleDown}
              ></ArrowDownwardOutlinedIcon>
            </IconButton>

            <IconButton>
            <Typography>{comments[0].ups}</Typography>
            </IconButton>

            <IconButton>
              <ModeCommentOutlinedIcon></ModeCommentOutlinedIcon>
            </IconButton>
            <IconButton>
              <Typography>{comments[0].num_comments}</Typography>
              </IconButton>
            </Container> */}
            {comments[1].data.children.slice(0, 10).map((item, index) => {
              return <Comment key={v4()} props={item} align="center"></Comment>;
            })}
          </Grid>
        </Container>
      </>
    );
  }
};
