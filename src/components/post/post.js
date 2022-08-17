import React, { useState } from "react";

import { useNavigate, useParams } from "react-router-dom";

import { Container, IconButton, Typography, Grid, Card } from "@mui/material";

import ArrowUpwardOutlinedIcon from "@mui/icons-material/ArrowUpwardOutlined";
import ArrowDownwardOutlinedIcon from "@mui/icons-material/ArrowDownwardOutlined";
import ModeCommentOutlinedIcon from "@mui/icons-material/ModeCommentOutlined";

export const Post = ({ props, page }) => {
  let navigate = useNavigate();
  // console.log(props);

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
  // let hint = useParams({hint}) ? useParams({hint}) : props.hint;
  const hint =
    page === "preview"
      ? props.post_hint
      : page === "comments"
      ? useParams(hint)
      : null;

  // console.log(typeof hint);
  // console.log(hint.hint);

  // console.log("hello there");
  // console.log(hint);
  // console.log(props);
  if (page === "preview") {
    return (
      <>
        {/* <Grid item xs={10} sm={10} md={10}> */}
        <Grid
          item
          xs={12}
          //  sm={10} md={10} lg={10}
          xl={12}
        >
          <Card
          // style={{cursor:}}
          >
            <Container
              style={{ cursor: "pointer" }}
              onClick={() => {
                navigate(
                  `/${props.subreddit}/comments/${props.id}/${props.post_hint}`
                );
              }}
            >
              {/* <h2>{props.author}</h2> */}
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
              {/* <p>{props.title}</p> */}
              {hint === "image" ? (
                <Container align="center">
                  <img
                    src={props.url}
                    // src={imageUrl}
                    // src={props.data.children[0].data.url}
                    alt={props.title}
                    style={{
                      maxWidth: "50vw",
                      maxHeight: "70vh",
                    }}
                  />
                </Container>
              ) : hint === "hosted:video" && props.media ? (
                <Container align="center">
                  <video
                    // width="750"
                    // height="500"
                    width="100%"
                    height="auto"
                    // maxHeight="20vh"
                    controls
                    autoPlay
                    style={{ maxWidth: "80vw" }}
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
              {/* <CardActions disableSpacing> */}
              {/* action color is gray and primary is blue */}
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
        {/* </CardActions> */}
      </>
    );
  }
  // if comments page
  if (page === "comments") {
    // const imageUrl = props.data.children[0].data.url;
    // props = props.data.children[0].data;
    return (
      <>
        <Grid
          item
          // xs={10} sm={10} md={10} lg={10}
          xs={12}
          xl={12}
        >
          <Card
          // onClick={() => {
          //   navigate(
          //     `/${props.subreddit}/comments/${props.id}/${props.post_hint}`
          //   );
          // }}
          >
            {/* <h2>{props.author}</h2> */}
            {/* <h2>{props.data.children[0].data.author}</h2> */}
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
            {/* <p>{props.data.children[0].data.title}</p> */}
            {hint.hint === "image" ? (
              <Container align="center">
                <img
                  // src={props.url}
                  // src={imageUrl}
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
                  width="100%"
                  height="auto"
                  // width="750"
                  // height="500"
                  controls
                  autoPlay
                  style={{ maxWidth: "80vw" }}
                >
                  <source
                    src={
                      props.data.children[0].data.secure_media.reddit_video
                        .fallback_url
                    }
                    // src={props.media.reddit_video.fallback_url}
                    // src={videoUrl}
                    type="video/mp4"
                  />
                </video>
              </Container>
            ) : hint.hint === "link" ? (
              <a href={props.url}>{props.url}</a>
            ) : props.post_hint === undefined ? (
              <p>{props.title}</p>
            ) : null}
            {/* <CardActions disableSpacing> */}
            {/* action color is gray and primary is blue */}
            <Container
              align="left"
              sx={{
                backgroundColor: "lightgray",
                // backgroundColor: "blue",
              }}
            >
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
              {/* change to text */}
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
        {/* </CardActions> */}
      </>
    );
  }
  // console.log(imageUrl);
  // console.log(props.media.reddit_video.fallback_url);
  // let { hint } = useParams();
  // console.log(props);
  // if (page === "preview") {
  //   const handleClick = navigate(
  //     `/${props.subreddit}/comments/${props.id}/${props.post_hint}`
  //   );
  // }
  // console.log(page);
  // const handleClick =
  // page === "preview"
  // ? navigate(`/${props.subreddit}/comments/${props.id}/${props.post_hint}`)
  // : null;
  // console.log(handleClick);
  // if (props.data) {
  // console.log(props.data.children);
  // console.log("data");
  // console.log(props.data);
  // props = props.data.children[0].data;
  // console.log(props.data.children.length);
  // console.log()
  // }
  // console.log(data);

  // console.log(props.data.children[0].data.url);
  // return (
  //   <>
  //     <Grid item xs={10} sm={10} md={10}>
  //       <Card
  //         onClick={() => {
  //           navigate(
  //             `/${props.subreddit}/comments/${props.id}/${props.post_hint}`
  //           );
  //         }}
  //       >
  //         <h2>{props.author}</h2>
  //         <p>{props.title}</p>
  //         {hint === "image" ? (
  //           <Container align="center">
  //             <img
  //               // src={props.url}
  //               // src={imageUrl}
  //               src={props.data.children[0].data.url}
  //               alt={props.title}
  //               style={{
  //                 maxWidth: "60vw",
  //                 maxHeight: "70vh",
  //               }}
  //             />
  //           </Container>
  //         ) : hint === "hosted:video" && props.media ? (
  //           <Container align="center">
  //             <video
  //               width="750"
  //               height="500"
  //               controls
  //               autoPlay
  //               style={{ maxWidth: "80vw" }}
  //             >
  //               <source
  //                 src={props.media.reddit_video.fallback_url}
  //                 // src={videoUrl}
  //                 type="video/mp4"
  //               />
  //             </video>
  //           </Container>
  //         ) : props.post_hint === "link" ? (
  //           <a href={props.url}>{props.url}</a>
  //         ) : props.post_hint === undefined ? (
  //           <p>{props.title}</p>
  //         ) : null}
  //         {/* <CardActions disableSpacing> */}
  //         {/* action color is gray and primary is blue */}
  //         <Container
  //           align="left"
  //           sx={{
  //             backgroundColor: "lightgray",
  //           }}
  //         >
  //           <IconButton onClick={handleUp}>
  //             <ArrowUpwardOutlinedIcon
  //               color={upArrow ? "primary" : "action"}
  //               //   onClick={handleUp}
  //             ></ArrowUpwardOutlinedIcon>
  //           </IconButton>
  //           <IconButton onClick={handleDown}>
  //             <ArrowDownwardOutlinedIcon
  //               color={downArrow ? "primary" : "action"}
  //               //   onClick={handleDown}
  //             ></ArrowDownwardOutlinedIcon>
  //           </IconButton>

  //           <IconButton>
  //             <Typography>{props.ups}</Typography>
  //           </IconButton>

  //           <IconButton>
  //             <ModeCommentOutlinedIcon></ModeCommentOutlinedIcon>
  //           </IconButton>
  //           <IconButton>
  //             <Typography>{props.num_comments}</Typography>
  //           </IconButton>
  //         </Container>
  //       </Card>
  //     </Grid>
  //     {/* </CardActions> */}
  //   </>
  // );
};
