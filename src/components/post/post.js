import React, { useState } from "react";

import { useNavigate, useParams } from "react-router-dom";

import { Container, IconButton, Typography, Grid, Card } from "@mui/material";

import ArrowUpwardOutlinedIcon from "@mui/icons-material/ArrowUpwardOutlined";
import ArrowDownwardOutlinedIcon from "@mui/icons-material/ArrowDownwardOutlined";
import ModeCommentOutlinedIcon from "@mui/icons-material/ModeCommentOutlined";

export const Post = ({ props, page }) => {
  let navigate = useNavigate();

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
  const hint =
    page === "preview"
      ? props.post_hint
      : page === "comments"
      ? useParams(hint)
      : null;

  if (page === "preview") {
    return (
      <>
        <Grid item xs={12} xl={12}>
          <Card>
            <Container
              style={{
                cursor: "pointer",
              }}
              onClick={() => {
                navigate(
                  `/${props.subreddit}/comments/${props.id}/${props.post_hint}`
                );
              }}
            >
              <Typography
                component={"h3"}
                variant={"h5"}
                style={{
                  color: "gray",
                  marginLeft: "10px",
                  textAlign: "left",
                }}
              >
                posted by {props.author}
              </Typography>
              <Typography
                component={"h4"}
                variant={"subtitle2"}
                style={{ marginLeft: "10px", textAlign: "left" }}
              >
                {props.title}
              </Typography>
              {hint === "image" ? (
                <Container align="center">
                  <img
                    src={props.url}
                    alt={props.title}
                    style={{
                      maxWidth: "50vw",
                      maxHeight: "70vh",
                    }}
                  />
                </Container>
              ) : hint === "hosted:video" && props.media ? (
                <Container
                  align="center"
                  // style={{ maxHeight: "80vh" }}
                >
                  <video
                    // height="50%"
                    // width="auto"
                    // max-height={"150"}
                    // style="width: 20, height: 20"
                    // style={{ maxWidth: "100%", maxHeight: "100%" }}
                    // height: auto;
                    // max-width="100%"
                    // max-width="50%"
                    // width="30%"
                    // height={"auto"}
                    width="750"
                    height="400"
                    controls
                    autoPlay
                    // style={{ maxWidth: "80vw" }}
                  >
                    <source
                      src={props.media.reddit_video.fallback_url}
                      type="video/mp4"
                    />
                  </video>
                </Container>
              ) : props.post_hint === "link" ? (
                <a href={props.url}>{props.url}</a>
              ) : props.post_hint === undefined ? null : null // <p>{props.title}</p>
              }
            </Container>
            <Container
              align="left"
              sx={{
                backgroundColor: "lightgray",
              }}
            >
              <IconButton onClick={handleUp}>
                <ArrowUpwardOutlinedIcon
                  color={upArrow ? "primary" : "action"}
                ></ArrowUpwardOutlinedIcon>
              </IconButton>
              <IconButton onClick={handleDown}>
                <ArrowDownwardOutlinedIcon
                  color={downArrow ? "primary" : "action"}
                ></ArrowDownwardOutlinedIcon>
              </IconButton>

              <IconButton>
                <Typography>{props.ups}</Typography>
              </IconButton>

              <IconButton>
                <ModeCommentOutlinedIcon></ModeCommentOutlinedIcon>
              </IconButton>
              <IconButton>
                <Typography>{props.num_comments}</Typography>
              </IconButton>
            </Container>
          </Card>
        </Grid>
      </>
    );
  }
  // comments page
  if (page === "comments") {
    return (
      <>
        <Grid item xs={12} xl={12}>
          <Card>
            <Typography
              component={"h3"}
              variant={"h5"}
              style={{ color: "gray", marginLeft: "10px" }}
            >
              posted by {props.data.children[0].data.author}
            </Typography>
            <Typography
              component={"h4"}
              variant={"subtitle2"}
              style={{ marginLeft: "10px" }}
            >
              {props.data.children[0].data.title}
            </Typography>
            {hint.hint === "image" ? (
              <Container align="center">
                <img
                  src={props.data.children[0].data.url}
                  alt={props.title}
                  style={{
                    maxWidth: "50vw",
                    maxHeight: "70vh",
                  }}
                />
              </Container>
            ) : hint.hint === "hosted:video" &&
              props.data.children[0].data.secure_media ? (
              <Container align="center" style={{ margin: "auto" }}>
                <video
                  width="750"
                  height="400"
                  controls
                  autoPlay
                  style={{ maxWidth: "80vw" }}
                >
                  <source
                    src={
                      props.data.children[0].data.secure_media.reddit_video
                        .fallback_url
                    }
                    type="video/mp4"
                  />
                </video>
              </Container>
            ) : hint.hint === "link" ? (
              <a href={props.url}>{props.url}</a>
            ) : props.post_hint === undefined ? (
              <p>{props.title}</p>
            ) : null}
            <Container
              align="left"
              sx={{
                backgroundColor: "lightgray",
              }}
            >
              <IconButton onClick={handleUp}>
                <ArrowUpwardOutlinedIcon
                  color={upArrow ? "primary" : "action"}
                ></ArrowUpwardOutlinedIcon>
              </IconButton>
              <IconButton onClick={handleDown}>
                <ArrowDownwardOutlinedIcon
                  color={downArrow ? "primary" : "action"}
                ></ArrowDownwardOutlinedIcon>
              </IconButton>
              <IconButton>
                <Typography>{props.data.children[0].data.ups}</Typography>
              </IconButton>

              <IconButton>
                <ModeCommentOutlinedIcon></ModeCommentOutlinedIcon>
              </IconButton>
              <IconButton>
                <Typography>
                  {props.data.children[0].data.num_comments}
                </Typography>
              </IconButton>
            </Container>
          </Card>
        </Grid>
      </>
    );
  }
};
