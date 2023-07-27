import React, { useState, useEffect } from "react";

import { useMediaQuery } from "@mui/material";
import { useTheme } from "@mui/material/styles";
import AnimatedCursor from "react-animated-cursor";
import HeroSection from "../components/PageEnd/Hero";
import HeroSections from "../components/PageEnd/Heromb";
import "./Cursor.css";
const IBIZAMAIN = () => {
  const theme = useTheme();
  const smallScreen = useMediaQuery((theme) => theme.breakpoints.down("lg"));
  const [scrolled, setScrolled] = useState("0%");

  const scrollProgress = () => {
    const scrollPx = document.documentElement.scrollTop;
    const winHeightPx =
      document.documentElement.scrollHeight -
      document.documentElement.clientHeight;
    const scrolled = `${(scrollPx / winHeightPx) * 100}%`;
    setScrolled(scrolled);
  };

  useEffect(() => {
    window.addEventListener("scroll", scrollProgress);
    return () => window.removeEventListener("scroll", scrollProgress);
  });

  const scrollTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  const progressContainerStyle = {
    background: "#f8bbd0",
    boxShadow: "0 2px 4px rgba(0, 0, 0, 0.3)",
    height: "5px",
    position: "fixed",
    top: 0,
    left: 0,
    width: "100vw",
    zIndex: 99,
  };

  const progressBarStyle = {
    height: "5px",
    background: "#e91e63",
    width: scrolled,
  };

  const buttonStyle = {
    background: "#e91e63",
    border: "none",
    color: "#fff",
    cursor: "pointer",
    padding: "10px 20px",
    position: "fixed",
    bottom: "20px",
    right: "20px",
    zIndex: 99,
  };
  return (
    <div>
      <div className="progress-container" style={progressContainerStyle}>
        <div className="progress-bar" style={progressBarStyle} />
      </div>

      {!smallScreen && (
        <div>
          <HeroSection />
          <AnimatedCursor
            innerSize={10}
            outerSize={35}
            color="0, 255 ,255"
            outerAlpha={0.4}
            innerScale={0.1}
            outerScale={2}
          />
        </div>
      )}
      {/* This is used For the mobile view Blue print Map*/}
      {smallScreen && (
        <div>
          <HeroSections />
        </div>
      )}
    </div>
  );
};

export default IBIZAMAIN;
