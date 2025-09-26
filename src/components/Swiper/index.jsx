/* eslint-disable react-refresh/only-export-components */
// Import Swiper React components
import { register } from "swiper/element";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";

register();

// Import Swiper styles
import "swiper/css";
import "./style.css";
import "swiper/css/navigation";
import "swiper/css/pagination";

export default ({ projects }) => {
  return (
    <Swiper
      modules={[Navigation, Pagination, Autoplay]}
      slidesPerView={1}
      pagination={{ clickable: true }}
      loop={true}
      autoplay={{ delay: 6000 }}
    >
      {projects.imagens.map((project) => (
        <SwiperSlide key={project.id}>
          <img src={project.src} alt={project.titulo} className="slide-item" />
        </SwiperSlide>
      ))}
    </Swiper>
  );
};
