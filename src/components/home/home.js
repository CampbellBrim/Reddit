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
import { PreviewPost } from "../post/PreviewPost";

import { useNavigate } from "react-router-dom";

import { SyncLoader } from "react-spinners";
import { Post } from "../post/post";

export const Home = ({ subreddit }) => {
  const dispatch = useDispatch();
  const dataObject = useSelector(selectPreviews);
  const loading = useSelector(isLoading);
  // console.log(subreddit);
  // to change pages
  const navigate = useNavigate();

  // load subreddits
  useEffect(() => {
    dispatch(loadAllPreviews({ subreddit: subreddit }));
  }, [subreddit]);

  // console.log(dataObject);

  if (loading) {
    // console.log(dataObject);
    return (
      <Container
        sx={{ marginTop: "50vh", marginLeft: "45vw", position: "absolute" }}
      >
        <SyncLoader
          // sx={{ top: "50vh", right: "50vw" }}
          color="blue"
        />
      </Container>
      // <Container style={{ marginTop: "150px" }}>
      //   <Grid container>
      //     <Grid item align="center">
      //       <Typography>Loading</Typography>
      //     </Grid>
      //   </Grid>
      // </Container>
    );
  }

  // for some reason the code is running a bunch of
  // times and causes an error when it runs before state
  // has been loaded correctly from the api

  // this fixes the issue but i think it is not a good fix
  if (typeof dataObject.data !== "undefined") {
    return (
      <Container align="center" style={{ align: "center" }}>
        <Grid container spacing={2}>
          {dataObject.data.children.slice(0, 15).map((subreddit) => (
            // <PreviewPost props={subreddit.data} key={v4()}></PreviewPost>
            <Post props={subreddit.data} page={"preview"} key={v4()}></Post>
            // <Post></Post>
            // <Grid item xs={12} sm={12} md={12} key={subreddit.data.id}>
            //   <Card
            //     style={{ cursor: "pointer" }}
            //     onClick={() => {
            //       navigate(
            //         `/${subreddit.data.subreddit}/comments/${subreddit.data.id}/${subreddit.data.post_hint}`
            //       );
            //     }}
            //   >
            //     <CardContent sx={{ padding: "0px" }}>
            //       <Typography
            //         component={"h3"}
            //         variant={"h7"}
            //         sx={{ marginLeft: "10px" }}
            //       >
            //         {`r/${subreddit.data.subreddit}`}
            //       </Typography>
            //       <Typography
            //         component={"h3"}
            //         variant={"h7"}
            //       >{`Posted by ${subreddit.data.author}`}</Typography>
            //       <Typography
            //         component={"h3"}
            //         variant={"h5"}
            //         // sx={{ backgroundColor: "ivory" }}
            //         align={"center"}
            //       >
            //         {subreddit.data.title}
            //       </Typography>
            //       {/* <Typography></Typography> */}
            //       {subreddit.data.post_hint === "image" ? (
            //         <Container align="center">
            //           <img
            //             src={subreddit.data.url}
            //             alt="yes sir"
            //             style={{ maxWidth: "60vw", maxHeight: "70vh" }}
            //           />
            //         </Container>
            //       ) : subreddit.data.post_hint === "hosted:video" ? (
            //         <Container align="center">
            //           <video
            //             width="750"
            //             height="500"
            //             controls
            //             autoPlay
            //             muted
            //             style={{ maxWidth: "80vw" }}
            //           >
            //             <source
            //               src={subreddit.data.media.reddit_video.fallback_url}
            //               type="video/mp4"
            //             />
            //           </video>
            //         </Container>
            //       ) : subreddit.data.post_hint === "link" ? (
            //         <a href={subreddit.data.url}>{subreddit.data.url}</a>
            //       ) : null}
            //     </CardContent>
            //     <CardMedia
            //       align="center"
            //       // component={subreddit.data.post_hint}
            //       image={subreddit.data.url}
            //       height="140"
            //       // style={{ maxWidth: "60vw", maxHeight: "70vh" }}
            //       alt="sure"
            //     />
            //     <CardActions disableSpacing>
            //       <IconButton>
            //         <ArrowUpwardOutlinedIcon color="action"></ArrowUpwardOutlinedIcon>
            //       </IconButton>
            //       <IconButton>
            //         <ArrowDownwardOutlinedIcon color="primary"></ArrowDownwardOutlinedIcon>
            //       </IconButton>

            //       <IconButton>
            //         <Typography>{subreddit.data.ups}</Typography>
            //       </IconButton>

            //       <IconButton>
            //         <ModeCommentOutlinedIcon></ModeCommentOutlinedIcon>
            //       </IconButton>
            //       <IconButton>
            //         <Typography>{subreddit.data.num_comments}</Typography>
            //       </IconButton>
            //     </CardActions>
            //   </Card>
            // </Grid>
          ))}
        </Grid>
      </Container>
    );
  }
};
