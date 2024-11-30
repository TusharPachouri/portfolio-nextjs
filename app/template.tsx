"use client";

import { motion } from "framer-motion";
import { ReactNode } from "react";

export default function Template({ children }: { children: ReactNode }) {
  // Function to generate random direction
  const getRandomDirection = () => {
    const directions = [-1, 1];
    return directions[Math.floor(Math.random() * directions.length)];
  };

  return (
    <motion.div
      initial={{ 
        opacity: 0, 
        x: getRandomDirection() * 300,
        scale: 0.8,
      }}
      animate={{ 
        opacity: 1, 
        x: 0,
        scale: 1,
      }}
      exit={{ 
        opacity: 0, 
        x: getRandomDirection() * 300,
        scale: 1.2,
      }}
      transition={{ 
        type: "tween",
        duration: 0.6,
        ease: "easeInOut"
      }}
      style={{
        width: '100%',
        height: '100%',
        overflow: 'hidden'
      }}
    >
      {children}
    </motion.div>
  );
}