import React, { useContext } from "react";

import lightImage from "./ok.jpg";
import Navbar from "../../Navbar/Navbar";
import darkImage from "./nit.jpeg";
import { useTranslation } from "react-i18next";
import AOS from "aos";
import "aos/dist/aos.css";
import useDarkMode from "../use-dark-mode";
import { ThemeContext } from "../../Context/ThemeContext";

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
