"use client";

import React, { ReactNode, useRef, useState } from "react";
import { 
  motion, 
  useInView, 
  useScroll, 
  useTransform, 
  useSpring, 
  useReducedMotion,
  LayoutGroup,
  AnimatePresence
} from "framer-motion";
import { usePathname } from "next/navigation";
import { LayoutRouterContext } from "next/dist/shared/lib/app-router-context.shared-runtime";

// Restrained, authoritative editorial easing
const easeEditorial = [0.16, 1, 0.3, 1] as const;

// Global Layout Provider for Cross-Route Animations
export function MotionLayoutProvider({ children }: { children: ReactNode }) {
  return (
    <LayoutGroup id="global-portfolio-layout">
      <PageTransitionWrapper>
        {children}
      </PageTransitionWrapper>
    </LayoutGroup>
  );
}

// FrozenRoute isolates the routing context so exiting pages don't instantly update to the incoming page's content
function FrozenRoute({ children }: { children: ReactNode }) {
  const context = React.useContext(LayoutRouterContext);
  const frozen = useRef(context).current;

  return (
    <LayoutRouterContext.Provider value={frozen}>
      {children}
    </LayoutRouterContext.Provider>
  );
}

// Seamless App Router Transition Wrapper
export function PageTransitionWrapper({ children }: { children: ReactNode }) {
  const pathname = usePathname();
  const shouldReduceMotion = useReducedMotion();

  if (shouldReduceMotion) {
    return <>{children}</>;
  }

  // mode="popLayout" takes the exiting element out of the flow (position: absolute)
  // so the incoming element mounts exactly on top of it.
  return (
    <AnimatePresence mode="popLayout" initial={false}>
      <motion.div
        key={pathname}
        initial={{ 
          opacity: 0, 
          scale: 0.94,
          y: 40,
          filter: "blur(8px)" 
        }}
        animate={{ 
          opacity: 1, 
          scale: 1,
          y: 0,
          filter: "blur(0px)" 
        }}
        exit={{ 
          opacity: 0, 
          scale: 1.05,
          y: -20,
          filter: "blur(4px)" 
        }}
        transition={{
          duration: 1.1,
          ease: [0.22, 1, 0.36, 1]
        }}
        style={{
          width: "100%",
          transformOrigin: "center top",
          willChange: "transform, opacity, filter"
        }}
      >
        <FrozenRoute>{children}</FrozenRoute>
      </motion.div>
    </AnimatePresence>
  );
}

// Viewport-wide Scroll Progress Bar (Cobalt accent)
export function ScrollProgressBar() {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 200,
    damping: 30,
    restDelta: 0.001
  });

  return (
    <motion.div
      className="scroll-progress-bar"
      style={{ scaleX }}
      aria-hidden="true"
    />
  );
}

// 2. The Architectural Split-Curtain Wipe (Signature Barba.js transition pattern)
export function ArchitecturalCurtainWipe({ children }: { children: ReactNode }) {
  const pathname = usePathname();
  const shouldReduceMotion = useReducedMotion();

  if (shouldReduceMotion) {
    return <>{children}</>;
  }

  return (
    <>
      {/* Fixed Fullscreen Architectural Shutter Overlay */}
      <div
        aria-hidden="true"
        style={{
          position: "fixed",
          inset: 0,
          zIndex: 9998,
          pointerEvents: "none",
          overflow: "hidden"
        }}
      >
        {/* Layer 1: Graphite Shutter Panel (#353532) */}
        <motion.div
          key={`curtain-graphite-${pathname}`}
          initial={{ y: "0%" }}
          animate={{ y: "-100%" }}
          transition={{
            duration: 0.85,
            delay: 0.18,
            ease: easeEditorial
          }}
          style={{
            position: "absolute",
            inset: 0,
            backgroundColor: "#353532",
            borderBottom: "1px solid rgba(221, 217, 205, 0.2)"
          }}
        />

        {/* Layer 2: Warm Ivory Shutter Panel (#F4F2EA) with Cobalt Edge */}
        <motion.div
          key={`curtain-ivory-${pathname}`}
          initial={{ y: "0%" }}
          animate={{ y: "-100%" }}
          transition={{
            duration: 0.78,
            delay: 0.08,
            ease: easeEditorial
          }}
          style={{
            position: "absolute",
            inset: 0,
            backgroundColor: "#F4F2EA",
            display: "flex",
            flexDirection: "column",
            justifyContent: "flex-end"
          }}
        >
          {/* Razor-thin signature Cobalt Blue laser edge */}
          <div style={{ height: "2px", width: "100%", backgroundColor: "var(--accent-cobalt, #2448FF)" }} />
        </motion.div>
      </div>

      {/* Incoming Page Content with kinetic elevation */}
      <motion.div
        key={`page-content-${pathname}`}
        initial={{ opacity: 0, y: 18 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{
          duration: 0.8,
          delay: 0.28,
          ease: easeEditorial
        }}
      >
        {children}
      </motion.div>
    </>
  );
}

// Fallback Page Transition Component (Now a no-op since MotionLayoutProvider handles transitions)
export function PageTransition({ children }: { children: ReactNode }) {
  return <>{children}</>;
}

// Shared Element Morph Component
export function SharedElementMorph({
  layoutId,
  children,
  className = "",
  style
}: {
  layoutId: string;
  children: ReactNode;
  className?: string;
  style?: React.CSSProperties;
}) {
  return (
    <motion.div
      layoutId={layoutId}
      className={className}
      style={style}
      transition={{
        duration: 0.85,
        ease: easeEditorial
      }}
    >
      {children}
    </motion.div>
  );
}

// Staggered Container for sequential reveals
export function RevealGroup({ 
  children, 
  delay = 0, 
  className = "",
  style
}: { 
  children: ReactNode; 
  delay?: number; 
  className?: string;
  style?: React.CSSProperties;
}) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-8% 0px" });
  const shouldReduceMotion = useReducedMotion();

  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: shouldReduceMotion ? 0 : 0.12,
        delayChildren: delay,
      }
    }
  };

  return (
    <motion.div
      ref={ref}
      variants={container}
      initial="hidden"
      animate={isInView ? "show" : "hidden"}
      className={className}
      style={style}
    >
      {children}
    </motion.div>
  );
}

// Individual item reveal
export function RevealItem({ 
  children, 
  className = "",
  style
}: { 
  children: ReactNode; 
  className?: string;
  style?: React.CSSProperties;
}) {
  const shouldReduceMotion = useReducedMotion();

  const item = {
    hidden: { opacity: 0, y: shouldReduceMotion ? 0 : 24 },
    show: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 1.1, ease: easeEditorial } 
    }
  };

  return (
    <motion.div variants={item} className={className} style={style}>
      {children}
    </motion.div>
  );
}

// Kinetic Title Reveal: smooth vertical slide with clipping
export function RevealTitle({ 
  children, 
  className = "", 
  delay = 0 
}: { 
  children: ReactNode; 
  className?: string; 
  delay?: number;
}) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-5% 0px" });
  const shouldReduceMotion = useReducedMotion();

  if (shouldReduceMotion) {
    return <div className={className}>{children}</div>;
  }

  return (
    <motion.div
      ref={ref}
      className={className}
      initial={{ opacity: 0, y: 35, clipPath: "inset(100% 0 0 0)" }}
      animate={isInView ? { opacity: 1, y: 0, clipPath: "inset(0% 0 0 0)" } : {}}
      transition={{ duration: 1.3, ease: easeEditorial, delay }}
    >
      {children}
    </motion.div>
  );
}

// 3D Perspective Tilt Card with spring mouse reaction
export function Tilt3DCard({ 
  children, 
  className = "",
  style
}: { 
  children: ReactNode; 
  className?: string;
  style?: React.CSSProperties;
}) {
  const cardRef = useRef<HTMLDivElement>(null);
  const shouldReduceMotion = useReducedMotion();

  const [tilt, setTilt] = useState({ x: 0, y: 0 });
  const [isHovered, setIsHovered] = useState(false);

  const springConfig = { damping: 25, stiffness: 200, mass: 0.5 };
  const rotateXSpring = useSpring(tilt.x, springConfig);
  const rotateYSpring = useSpring(tilt.y, springConfig);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (shouldReduceMotion || !cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    
    // Normalize coordinates (-0.5 to 0.5)
    const normalizedX = (x / rect.width) - 0.5;
    const normalizedY = (y / rect.height) - 0.5;

    // Subtle max rotation: ±6 degrees
    setTilt({
      x: -normalizedY * 7,
      y: normalizedX * 7
    });
  };

  const handleMouseEnter = () => setIsHovered(true);
  const handleMouseLeave = () => {
    setIsHovered(false);
    setTilt({ x: 0, y: 0 });
  };

  return (
    <motion.div
      ref={cardRef}
      onMouseMove={handleMouseMove}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      style={{
        perspective: 1200,
        ...style
      }}
      className={className}
    >
      <motion.div
        style={{
          rotateX: shouldReduceMotion ? 0 : rotateXSpring,
          rotateY: shouldReduceMotion ? 0 : rotateYSpring,
          transformStyle: "preserve-3d",
          scale: isHovered && !shouldReduceMotion ? 1.012 : 1,
          transition: "scale 0.4s cubic-bezier(0.16, 1, 0.3, 1)"
        }}
      >
        {children}
      </motion.div>
    </motion.div>
  );
}

// Parallax Image Component with optional Shared Element layoutId
export function ParallaxImage({ 
  src, 
  alt, 
  aspectRatio = "16 / 10",
  className = "",
  layoutId
}: { 
  src: string; 
  alt: string; 
  aspectRatio?: string;
  className?: string;
  layoutId?: string;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"]
  });

  const shouldReduceMotion = useReducedMotion();
  const y = useTransform(scrollYProgress, [0, 1], ["-6%", "6%"]);

  return (
    <motion.div 
      ref={ref} 
      layoutId={layoutId}
      transition={{ duration: 0.85, ease: easeEditorial }}
      className={`image-container-editorial ${className}`}
      style={{ aspectRatio, overflow: "hidden", position: "relative" }}
    >
      <motion.img
        src={src}
        alt={alt}
        loading="lazy"
        decoding="async"
        style={{
          width: "100%",
          height: "112%",
          objectFit: "cover",
          y: shouldReduceMotion ? "0%" : y,
          position: "relative",
          top: "-6%"
        }}
      />
    </motion.div>
  );
}

// Simple hover wrapper for backward compatibility
export function HoverProject({ children, className = "" }: { children: ReactNode; className?: string }) {
  return (
    <motion.div
      className={className}
      whileHover={{ y: -3 }}
      transition={{ duration: 0.4, ease: easeEditorial }}
      style={{ display: "flex", flexDirection: "column", height: "100%" }}
    >
      {children}
    </motion.div>
  );
}
