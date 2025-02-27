import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "./App.css";
import Home from "./components/home";
import Header from "./components/header";
import Footer from "./components/footer";
import Loader from "./components/loader";
import About from "./components/about";
import Contact from "./components/contact";
import Skills from "./components/skills";
import Project from "./components/project";

function App() {
  const getInitialTheme = () => {
    return localStorage.getItem("theme") !== "light"; 
  };
  

  const [loading, setLoading] = useState(true);
  const [darkMode, setDarkMode] = useState(getInitialTheme());

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add("dark");
      localStorage.setItem("theme", "dark");
    } else {
      document.documentElement.classList.remove("dark");
      localStorage.setItem("theme", "light");
    }
  }, [darkMode]);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 3000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className={`flex flex-col min-h-screen ${darkMode ? "dark bg-black" : "bg-nav-white"}`}>
      {loading ? (
        <Loader className={` ${darkMode ? "dark bg-black" : "bg-nav-white"}`} />
      ) : (
        <Router>
          <Header darkMode={darkMode} setDarkMode={setDarkMode} />
        
          <main className="flex-grow">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/home" element={<Home darkMode={darkMode} setDarkMode={setDarkMode}/>} />
              <Route path="/about" element={<About />} />
              <Route path="/skills" element={<Skills />} />
              <Route path="/project" element={<Project />} />
              <Route path="/contact" element={<Contact />} />
            </Routes>
          </main>
          <Footer />
        </Router>
      )}
    </div>
  );
}

export default App;
