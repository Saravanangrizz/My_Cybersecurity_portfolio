import React from 'react';
import { motion } from 'framer-motion';

const Contact = () => (
  <motion.section
    initial={{ opacity: 0 }}
    whileInView={{ opacity: 1 }}
    transition={{ delay: 0.6, duration: 1 }}
  >
    <h2>Contact</h2>
    <p>Email: <a href="mailto:saravanangrizz@gmail.com">saravanangrizz@gmail.com</a></p>
    <p>GitHub: <a href="https://github.com/Saravanangrizz" target="_blank" rel="noreferrer">Saravanangrizz</a></p>
    <p>LinkedIn: <a href="https://linkedin.com/in/saravanan-cybersecurity" target="_blank" rel="noreferrer">/saravanan-cybersecurity</a></p>
  </motion.section>
);

export default Contact;
