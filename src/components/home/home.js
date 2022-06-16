import { Container, Grid, Typography } from "@mui/material";
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
  console.log(typeof dataObject);
  console.log(dataObject);

  if (loading) {
    console.log(dataObject);
    return <div style={{ marginTop: "150px" }}>Loading</div>;
  }

  // for some reason the code is running a bunch of
  // times and causes an error when it runs before state
  // has been loaded correctly from the api

  // this fixes the issue but is not a good fix
  if (typeof dataObject.data !== "undefined") {
    // alert(JSON.stringify(dataObject.data, null, 4));
    // console.log(dataObject.data.children);
    return (
      <Container>
        <Grid container spacing={4}>
          {dataObject.data.children.slice(0, 15).map((subreddit) => (
            <Grid item xs={12} sm={6} md={6} key={subreddit.data.id}>
              <Paper
                elevation={6}
                // gutterBottom
                // gutterLeft
                // gutterRight
                // maxWidth="sm"
              >
                <Typography variant="h5" component="h3">
                  {subreddit.data.title}
                </Typography>
              </Paper>
            </Grid>
          ))}
        </Grid>
      </Container>
    );
  }
};
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
