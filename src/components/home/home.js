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

import { Paper } from "@mui/material";

// import { Paper } from "@mui/material/Paper";
// import { Typography } from "@mui/material";

// https://www.reddit.com/r/popular.json

// export const Home = async () => {
//   //   const redditResponse = await fetch("https://www.reddit.com/r/popular.json");
//   //   const json = await redditResponse.json();
//   //   console.log(json);
//   return (
//     <h1 style={{ marginTop: "50px", color: "red" }}>hello there avacado</h1>
//   );
// };

// export const Home = async () => {
//   const redditResponse = await fetch("https://www.reddit.com/r/popular.json");
//   const json = await redditResponse.json();
//   // const json = await redditResponse.data.json();
//   const data = json.data.children;
//   // const author = data.data.author;
//   // const image = data["10"].data.preview.images["0"].resolutions["0"].url;

//   // console.log(image);

//   // https://preview.redd.it/8n2cal3lx3491.jpg?width=108&amp;crop=smart&amp;auto=webp&amp;s=c10250e5a98500ac2c71203f0d4f8d0407e2a74e
//   // needs quote mark in front of the link i believe
//   // "https://preview.redd.it/8n2cal3lx3491.jpg?
//   // console.log(data);
//   // console.log(json);
//   return (
//     <h1 style={{ marginTop: "50px", color: "red" }}>hello there avacado</h1>
//   );
// };

export const Home = () => {
  const dispatch = useDispatch();
  const dataObject = useSelector(selectPreviews);
  const loading = useSelector(isLoading);
  // load subreddits
  useEffect(() => {
    dispatch(loadAllPreviews());
  }, []);
  // pretty sure is supposed to return object with api call info
  // console.log(dataObject);
  // const subreddits = dataObject.data;
  // console.log(typeof dataObject);
  console.log(dataObject);

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

  // this fixes the issue but is not a good fix
  if (typeof dataObject.data !== "undefined") {
    // i think the return statement is placed incorrectly to check if subreddit posts have images.
    return (
      <Container>
        <Grid container spacing={4}>
          {/* <img src="https://i.redd.it/kb2c2m7nvm691.jpg" alt="totally"></img> */}
          {dataObject.data.children.slice(0, 15).map((subreddit) => (
            // let image = subreddit.data ? <img></img> : null;

            <Grid item xs={12} sm={12} md={6} key={subreddit.data.id}>
              {/* image was not loading because it did not fit the container i believe. find a way to size the images appropriately */}
              <Card>
                <CardContent sx={{ padding: "0px" }}>
                  <Typography
                    component={"h4"}
                    variant={"h4"}
                    sx={{ backgroundColor: "ivory" }}
                    align={"center"}
                  >
                    {subreddit.data.title}
                  </Typography>
                  <Typography>{subreddit.data.post_hint}</Typography>
                  <Typography>
                    {JSON.stringify(subreddit.data.is_video)}
                  </Typography>
                  <img
                    src={subreddit.data.url}
                    alt="yes sir"
                    style={{ maxWidth: "60vw", maxHeight: "70vh" }}
                  />
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
              {/* <Paper
                elevation={6}
                
              >
                <Typography variant="h5" component="h3">
                  {subreddit.data.title}
                </Typography>
                {/* <img src={subreddit.data.preview.images[0].resolutions[0].url} alt="picture" /> */}
              {/* <h1> */}
              {/* {
                    subreddit.data.preview.images[0].resolutions[0].url.split(
                      "?"
                    )[0]
                  } */}
              {/* {JSON.stringify(subreddit.data.url)}
                </h1>
                <img
                  style={{ width: "100px" }}
                  url={subreddit.data.url}
                  alt="this is totally a deal"
                ></img>
                {/* subreddit.data.preview.images["0"].resulutions["0"].url */}
              {/* </Paper> */}
            </Grid>
          ))}
        </Grid>
      </Container>
    );
  }
};
{
  /* <img src={subreddit.data.preview.images["0"]} alt={picture} ></img>  */
}
{
  /* <img
  src={
    subreddit.data.preview.images["0"].resolutions.url[0].split(
      "?"
    )[0]
  }
  alt={"picture"}
></img> */
}
{
  /* <img
  src={
    subreddit.data.preview.images["0"].resolutions[0].url.split(
      "?"
    )[0]
  }
  alt={"picture"}
></img> */
}

// return <div>{JSON.stringify(dataObject.data)}</div>;
// {/* {subreddits.map((subreddit) => (
//   <Paper
//     key={
//       {
//         /*some kind of id */
//       }
//     }
//     elevation={6}
//   >
//     <Typography variant="h3" component="h3">
//       {/*sub.data.title */}
//       {subreddit.data.title}
//     </Typography>
//   </Paper>
// ))} */}

// <Typography variant="h3" component="h3">
//   {/*sub.data.title */}
// </Typography>
// <image src={} alt=""></image>
// <Typography variant="h4" component="h4">
//   {" "}
//   {/*sub.data.number of comments */} Comments src=sub.data.url
// </Typography>

// <div>
//   <h1 style={{ top: "170px", position: "absolute" }}>this is home</h1>
// </div>
