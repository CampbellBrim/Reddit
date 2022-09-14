import React from "react";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import { Post } from "../post";

import { BrowserRouter as Router } from "react-router-dom";

test("test the Post component when preview is passed as a prop", () => {
  const props = {
    title: "this is a title",
    author: "someones name",
    post_hint: undefined,
    ups: 22,
    num_comments: 36,
  };

  render(
    <Router>
      <Post page={"preview"} props={props} />
    </Router>
  );
  const post = screen.getByText("this is a title");
  expect(post).toBeInTheDocument();

  const title = screen.getByText("posted by someones name");
  expect(title).toBeInTheDocument();
});

test("test the Post component when comments is passed as a prop", () => {
  const props = {
    data: {
      children: [{ data: { author: "someones name", title: "a title" } }],
    },
  };

  render(
    <Router>
      <Post page={"comments"} props={props} />
    </Router>
  );
  const author = screen.getByText("posted by someones name");
  expect(author).toBeInTheDocument();

  const title = screen.getByText("a title");
  expect(title).toBeInTheDocument();
});
