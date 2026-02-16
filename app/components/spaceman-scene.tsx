"use client";

import { Canvas, useFrame } from "@react-three/fiber";
import { useGLTF, Center } from "@react-three/drei";
import { Suspense, useRef } from "react";
import { motion } from "framer-motion";

function SpacemanModel() {
  const gltf = useGLTF("/models/spaceman.glb");
  const groupRef = useRef<any>(null);

  useFrame((state) => {
    if (groupRef.current) {
      // Simple gentle floating
      groupRef.current.position.y =
        Math.sin(state.clock.elapsedTime * 0.5) * 0.3;
      groupRef.current.rotation.y =
        Math.sin(state.clock.elapsedTime * 0.3) * 0.1;
    }
  });

  return (
    <Center>
      <group ref={groupRef}>
        <primitive
          object={gltf.scene}
          scale={0.6}
          rotation={[0, Math.PI / 4, 0]}
        />
      </group>
    </Center>
  );
}

// Preload the model
useGLTF.preload("/models/spaceman.glb");

export default function SpacemanScene() {
  return (
    <motion.div
      className="w-full h-[350px] sm:h-[450px] md:h-[500px] lg:h-[600px] max-w-4xl"
      initial={{ opacity: 0, x: 200, y: 250 }}
      animate={{ opacity: 1, x: 0, y: 0 }}
      transition={{
        duration: 2.5,
        delay: 0.8,
        ease: [0.16, 1, 0.3, 1],
      }}
    >
      <Canvas
        camera={{ position: [0, 0, 5], fov: 50 }}
        gl={{ alpha: true, antialias: true }}
        style={{ background: "transparent" }}
      >
        <ambientLight intensity={2.5} />
        <directionalLight position={[5, 5, 5]} intensity={2} />
        <directionalLight position={[-5, -5, 5]} intensity={1.5} />
        <pointLight position={[0, 0, 5]} intensity={1.5} />
        <Suspense fallback={null}>
          <SpacemanModel />
        </Suspense>
      </Canvas>
    </motion.div>
  );
}
