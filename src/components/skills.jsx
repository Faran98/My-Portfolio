import React, { Component } from 'react';
import { FaHtml5, FaCss3Alt, FaJsSquare, FaNodeJs, FaReact, FaBootstrap, FaDatabase } from 'react-icons/fa';
import { SiExpress, SiMongodb, SiCplusplus } from 'react-icons/si';
import Reveal from "./reveal.tsx";

class Skills extends Component {
  render() {
    const skills = [
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
    ];

    return (
      <div className="text-center h-auto pt-10 mx-16 pb-24 overflow-hidden">
        <style>
          {`
            @keyframes scroll {
              from {
                transform: translateX(0);
              }
              to {
                transform: translateX(calc(-100% / 2));
              }
            }

            .scroll-container {
              display: flex;
              flex-wrap: nowrap;
              width: max-content;
              animation: scroll 20s linear infinite;
            }
          `}
        </style>
        <div className="flex justify-center">
          <Reveal>
            <span className="md:text-3xl text-xl font-bold text-custom-green whitespace-nowrap underline-after">
              SKILLS
            </span>
          </Reveal>
        </div>
        <Reveal>
          <div className="relative w-full overflow-hidden mt-7 md:mt-10">
            <div className="scroll-container">
              {[...skills, ...skills].map(({ Icon, title }, index) => (
                <div
                  key={title + index}
                  className="flex items-center justify-center bg-white p-3 md:p-8 rounded-full shadow-md mx-4"
                >
                  <Icon title={title} className="text-4xl text-gray-700" />
                </div>
              ))}
            </div>
          </div>
        </Reveal>
      </div>
    );
  }
}

export default Skills;
