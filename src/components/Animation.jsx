// src/components/Animation.jsx
import React, { useRef } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
import { EffectComposer, Bloom } from "@react-three/postprocessing";

function FloatingPolygon() {
  const meshRef = useRef();

  useFrame(({ clock }) => {
    const t = clock.getElapsedTime();
    meshRef.current.rotation.x = t / 4;
    meshRef.current.rotation.y = t / 2;
    meshRef.current.position.y = Math.sin(t) * 0.2;
  });

  return (
    <mesh ref={meshRef} scale={1.5}>
      <icosahedronGeometry args={[1, 0]} />
      <meshStandardMaterial
        color="#00ffff"
        emissive="#00ffff"
        emissiveIntensity={0.7}
        roughness={0.1}
        metalness={0.6}
      />
    </mesh>
  );
}

export default function Animation({ text }) {
  return (
    <div className="w-full h-96 md:h-[500px] relative">
      <Canvas camera={{ position: [0, 0, 5] }}>
        <ambientLight intensity={0.3} />
        <directionalLight position={[5, 5, 5]} intensity={1} />
        <FloatingPolygon />
        <OrbitControls enableZoom={false} enablePan={false} enableRotate={false} />
        <EffectComposer>
          <Bloom
            luminanceThreshold={0.2}
            luminanceSmoothing={0.9}
            height={300}
            intensity={1.5}
          />
        </EffectComposer>
      </Canvas>

      {/* FIXED CYAN TEXT */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
        <h2 className="animation text-[#00ffff] text-2xl md:text-4xl font-bold drop-shadow-[0_0_25px_#00ffff] text-center px-2">
          {text}
        </h2>
      </div>
    </div>
  );
}
