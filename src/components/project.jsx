import React, { useState } from "react";
import Reveal from "./reveal.tsx";
import { projectsData } from "../data/projectsData"; // import the array
import "./styles.css";

export default function Project() {
  const [current, setCurrent] = useState(0);
  const [flippedIndex, setFlippedIndex] = useState(null);

  const itemsPerPage = window.innerWidth >= 768 ? 3 : 1;

  const nextSlide = () => {
    setCurrent((prev) => (prev + 1) % projectsData.length);
    setFlippedIndex(null);
  };

  const prevSlide = () => {
    setCurrent(
      (prev) => (prev - 1 + projectsData.length) % projectsData.length
    );
    setFlippedIndex(null);
  };

  const toggleFlip = (index) => {
    setFlippedIndex((prev) => (prev === index ? null : index));
  };

  // Get exactly `itemsPerPage` projects, wrapping around if needed
  const visibleProjects = Array.from({ length: itemsPerPage }).map(
    (_, i) => projectsData[(current + i) % projectsData.length]
  );

  return (
    <div className="h-auto pt-10 pb-28">
      <div className="flex justify-center">
        <Reveal>
          <span className="md:text-3xl text-xl font-bold text-custom-green whitespace-nowrap underline-after">
            PROJECT
          </span>
        </Reveal>
      </div>
      <Reveal>
        {/* === Carousel Controls === */}
        <div className="flex justify-center items-center mt-16 gap-6">
          <button onClick={prevSlide} className="carousel-btn">
            ◀
          </button>

          {/* Carousel container */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 w-full max-w-6xl px-4">
            {visibleProjects.map((project, index) => {
              const actualIndex = (current + index) % projectsData.length;
              return (
                <div
                  key={project.title}
                  className={`carousel-card ${
                    flippedIndex === actualIndex ? "flipped" : ""
                  }`}
                  onClick={() => toggleFlip(actualIndex)}
                >
                  <div className="carousel-card-inner">
                    {/* Front */}
                    <div className="carousel-card-front">
                      <img
                        src={project.img}
                        alt={project.title}
                        className="w-full h-48 md:h-64 object-cover rounded-xl"
                      />
                      <h2 className="title">{project.title}</h2>
                      <div className="flex justify-center gap-4 mt-4 text-3xl">
                        {project.tech.map((icon, i) => (
                          <span key={i}>{icon}</span>
                        ))}
                      </div>
                    </div>

                    {/* Back */}
                    <div className="carousel-card-back">
                      <p className="text-sm md:text-base">{project.desc}</p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

          <button onClick={nextSlide} className="carousel-btn">
            ▶
          </button>
        </div>
      </Reveal>
    </div>
  );
}
