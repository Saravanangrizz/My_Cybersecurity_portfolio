import React from 'react';
import { motion } from 'framer-motion';

const Projects = () => (
  <motion.section
    initial={{ opacity: 0 }}
    whileInView={{ opacity: 1 }}
    transition={{ delay: 0.4, duration: 1 }}
  >
    <h2>Projects</h2>
    <ul>
      <li>🔍 Log Analysis for Security Threats</li>
      <li>🔐 Password Strength Checker</li>
      <li>🎯 Phishing Email Detection with NLP</li>
      <li>📡 Network Scanner Web App</li>
    </ul>
  </motion.section>
);

export default Projects;
