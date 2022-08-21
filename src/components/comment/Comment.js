import { Card, Grid, Typography } from "@mui/material";
import React from "react";

export const Comment = ({ props }) => {
  return (
    <>
      <Grid item xl={12} xs={12}>
        <Card>
          <Typography variant="h5" component="h4" style={{ marginLeft: "5px" }}>
            {props.data.author}
          </Typography>
          <Typography
            paragraph={true}
            variant={"body1"}
            style={{
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
