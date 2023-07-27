import React from "react";
import { useSwiper } from "swiper/react";
import ArrowCircleLeftOutlinedIcon from "@mui/icons-material/ArrowCircleLeftOutlined";
import ArrowCircleRightOutlinedIcon from "@mui/icons-material/ArrowCircleRightOutlined";
function SwiperNavButtons() {
  const swiper = useSwiper();
  return (
    <div className="swiper-nav-btns">
      <button onClick={() => swiper.slidePrev()} className="swiper_button_css">
        <ArrowCircleLeftOutlinedIcon className="swiper_icons" />
      </button>
      &nbsp;
      <button onClick={() => swiper.slideNext()} className="swiper_button_css">
        <ArrowCircleRightOutlinedIcon className="swiper_icons" />
      </button>
    </div>
  );
}

export default SwiperNavButtons;
