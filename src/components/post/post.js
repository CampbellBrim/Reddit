import React from "react";

import { useParams } from "react-router-dom";

import { Container } from "@mui/material";

export const Post = ({ props }) => {
  let { hint } = useParams();
  // console.log(props);
  let data = props.data.children[0].data;
  console.log(data);
  return (
    <>
      {/* <h2>{JSON.stringify(props)}</h2> */}
      {/* <h2>post</h2> */}
      {hint === "image" ? (
        <Container align="center">
          <img
            src={data.url}
            alt="yes sir"
            style={{ maxWidth: "60vw", maxHeight: "70vh" }}
          />
        </Container>
      ) : hint === "hosted:video" ? (
        <Container align="center">
          <video
            width="750"
            height="500"
            controls
            autoPlay
            style={{ maxWidth: "80vw" }}
          >
            <source
              src={data.media.reddit_video.fallback_url}
              type="video/mp4"
            />
          </video>
        </Container>
      ) : data.post_hint === "link" ? (
        <a href={data.url}>{data.url}</a>
      ) : data.post_hint === undefined ? (
        <p>{data.title}</p>
      ) : // <p>yes sir</p>
      null}
    </>
  );
};
