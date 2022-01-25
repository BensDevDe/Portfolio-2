import React from "react";
import { motion } from "framer-motion";

const animations = {
  initial: { opacity: 1, x: 800},
  animate: { opacity: 1, x: 0 },
  exit: { opacity: 0, x: -800 },
};

const AnimatedPage = ({ children }) => {
  return (
    <motion.div
      variants={animations}
      initial="initial"
      animate="animate"
      exit="exit"
      transition={{ ease: "easeOut", duration: 0.3 }}
    >
      {children}
    </motion.div>
  );
};

export default AnimatedPage;