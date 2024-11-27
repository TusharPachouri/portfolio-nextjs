"use client";

import { Canvas } from '@react-three/fiber';
import { Stars } from './StarBackground';
import { OrbitControls } from '@react-three/drei';

export function Scene() {
  return (
    <Canvas>
      <ambientLight intensity={0.5} />
      <pointLight position={[10, 10, 10]} />
      <Stars radius={500} depth={80} count={30000} factor={6} saturation={0.5} />
      <OrbitControls />
    </Canvas>
  );
}
