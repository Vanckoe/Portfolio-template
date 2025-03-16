"use client";
import React from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { Mesh } from "three";
import { useRef } from "react";
import { OrbitControls } from "@react-three/drei";

type LogoProps = {
  color?: string;
};

const Cube: React.FC<LogoProps> = ({ color = "white" }) => {
  const meshRef = useRef<Mesh>(null);

  useFrame(({ clock }) => {
    if (meshRef.current) {
      meshRef.current.rotation.y = clock.getElapsedTime();
      meshRef.current.rotation.z = clock.getElapsedTime();
    }
  });

  return (
    <mesh ref={meshRef}>
      <boxGeometry args={[1, 1, 1]} />
      <meshStandardMaterial color={color} />
    </mesh>
  );
};

export default function ThreeScene() {
  return (
    <div className="w-[80px] h-[80px] bg-transparent">
      <Canvas camera={{ position: [0, 0, 5], fov: 25 }}>
        <ambientLight intensity={0.3} />
        <directionalLight position={[2, 2, 2]} intensity={0.5} />
        <Cube />
        <OrbitControls enableZoom={true} />
      </Canvas>
    </div>
  );
}
