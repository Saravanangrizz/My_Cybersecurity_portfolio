import React from "react";
import { motion } from "framer-motion";

const Home = () => {
  return (
    <motion.div
      className="landing"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1.2 }}
      style={{ paddingTop: "100px", textAlign: "center", color: "#f0f0f0" }}
    >
      <h1>Cybersecurity Professional</h1>
      <p>
        Passionate ethical hacker and threat hunter committed to defending
        digital frontiers.
      </p>
    </motion.div>
  );
};

export default Home;
