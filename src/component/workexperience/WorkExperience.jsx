import React from "react";
import "./workexperience.css";
import IMG1 from "../../assets/workexperience/DOCLOUNGE.jpg";
import IMG2 from "../../assets/workexperience/SHOOKA.png";
import IMG3 from "../../assets/workexperience/hi.png";
import IMG4 from "../../assets/workexperience/Prand.jpg";
import IMG5 from "../../assets/workexperience/ATEC.jpg";

// import Swiper core and required modules
import { Pagination } from "swiper";

import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";

const data = [
  {
    logo: IMG3,
    name: "Hyper Island",
    position: "Junior Frontend Developer",
    time: "Aug 2021 - Present ",
    location: "Stockholm, Sweden",
  },
  {
    logo: IMG1,
    name: "DocLounge",
    position: "UI/ UX Designer",
    time: "Feb 2022 - May 2022",
    location: "Malmo, Sweden",
  },
  {
    logo: IMG4,
    name: "Parand Tech Group",
    position: "ITIL Implementation Expert",
    time: "Apr 2019 - May 2021",
    location: "Tehran, Iran",
  },
  {
    logo: IMG2,
    name: "Shooka",
    position: "Technical Support Supervisor",
    time: "Apr 2017 - Apr 2019",
    location: "Tehran, Iran",
  },
  {
    logo: IMG5,
    name: "ATEC",
    position: "IT Technical Support",
    time: "Apr 2016 - Apr 2017",
    location: "Tehran, Iran",
  },
];

const WorkExperience = () => {
  return (
    <section id="work-experience">
      <h5>What I did</h5>
      <h2>Work Experience</h2>

      <Swiper
        className="container experiences-container"
        // install Swiper modules
        modules={[Pagination]}
        spaceBetween={40}
        slidesPerView={1}
        pagination={{ clickable: true }}
      >
        {data.map((post, index) => {
          return (
            <SwiperSlide key={index} className="experience">
              <div className="experience-logo">
                <img src={post.logo} alt={post.name} />
              </div>
              <h5 className="experience-company">{post.name}</h5>
              <small className="experience-review">
                {post.position}
                <br />
                {post.time}
                <br />
                {post.location}
              </small>
            </SwiperSlide>
          );
        })}
      </Swiper>
    </section>
  );
};

export default WorkExperience;
