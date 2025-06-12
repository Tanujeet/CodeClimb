"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/autoplay";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import Image from "next/image";
import ProjectCard from "../../../Components/ProjectCard";

const projects = [
  {
    title: "Portfolio Website",
    description: "A modern portfolio built with Next.js and Tailwind.",
    image: "/projects/portfolio.png",
  },
  {
    title: "Todo App",
    description: "Basic todo app with local storage support.",
    image: "/images/scr_todolist1.png",
  },
  {
    title: "Weather App",
    description: "Fetch weather data using OpenWeatherMap API.",
    image: "/images/simple-weather-app_23-2147552413.avif",
  },
];

const Page = () => {
  return (
    <main>
      <section className="bg-[url('/homepage/blue-planet.webp')] bg-right bg-no-repeat bg-cover bg-opacity-50 pt-[20px] px-0 md:px-12">
        <div className="text-black pt-[6rem] px-4 lg:pt-[3rem] bg-center bg-no-repeat mx-auto max-w-[1280px] 3xl:max-w-[1620px]">
          <div className="relative mt-12 lg:mt-16 ">
            <div className="relative flex flex-col gap-6 z-10 justify-center items-center text-center">
              <h1 className="font-semibold text-center text-[2.2rem] md:text-[2.4rem] lg:text-[3rem] max-w-[800px] mt-4 z-10">
                Frontend
                <br /> projects
              </h1>
              <p className="text-gray-400 max-w-[600px] text-md lg:text-lg block font-light">
                Explore real-world frontend projects for inspiration and
                learning.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="mt-12">
        <div className="w-full pb-[32px] px-4 max-w-[1280px] mx-auto">
          <Swiper
            modules={[Navigation, Pagination, Autoplay]}
            spaceBetween={30}
            navigation
            pagination={{ clickable: true }}
            autoplay={{
              delay: 3000,
              disableOnInteraction: false,
            }}
            loop={true}
            breakpoints={{
              640: { slidesPerView: 1 },
              768: { slidesPerView: 2 },
              1024: { slidesPerView: 3 },
            }}
          >
            {projects.map((project, idx) => (
              <SwiperSlide key={idx}>
                <div className="bg-white rounded-xl shadow-lg p-4 h-[320px] flex flex-col justify-between hover:shadow-xl transition-shadow duration-300">
                  <Image
                    src={project.image}
                    alt={project.title}
                    width={500}
                    height={300}
                    className="w-full h-[150px] object-cover rounded-lg mb-4"
                  />
                  <h3 className="text-lg font-semibold">{project.title}</h3>
                  <p className="text-gray-600 text-sm">{project.description}</p>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </section>
      <section className="mt-12 mx-auto max-w-[1280px] 3xl:max-w-[1620px] px-2 lg:px-10">
        <div className="flex flex-col items-center gap-2 text-center justify-center my-6">
          <h3 className="font-semibold text-center !text-[2.2rem] md:text-[2.4rem] lg:text-[3rem] max-w-[800px] z-10">
            10 Projects to master <br /> Frontend
          </h3>
          <p className="text-white text-center max-w-[600px] mx-auto mt-4 text-base md:text-lg font-light">
            Build these projects step-by-step to strengthen your skills in HTML,
            CSS, JavaScript, and modern frameworks like React and Tailwind.
          </p>
        </div>
        <ProjectCard
          level="Beginner"
          title="Todo App"
          description="How to build  a TodoApp"
          image="/images/scr_todolist1.png"
          href="/list/todoapp"
          reverse={true}
        />
        <ProjectCard
          level="Beginner"
          title="Weather app"
          description="How to build  a weather App"
          image="/images/simple-weather-app_23-2147552413.avif"
          href="/list/todoapp"
        />
      </section>
    </main>
  );
};

export default Page;
