import React from "react";
import logo from "./logo.png";
import { Grid } from "@mui/material";
function Hero() {
  return (
    <div className="herodesk">
      <Grid container spacing={2}>
        <Grid
          item
          md={12}
          xs={12}
          sm={12}
          lg={12}
          style={{ textAlign: "center" }}
        >
          {" "}
          <br /> <br />
          <img src={logo} />
        </Grid>

        <Grid
          item
          md={12}
          xs={12}
          sm={12}
          lg={12}
          style={{ textAlign: "center" }}
        >
          <br />
          <br />
          <h1 className="head_fof">404</h1>
          <br /> <p className="head_fofs">Ooops! Page not found</p> <br />{" "}
          <a href="https://www.ibizatoken.com/">
            <button class="button-17 " role="button">
              Back to Home
            </button>
          </a>
        </Grid>
      </Grid>
    </div>
  );
}

export default Hero;
