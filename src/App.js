import React from "react";
import { BrowserRouter as Router, Routes, Route, useLocation } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./Home";
import About from "./pages/About";
import Projects from "./pages/Projects";
import Contact from "./pages/Contact";
import ParticlesBg from "particles-bg";

const ParticleWrapper = () => {
  const location = useLocation();
  return location.pathname === "/" ? <ParticlesBg type="cobweb" bg={true} color="#00ffc3" /> : null;
};

const App = () => {
  return (
    <Router>
      <div className="app">
        <Navbar />
        <ParticleWrapper />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
