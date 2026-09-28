"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export function Preloader() {
  const [progress, setProgress] = useState(0);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Simulate loading progress
    const duration = 1200; // 1.2s total
    const interval = 20; // update every 20ms
    const steps = duration / interval;
    let currentStep = 0;

    const timer = setInterval(() => {
      currentStep++;
      const currentProgress = Math.min(Math.round((currentStep / steps) * 100), 100);
      
      // Easing out the progress
      const easedProgress = currentProgress === 100 ? 100 : Math.round(100 * (1 - Math.pow(1 - currentProgress / 100, 3)));
      
      setProgress(easedProgress);

      if (currentStep >= steps) {
        clearInterval(timer);
        setTimeout(() => {
          setIsLoading(false);
        }, 300);
      }
    }, interval);

    return () => clearInterval(timer);
  }, []);

  return (
    <AnimatePresence>
      {isLoading && (
        <motion.div
          initial={{ y: 0 }}
          exit={{ 
            y: "-100%",
            transition: { duration: 0.8, ease: [0.76, 0, 0.24, 1] } 
          }}
          style={{
            position: "fixed",
            inset: 0,
            backgroundColor: "var(--bg-color)",
            zIndex: 9999,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            flexDirection: "column"
          }}
        >
          <div style={{ overflow: "hidden" }}>
            <motion.div
              initial={{ y: "100%" }}
              animate={{ y: 0 }}
              transition={{ duration: 0.5, ease: "easeOut" }}
              style={{
                fontFamily: "var(--font-sans)",
                fontSize: "6vw",
                fontWeight: 600,
                color: "var(--text-primary)",
                lineHeight: 1
              }}
            >
              {progress}%
            </motion.div>
          </div>
          <div style={{ width: "200px", height: "1px", backgroundColor: "var(--border-color)", marginTop: "2rem", overflow: "hidden" }}>
            <motion.div 
              style={{ 
                height: "100%", 
                backgroundColor: "var(--text-primary)",
                width: `${progress}%`
              }} 
            />
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
