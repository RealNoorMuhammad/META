import React from "react";
import {
  MDBCard,
  MDBCardHeader,
  MDBCardBody,
  MDBCardTitle,
  MDBCardText,
  MDBBtn,
} from "mdb-react-ui-kit";
import SwiperNavButtons from "./buttons.jsx";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import expo from "../IbizaButton/expo.png";
// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
import coin from "./coint.png";
import dino from "./diro.png";
import pero from "./peroo.png";
import noud from "./noud.png";
import "./styles.css";

import button from "./Press.jsx";
// import required modules
import { Navigation, Pagination, Autoplay } from "swiper";
import { Grid } from "@mui/material";
import AOS from "aos";
import "aos/dist/aos.css";
AOS.init({
  duration: 2500,
});
const Team = () => {
  return (
    <div className="" >
      <Swiper
        effect={"coverflow"}
        spaceBetween={150}
        loop={true}
        navigation={{
          nextEl: ".swiper-button-next",
          prevEl: ".swiper-button-prev",
          clickable: true,
        }}
        grabCursor={true}
        autoplay={{
          delay: 4500,
          disableOnInteraction: false,
        }}
        modules={[Autoplay, Navigation]}
        centeredSlides={true}
        slidesPerView={"auto"}
        coverflowEffect={{
          rotate: 50,
          stretch: 0,
          depth: 100,
          modifier: 1,
          slideShadows: true,
        }}
        pagination={true}
        className="mySwiper swiper_container"
      >
        <SwiperSlide>
          <div data-aos="fade-up" data-aos-duration="1000">
            {" "}
            <MDBCard
              className="width_press"
              style={{ border: "2px solid #000", borderRadius: "20px" }}
            >
              <MDBCardBody>
                <h1
                  style={{
                    color: "#005ca3",
                    textAlign: "center",
                  }}
                  className="undercard_heads"
                >
                  Diaro De Ibiza
                </h1>

                <MDBCardText
                  style={{
                    color: "#000",

                    textAlign: "center",
                  }}
                  className="undercard_para"
                >
                  <br />
                  Ibiza Token brings to the island the first NFT platform aimed
                  to democratize art through a decentralized system.
                  <br />
                  <br />
                  <img src={dino} style={{ width: "30%" }} />
                  <br />
                  <br />
                  <div className="center_button">
                    {" "}
                    <button class="button-173 " role="button">
                      Explore
                    </button>
                  </div>
                </MDBCardText>
              </MDBCardBody>
            </MDBCard>{" "}
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div data-aos="fade-up" data-aos-duration="1000">
            {" "}
            <MDBCard
              className="width_press"
              style={{ border: "2px solid #000", borderRadius: "20px" }}
            >
              <MDBCardBody>
                <h1
                  style={{
                    color: "#005ca3",
                    textAlign: "center",
                  }}
                  className="undercard_heads"
                >
                  Cointelegraph
                </h1>
                <MDBCardText
                  style={{
                    color: "#000",

                    textAlign: "center",
                  }}
                  className="undercard_para"
                >
                  <br />
                  In Spain, Ibiza Token announced the launch of an NFT platform
                  with the aim of supporting content creators and businesses in
                  Ibiza.
                  <br />
                  <br />
                  <img src={coin} style={{ width: "30%" }} />
                  <br />
                  <br />
                  <div className="center_button">
                    {" "}
                    <button class="button-173 " role="button">
                      Explore
                    </button>
                  </div>
                  <br />
                </MDBCardText>
              </MDBCardBody>
            </MDBCard>{" "}
          </div>
        </SwiperSlide>

        <SwiperSlide>
          <div data-aos="fade-up" data-aos-duration="1000">
            {" "}
            <MDBCard
              className="width_press"
              style={{ border: "2px solid #000", borderRadius: "20px" }}
            >
              <MDBCardBody>
                <h1
                  style={{
                    color: "#005ca3",
                    textAlign: "center",
                  }}
                  className="undercard_heads"
                >
                  Periodico de ibiza
                </h1>
                <MDBCardText
                  style={{
                    color: "#000",

                    textAlign: "center",
                  }}
                  className="undercard_para"
                >
                  <br />
                  The conference Ibiza NXT lands in Ibiza to introduce
                  blockchain technology.
                  <br />
                  <img src={pero} style={{ width: "30%" }} />
                  <br />
                  <div className="center_button">
                    {" "}
                    <button class="button-173 " role="button">
                      Explore
                    </button>
                  </div>
                  <br />
                </MDBCardText>
              </MDBCardBody>
            </MDBCard>{" "}
          </div>
        </SwiperSlide>

        <SwiperSlide>
          <div data-aos="fade-up" data-aos-duration="1000">
            {" "}
            <MDBCard
              className="width_press"
              style={{ border: "2px solid #000", borderRadius: "20px" }}
            >
              <MDBCardBody>
                <h1
                  style={{
                    color: "#005ca3",
                    textAlign: "center",
                  }}
                  className="undercard_heads"
                >
                  Noudiari
                </h1>
                <MDBCardText
                  style={{
                    color: "#000",

                    textAlign: "center",
                  }}
                  className="undercard_para"
                >
                  <br />
                  Las Dalias presents his first NFT collection "El Viaje/The
                  trip "which will be available on the Ibiza Token Marketplace.
                  <br />
                  <br />
                  <img src={noud} style={{ width: "30%" }} />
                  <br />
                  <br />
                  <div className="center_button">
                    {" "}
                    <button class="button-173 " role="button">
                      Explore
                    </button>
                  </div>
                  <br />
                </MDBCardText>
              </MDBCardBody>
            </MDBCard>{" "}
          </div>
        </SwiperSlide>
      </Swiper>

      <br />
      <br />
    </div>
  );
};

export default Team;
