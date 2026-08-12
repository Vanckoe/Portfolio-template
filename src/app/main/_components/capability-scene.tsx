"use client";

import { Canvas, useFrame } from "@react-three/fiber";
import { Float } from "@react-three/drei";
import { useReducedMotion } from "framer-motion";
import { useRef } from "react";
import type { Group } from "three";

function ReactiveObject() {
  const group = useRef<Group>(null);
  const reduceMotion = useReducedMotion();

  useFrame((state, delta) => {
    if (!group.current) return;

    const targetX = reduceMotion ? 0.15 : state.pointer.y * 0.28;
    const targetY = reduceMotion ? -0.2 : state.pointer.x * 0.42;

    group.current.rotation.x += (targetX - group.current.rotation.x) * 0.06;
    group.current.rotation.y += (targetY - group.current.rotation.y) * 0.06;

    if (!reduceMotion) {
      group.current.rotation.z += delta * 0.05;
    }
  });

  return (
    <Float speed={1.2} rotationIntensity={0.22} floatIntensity={0.35}>
      <group ref={group} rotation={[0.15, -0.2, 0.12]}>
        <mesh>
          <icosahedronGeometry args={[1.35, 2]} />
          <meshPhysicalMaterial
            color="#84d8ff"
            roughness={0.2}
            metalness={0.25}
            transmission={0.5}
            thickness={0.8}
            transparent
            opacity={0.78}
          />
        </mesh>
        <mesh scale={1.04}>
          <icosahedronGeometry args={[1.35, 2]} />
          <meshBasicMaterial color="#d9f3ff" wireframe transparent opacity={0.32} />
        </mesh>
        <mesh rotation={[Math.PI / 2, 0, 0]}>
          <torusGeometry args={[1.75, 0.012, 8, 120]} />
          <meshBasicMaterial color="#9ae0ff" transparent opacity={0.55} />
        </mesh>
        <mesh rotation={[0.4, 1.1, 0.25]}>
          <torusGeometry args={[1.95, 0.008, 8, 120]} />
          <meshBasicMaterial color="#ffffff" transparent opacity={0.22} />
        </mesh>
      </group>
    </Float>
  );
}

export default function CapabilityScene() {
  return (
    <div className="absolute inset-x-0 inset-y-8" aria-hidden="true">
      <Canvas
        camera={{ position: [0, 0, 5.6], fov: 42 }}
        dpr={[1, 1.5]}
        gl={{ antialias: true, alpha: true }}
      >
        <ambientLight intensity={1.4} />
        <directionalLight position={[3, 4, 5]} intensity={2.6} color="#d8f3ff" />
        <pointLight position={[-3, -2, 2]} intensity={9} color="#0b75ff" />
        <ReactiveObject />
      </Canvas>
    </div>
  );
}
