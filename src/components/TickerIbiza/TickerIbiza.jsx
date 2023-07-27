import React from "react";

import Marquee from "react-fast-marquee";
import card from "./image/logo1.png";
import card2 from "./image/logo2.png";

import card4 from "./image/logo4.png";

import card7 from "./image/logo7.png";

import card8 from "./image/logo8.png";
import card9 from "./image/logo9.png";
import card10 from "./image/logo10.png";
import card11 from "./image/logo11.png";
import card12 from "./image/6.png";
import { Grid } from "@mui/material";
import AOS from "aos";
import "aos/dist/aos.css";
AOS.init({
  duration: 2500,
});
function HeroSection() {
  return (
    <div className="background_hero_ticker">
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <Marquee pauseOnHover={true} gradient={true} speed={50}>
        <div className="mar_wrap">
          <a href="https://www.bitnovo.com/" target="_blank">
            {" "}
            <img src={card8} className="logo_ticker" />
          </a>
        </div>
        <div className="mar_wrap">
          <a href="https://bitsacard.com/" target="_blank">
            {" "}
            <img src={card9} className="logo_ticker" />
          </a>
        </div>
        <div className="mar_wrap">
          <a href="https://vibrant.io/" target="_blank">
            {" "}
            <img src={card10} className="logo_ticker" />
          </a>
        </div>
        <div className="mar_wrap">
          {" "}
          <a
            href="https://www.google.com/maps/dir//thehub+ibiza/@38.9308134,1.3975798,13z/data=!4m8!4m7!1m0!1m5!1m1!1s0x129940b56dd133b5:0xb2ccaf85a3fa89c9!2m2!1d1.4452991!2d38.9591026"
            target="_blank"
          >
            {" "}
            <img src={card} className="logo_ticker_oth" />
          </a>
        </div>
        <div className="mar_wrap">
          <a href="https://www.asesoriamadavi.com/" target="_blank">
            {" "}
            <img src={card2} className="logo_ticker_oth" />
          </a>
        </div>
        &nbsp; &nbsp;
        <div className="mar_wrap">
          <a href="https://lasdalias.es/" target="_blank">
            <img
              src={card4}
              className="logo_ticker"
              style={{ position: "relative", top: "20px" }}
            />
          </a>
        </div>
        <div className="mar_wrap">
          <a
            href="https://ibizabotanicobiotecnologico.com/ibb/"
            target="_blank"
          >
            {" "}
            <img src={card7} className="logo_ticker_oth" />
          </a>
        </div>
        <div className="mar_wrap">
          <a href="https://ibizaloe.com/" target="_blank">
            {" "}
            <img src={card11} className="logo_ticker_phool" />
          </a>
        </div>
        <div className="mar_wrap">
          <a href="https://quadrans.io/" target="_blank">
            {" "}
            <img
              src={card12}
              className="logo_ticker"
              style={{ position: "relative", top: "20px" }}
            />
          </a>
        </div>
      </Marquee>
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
    </div>
  );
}

export default HeroSection;
