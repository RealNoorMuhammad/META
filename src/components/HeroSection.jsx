import React from "react";
import gloryBgVideo from "./old.mp4";
const HeroSection = () => {
  return (
    <div>
      {" "}
      <div>
        <video className="videoTag" autoPlay="true" loop="true" muted="false">
          <source src={gloryBgVideo} type="video/mp4" />
          <source src={gloryBgVideo} type="video/ogg" />
        </video>
      </div>
    </div>
  );
};

export default HeroSection;
