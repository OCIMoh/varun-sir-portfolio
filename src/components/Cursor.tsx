"use client";

import React, { createContext, useContext, useState, useEffect, ReactNode } from "react";
import { motion, useMotionValue, useSpring, useReducedMotion } from "framer-motion";

type CursorState = "default" | "link" | "project" | "accent";

interface CursorContextType {
  cursorState: CursorState;
  setCursorState: (state: CursorState) => void;
}

const CursorContext = createContext<CursorContextType | undefined>(undefined);

export function useCursor() {
  const context = useContext(CursorContext);
  if (!context) {
    throw new Error("useCursor must be used within a CursorProvider");
  }
  return context;
}

export function CursorProvider({ children }: { children: ReactNode }) {
  const [cursorState, setCursorState] = useState<CursorState>("default");
  const [isTouchDevice, setIsTouchDevice] = useState(false);
  const shouldReduceMotion = useReducedMotion();

  useEffect(() => {
    // Touch & pointer detection
    const isTouch = window.matchMedia("(pointer: coarse)").matches || window.matchMedia("(hover: none)").matches;
    if (isTouch) {
      setTimeout(() => setIsTouchDevice(true), 0);
    }
  }, []);

  return (
    <CursorContext.Provider value={{ cursorState, setCursorState }}>
      {children}
      {!isTouchDevice && !shouldReduceMotion && <Cursor />}
    </CursorContext.Provider>
  );
}

function Cursor() {
  const { cursorState } = useCursor();
  const [isClicking, setIsClicking] = useState(false);
  
  const cursorX = useMotionValue(-100);
  const cursorY = useMotionValue(-100);
  
  // Refined spring configuration for silky, weighted follow
  const springConfig = { damping: 28, stiffness: 350, mass: 0.4 };
  const cursorXSpring = useSpring(cursorX, springConfig);
  const cursorYSpring = useSpring(cursorY, springConfig);

  useEffect(() => {
    const moveCursor = (e: MouseEvent) => {
      cursorX.set(e.clientX);
      cursorY.set(e.clientY);
    };

    const handleMouseDown = () => setIsClicking(true);
    const handleMouseUp = () => setIsClicking(false);
    
    window.addEventListener("mousemove", moveCursor, { passive: true });
    window.addEventListener("mousedown", handleMouseDown);
    window.addEventListener("mouseup", handleMouseUp);
    
    return () => {
      window.removeEventListener("mousemove", moveCursor);
      window.removeEventListener("mousedown", handleMouseDown);
      window.removeEventListener("mouseup", handleMouseUp);
    };
  }, [cursorX, cursorY]);

  // Variants for distinct interaction states
  const variants = {
    default: {
      width: 10,
      height: 10,
      backgroundColor: "var(--text-primary)",
      border: "0px solid transparent",
      scale: isClicking ? 0.75 : 1,
      opacity: 0.65,
    },
    link: {
      width: 44,
      height: 44,
      backgroundColor: "rgba(17, 17, 15, 0.04)",
      border: "1px solid var(--text-primary)",
      scale: isClicking ? 0.9 : 1,
      opacity: 1,
    },
    accent: {
      width: 48,
      height: 48,
      backgroundColor: "rgba(36, 72, 255, 0.1)",
      border: "1px solid var(--accent-cobalt)",
      scale: isClicking ? 0.9 : 1,
      opacity: 1,
    },
    project: {
      width: 110,
      height: 110,
      backgroundColor: "var(--text-primary)",
      border: "0px solid transparent",
      scale: isClicking ? 0.95 : 1,
      opacity: 1,
    }
  };

  return (
    <motion.div
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        x: cursorXSpring,
        y: cursorYSpring,
        translateX: "-50%",
        translateY: "-50%",
        pointerEvents: "none",
        zIndex: 9999,
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        borderRadius: "50%",
      }}
      variants={variants}
      animate={cursorState}
      transition={{ type: "spring", damping: 24, stiffness: 320 }}
    >
      {cursorState === "project" && (
        <motion.span
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.2 }}
          style={{
            color: "var(--bg-color)",
            fontFamily: "var(--font-sans)",
            fontSize: "0.68rem",
            fontWeight: 600,
            letterSpacing: "0.12em",
            textAlign: "center",
            lineHeight: 1.25,
            userSelect: "none"
          }}
        >
          VIEW<br/>STUDY
        </motion.span>
      )}
    </motion.div>
  );
}

// Wrapper component to apply cursor states effortlessly
export function CursorTrigger({ 
  children, 
  state = "link",
  className = "",
  style,
  onClick
}: { 
  children: ReactNode; 
  state?: CursorState;
  className?: string;
  style?: React.CSSProperties;
  onClick?: () => void;
}) {
  const { setCursorState } = useCursor();

  return (
    <div
      className={className}
      onMouseEnter={() => setCursorState(state)}
      onMouseLeave={() => setCursorState("default")}
      onClick={onClick}
      style={{ display: "inline-block", ...style }}
    >
      {children}
    </div>
  );
}
