import React from "react";
import { useTranslation } from "react-i18next";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { Grid } from "@mui/material";
import AOS from "aos";
import "aos/dist/aos.css";
AOS.init({
  duration: 2500,
});
function HeroSection() {
  const { t } = useTranslation();
  return (
    <div className="background_hero_ticker_faq" id="faq">
      <Grid container>
        <Grid item md={12} lg={12} sm={12} xs={12} style={{ margin: "50px" }}>
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />

          <br />
          <br />

          <br />

          <div data-aos="fade-up" data-aos-duration="1000">
            <h1 className="utilityhead neon" style={{ color: "#fff" }}>
              Faq
            </h1>
          </div>
        </Grid>
      </Grid>
      <br />
      <br />
      <div className="container">
        <Grid item lg={12} xs={12} sm={12} md={12}>
          <br />
          <br />
          <div data-aos="fade-up" data-aos-duration="1000">
            <Accordion
              style={{
                background: "#fff",
                color: "#000 ",
                border: "2px solid #fff ",
                borderRadius: "10px",
              }}
              className="dark-mode"
            >
              <AccordionSummary
                expandIcon={<ExpandMoreIcon className="svg" />}
                aria-controls="panel1a-content"
                id="panel1a-header"
              >
                <Typography className="faq_top">{t("Question_one")}</Typography>
              </AccordionSummary>
              <>
                <Typography className="faq_under">{t("Answer_one")}</Typography>
                <br />
              </>
            </Accordion>
          </div>

          <br />
          <div data-aos="fade-up" data-aos-duration="1000">
            <Accordion
              style={{
                background: "#fff",
                color: "#000 ",
                border: "2px solid #fff ",
                borderRadius: "10px",
              }}
              className="dark-mode"
            >
              <AccordionSummary
                expandIcon={<ExpandMoreIcon className="svg" />}
                aria-controls="panel1a-content"
                id="panel1a-header"
              >
                <Typography className="faq_top">{t("Question_two")}</Typography>
              </AccordionSummary>
              <>
                <Typography className="faq_under">{t("Answer_two")}</Typography>
                <br />
              </>
            </Accordion>
          </div>

          <br />
          <div data-aos="fade-up" data-aos-duration="1000">
            <Accordion
              style={{
                background: "#fff",
                color: "#000 ",
                border: "2px solid #fff ",
                borderRadius: "10px",
              }}
              className="dark-mode"
            >
              <AccordionSummary
                expandIcon={<ExpandMoreIcon className="svg" />}
                aria-controls="panel1a-content"
                id="panel1a-header"
              >
                <Typography className="faq_top">
                  {t("Question_three")}
                </Typography>
              </AccordionSummary>
              <>
                <Typography className="faq_under">
                  {t("Answer_three")}
                </Typography>
                <br />
              </>
            </Accordion>
          </div>

          <br />
          <div data-aos="fade-up" data-aos-duration="1000">
            <Accordion
              style={{
                background: "#fff",
                color: "#000 ",
                border: "2px solid #fff ",
                borderRadius: "10px",
              }}
              className="dark-mode"
            >
              <AccordionSummary
                expandIcon={<ExpandMoreIcon className="svg" />}
                aria-controls="panel1a-content"
                id="panel1a-header"
              >
                <Typography className="faq_top">
                  {t("Question_four")}
                </Typography>
              </AccordionSummary>
              <>
                <Typography className="faq_under">
                  {t("Answer_four")}
                </Typography>
                <br />
              </>
            </Accordion>
          </div>

          <br />
          <div data-aos="fade-up" data-aos-duration="1000">
            <Accordion
              style={{
                background: "#fff",
                color: "#000 ",
                border: "2px solid #fff ",
                borderRadius: "10px",
              }}
              className="dark-mode"
            >
              <AccordionSummary
                expandIcon={<ExpandMoreIcon className="svg" />}
                aria-controls="panel1a-content"
                id="panel1a-header"
              >
                <Typography className="faq_top">
                  {t("Question_five")}
                </Typography>
              </AccordionSummary>
              <>
                <Typography className="faq_under">
                  {t("Answer_five")}
                </Typography>
                <br />
              </>
            </Accordion>
          </div>

          <br />
          <div data-aos="fade-up" data-aos-duration="1000">
            <Accordion
              style={{
                background: "#fff",
                color: "#000 ",
                border: "2px solid #fff ",
                borderRadius: "10px",
              }}
              className="dark-mode"
            >
              <AccordionSummary
                expandIcon={<ExpandMoreIcon className="svg" />}
                aria-controls="panel1a-content"
                id="panel1a-header"
              >
                <Typography className="faq_top">{t("Question_six")}</Typography>
              </AccordionSummary>
              <>
                <Typography className="faq_under">{t("Answer_six")}</Typography>
                <br />
              </>
            </Accordion>
          </div>

          <br />
          <div data-aos="fade-up" data-aos-duration="1000">
            <Accordion
              style={{
                background: "#fff",
                color: "#000 ",
                border: "2px solid #fff ",
                borderRadius: "10px",
              }}
              className="dark-mode"
            >
              <AccordionSummary
                expandIcon={<ExpandMoreIcon className="svg" />}
                aria-controls="panel1a-content"
                id="panel1a-header"
              >
                <Typography className="faq_top">
                  {t("Question_seven")}
                </Typography>
              </AccordionSummary>
              <>
                <Typography className="faq_under">
                  {t("Answer_seven")}
                </Typography>
                <br />
              </>
            </Accordion>
          </div>

          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
        </Grid>
      </div>
    </div>
  );
}

export default HeroSection;
