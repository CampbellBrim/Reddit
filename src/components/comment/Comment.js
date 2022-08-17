import { Card, Grid, Typography } from "@mui/material";
import React from "react";

export const Comment = ({ props }) => {
  return (
    <>
      <Grid item xl={12} xs={12}>
        <Card>
          {/* <h3>{props.data.author}</h3> */}
          <Typography
            variant="h5"
            component="h4"
            // sx={{ display: { xs: "none", md: "block" } }}
            style={{ marginLeft: "5px" }}
          >
            {props.data.author}
          </Typography>
          {/* <p>{props.data.body}</p> */}
          <Typography
            paragraph={true}
            variant={"body1"}
            style={{
              // marginLeft: "5px",
              margin: "10px",
            }}
          >
            {props.data.body}
          </Typography>
        </Card>
      </Grid>
    </>
  );
};
