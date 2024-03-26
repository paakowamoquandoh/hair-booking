import React, { useRef } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import "./swiper.css";

// import required modules
import { Autoplay, Navigation } from "swiper/modules";

export default function SwiperMain() {
  const progressCircle = useRef(null);
  const progressContent = useRef(null);
  const onAutoplayTimeLeft = (s, time, progress) => {
    progressCircle.current.style.setProperty("--progress", 1 - progress);
    progressContent.current.textContent = `${Math.ceil(time / 1000)}s`;
  };
  return (
    <>
      <Swiper
        spaceBetween={30}
        centeredSlides={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Autoplay, Navigation]}
        onAutoplayTimeLeft={onAutoplayTimeLeft}
        className="mySwiper"
      >
        <SwiperSlide
        className="swiperSlide"
          style={{
            color: "teal",
            width: "100%",
            height: "100%",
            WebkitBackgroundSize: "cover",
            backgroundSize: "cover",
            backgroundPosition: "center",
            backgroundImage: `url(${require("../../media/hair/h5.jpg")})`,
          }}
        >
          <h1>Welcome Back!</h1><br/>
          <p style={{
            color: "white",
            }}>Check out our latest classes where you will learn some of the most sought after hairstyles worldwide.</p>
        </SwiperSlide>
        <SwiperSlide
        className="swiperSlide"
          style={{
            width: "100%",
            height: "100%",
            WebkitBackgroundSize: "cover",
            backgroundSize: "cover",
            backgroundPosition: "center",
            backgroundImage: `url(${require("../../media/hair/h4.jpg")})`,
          }}
        >
          <h1>WIG COLLECTION & PRODUCTS</h1><br/>
          <p>
            <ul>
              <li>Units</li>
              <li>Pre-styled wigs</li>
            </ul>
          </p>
        </SwiperSlide>
        <SwiperSlide
        className="swiperSlide"
          style={{
            width: "100%",
            height: "100%",
            WebkitBackgroundSize: "cover",
            backgroundSize: "cover",
            backgroundPosition: "center",
            backgroundImage: `url(${require("../../media/hair/h6.jpg")})`,
          }}
        >
          <h1>E learning WIGMAKING</h1><br/>
          <p style={{
            color: "white",
            }}>In person & online classes.</p>
        </SwiperSlide>
        <SwiperSlide
        className="swiperSlide"
          style={{
            width: "100%",
            height: "100%",
            WebkitBackgroundSize: "cover",
            backgroundSize: "cover",
            backgroundPosition: "center",
            backgroundImage: `url(${require("../../media/hair/h7.jpg")})`,
          }}
        >
          <h1>lorem lorem</h1><br/>
          <p>lorem ipsum dolor calc lorem lorem lorem lorem ipsum</p>
        </SwiperSlide>
        <SwiperSlide
          className="swiperSlide"
          style={{
            width: "100%",
            height: "100%",
            WebkitBackgroundSize: "cover",
            backgroundSize: "cover",
            backgroundPosition: "center",
            backgroundImage: `url(${require("../../media/hair/h8.jpg")})`,
          }}
        >
          <h1>lorem lorem</h1><br/>
          <p>lorem ipsum dolor calc lorem lorem lorem lorem ipsum</p>
        </SwiperSlide>
        <div className="autoplay-progress" slot="container-end">
          <svg viewBox="0 0 48 48" ref={progressCircle}>
            <circle cx="24" cy="24" r="20"></circle>
          </svg>
          <span ref={progressContent}></span>
        </div>
      </Swiper>
    </>
  );
}
