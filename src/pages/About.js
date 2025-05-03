import React from "react";
import Navbar from "../components/Navbar";
import { motion } from "framer-motion";

const About = () => (
  <div className="page">
    <Navbar />
    <motion.div
      className="content"
      initial={{ y: 100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8 }}
    >
      <h2>About Me</h2>
      <p>
        I'm C. Saravanan, a cybersecurity enthusiast driven by curiosity to
        understand how systems can be broken — and how to secure them. With a
        background in ethical hacking and log analysis, I thrive on solving real
        cyber problems and preventing digital threats before they strike.
      </p>
    </motion.div>
  </div>
);

export default About;

