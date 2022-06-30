import {
  Card,
  CardContent,
  CardMedia,
  Container,
  Grid,
  Typography,
} from "@mui/material";

import React, { useEffect } from "react";

import { useDispatch, useSelector } from "react-redux";

import {
  isLoading,
  loadAllPreviews,
  selectPreviews,
} from "../../features/subredditPreview/subredditPreviewSlice";

import { useNavigate } from "react-router-dom";

export const Home = () => {
  const dispatch = useDispatch();
  const dataObject = useSelector(selectPreviews);
  const loading = useSelector(isLoading);

  // to change pages
  const navigate = useNavigate();

  // load subreddits
  useEffect(() => {
    dispatch(loadAllPreviews());
  }, []);

  // console.log(dataObject);

  if (loading) {
    // console.log(dataObject);
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

  // for some reason the code is running a bunch of
  // times and causes an error when it runs before state
  // has been loaded correctly from the api

  // this fixes the issue but i think it is not a good fix
  if (typeof dataObject.data !== "undefined") {
    // i think the return statement is placed incorrectly to check if subreddit posts have images.
    return (
      <Container>
        <Grid container spacing={4}>
          {/* <img src="https://i.redd.it/kb2c2m7nvm691.jpg" alt="totally"></img> */}
          {dataObject.data.children.slice(0, 15).map((subreddit) => (
            <Grid item xs={12} sm={12} md={12} key={subreddit.data.id}>
              <Card
                style={{ cursor: "pointer" }}
                onClick={() => {
                  // console.log(subreddit.data.id);
                  navigate(
                    `/${subreddit.data.subreddit}/comments/${subreddit.data.id}/${subreddit.data.post_hint}`
                  );
                }}
              >
                <CardContent sx={{ padding: "0px" }}>
                  <Typography component={"h5"} variant={"h5"}>
                    {`r/${subreddit.data.subreddit}`}
                  </Typography>
                  <Typography>{`Posted by ${subreddit.data.author}`}</Typography>
                  <Typography
                    component={"h4"}
                    variant={"h4"}
                    sx={{ backgroundColor: "ivory" }}
                    align={"center"}
                  >
                    {subreddit.data.title}
                  </Typography>
                  {/* <Typography></Typography> */}
                  {subreddit.data.post_hint === "image" ? (
                    <Container align="center">
                      <img
                        src={subreddit.data.url}
                        alt="yes sir"
                        style={{ maxWidth: "60vw", maxHeight: "70vh" }}
                      />
                    </Container>
                  ) : subreddit.data.post_hint === "hosted:video" ? (
                    <Container align="center">
                      <video
                        width="750"
                        height="500"
                        controls
                        autoPlay
                        style={{ maxWidth: "80vw" }}
                      >
                        <source
                          src={subreddit.data.media.reddit_video.fallback_url}
                          type="video/mp4"
                        />
                      </video>
                    </Container>
                  ) : subreddit.data.post_hint === "link" ? (
                    <a href={subreddit.data.url}>{subreddit.data.url}</a>
                  ) : null}
                </CardContent>
                <CardMedia
                  align="center"
                  // component={subreddit.data.post_hint}
                  image={subreddit.data.url}
                  height="140"
                  // style={{ maxWidth: "60vw", maxHeight: "70vh" }}
                  alt="sure"
                />
              </Card>
            </Grid>
          ))}
        </Grid>
      </Container>
    );
  }
};
