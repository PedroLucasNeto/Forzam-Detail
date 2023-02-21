import "./Services.scss";
import ImageCard from "../img-card/ImageCard";
import { services } from "../../utils/services";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation, Pagination } from "swiper";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/effect-fade";
import "swiper/css/pagination";

const ServicesImages = () => {
  return (
    <section id="services_section" className="services_container">
      <Swiper
        modules={[Navigation, Pagination, Autoplay]}
        effect={"slide"}
        speed={800}
        slidesPerView={1}
        spaceBetween={40}
        navigation={true}
        loop={true}
        autoplay={{
          delay: 8000,
          disableOnInteraction: false,
        }}
        pagination={{ clickable: true }}
        className="swiper"
      >
        {services.map((service, index) => (
          <SwiperSlide key={index} className="swiper-slide">
            <ImageCard key={index} imageCard={service} />
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
};

export default ServicesImages;
