import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Pagination, Autoplay } from "swiper/modules";
import Slides from "./Slides";
import alpha from "../../assets/projects/alpha.jpg";
import HeadTittle from "../Typing/HeadTittle";

const Projects = () => {
  return (
    <div className="container mx-auto ">
      <div className="py-8">
        <HeadTittle heading={`Projects`} />
      </div>
      <Swiper
        loop={true}
        autoplay={{
          delay: 1000,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        modules={[Pagination, Autoplay]}
        breakpoints={{
          // When the viewport width is >= 640px
          640: {
            slidesPerView: 1,
            spaceBetween: 10,
          },
          // When the viewport width is >= 1024px
          1024: {
            slidesPerView: 3,
            spaceBetween: 30,
          },
        }}
        className="mySwiper "
      >
        <SwiperSlide>
          <Slides
            image={alpha}
            title={`Alpha Store`}
            tech={["ReactJS", "NodeJS", "ExpressJS", "Mongodb"]}
            description={`This is the ecommerce Website`}
          />
        </SwiperSlide>
        <SwiperSlide>
          <Slides
            image={alpha}
            title={`Alpha Store`}
            tech={["ReactJS", "NodeJS", "ExpressJS", "Mongodb"]}
            description={`This is the ecommerce Website`}
          />
        </SwiperSlide>
        <SwiperSlide>
          <Slides
            image={alpha}
            title={`Alpha Store`}
            tech={["ReactJS", "NodeJS", "ExpressJS", "Mongodb"]}
            description={`This is the ecommerce Website`}
          />
        </SwiperSlide>
        <SwiperSlide>
          <Slides
            image={alpha}
            title={`Alpha Store`}
            tech={["ReactJS", "NodeJS", "ExpressJS", "Mongodb"]}
            description={`This is the ecommerce Website`}
          />
        </SwiperSlide>
        <SwiperSlide>
          <Slides
            image={alpha}
            title={`Alpha Store`}
            tech={["ReactJS", "NodeJS", "ExpressJS", "Mongodb"]}
            description={`This is the ecommerce Website`}
          />
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default Projects;
