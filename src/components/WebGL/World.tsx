"use client";

import { Canvas } from "@react-three/fiber";
import { Scene } from "./Scene";
import { Suspense } from "react";

export function World() {
  return (
    <div 
      style={{
        position: "fixed",
        inset: 0,
        zIndex: -1,
        pointerEvents: "none", // Let DOM handle clicks
      }}
    >
      <Canvas
        camera={{ position: [0, 0, 5], fov: 45 }}
        gl={{ antialias: true, alpha: false }}
        dpr={[1, 2]}
      >
        <color attach="background" args={["#F4F2EA"]} /> {/* Ivory Void */}
        <Suspense fallback={null}>
          <Scene />
        </Suspense>
      </Canvas>
    </div>
  );
}
