import React, { Component } from 'react';
import { FaHtml5, FaCss3Alt, FaJsSquare, FaNodeJs, FaReact, FaBootstrap, FaDatabase } from 'react-icons/fa';
import { SiExpress, SiMongodb, SiCplusplus } from 'react-icons/si';
import Reveal from "./reveal.tsx";

class Skills extends Component {
  render() {
    return (
      <div className="text-center h-auto pt-10 mx-32 pb-24">
        <div className="flex justify-center">
          <Reveal><span className="md:text-3xl text-2xl font-bold text-purple-600 whitespace-nowrap underline-after ">
            SKILLS
          </span></Reveal>
        </div>
        <Reveal> <div className="md:grid md:grid-cols-10 md:gap-10 md:mt-10 grid grid-cols-2 gap-7 mt-10">
          {[
            { Icon: FaHtml5, title: "HTML5" },
            { Icon: FaCss3Alt, title: "CSS3" },
            { Icon: FaJsSquare, title: "JavaScript" },
            { Icon: FaNodeJs, title: "Node.js" },
            { Icon: SiExpress, title: "Express.js" },
            { Icon: FaDatabase, title: "SQL" },
            { Icon: SiMongodb, title: "MongoDB" },
            { Icon: FaReact, title: "React" },
            { Icon: FaBootstrap, title: "Bootstrap" },
            { Icon: SiCplusplus, title: "C/C++" },
          ].map(({ Icon, title }) => (
            <div
              key={title}
              className="flex items-center justify-center bg-white md:p-8 rounded-full p-3 w-max shadow-md"
            >
              <Icon title={title} className="text-4xl text-gray-700" />
            </div>
          ))}
        </div></Reveal>
      </div>
    );
  }
}

export default Skills;
