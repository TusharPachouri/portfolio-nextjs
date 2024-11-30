"use client";

import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

export const PortfolioLoader = ({
  children,
  loadingTime = 3000,
}: {
  children: React.ReactNode;
  loadingTime?: number;
}) => {
  const [isLoading, setIsLoading] = useState(true);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const startTime = Date.now();

    const updateProgress = () => {
      const elapsedTime = Date.now() - startTime;
      const newProgress = Math.min((elapsedTime / loadingTime) * 100, 100);
      setProgress(newProgress);

      if (elapsedTime < loadingTime) {
        requestAnimationFrame(updateProgress);
      } else {
        setIsLoading(false);
      }
    };

    requestAnimationFrame(updateProgress);
  }, [loadingTime]);

  return (
    <AnimatePresence mode="wait">
      {isLoading ? (
        <motion.div
          key="loader"
          initial={{ opacity: 1 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.5, ease: "easeInOut" }}
          className="fixed inset-0 z-50 flex flex-col items-center justify-center bg-black text-white"
        >
          <h1 className="text-2xl font-semibold mb-6">Loading...</h1>

          {/* Progress Bar */}
          <div className="w-64 h-2 bg-gray-800 rounded-full overflow-hidden">
            <motion.div
              className="h-full bg-gradient-to-r from-blue-500 to-green-400"
              style={{ width: `${progress}%` }}
              transition={{ ease: "easeInOut", duration: 0.5 }}
            />
          </div>

          <p className="mt-4">{Math.round(progress)}%</p>
        </motion.div>
      ) : (
        children
      )}
    </AnimatePresence>
  );
};

export default PortfolioLoader;
