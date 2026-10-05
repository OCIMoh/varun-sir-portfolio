"use client";

import { useEffect, useRef, useState } from "react";
import { usePathname } from "next/navigation";
import { useScroll, useTransform, motion } from "framer-motion";

export function FrameScrubber({ 
  frameFolder, 
  frameCount = 240,
  extension = "webp" 
}: { 
  frameFolder: string; 
  frameCount?: number;
  extension?: string;
}) {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const pathname = usePathname();
  
  // Track global scroll
  const { scrollYProgress } = useScroll();
  
  const [images, setImages] = useState<HTMLImageElement[]>([]);
  const [imagesLoaded, setImagesLoaded] = useState(false);
  
  // Transform progress [0, 1] to frame index [1, frameCount]
  const currentIndex = useTransform(scrollYProgress, [0, 1], [1, frameCount]);

  // Preload all images on mount
  useEffect(() => {
    let loadedCount = 0;
    const loadedImages: HTMLImageElement[] = [];

    for (let i = 1; i <= frameCount; i++) {
      const img = new Image();
      const frameString = i.toString().padStart(3, '0');
      // Fix paths with spaces by encoding them
      const encodedFolder = frameFolder.replace(/ /g, "%20");
      img.src = `${encodedFolder}/frame_${frameString}.${extension}`;
      
      const handleLoad = () => {
        loadedCount++;
        // Show experience once the first frame is ready
        if (loadedCount >= 1 && !imagesLoaded) {
          setImagesLoaded(true);
        }
      };
      
      img.onload = handleLoad;
      img.onerror = handleLoad;
      
      loadedImages.push(img);
    }
    
    setImages(loadedImages);
  }, [frameFolder, frameCount, extension]);

  // Canvas drawing loop
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas || images.length === 0) return;

    const ctx = canvas.getContext('2d', { alpha: false }); // alpha: false optimizes rendering
    if (!ctx) return;

    let animationFrameId: number;
    let lastRenderedFrame = -1;

    const render = () => {
      let frameIndex = Math.round(currentIndex.get()) - 1;
      frameIndex = Math.max(0, Math.min(frameIndex, frameCount - 1));
      
      // ONLY redraw if the user actually scrolled to a new frame
      if (frameIndex !== lastRenderedFrame) {
        const img = images[frameIndex];
        
        if (img && img.complete) {
          if (canvas.width !== img.width) canvas.width = img.width;
          if (canvas.height !== img.height) canvas.height = img.height;
          
          ctx.drawImage(img, 0, 0);
          lastRenderedFrame = frameIndex;
        }
      }
      
      animationFrameId = requestAnimationFrame(render);
    };

    render();

    return () => cancelAnimationFrame(animationFrameId);
  }, [currentIndex, imagesLoaded, images, pathname]);

  return (
    <>
      <motion.canvas 
        ref={canvasRef} 
        className="fixed inset-0 w-full h-full object-cover pointer-events-none z-[-2]"
        initial={{ opacity: 0 }}
        animate={{ opacity: imagesLoaded ? 1 : 0 }}
        transition={{ duration: 1.0, ease: "easeOut" }}
      />
    </>
  );
}
