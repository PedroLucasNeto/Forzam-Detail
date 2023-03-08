import "./Galery.scss";
import { projects } from "../../utils/projects";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, EffectFade, Pagination, Autoplay } from "swiper";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/effect-fade";
import "swiper/css/pagination";
import ProjectGrid from "../project_grid/ProjectGrid";

const Galery = () => {
  return (
    <section id="galery" className="galery_container">
      <div className="title_box">
        <h1>Confira alguns dos nossos projetos</h1>
      </div>
      <Swiper
        modules={[Navigation, EffectFade, Pagination, Autoplay]}
        effect={"fade"}
        speed={800}
        slidesPerView={1}
        loop={true}
        autoplay={{
          delay: 3000,
          disableOnInteraction: false,
        }}
      >
        {projects.map((project, index) => (
          <SwiperSlide key={index}>
            <ProjectGrid project={project} />
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
};

export default Galery;
