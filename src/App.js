import React, { useState } from "react";
// import logo from "./logo.svg";
// import { Counter } from "./features/counter/Counter";
import "./App.css";

// import { NavBar } from "./components/navBar/navBar";
import { Route, BrowserRouter as Router, Routes, Link } from "react-router-dom";
import {
  AppBar,
  FormControl,
  Grid,
  InputLabel,
  MenuItem,
  TextField,
  Typography,
} from "@mui/material";
// import { Home } from "./components/home/home";
import { SubredditPreview } from "./features/subredditPreview/SubredditPreview";
import SearchOutlinedIcon from "@mui/icons-material/SearchOutlined";
import { Container } from "@mui/system";
import { Comments } from "./features/comments/Comments";
// import { Home } from "components/home/home.js";
import Select from "@mui/material/Select";

function App() {
  const [subreddit, setSubreddit] = useState("r/popular");
  const handleChange = (e) => {
    // changeState of search
    const selected = e.target.value;
    setSubreddit(selected);
    // console.log(subreddit);
  };

  return (
    <Router>
      <AppBar
        position="relative"
        sx={{ marginBottom: "10px", maxHeight: "900px" }}
      >
        <Grid container direction={"row"}>
          <Grid item xs={3} sm={3} md={4} lg={4} xl={4}>
            <nav>
              <Link
                to="/"
                style={{
                  textDecoration: "none",
                  textAlign: "center",
                  // justifyContent: "center",
                }}
              >
                {/* <Typography component="h2" variant="h2"> */}
                <Typography
                  component={"h1"}
                  variant={"h3"}
                  sx={{ display: { xs: "none", md: "block" } }}
                  style={{ color: "white", textDecoration: "none" }}
                >
                  RedditMinimal
                </Typography>
                <Typography
                  component={"h1"}
                  variant={"h5"}
                  sx={{ display: { xs: "block", md: "none" } }}
                  style={{ color: "white", textDecoration: "none" }}
                >
                  RedditMinimal
                </Typography>
                {/* </Typography> */}
              </Link>
            </nav>
          </Grid>
          {/* <Link to="/about">about</Link> */}
          <Grid item xs={6} sm={6} md={4} lg={4} xl={4}>
            <div></div>
          </Grid>
          {/* <Container
              align="right"
              xs={4}
              sm={4}
              md={4}
              style={{ marginLeft: "50px" }}
            > */}
          <Grid item xs={3} sm={3} md={4} lg={4} xl={4}>
            {/* <SearchOutlinedIcon></SearchOutlinedIcon> */}
            <FormControl fullWidth variant="filled">
              <InputLabel>subreddit</InputLabel>
              <Select onChange={handleChange} value={subreddit}>
                <MenuItem value={"r/popular"}>r/popular</MenuItem>
                <MenuItem value={"r/funny"}>r/funny</MenuItem>
                <MenuItem value={"r/gaming"}>r/gaming</MenuItem>
                <MenuItem value={"r/aww"}>r/aww</MenuItem>
                <MenuItem value={"r/science"}>r/science</MenuItem>
                <MenuItem value={"r/announcements"}>r/announcements</MenuItem>
              </Select>
            </FormControl>
          </Grid>
          {/* </Container> */}
        </Grid>
      </AppBar>
      <Routes>
        <Route
          path={"/"}
          element={<SubredditPreview subreddit={subreddit}></SubredditPreview>}
        ></Route>
        <Route
          path={"/:subreddit/comments/:id/:hint"}
          element={<Comments />}
        ></Route>
      </Routes>
    </Router>
  );
}

export default App;
