import React, { useState, useEffect } from 'react';
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom'
import './App.css';
import Home from './components/home';
import Header from './components/header';
import Footer from './components/footer';
import Loader from './components/loader';
import About from './components/about';
import Contact from './components/contact';
import Skills from './components/skills';
import Project from './components/project';

function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 3000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <div className={`h-screen ${loading ? 'bg-black' : 'bg-nav-white dark:bg-black'}`}>
      {loading ? (
        <Loader className="bg-black"/>
      ) : (
        <>
        <Router>
          <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/home" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/skills" element={<Skills />} />
          <Route path="/project" element={<Project />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
          <Footer />
        </Router>
        </>
      )}
    </div>
  );
}

export default App;
