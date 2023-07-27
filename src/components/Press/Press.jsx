import React from "react";
import { Grid } from "@mui/material";
import PartofGuild from "./PartofGuild";
import AOS from "aos";
import eth from "./eth.png";
import "aos/dist/aos.css";
AOS.init({
  duration: 2500,
});
function Press() {
  return (
    <div className="addpress_bg" id='Press'>
      <br />

      <Grid container id="press">
        <Grid item md={12} lg={12} sm={12} xs={12} style={{ margin: "50px" }}>
          <div data-aos="fade-up" data-aos-duration="1000">
            {" "}
            <h1 className="utilityhead neon">Press</h1>
          </div>
        </Grid>
      </Grid>
      <br />
      <br />
      <PartofGuild />
    </div>
  );
}

export default Press;
