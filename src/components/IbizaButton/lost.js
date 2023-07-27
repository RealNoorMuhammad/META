import React from "react";

import { Grid } from "@mui/material";

import darkImage from "./ibnx.png";
import lightImage from "./nxtt.png";

import AOS from "aos";
import "aos/dist/aos.css";
AOS.init({
  duration: 2500,
});

function IbizaHeroButton({ darkMode }) {
  const getImage = () => {
    return darkMode ? darkImage : lightImage;
  };
  return (
    <div className="container">
      <Grid container spacing={8}>
        <Grid
          item
          md={6}
          lg={6}
          sm={12}
          xs={12}
          className="center"
          id="ibizanxt"
        >
          <div data-aos="fade-up" data-aos-duration="1000">
            <h5 className="undercard_heade neon">Ibiza NXT</h5>
            <p className="undercard_parae">
              Our innovative ecosystem is designed to create meaningful
              connections between local businesses, artists, and tourists,
              fostering economic growth and enhancing the island experience.
              Explore the key components of our platform and join us in this
              exciting journey as we transform Ibiza into a leading destination
              for both technology-driven development and responsible tourism.
            </p>
            <div className="start_under_buttone">
              <button class="button-17 " role="button">
                Explore
              </button>
              <br />
              <br />
              <br />
              <br />
            </div>
          </div>
        </Grid>
        <Grid item md={6} lg={6} sm={12} xs={12} className="center">
          <div data-aos="fade-down-left" data-aos-duration="1000">
            <img src={getImage()} alt="Image" className="avatar" />
            <br />
            <br />
            <br />
            <br />
          </div>
        </Grid>
      </Grid>
    </div>
  );
}

export default IbizaHeroButton;
