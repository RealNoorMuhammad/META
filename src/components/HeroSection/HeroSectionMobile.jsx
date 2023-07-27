import React from "react";
import Button from "@mui/material/Button";
import { Grid } from "@mui/material";
import hero from "./hero.png";
import eth from "./ethh.png";
import {
  MouseParallaxChild,
  MouseParallaxContainer,
} from "react-parallax-mouse";
import { useTranslation } from "react-i18next";
import Navbar from "../../Navbar/Navbar";
import AOS from "aos";
import "aos/dist/aos.css";
AOS.init({
  duration: 6500,
});
function HeroSection() {
  const { t } = useTranslation();
  return (
    <div className=" background_hero">
      <Navbar />
      <div className="container  ">
        <div className="container">
          <Grid container spacing={2}>
            <Grid item md={6} lg={6} xs={12} sm={12}>
              <br />
              <MouseParallaxContainer
                className="parallax"
                resetOnLeave
                updateStyles={{
                  width: "100%",
                  height: "100%",
                }}
              >
                <br />
                <MouseParallaxChild
                  factorX={0.1}
                  factorY={0.1}
                  updateStyles={{
                    filter: "invert(1)",

                    alignItems: "center",
                    justifyContent: "center",
                    width: "100%",
                    height: "100%",
                  }}
                >
                  <img src={hero} alt="" className="hero_parallex vert-move" />
                </MouseParallaxChild>
              </MouseParallaxContainer>
              <br />
              <div data-aos="fade-up" data-aos-duration="1000">
                <h1 className="top_hero_under_text_sign_up">
                  The Ibiza <br />
                  Web3
                  <br /> ecosystem
                </h1>
              </div>
              <br />
              <div data-aos="fade-up" data-aos-duration="1000">
                <p className="top_hero_under_text_sign_upp">
                  {t("hero_under_text")}
                </p>
              </div>
              &nbsp;
              <a href="#UtilityToken">
                <Button
                  variant="outlined"
                  className="top_hero_under_button_css_login "
                >
                  Explore More
                </Button>
              </a>
            </Grid>
          </Grid>
        </div>
      </div>
      <br />
      <br />
      <br />{" "}
      <h1 className="utilityhead neon">
        {t("Built")} &nbsp; <img src={eth} style={{ width: "160px" }} />
      </h1>
      <br />
      <br />
      <br />
    </div>
  );
}

export default HeroSection;
