import React from "react";
import ParticlesBg from "particles-bg";
import Navbar from "./Navbar";
import { motion } from "framer-motion";

const App = () => (
  <div className="app">
    <Navbar />
    <ParticlesBg type="cobweb" bg={true} color="#00ffc3" />
    <motion.div
      className="landing"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1.2 }}
    >
      <h1>Cybersecurity Professional</h1>
      <p>
        Passionate ethical hacker and threat hunter committed to defending
        digital frontiers.
      </p>
    </motion.div>
  </div>
);

export default App;

