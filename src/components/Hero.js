import React from 'react';
import { motion } from 'framer-motion';

const Hero = () => (
  <motion.section
    initial={{ opacity: 0, y: -20 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 1 }}
  >
    <h1>Hi, I'm C. Saravanan</h1>
    <p>A passionate Cybersecurity Analyst and Ethical Hacking Enthusiast.</p>
  </motion.section>
);

export default Hero;
