"use client";

import { useFrame } from "@react-three/fiber";
import { useScroll } from "framer-motion";
import { usePathname } from "next/navigation";
import { useEffect, useMemo, useRef } from "react";
import * as THREE from "three";
import { Environment, Float, MeshTransmissionMaterial, Icosahedron, Sphere } from "@react-three/drei";

export function Scene() {
  const pathname = usePathname();
  
  // Use framer-motion's scroll progress (0 to 1) for the entire page
  const { scrollYProgress } = useScroll();

  // Target coordinates for orbital camera movement around the glass core
  const targetPosition = useMemo(() => new THREE.Vector3(0, 0, 8), []);

  useEffect(() => {
    // Spatial mapping for routes: orbiting the central Glass Blob
    if (pathname === "/") {
      targetPosition.set(0, 0, 8); // Front view
    } else if (pathname === "/about") {
      targetPosition.set(6, 2, 4); // Side high view
    } else if (pathname === "/experience") {
      targetPosition.set(-6, -2, 5); // Opposite low view
    } else if (pathname?.startsWith("/experience/joxy")) {
      targetPosition.set(0, 0, 3.5); // Extreme close up (inside the refraction)
    } else if (pathname?.startsWith("/experience/boostit")) {
      targetPosition.set(2, 5, 2); // Top down view
    } else {
      targetPosition.set(0, 0, 8); // Default fallback
    }
  }, [pathname, targetPosition]);

  const light1Ref = useRef<THREE.Mesh>(null!);
  const light2Ref = useRef<THREE.Mesh>(null!);
  const blobRef = useRef<THREE.Mesh>(null!);

  useFrame((state, delta) => {
    // 1. Calculate scroll offset for parallax
    const scroll = scrollYProgress.get(); 
    // Move camera slightly down and forward on scroll
    const scrollOffset = new THREE.Vector3(0, -scroll * 2, -scroll * 3);
    
    // 2. Interpolate camera position smoothly
    const finalPosition = targetPosition.clone().add(scrollOffset);
    state.camera.position.lerp(finalPosition, 0.03);
    
    // 3. Always look at the center of the Glass Blob
    // We use a dummy object to lerp the lookAt target so the rotation is smooth
    const targetLookAt = new THREE.Vector3(0, 0, 0);
    // Directly updating camera lookAt is jumpy if position is also lerping, 
    // but since we look at the origin from an orbiting position, it feels natural.
    state.camera.lookAt(targetLookAt);

    // 4. Animate the Glass Blob rotation
    if (blobRef.current) {
      blobRef.current.rotation.x += delta * 0.1;
      blobRef.current.rotation.y += delta * 0.15;
    }

    // 5. Animate the floating colored lights behind the glass so they refract beautifully
    const elapsedTime = state.clock.getElapsedTime();
    if (light1Ref.current) {
      light1Ref.current.position.x = Math.sin(elapsedTime * 0.5) * 4;
      light1Ref.current.position.y = Math.cos(elapsedTime * 0.3) * 4;
      light1Ref.current.position.z = Math.sin(elapsedTime * 0.2) * 2 - 4; // Keep behind the blob
    }
    if (light2Ref.current) {
      light2Ref.current.position.x = Math.cos(elapsedTime * 0.4) * -5;
      light2Ref.current.position.y = Math.sin(elapsedTime * 0.6) * -3;
      light2Ref.current.position.z = Math.cos(elapsedTime * 0.3) * 3 - 5;
    }
  });

  return (
    <group>
      {/* Global Lighting */}
      <ambientLight intensity={0.8} />
      <directionalLight position={[10, 10, 5]} intensity={1.5} color="#FFFFFF" />

      {/* Subtle Environment Reflections (Crucial for glass) */}
      <Environment preset="city" />

      {/* 
        THE TRANSMISSION GLASS BLOB 
        A massive, highly realistic frosted glass node.
      */}
      <Float speed={2} rotationIntensity={0.2} floatIntensity={0.5}>
        <Icosahedron ref={blobRef} args={[2.5, 16]} position={[0, 0, 0]}>
          <MeshTransmissionMaterial 
            backside
            samples={4}
            thickness={2.5}
            chromaticAberration={0.06}
            anisotropy={0.3}
            distortion={0.5}
            distortionScale={0.3}
            temporalDistortion={0.1}
            iridescence={1}
            iridescenceIOR={1}
            iridescenceThicknessRange={[0, 1400]}
            color="#FFFFFF"
            attenuationColor="#F4F2EA"
            attenuationDistance={1}
            clearcoat={1}
            clearcoatRoughness={0.1}
            roughness={0.15}
          />
        </Icosahedron>
      </Float>

      {/* 
        REFRACTION LIGHTS
        These hidden glowing orbs move behind the glass to create beautiful caustic refractions
      */}
      <Sphere ref={light1Ref} args={[1, 32, 32]} position={[0, 0, -5]}>
        <meshBasicMaterial color="#2448FF" /> {/* Cobalt */}
      </Sphere>
      <Sphere ref={light2Ref} args={[1.5, 32, 32]} position={[0, 0, -5]}>
        <meshBasicMaterial color="#FF5A36" /> {/* Warm contrast */}
      </Sphere>
      
      {/* Small floating data nodes around the core */}
      {Array.from({ length: 40 }).map((_, i) => (
        <Float 
          key={`node-${i}`} 
          speed={Math.random() * 2 + 1} 
          rotationIntensity={Math.random() * 2} 
          floatIntensity={Math.random() * 2}
        >
          <Sphere 
            args={[Math.random() * 0.05 + 0.02, 16, 16]} 
            position={[
              (Math.random() - 0.5) * 15, 
              (Math.random() - 0.5) * 15, 
              (Math.random() - 0.5) * 15
            ]}
          >
            <meshStandardMaterial color="#11110F" roughness={0.2} metalness={0.8} />
          </Sphere>
        </Float>
      ))}
    </group>
  );
}

