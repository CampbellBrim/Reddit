import { useState } from "react";
// import { useNavigate } from "react-router-dom";

import { v4 } from "uuid";

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

import { useNavigate } from "react-router-dom";
import { Post } from "./post";
// import { PreviewPost } from "../post/PreviewPost";

export const PreviewPost = ({ props }) => {
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
  const navigate = useNavigate();

  // console.log(props);
  // console.log(props.hint);
  return (
    <Post props={props} page={"preview"}></Post>
    // <Grid item xs={12} sm={12} md={12} key={props.id}>
    //   <Card key={v4()}>
    //     <Container
    //       style={{ cursor: "pointer" }}
    //       onClick={() => {
    //         navigate(
    //           `/${props.subreddit}/comments/${props.id}/${props.post_hint}`
    //         );
    //       }}
    //     >
    //       <CardContent sx={{ padding: "0px" }}>
    //         <Typography
    //           component={"h3"}
    //           variant={"h7"}
    //           sx={{ marginLeft: "10px" }}
    //         >
    //           {`r/${props.subreddit}`}
    //         </Typography>
    //         <Typography
    //           component={"h3"}
    //           variant={"caption"}
    //           color="text.secondary"
    //         >{`Posted by ${props.author}`}</Typography>
    //         <Typography
    //           component={"h3"}
    //           variant={"h5"}
    //           // sx={{ backgroundColor: "ivory" }}
    //           align={"center"}
    //         >
    //           {props.title}
    //         </Typography>
    //         {/* <Typography></Typography> */}
    //         {props.post_hint === "image" ? (
    //           <Container align="center">
    //             <img
    //               src={props.url}
    //               alt={props.title}
    //               style={{ maxWidth: "60vw", maxHeight: "70vh" }}
    //             />
    //           </Container>
    //         ) : props.post_hint === "hosted:video" ? (
    //           <Container align="center">
    //             <video
    //               width="750"
    //               height="500"
    //               controls
    //               autoPlay
    //               // muted={false}
    //               style={{ maxWidth: "80vw" }}
    //             >
    //               <source
    //                 src={props.media.reddit_video.fallback_url}
    //                 // src={props.media.reddit_video.hls_url}
    //                 // src={props.url}
    //                 type="video/mp4"
    //               />
    //               {/* application/vnd.apple.mpegURL */}
    //             </video>
    //           </Container>
    //         ) : props.post_hint === "link" ? (
    //           <a href={props.url}>{props.url}</a>
    //         ) : null}
    //       </CardContent>
    //       <CardMedia
    //         align="center"
    //         // component={subreddit.data.post_hint}
    //         image={props.url}
    //         height="140"
    //         // style={{ maxWidth: "60vw", maxHeight: "70vh" }}
    //         alt="sure"
    //       />
    //     </Container>
    //     <Container sx={{ backgroundColor: "lightgray" }}>
    //       <CardActions disableSpacing>
    //         <IconButton onClick={handleUp}>
    //           <ArrowUpwardOutlinedIcon
    //             color={upArrow ? "primary" : "action"}
    //             //   onClick={handleUp}
    //           ></ArrowUpwardOutlinedIcon>
    //         </IconButton>
    //         {/* action color is gray and primary is blue */}
    //         <IconButton onClick={handleDown}>
    //           <ArrowDownwardOutlinedIcon
    //             color={downArrow ? "primary" : "action"}
    //             //   onClick={handleDown}
    //           ></ArrowDownwardOutlinedIcon>
    //         </IconButton>

    //         <IconButton>
    //           <Typography>{props.ups}</Typography>
    //         </IconButton>

    //         <IconButton>
    //           <ModeCommentOutlinedIcon></ModeCommentOutlinedIcon>
    //         </IconButton>
    //         <IconButton>
    //           <Typography>{props.num_comments}</Typography>
    //         </IconButton>
    //       </CardActions>
    //     </Container>
    //   </Card>
    // </Grid>
  );
};
