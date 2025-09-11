// src/data/projectsData.js
import landingpage from "../assets/images/landing page.png";
import tindog from "../assets/images/tindog.png";
import attendenceMS from "../assets/images/AttendenceMS.png";
import portfolioImg from "../assets/images/portfolio.png";
import blogImg from "../assets/images/blog.png";
import surveyImg from "../assets/images/survey.png";
import ecommerceImg from "../assets/images/ecommerce.png";
import restaurantImg from "../assets/images/restaurant.png";
import { FaHtml5, FaCss3Alt, FaJs, FaReact, FaNodeJs } from "react-icons/fa";
import { SiMongodb, SiExpress, SiTailwindcss, SiBraintree } from "react-icons/si";
import {FaJava, FaBootstrap } from "react-icons/fa";


export const projectsData = [
  {
    title: "Blog Website",
    img: blogImg,
    desc: "MERN stack blog platform with features like user authentication, dynamic post creation, and comment management. Designed a responsive interface with React and Tailwind CSS, using MongoDB for storing posts and user data.",
    tech: [
      <FaReact color="#61DBFB" />,
      <SiExpress color="#FFD700" />
,
      <FaNodeJs color="#68A063" />,
      <SiMongodb color="#4DB33D" />,
      <SiTailwindcss color="#38BDF8" />,
    ],
  },
  {
    title: "Survey Website",
    img: surveyImg,
    desc: "Reward-based survey platform with survey creation, attempts, admin panel, and real-time response tracking. Integrated Braintree for payments and role-based access for companies and clients.",
    tech: [
      <FaReact color="#61DBFB" />,
      <SiExpress color="#FFD700"/>,
      <FaNodeJs color="#68A063" />,
      <SiMongodb color="#4DB33D" />,
      <SiTailwindcss color="#38BDF8" />,
      <SiBraintree color="#3F3F3F" />,
    ],
  },
  {
    title: "E-Commerce Website",
    img: ecommerceImg,
    desc: "Full-stack e-commerce platform with authentication, product listings, cart, and secure payments. Built with React, Tailwind, MongoDB, and Node.js.",
    tech: [
      <FaReact color="#61DBFB" />,
       <SiExpress color="#FFD700"/>,
      <FaNodeJs color="#68A063" />,
      <SiMongodb color="#4DB33D" />,
      <SiTailwindcss color="#38BDF8" />,
    ],
  },
  {
    title: "Restaurant Website",
    img: restaurantImg,
    desc: "Front-end project for a restaurant with a visually appealing and user-friendly interface. Built with HTML, CSS, and JavaScript.",
    tech: [
      <FaHtml5 color="#E34F26" />,
      <FaCss3Alt color="#1572B6" />,
      <FaJs color="#F7DF1E" />,
    ],
  },
  {
    title: "Landing Page",
    img: landingpage,
    desc: "Created a beautiful landing page website with clean, modern design.",
    tech: [<FaHtml5 color="#E34F26" />, <FaCss3Alt color="#1572B6" />],
  },
  {
    title: "Tindog",
    img: tindog,
    desc: "Fun and interactive front-end website for dog lovers.",
    tech: [
      <FaHtml5 color="#E34F26" />,
      <FaCss3Alt color="#1572B6" />,
      <FaBootstrap color="#7952B3" />,
    ],
  },
  {
    title: "Attendance MS",
    img: attendenceMS,
    desc: "Attendance Management System built using Java GUI.",
    tech: [<FaJava color="#007396" />],
  },
];

