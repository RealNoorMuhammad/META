import React from "react";
import {
  MDBFooter,
  MDBContainer,
  MDBRow,
  MDBCol,
  MDBIcon,
} from "mdb-react-ui-kit";
import logo from "../lo.png";
import AOS from "aos";
import "aos/dist/aos.css";
import eswhite from "./eswhite.pdf";
import engwhite from "./engwhite.pdf";
import chain from "./chain.pdf";
import solid from "./solid.pdf";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { Grid } from "@mui/material";
AOS.init({
  duration: 2500,
});
export default function App() {
  return (
    <MDBFooter className="text-center text-lg-start text-muted footer_bg">
      <br />
      <br />
      <br />
      <section className="">
        <MDBContainer className="text-center text-md-start mt-">
          <div>
            <MDBRow className="mt-5">
              <MDBCol md="3" lg="4" xl="3" className="mx-auto mb-4">
                <div>
                  <h6 className="text-uppercase fw-bold mb-4">
                    <img src={logo} />
                  </h6>
                  <p style={{ color: "transparent" }}>
                    Here you can use rows and columns to organize your footer
                    content. Lorem ipsum dolor sit amet, consectetur adipisicing
                    elit.
                  </p>
                </div>
              </MDBCol>

              <MDBCol md="2" lg="2" xl="2" className="mx-auto mb-4">
                <Accordion className="back_footer_accord dark-mode">
                  <AccordionSummary
                    expandIcon={
                      <ExpandMoreIcon
                        className="svg"
                        style={{ color: "#fff" }}
                      />
                    }
                    aria-controls="panel1a-content"
                    id="panel1a-header"
                  >
                    <h6
                      className="text-uppercase fw-bold mb-4 "
                      style={{
                        color: "#fff",
                        textAlign: "center",
                        alignItems: "center",
                        justifyContent: "center",
                      }}
                    >
                      PROJECT
                    </h6>
                  </AccordionSummary>
                  <>
                  <div>
                  {" "}
                  <p style={{ color: "#fff" }}>
                    <a href="#UtilityToken" className="text-reset">
                      Utility Token
                    </a>
                  </p>
                </div>{" "}
                <div>
                  {" "}
                  <p style={{ color: "#fff" }}>
                    <a
                      href="#IbizaPay"
                      className="text-reset"
                      style={{ color: "#fff" }}
                    >
                      IbizaPay
                    </a>
                  </p>
                </div>
                <div>
                  <p style={{ color: "#fff" }}>
                    <a
                      href="#IBZNFTMarketplace"
                      className="text-reset"
                      style={{ color: "#fff" }}
                    >
                      NFT Marketplace
                    </a>
                  </p>
                </div>
                <div>
                  {" "}
                  <p style={{ color: "#fff" }}>
                    <a href="#IbizaNXT" className="text-reset">
                      IbizaNXT
                    </a>
                  </p>
                </div>
                    <br />
                  </>
                </Accordion>
               
              </MDBCol>
              <MDBCol md="2" lg="2" xl="2" className="mx-auto mb-4">
              <Accordion className="back_footer_accord dark-mode">
                <AccordionSummary
                  expandIcon={
                    <ExpandMoreIcon
                      className="svg"
                      style={{ color: "#fff" }}
                    />
                  }
                  aria-controls="panel1a-content"
                  id="panel1a-header"
                >
                  <h6
                    className="text-uppercase fw-bold mb-4 "
                    style={{
                      color: "#fff",
                      textAlign: "center",
                      alignItems: "center",
                      justifyContent: "center",
                    }}
                  >
                  SOCIAL
                  </h6>
                </AccordionSummary>
                <>
                <p style={{ color: "#fff", textDecoration: "none" }}>
                  <a
                    href="https://www.facebook.com/ibizatoken/"
                    className="text-reset"
                    target="_blank"
                    style={{ color: "#fff", textDecoration: "none" }}
                  >
                    Facebook
                  </a>
                </p>
                <div></div>
                <p style={{ color: "#fff" }}>
                  <a
                    href="https://www.instagram.com/ibizatoken/"
                    className="text-reset"
                    target="_blank"
                    style={{ color: "#fff", textDecoration: "none" }}
                  >
                    Instagram
                  </a>
                </p>
                <div></div>
                <p style={{ color: "#fff" }}>
                  <a
                    href="https://twitter.com/IbizaToken"
                    className="text-reset"
                    target="_blank"
                    style={{ color: "#fff", textDecoration: "none" }}
                  >
                    Twitter
                  </a>
                </p>
                <div></div>
                <p style={{ color: "#fff" }}>
                  <a
                    href="https://www.linkedin.com/company/ibizatoken/"
                    className="text-reset"
                    target="_blank"
                    style={{ color: "#fff", textDecoration: "none" }}
                  >
                    Linkedin
                  </a>
                </p>
                <div></div>
                <p style={{ color: "#fff" }}>
                  <a
                    href="https://github.com/ibizatoken"
                    className="text-reset"
                    target="_blank"
                    style={{ color: "#fff", textDecoration: "none" }}
                  >
                    GitHub
                  </a>
                </p>
                <div></div>
                <p style={{ color: "#fff" }}>
                  <a
                    href="https://t.me/ibizatoken"
                    className="text-reset"
                    target="_blank"
                    style={{ color: "#fff", textDecoration: "none" }}
                  >
                    Telegram
                  </a>
                </p>
                <div></div>
                <p style={{ color: "#fff" }}>
                  <a
                    href="https://medium.com/@ibizatoken"
                    className="text-reset"
                    target="_blank"
                    style={{ color: "#fff", textDecoration: "none" }}
                  >
                    Medium
                  </a>
                </p>
                  <br />
                </>
              </Accordion>
             
            </MDBCol>
             
            <MDBCol md="2" lg="2" xl="2" className="mx-auto mb-4">
            <Accordion className="back_footer_accord dark-mode">
              <AccordionSummary
                expandIcon={
                  <ExpandMoreIcon
                    className="svg"
                    style={{ color: "#fff" }}
                  />
                }
                aria-controls="panel1a-content"
                id="panel1a-header"
              >
                <h6
                  className="text-uppercase fw-bold mb-4 "
                  style={{
                    color: "#fff",
                    textAlign: "center",
                    alignItems: "center",
                    justifyContent: "center",
                  }}
                >
                RESOURCES
                </h6>
              </AccordionSummary>
              <>
              <p style={{ color: "#fff" }}>
                  <a
                    href={eswhite}
                    className="text-reset"
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{ color: "#fff", textDecoration: "none" }}
                  >
                    Whitepaper es
                  </a>
                </p>
                <div></div>

                <p style={{ color: "#fff" }}>
                  <a
                    href={engwhite}
                    className="text-reset"
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{ color: "#fff", textDecoration: "none" }}
                  >
                    Whitepaper eng
                  </a>
                </p>
                <div></div>
                <p style={{ color: "#fff" }}>
                  <a
                    href={chain}
                    className="text-reset"
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{ color: "#fff", textDecoration: "none" }}
                  >
                    Chainsulting audit
                  </a>
                </p>
                <div></div>
                <p style={{ color: "#fff" }}>
                  <a
                    href={solid}
                    className="text-reset"
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{ color: "#fff", textDecoration: "none" }}
                  >
                    Solidproof audit
                  </a>
                </p>
                <br />
              </>
            </Accordion>
           
          </MDBCol>

             
              <MDBCol md="4" lg="3" xl="2" className="mx-auto mb-md-0 mb-4">
                <div></div>
                <h6
                  className="text-uppercase fw-bold mb-4"
                  style={{ color: "#fff" }}
                >
                  LEGAL
                </h6>

                <p style={{ color: "#fff" }}>
                  <a
                    href="/IbizaTerm"
                    className="text-reset"
                    style={{ color: "#fff", textDecoration: "none" }}
                  >
                    Privacy and Terms
                  </a>
                </p>
              </MDBCol>
            </MDBRow>
          </div>
        </MDBContainer>
      </section>{" "}
      <div
        className="text-center p-4"
        style={{ backgroundColor: "", color: "#fff" }}
      >
        © 2023 - All Rights Reserved - Defi Proxima SL -
        <a
          className="text-reset fw-bold"
          href="https://www.defiproxima.com/"
          target="_blank"
        >
          www.defiproxima.com
        </a>
      </div>
    </MDBFooter>
  );
}
