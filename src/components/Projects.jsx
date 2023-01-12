import React from "react";
import Project1 from "../images/project1.jpg";
import Project2 from "../images/project2.jpg";
import Project3 from "../images/project3.jpg";

import Hire2 from "../images/Hire2.png";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination, Autoplay } from "swiper";

export default function Projects() {
  const projects = [
    {
      img: Project1,
      github_link:
        "https://github.com/VietHuy2102/https-github.com-VietHuy2102-pizza_clone",
      live_link: "https://pizza-clone-six.vercel.app/menu",
      name: "Pizza App",
    },
    {
      img: Project2,
      github_link: "https://github.com/VietHuy2102/image_suki",
      live_link: "https://image-suki.vercel.app/",
      name: "Image App",
    },
    { img: Project3, github_link: "", live_link: "", name: "Profile Page" },
  ];

  return (
    <section id="projects" className="py-10 px-3 text-white">
      <div className="text-center">
        <h3 className="text-4xl font-semibold">
          My <span className="text-cyan-600">Projects</span>
        </h3>
        <p className="text-gray-300 text-lg mt-3">My awesome works</p>
      </div>
      <br />
      <div className="flex max-w-6xl px-5 mx-auto items-center relative">
        <div className="lg:w-2/3 w-full">
          <Swiper
            slidesPreview={1.2}
            spaceBetween={20}
            breakpoints={{
              768: {
                slidesPerView: 2,
              },
            }}
            loop={true}
            autoplay={{ delay: 3000 }}
            pagination={{
              clickable: true,
            }}
            modules={[Pagination, Autoplay]}
          >
            {projects.map((project, index) => (
              <SwiperSlide>
                <div
                  key={index}
                  className="h-fit w-full p-4  bg-slate-700 rounded-xl"
                >
                  <img src={project.img} alt="" className="rounded-lg" />
                  <h3 className="text-xl my-4">{project.name}</h3>
                  <div className="flex gap-3">
                    <a
                      href={project.github_link}
                      className="text-cyan-600 bg-gray-800 px-2 py-1 inline-block"
                    >
                      Github
                    </a>
                    <a
                      href={project.live_link}
                      className="text-cyan-600 bg-gray-800 px-2 py-1 inline-block"
                    >
                      Live Demo
                    </a>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
        <div className="mx-9 lg:block hidden">
          <img src={Hire2} alt="" className="h-96 rounded-full " />
        </div>
      </div>
    </section>
  );
}
