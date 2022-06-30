import React from "react";

export const Comment = ({ props }) => {
  return (
    <>
      <h3>{props.data.author}</h3>
      <p>{props.data.body}</p>
    </>
  );
};
