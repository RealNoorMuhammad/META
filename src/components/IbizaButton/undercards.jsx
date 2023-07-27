import React, { useContext } from "react";
import "./snow.scss";
import lightImage from "./night.png";
import Navbar from "../../Navbar/Navbar";
import darkImage from "./day.png";
import { useTranslation } from "react-i18next";
import AOS from "aos";
import "aos/dist/aos.css";
import useDarkMode from "../use-dark-mode";
import { ThemeContext } from "../../Context/ThemeContext";
import {
  MouseParallaxChild,
  MouseParallaxContainer,
} from "react-parallax-mouse";
AOS.init({
  duration: 2500,
});

function IbizaHeroButton() {
  const { t } = useTranslation();
  const { darkTheme } = useContext(ThemeContext);

  const containerStyle = {
    width: "100%",
    height: "100vh",
    backgroundImage: `url(${darkTheme ? darkImage : lightImage})`,
    backgroundSize: "cover",
    backgroundPosition: "center",
  };

  return (
    <div>
      <div style={containerStyle} className="">
        <Navbar />
       
 
      </div>
     
    </div>
  );
}

export default IbizaHeroButton;
