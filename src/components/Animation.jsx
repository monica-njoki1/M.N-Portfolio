// src/components/Animation.jsx
import React, { useRef, useMemo } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
import { EffectComposer, Bloom } from "@react-three/postprocessing";

function FloatingPolygon({ position, scale, speed, color }) {
  const meshRef = useRef();

  useFrame(({ clock }) => {
    const t = clock.getElapsedTime() * speed;
    meshRef.current.rotation.x = t / 4;
    meshRef.current.rotation.y = t / 2;
    meshRef.current.position.y = position[1] + Math.sin(t) * 0.3;
  });

  return (
    <mesh ref={meshRef} position={position} scale={scale}>
      <icosahedronGeometry args={[1, 0]} />
      <meshStandardMaterial
        color={color}
        emissive={color}
        emissiveIntensity={0.7}
        roughness={0.1}
        metalness={0.6}
      />
    </mesh>
  );
}

function PolygonField({ count = 8 }) {
  const polygons = useMemo(() => {
    const colors = ["#00ffff", "#0ff0fc", "#22d3ee", "#67e8f9"];
    return Array.from({ length: count }, (_, i) => {
      const angle = (i / count) * Math.PI * 2;
      const radius = 2.2 + Math.random() * 1.8;
      return {
        key: i,
        position: [
          Math.cos(angle) * radius,
          (Math.random() - 0.5) * 2.5,
          Math.sin(angle) * radius - 1,
        ],
        scale: 0.35 + Math.random() * 0.55,
        speed: 0.5 + Math.random() * 1.2,
        color: colors[i % colors.length],
      };
    });
  }, [count]);

  return (
    <>
      {polygons.map((p) => (
        <FloatingPolygon
          key={p.key}
          position={p.position}
          scale={p.scale}
          speed={p.speed}
          color={p.color}
        />
      ))}
    </>
  );
}

export default function Animation({ text, count = 8 }) {
  return (
    <div className="w-full h-96 md:h-[500px] relative">
      <Canvas camera={{ position: [0, 0, 6] }}>
        <ambientLight intensity={0.3} />
        <directionalLight position={[5, 5, 5]} intensity={1} />
        <PolygonField count={count} />
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