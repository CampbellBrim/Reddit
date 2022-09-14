import React from "react";
import { screen, fireEvent, render } from "@testing-library/react";
import { Provider } from "react-redux";
import { store } from "./app/store";
import App from "./App";

test("try to get dropdown menu", async () => {
  render(
    <Provider store={store}>
      <App />
    </Provider>
  );
  // get dropdown menu and click it to drop down options
  const dropDown = screen.getByRole("button");
  fireEvent.mouseDown(dropDown);
  expect(dropDown).toBeVisible();

  // get options from drop down menu and make sure they are visible.
  const gaming = screen.getByText("r/gaming");
  const popular = screen.queryByText("r/popular");
  expect(gaming).toBeVisible();
  expect(popular).toBeVisible();

  // after clicking the gaming option the listbox containing is no longer in the document.
  fireEvent.click(screen.getByText("r/gaming"));
  const list = screen.queryByRole("listbox");
  expect(list).not.toBeInTheDocument();
});
