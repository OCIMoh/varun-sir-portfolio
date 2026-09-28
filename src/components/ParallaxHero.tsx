"use client";

import React, { useRef } from "react";
import { motion, useScroll, useTransform, useReducedMotion } from "framer-motion";

export function ParallaxHero({ children }: { children: React.ReactNode }) {
  const containerRef = useRef<HTMLDivElement>(null);
  const shouldReduceMotion = useReducedMotion();
  
  // Track scroll progress within this specific container
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"]
  });

  const contentY = useTransform(scrollYProgress, [0, 1], ["0%", "35%"]);
  const contentOpacity = useTransform(scrollYProgress, [0, 0.65], [1, 0]);

  return (
    <div 
      ref={containerRef} 
      style={{ 
        minHeight: "140vh",
        position: "relative",
        overflow: "hidden",
        backgroundColor: "transparent"
      }}
    >
      {/* 
        LAYER 1: EDITORIAL CONTENT & TYPOGRAPHY
      */}
      <motion.div 
        style={{
          position: "relative",
          zIndex: 3,
          y: shouldReduceMotion ? 0 : contentY,
          opacity: shouldReduceMotion ? 1 : contentOpacity,
          paddingTop: "6vh",
          pointerEvents: "none" // Let pointer events fall through to WebGL except for links
        }}
      >
        <div style={{ pointerEvents: "auto" }}>
          {children}
        </div>
      </motion.div>

      {/* 
        LAYER 2: ARCHITECTURAL DEPTH HAZE (optional, softened)
      */}
      <div
        style={{
          position: "absolute",
          bottom: 0,
          left: 0,
          right: 0,
          height: "15vh",
          background: "linear-gradient(to top, var(--bg-color) 0%, transparent 100%)",
          zIndex: 4,
          pointerEvents: "none"
        }}
      />
    </div>
  );
}
