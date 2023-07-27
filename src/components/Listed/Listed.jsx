import React from "react";
import { Grid } from "@mui/material";
import coin from "./coin.png";
import gec from "./gec.png";
import { useTranslation } from "react-i18next";
import AOS from "aos";
import "aos/dist/aos.css";
AOS.init({
  duration: 2500,
});
function Press() {
  const { t } = useTranslation();
  return (
    <>
      <Grid container>
        <Grid item md={12} lg={12} sm={12} xs={12} style={{ margin: "50px" }}>
          <div data-aos="fade-up" data-aos-duration="1000">
            {" "}
            <h1 className="utilityhead neon"> {t("Subscribe")}</h1>
          </div>
        </Grid>
        <Grid
          item
          md={12}
          lg={12}
          sm={12}
          xs={12}
          style={{ margin: "50px", justifyContent: "center", display: "flex" }}
        >
          <br />
          <br />
          <div class="custom-search  ">
            <div data-aos="fade-up" data-aos-duration="1000">
              <input
                type="text"
                class="custom-search-input"
                placeholder="What is your mail ?"
              />
              <button class="custom-search-botton " type="submit">
                {t("Sub")}
              </button>
            </div>
          </div>
        </Grid>

        <Grid item md={12} lg={12} sm={12} xs={12} style={{ margin: "50px" }}>
          <div data-aos="fade-up" data-aos-duration="1000">
            <h1 className="utilityhead neon">{t("Listed")}</h1>
          </div>
        </Grid>

        <Grid
          item
          md={12}
          lg={12}
          sm={12}
          xs={12}
          style={{
            margin: "50px",
            justifyContent: "center",
            alignItems: "center",
            textAlign: "center",
          }}
        >
          <div data-aos="fade-up" data-aos-duration="1000">
            <a
              href="https://coinmarketcap.com/currencies/ibiza-token/"
              target="_blank"
            >
              <img src={coin} />
            </a>{" "}
            &nbsp; &nbsp;{" "}
            <a
              href="https://www.coingecko.com/en/coins/ibiza-token"
              target="_blank"
            >
              {" "}
              <img src={gec} />
            </a>
          </div>
        </Grid>
      </Grid>

      <br />
      <br />
      <br />
      <br />
    </>
  );
}

export default Press;
