import React from 'react';
import { motion } from 'framer-motion';

const About = () => (
  <motion.section
    initial={{ opacity: 0 }}
    whileInView={{ opacity: 1 }}
    transition={{ delay: 0.3, duration: 1 }}
  >
    <h2>About Me</h2>
    <p>
      As a dedicated cybersecurity enthusiast, I thrive on analyzing threats, investigating vulnerabilities, and staying one step ahead in the cyber world.
      My mission is to build secure digital environments through ethical hacking and threat analysis.
    </p>
  </motion.section>
);

export default About;
