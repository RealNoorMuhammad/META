import React from "react";
import darkImage from "./ibza.png";
import lightImage from "./light-mode-image.png";

const ImageComponent = ({ darkMode }) => {
  const imageSource = darkMode ? darkImage : lightImage;

  return <img src={imageSource} alt="Toggle" />;
};

export default ImageComponent;
