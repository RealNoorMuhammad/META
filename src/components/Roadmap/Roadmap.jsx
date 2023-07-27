import React from "react";
import "./roadmap.scss";
import { useTranslation } from "react-i18next";
import { Grid } from "@mui/material";
import Navbar from "../../Navbar/Navbar";
import "./road.css";
import AOS from "aos";
import "aos/dist/aos.css";
AOS.init({
  duration: 4500,
});
const Roadmap = () => {
  const { t } = useTranslation();
  return (
    <div className=" " id="roadmap">
      <br />
      <br />
      <h1 className="roadmap_titles neon"> {t("Road_Head")}</h1>
      <br />
      <div className="container">
        <br />
        <div data-aos="fade-up" data-aos-duration="1000">
          <p className="utilityhead_under">{t("Road_Para_one")}</p>
          <br />
          <p className="utilityhead_under">{t("Road_Para_two")}</p>
          <br />
          <p className="utilityhead_under">{t("Road_Para_three")}</p>
        </div>
      </div>

      <br />
      <br />
      <div class=" container timeline">
        <ul>
          <li>
            <span>1</span>
            <div class="content">
              <p>{t("Road_map_One")}</p>
            </div>
          </li>
          <li>
            <span>2</span>
            <div class="content">
              <p>{t("Road_map_Two")}</p>
            </div>
          </li>
          <li>
            <span>3</span>
            <div class="content">
              <p>{t("Road_map_Three")}</p>
            </div>
          </li>
          <li>
            <span>4</span>
            <div class="content">
              <p>{t("Road_map_Four")}</p>
            </div>
          </li>
          <li>
            <span>5</span>
            <div class="content">
              <p>{t("Road_map_Five")}</p>
            </div>
          </li>{" "}
          <li>
            <span>6</span>
            <div class="content">
              <p>{t("Road_map_Six")}</p>
            </div>
          </li>
          <li>
            <span>7</span>
            <div class="content">
              <p>{t("Road_map_Seven")}</p>
            </div>
          </li>
        </ul>
      </div>
      <br />
      <br />
    </div>
  );
};

export default Roadmap;
