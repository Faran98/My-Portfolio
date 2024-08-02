import Avatar from "../assets/images/Avatar.png";

import React, { useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import Reveal from "./reveal.tsx";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import "./styles.css";

import { Autoplay, Pagination, Navigation } from "swiper/modules";

export default function Project() {
  const progressCircle = useRef(null);
  const progressContent = useRef(null);
  const onAutoplayTimeLeft = (s, time, progress) => {
    progressCircle.current.style.setProperty("--progress", 1 - progress);
    progressContent.current.textContent = `${Math.ceil(time / 1000)}s`;
  };
  return (
    <div className="h-auto pt-10 pb-16">
      <div className="flex justify-center">
       <Reveal> <span className="md:text-3xl text-xl font-bold text-custom-green whitespace-nowrap underline-after ">
          PROJECT
        </span></Reveal>
      </div>
      <div className="h-auto md:px-10 px-2 pt-5">
        <>
          <Swiper
            spaceBetween={30}
            centeredSlides={true}
            autoplay={{
              delay: 5000,
              disableOnInteraction: false,
            }}
            pagination={{
              clickable: true,
            }}
            navigation={true}
            modules={[Autoplay, Pagination, Navigation]}
            onAutoplayTimeLeft={onAutoplayTimeLeft}
            className="mySwiper"
          ><Reveal>
            <SwiperSlide>
              <div>
              <div className="flex flex-col md:flex-row pt-10 md:pl-10  md:pb-10  pb-2 justify-center dark:bg-slate-700 dark:text-white items-center md:space-x-14">
          <div className="flex flex-col border-2 border-spacing-8  md:w-80 w-56  border-gray-300 shadow-2xl">
                        <img
              src={Avatar} //
              className=" md:size-96 mb-10  "
              alt="Avatar"
            />
          </div>
          <div className="md:text-sm  text-xs flex flex-col border-2 border-spacing-8 md:pb-16 pt-10 mt-10 mb-6 md:w-3/5 border-gray-300 shadow-2xl">
                <h2 className="md:ml-10"> HI I AM FARAN👋</h2>
                <hr class="md:w-48 w-40 h-1 mx-auto bg-gray-100 border-0 rounded  dark:bg-black"></hr>

            <p className="m-10 text-justify">
              Welcome to my portfolio! I am passionate about Software
              Engineering, and this portfolio Website serves as a showcase of my
              skills, experiences, and creative journey. I have dedicated myself
              to pushing the boundaries of what's possible in Software
              Engineering. Throughout my career, I've had the privilege of
              working on a diverse range of projects, each of which has
              contributed to my growth as a developer. , where I demonstrated my
              ability as full stack development, I am constantly driven by a
              desire to innovate and excel. I believe that my work speaks for
              itself, but I invite you to explore this portfolio to gain a
              deeper understanding of my capabilities and the passion I bring to
              every endeavor. Thank you for visiting, and I look forward to the
              opportunity to collaborate and create something remarkable
              together.
            </p>
          </div>
        </div>
        </div>
              
            </SwiperSlide>
            <SwiperSlide>
              <div>
              <div className="flex flex-col md:flex-row pt-10 md:pl-10  md:pb-10  pb-2 justify-center dark:bg-slate-700 dark:text-white items-center md:space-x-14">
          <div className="flex flex-col border-2 border-spacing-8  md:w-80 w-56  border-gray-300 shadow-2xl">
                        <img
              src={Avatar} //
              className=" md:size-96 mb-10  "
              alt="Avatar"
            />
          </div>
          <div className="md:text-sm  text-xs flex flex-col border-2 border-spacing-8 md:pb-16 pt-10 mt-10 mb-6 md:w-3/5 border-gray-300 shadow-2xl">
                <h2 className="md:ml-10"> HI I AM FARAN👋</h2>
                <hr class="md:w-48 w-40 h-1 mx-auto bg-gray-100 border-0 rounded  dark:bg-black"></hr>

            <p className="m-10 text-justify">
              Welcome to my portfolio! I am passionate about Software
              Engineering, and this portfolio Website serves as a showcase of my
              skills, experiences, and creative journey. I have dedicated myself
              to pushing the boundaries of what's possible in Software
              Engineering. Throughout my career, I've had the privilege of
              working on a diverse range of projects, each of which has
              contributed to my growth as a developer. , where I demonstrated my
              ability as full stack development, I am constantly driven by a
              desire to innovate and excel. I believe that my work speaks for
              itself, but I invite you to explore this portfolio to gain a
              deeper understanding of my capabilities and the passion I bring to
              every endeavor. Thank you for visiting, and I look forward to the
              opportunity to collaborate and create something remarkable
              together.
            </p>
          </div>
        </div>
        </div>
              
            </SwiperSlide>
            <SwiperSlide>
              <div>
              <div className="flex flex-col md:flex-row pt-10 md:pl-10  md:pb-10  pb-2 justify-center dark:bg-slate-700 dark:text-white items-center md:space-x-14">
          <div className="flex flex-col border-2 border-spacing-8  md:w-80 w-56  border-gray-300 shadow-2xl">
                        <img
              src={Avatar} //
              className=" md:size-96 mb-10  "
              alt="Avatar"
            />
          </div>
          <div className="md:text-sm  text-xs flex flex-col border-2 border-spacing-8 md:pb-16 pt-10 mt-10 mb-6 md:w-3/5 border-gray-300 shadow-2xl">
                <h2 className="md:ml-10"> HI I AM FARAN👋</h2>
                <hr class="md:w-48 w-40 h-1 mx-auto bg-gray-100 border-0 rounded  dark:bg-black"></hr>

            <p className="m-10 text-justify">
              Welcome to my portfolio! I am passionate about Software
              Engineering, and this portfolio Website serves as a showcase of my
              skills, experiences, and creative journey. I have dedicated myself
              to pushing the boundaries of what's possible in Software
              Engineering. Throughout my career, I've had the privilege of
              working on a diverse range of projects, each of which has
              contributed to my growth as a developer. , where I demonstrated my
              ability as full stack development, I am constantly driven by a
              desire to innovate and excel. I believe that my work speaks for
              itself, but I invite you to explore this portfolio to gain a
              deeper understanding of my capabilities and the passion I bring to
              every endeavor. Thank you for visiting, and I look forward to the
              opportunity to collaborate and create something remarkable
              together.
            </p>
          </div>
        </div>
        </div>
              
            </SwiperSlide>
            </Reveal> 
            <div className="autoplay-progress" slot="container-end">
              <svg viewBox="0 0 48 48" ref={progressCircle}>
                <circle cx="24" cy="24" r="20"></circle>
              </svg>
              <span ref={progressContent}></span>
            </div>
          </Swiper>
        </>
      </div>
    </div>
  );
}
