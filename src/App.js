import React from "react";
// import logo from "./logo.svg";
// import { Counter } from "./features/counter/Counter";
import "./App.css";

// import { NavBar } from "./components/navBar/navBar";
import { Route, BrowserRouter as Router, Routes, Link } from "react-router-dom";
import {
  AppBar,
  FormControl,
  InputLabel,
  MenuItem,
  TextField,
} from "@mui/material";
import { Home } from "./components/home/home";
import SearchOutlinedIcon from "@mui/icons-material/SearchOutlined";
import { Container } from "@mui/system";
import { Comments } from "./features/comments/Comments";
// import { Home } from "components/home/home.js";
import Select from "@mui/material/Select";

function App() {
  const handleChange = (event) => {
    // changeState of search
  };
  return (
    <Router>
      <AppBar position="relative">
        <nav>
          <Link to="/">home</Link>
          <Link to="/about">about</Link>
          <Container align="right">
            <SearchOutlinedIcon></SearchOutlinedIcon>
            <FormControl>
              <InputLabel>r/popular</InputLabel>
              <Select onClick={handleChange}>
                <MenuItem value={"r/popular"}>r/popular</MenuItem>
                <MenuItem value={"r/trending"}>r/trending</MenuItem>
              </Select>
            </FormControl>
            {/* <TextField
              id="standard-basic"
              label="Standard"
              variant="standard"
              align="right"
            ></TextField> */}
          </Container>
          {/* <NavBar /> */}
        </nav>
      </AppBar>
      <Routes>
        <Route path={"/"} element={<Home></Home>}></Route>
        <Route
          path={"/:subreddit/comments/:id/:hint"}
          element={<Comments />}
        ></Route>
      </Routes>
    </Router>
  );
}

export default App;
