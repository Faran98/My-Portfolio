import React, { Component } from "react";
import { DiVim } from "react-icons/di";
import faran from "../assets/images/faran.jpeg";
import Reveal from "./reveal.tsx";

class About extends Component {
  state = {};
  render() {
    return (
      <div className=" dark:bg-slate-800 md:h-auto h-auto pb-11">
        <div className="md:mx-40 pt-10">

        <div className="flex justify-center">
        <Reveal> <span className="md:text-3xl text-2xl font-bold text-purple-600 whitespace-nowrap underline-after ">
            ABOUT ME
          </span></Reveal>
        </div>
        <Reveal>
        <div className="flex flex-col md:flex-row md:mt-10 mt-5 md:pl-10 md:pt-7 md:pb-7  pb-2 justify-start dark:bg-slate-700 dark:text-white items-center md:space-x-32">
          <div className="flex flex-col border-2 border-spacing-8  w-80  border-gray-300 shadow-2xl">
            <div className="flex flex-row">
              <div class="mt-5 ml-5 w-3 h-3 rounded-full bg-red-500"></div>
              <div class="mt-5 ml-5 h-3 w-3 rounded-full bg-yellow-300"></div>
              <div class="mt-5 ml-5 w-3 h-3 rounded-full bg-green-500"></div>
            </div>
            <hr class="w-48 h-1 mx-auto my-4 bg-gray-100 border-0 rounded md:my-10 dark:bg-black"></hr>
            <img
              src={faran} //
              className=" md:size-96 mb-10  "
              alt="Avatar"
            />
          </div>
          <div className="flex flex-col border-2 border-spacing-8 mt-10 mb-3 md:w-3/5 w-96 border-gray-300 shadow-2xl">
            <div className="flex flex-row">
              <div class="mt-5 ml-5 w-3 h-3 rounded-full bg-red-500"></div>
              <div class="mt-5 ml-5 h-3 w-3 rounded-full bg-yellow-300"></div>
              <div class="mt-5 ml-5 w-3 h-3 rounded-full bg-green-500"></div>
            </div>
            <hr class="w-48 h-1 mx-auto my-4 bg-gray-100 border-0 rounded md:my-10 dark:bg-black"></hr>
            <h2 className="ml-10"> HI I AM FARAN👋</h2>
            <p className="m-10">
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
        </div></Reveal></div>
      </div>
    );
  }
}

export default About;
