import React from "react";
import Navbar from "../components/Navbar";
import { motion } from "framer-motion";

const Contact = () => (
  <div className="page">
    <Navbar />
    <motion.div
      className="content"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.9 }}
    >
      <h2>Contact</h2>
      <p>Email: saravanangrizz@gmail.com</p>
      <p>GitHub: github.com/Saravanangrizz</p>
      <p>LinkedIn: linkedin.com/in/cyber-saravanan</p>
    </motion.div>
  </div>
);

export default Contact;

