import React from "react";
import { Grid, Typography } from "@mui/material";

const WhyChooseUs = () => {
  return (
    <div style={{ padding: "0px 8px", width: "100%" }}>
      <Grid container spacing={2}>
        <Grid item xs={12}>
          <Typography variant="h4" gutterBottom>
            {/* Heading */}
          </Typography>
        </Grid>
        <Grid item xs={12} md={6} style={{ margin: "0 auto" }}>
          {/* <Typography>Robinn</Typography> */}
        </Grid>
      </Grid>
    </div>
  );
};

export default WhyChooseUs;
