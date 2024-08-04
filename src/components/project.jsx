import Avatar from "../assets/images/Avatar.png";
import React, { useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import Reveal from "./reveal.tsx";
import landingpage from "../assets/images/landing page.png";
import tindog from "../assets/images/tindog.png";
import attendenceMS from "../assets/images/AttendenceMS.png";

import "swiper/css";
import "swiper/css/navigation";
import {
  FaHtml5,
  FaCss3Alt,
  FaJava,
  FaBootstrap,
} from "react-icons/fa";

import "./styles.css";

import { Autoplay, Navigation } from "swiper/modules";

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
        <Reveal>
          <span className="md:text-3xl text-xl font-bold text-custom-green whitespace-nowrap underline-after">
            PROJECT
          </span>
        </Reveal>
      </div>
      <div className="h-auto md:px-10 px-2 pt-5">
        <Swiper
          spaceBetween={30}
          centeredSlides={true}
          autoplay={{
            delay: 5000,
            disableOnInteraction: false,
          }}
          navigation={true}
          modules={[Autoplay, Navigation]}
          onAutoplayTimeLeft={onAutoplayTimeLeft}
          className="mySwiper"
        >
          <Reveal>
            <SwiperSlide>
              <div>
                <div className="flex flex-col md:flex-row pt-10 md:pl-10 md:pb-28 pb-2 justify-center dark:bg-slate-700 dark:text-white items-center md:space-x-14">
                  <div className="flex flex-col border-2 border-spacing-8 md:w-96 md:h-60 w-64 h-40 border-gray-300 shadow-2xl">
                    <img
                      src={landingpage}
                      className="md:h-96 md:w-96"
                      alt="Landing Page"
                    />
                  </div>
                  <div className="md:text-sm text-xs flex flex-col border-2 border-spacing-8 md:pb-16 pt-10 mt-10 mb-6 md:w-3/5 border-gray-300 shadow-2xl">
                    <div className="flex justify-center">
                      <Reveal>
                        <span className="md:text-xl text-xl font-bold text-custom-green whitespace-nowrap underline-after">
                          Landing Page
                        </span>
                      </Reveal>
                    </div>
                    <p className="m-10 text-justify">
                      Created a beautiful landing page website that showcases a
                      clean and modern design. Using CSS for styling, the landing
                      page features a vibrant gradient background, a centered and
                      eye-catching header, and a sleek horizontal line that
                      elegantly matches the width of the header text. This
                      visually appealing and responsive layout ensures a seamless
                      user experience across all devices.
                    </p>
                    <div className="flex justify-center">
                      <div className="grid grid-cols-2 gap-4 md:pb-0 pb-6 mt-2 md:grid-cols-2 md:gap-10 md:mt-5">
                        {[
                          { Icon: FaHtml5, title: "HTML5", color: "#E34F26" },
                          { Icon: FaCss3Alt, title: "CSS3", color: "#1572B6" },
                        ].map(({ Icon, title, color }) => (
                          <div
                            key={title}
                            className="flex items-center justify-center p-3 dark:bg-slate-800 md:p-8 rounded-full shadow-md border-white"
                            style={{ color }}
                          >
                            <Icon title={title} className="text-4xl" />
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div>
                <div className="flex flex-col md:flex-row pt-10 md:pl-10 md:pb-28 pb-2 justify-center dark:bg-slate-700 dark:text-white items-center md:space-x-14">
                  <div className="flex flex-col border-2 border-spacing-8 md:w-96 md:h-auto w-64 h-auto border-gray-300 shadow-2xl">
                    <img
                      src={tindog}
                      className="md:h-96 md:w-96"
                      alt="Landing Page"
                    />
                  </div>
                  <div className="md:text-sm text-xs flex flex-col border-2 border-spacing-8 md:pb-16 pt-10 mt-10 mb-6 md:w-3/5 border-gray-300 shadow-2xl">
                    <div className="flex justify-center">
                      <Reveal>
                        <span className="md:text-xl text-xl font-bold text-custom-green whitespace-nowrap underline-after">
                          Tindog
                        </span>
                      </Reveal>
                    </div>
                    <p className="m-10 text-justify">
                      I have developed an engaging front-end website for Tindog, a
                      fun and interactive platform for dog lovers. The website
                      boasts a visually appealing design with vibrant colors and
                      playful graphics, making it inviting and user-friendly.
                      Utilizing modern CSS techniques, the layout is fully
                      responsive, ensuring a smooth browsing experience on all
                      devices. The landing page features a catchy header,
                      intuitive navigation, and eye-catching call-to-action
                      buttons, creating an enjoyable experience for users looking
                      to connect with other dog enthusiasts.
                    </p>
                    <div className="flex justify-center">
                      <div className="grid grid-cols-3 gap-4 md:pb-0 pb-6 mt-2 md:grid-cols-3 md:gap-10 md:mt-5">
                        {[
                          { Icon: FaHtml5, title: "HTML5", color: "#E34F26" },
                          { Icon: FaCss3Alt, title: "CSS3", color: "#1572B6" },
                          { Icon: FaBootstrap, title: "Bootstrap", color: "#7952B3" },
                        ].map(({ Icon, title, color }) => (
                          <div
                            key={title}
                            className="flex items-center justify-center p-3 dark:bg-slate-800 md:p-8 rounded-full shadow-md border-white"
                            style={{ color }}
                          >
                            <Icon title={title} className="text-4xl" />
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div>
                <div className="flex flex-col md:flex-row pt-10 md:pb-28 pb-2 justify-center dark:bg-slate-700 dark:text-white items-center md:space-x-14">
                  <div className="flex flex-col border-2 border-spacing-8 md:w-96 md:h-auto w-64 h-auto border-gray-300 shadow-2xl">
                    <img
                      src={attendenceMS}
                      className="md:h-96 md:w-96"
                      alt="Landing Page"
                    />
                  </div>
                  <div className="md:text-sm text-xs flex flex-col border-2 border-spacing-8 md:pb-16 pt-10 mt-10 mb-6 md:w-3/5 border-gray-300 shadow-2xl">
                    <div className="flex justify-center">
                      <Reveal>
                        <span className="md:text-xl text-xl font-bold text-custom-green whitespace-nowrap underline-after">
                          Attendance Management System
                        </span>
                      </Reveal>
                    </div>
                    <p className="m-10 text-justify">
                      I have developed a comprehensive Attendance Management System
                      using Java GUI. The application features an intuitive and
                      user-friendly interface, allowing administrators to
                      efficiently track and manage attendance records. With
                      functionalities such as student registration, attendance
                      marking, and detailed reporting, the system ensures accurate
                      and real-time data management. The use of Java's robust
                      Swing library provides a seamless and responsive user
                      experience, making the system reliable for educational
                      institutions and organizations seeking to streamline their
                      attendance processes.
                    </p>
                    <div className="flex justify-center">
                      <div className="grid grid-cols-1 gap-4 mt-2 md:pb-0 pb-6 md:grid-cols-1 md:gap-10 md:mt-5">
                        {[
                          { Icon: FaJava, title: "Java", color: "#007396" },
                        ].map(({ Icon, title, color }) => (
                          <div
                            key={title}
                            className="flex items-center justify-center  p-3 md:p-8 dark:bg-slate-800 rounded-full shadow-md border-white"
                            style={{ color }}
                          >
                            <Icon title={title} className="text-4xl" />
                          </div>
                        ))}
                      </div>
                    </div>
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
      </div>
    </div>
  );
}
