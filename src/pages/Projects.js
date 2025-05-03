import React from "react";
import Navbar from "../components/Navbar";
import { motion } from "framer-motion";

const Projects = () => (
  <div className="page">
    <Navbar />
    <motion.div
      className="content"
      initial={{ scale: 0.8, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      transition={{ duration: 0.8 }}
    >
      <h2>Projects</h2>
      <ul>
        <li>
          <strong>Phishing Email Detector</strong>: Flask + ML + NLP to detect
          malicious emails.
        </li>
        <li>
          <strong>Network Scanner Web App</strong>: Real-time subnet scanning
          via Flask and PostgreSQL.
        </li>
        <li>
          <strong>Log Analyzer</strong>: React + Flask dashboard to spot threats
          in system logs.
        </li>
      </ul>
    </motion.div>
  </div>
);

export default Projects;

