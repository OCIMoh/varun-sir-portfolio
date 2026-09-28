"use client";

import { usePathname } from "next/navigation";
import { VideoScrubber } from "../VideoScrubber";
import { AnimatePresence, motion } from "framer-motion";

export function World() {
  const pathname = usePathname();
  const isHome = pathname === "/";
  
  return (
    <>
      <div 
        style={{
          position: "fixed",
          inset: 0,
          zIndex: -5,
          backgroundColor: "#F4F2EA", // Ivory Void
          pointerEvents: "none",
        }}
      />
      <AnimatePresence>
        {isHome && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 1.1, ease: [0.22, 1, 0.36, 1] }}
            style={{
              position: "fixed",
              inset: 0,
              zIndex: -4,
              pointerEvents: "none"
            }}
          >
            <VideoScrubber src="/generated assets/landing-page-scrub.mp4" />
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
