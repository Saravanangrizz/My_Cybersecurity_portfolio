import React from "react";
import Navbar from "../components/Navbar";
import { motion } from "framer-motion";

const Skills = () => (
  <div className="page">
    <Navbar />
    <motion.div
      className="content"
      initial={{ x: -100, opacity: 0 }}
      animate={{ x: 0, opacity: 1 }}
      transition={{ duration: 0.7 }}
    >
      <h2>Skills</h2>
      <ul>
        <li>Penetration Testing (Kali Linux, Burp Suite, Metasploit)</li>
        <li>Python Scripting for Threat Detection</li>
        <li>Web App Security (OWASP Top 10)</li>
        <li>Log Analysis & SIEM</li>
        <li>Frontend: React, JavaScript, CSS</li>
      </ul>
    </motion.div>
  </div>
);

export default Skills;

