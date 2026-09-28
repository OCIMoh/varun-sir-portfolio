"use client";

import React, { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

export function ScrollSection({ 
  children, 
  id,
  className = ""
}: { 
  children: React.ReactNode;
  id?: string;
  className?: string;
}) {
  const ref = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start 85%", "end 15%"]
  });

  // Fade in, scale, and unblur when entering; fade out and blur when leaving
  const opacity = useTransform(scrollYProgress, [0, 0.25, 0.75, 1], [0, 1, 1, 0]);
  const y = useTransform(scrollYProgress, [0, 0.25, 0.75, 1], [40, 0, 0, -40]);
  const scale = useTransform(scrollYProgress, [0, 0.25, 0.75, 1], [0.95, 1, 1, 1.05]);
  const filter = useTransform(
    scrollYProgress,
    [0, 0.25, 0.75, 1],
    ["blur(12px)", "blur(0px)", "blur(0px)", "blur(12px)"]
  );

  return (
    <section 
      ref={ref} 
      id={id}
      className={className} 
      style={{ 
        minHeight: "100vh", 
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        padding: "10vh 0"
      }}
    >
      <motion.div style={{ opacity, y, scale, filter }}>
        {children}
      </motion.div>
    </section>
  );
}
