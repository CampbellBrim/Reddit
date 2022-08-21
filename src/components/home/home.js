import {
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Container,
  Grid,
  IconButton,
  Typography,
} from "@mui/material";

import { v4 } from "uuid";

import ModeCommentOutlinedIcon from "@mui/icons-material/ModeCommentOutlined";
import ArrowUpwardOutlinedIcon from "@mui/icons-material/ArrowUpwardOutlined";
import ArrowDownwardOutlinedIcon from "@mui/icons-material/ArrowDownwardOutlined";

import React, { useEffect } from "react";

import { useDispatch, useSelector } from "react-redux";

import {
  isLoading,
  loadAllPreviews,
  selectPreviews,
} from "../../features/subredditPreview/subredditPreviewSlice";
// import { PreviewPost } from "../post/PreviewPost";

import { useNavigate } from "react-router-dom";

import { SyncLoader } from "react-spinners";
import { Post } from "../post/Post";

export const Home = ({ subreddit }) => {
  const dispatch = useDispatch();
  const dataObject = useSelector(selectPreviews);
  const loading = useSelector(isLoading);
  const navigate = useNavigate();

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
