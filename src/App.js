import React, { Fragment } from "react";
// import logo from "./logo.svg";
// import { Counter } from "./features/counter/Counter";
import "./App.css";

// import { NavBar } from "./components/navBar/navBar";
import { Route, BrowserRouter as Router, Routes, Link } from "react-router-dom";
import { AppBar, TextField } from "@mui/material";
import { Home } from "./components/home/home";
import SearchOutlinedIcon from "@mui/icons-material/SearchOutlined";
import { Container } from "@mui/system";
// import { Home } from "components/home/home.js";

function App() {
  return (
    <Router>
      <AppBar position="relative">
        <nav>
          <Link to="/">home</Link>
          <Link to="/about">about</Link>
          <Container align="right">
            <SearchOutlinedIcon></SearchOutlinedIcon>
            <TextField
              id="standard-basic"
              label="Standard"
              variant="standard"
              align="right"
            ></TextField>
          </Container>
          {/* <NavBar /> */}
        </nav>
      </AppBar>
      <Routes>
        <Route path={"/"} element={<Home></Home>}></Route>
      </Routes>
    </Router>
  );
}

export default App;
