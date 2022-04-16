import React from "react";
import { Link } from "react-router-dom";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, Navigation } from "swiper";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

const Images = [
  { id: 1, src: "/assets/images/photos/1.jpg" },
  { id: 2, src: "/assets/images/photos/2-2.jpg" },
  { id: 3, src: "/assets/images/photos/25.jpg" },
  { id: 4, src: "/assets/images/photos/2.jpg" },
  { id: 5, src: "/assets/images/photos/7.jpg" },
  { id: 6, src: "/assets/images/photos/11.jpg" },
  { id: 7, src: "/assets/images/photos/14.jpg" },
  { id: 8, src: "/assets/images/photos/19.jpg" },
];

const HomeCarousel = () => {
  return (
    <div className="wrapper bg-dark">
      <Swiper
        autoplay={{
          delay: 6000,
          disableOnInteraction: false,
          pauseOnMouseEnter: true,
        }}
        watchOverflow={true}
        loop={true}
        loopFillGroupWithBlank={true}
        navigation={true}
        slidesPerView={1}
        modules={[Navigation, Autoplay]}
        className=""
      >
        {Images.map((img, index) => {
          return (
            <SwiperSlide key={img.id}>
              <img
                src={img.src}
                alt=""
                // height="100%"
                width="100%"
                style={{ objectFit: "cover", height: "95vh" }}
              />
            </SwiperSlide>
          );
        })}
      </Swiper>
    </div>
  );
};

export default HomeCarousel;
