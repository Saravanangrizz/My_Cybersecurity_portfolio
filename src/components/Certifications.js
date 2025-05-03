import React from 'react';
import { motion } from 'framer-motion';

const Certifications = () => (
  <motion.section
    initial={{ opacity: 0 }}
    whileInView={{ opacity: 1 }}
    transition={{ delay: 0.5, duration: 1 }}
  >
    <h2>Certifications & Internships</h2>
    <ul>
      <li>IBM Cybersecurity Analyst - Coursera</li>
      <li>Google Cybersecurity Virtual Internship - Forage</li>
      <li>TCS iON Career Edge - Cybersecurity & Ethics</li>
    </ul>
  </motion.section>
);

export default Certifications;
