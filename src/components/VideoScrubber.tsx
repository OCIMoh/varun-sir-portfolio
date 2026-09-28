"use client";

import { useEffect, useRef, useState } from "react";
import { usePathname } from "next/navigation";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

const blobCache: Record<string, string> = {};

export function VideoScrubber({ src }: { src: string }) {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [videoSrc, setVideoSrc] = useState<string | null>(null);
  const pathname = usePathname();

  // Fetch as Blob for seekability - critical for bypassing byte-range limitations
  useEffect(() => {
    const encodedSrc = src.replace(/ /g, "%20");
    
    // Use cached blob URL if we already fetched this video
    if (blobCache[encodedSrc]) {
      setVideoSrc(blobCache[encodedSrc]);
      return;
    }

    fetch(encodedSrc)
      .then(res => {
        if (!res.ok) throw new Error("Failed to fetch video");
        return res.blob();
      })
      .then(blob => {
        const objectUrl = URL.createObjectURL(blob);
        blobCache[encodedSrc] = objectUrl;
        setVideoSrc(objectUrl);
      })
      .catch(err => {
        console.error("VideoScrubber Blob fetch failed:", err);
      });

    // We intentionally don't revoke the ObjectURL here because we are caching it globally 
    // for instant instant navigation across the SPA.
  }, [src]);

  // Smooth scroll-scrubbing using GSAP ScrollTrigger
  useEffect(() => {
    const video = videoRef.current;
    if (!video || !videoSrc) return;

    let scrubTween: gsap.core.Tween | null = null;

    const setupScrubber = () => {
      if (!video.duration || isNaN(video.duration)) return;
      video.pause(); // Ensure the video is not playing automatically

      // If we already set it up, don't do it again
      if (scrubTween) return;

      const proxy = { time: 0 };

      scrubTween = gsap.to(proxy, {
        time: video.duration,
        ease: "none",
        scrollTrigger: {
          trigger: document.documentElement,
          start: "top top",
          end: "bottom bottom",
          scrub: 1, // Add 1 second of smoothing to mask frame drops or lack of keyframes
        },
        onUpdate: () => {
          if (video.readyState >= 1) {
            try {
              video.currentTime = proxy.time;
            } catch (e) {
              // ignore
            }
          }
        }
      });
    };

    if (video.readyState >= 1) {
      setupScrubber();
    } else {
      video.addEventListener("loadedmetadata", setupScrubber);
    }

    return () => {
      video.removeEventListener("loadedmetadata", setupScrubber);
      if (scrubTween) {
        if (scrubTween.scrollTrigger) scrubTween.scrollTrigger.kill();
        scrubTween.kill();
      }
    };
  }, [videoSrc, pathname]);

  return (
    <video
      ref={videoRef}
      src={videoSrc || undefined}
      muted
      playsInline
      preload="auto"
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        width: "100%",
        height: "100%",
        objectFit: "cover",
        zIndex: -2,
        pointerEvents: "none",
        opacity: videoSrc ? 1 : 0,
        transition: "opacity 0.5s ease-in-out"
      }}
    />
  );
}
