import React, { useRef, useEffect } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { TextureLoader } from "three";
import { useDarkMode } from "~/hooks/useDarkMode";
import * as THREE from "three";

const Snow: React.FC = () => {
  const particlesRef = useRef<THREE.Points>(null);
  const textureLoader = new TextureLoader();
  const texture = textureLoader.load("/snowflake.svg");
  const { theme } = useDarkMode();

  const horizontalSpeeds = useRef<Float32Array>(
    new Float32Array(1000).map(() => (Math.random() - 0.7) * 0.2),
  );
  const depthSpeeds = useRef<Float32Array>(
    new Float32Array(1000).map(() => (Math.random() - 0.7) * 0.3),
  );

  useEffect(() => {
    if (!particlesRef.current) return;

    const particles = particlesRef.current;
    const particleCount = 1000;
    const positions = new Float32Array(particleCount * 3);

    for (let i = 0; i < particleCount; i++) {
      positions[i * 3] = Math.random() * 200 - 100; // x position
      positions[i * 3 + 1] = Math.random() * 200 - 100; // y position
      positions[i * 3 + 2] = Math.random() * 200 - 100; // z position
    }

    particles.geometry.setAttribute(
      "position",
      new THREE.BufferAttribute(positions, 3),
    );
  });

  useFrame(() => {
    if (!particlesRef.current) return;

    const positions = particlesRef.current.geometry.attributes.position
      .array as Float32Array;
    const particleCount = positions.length / 3;

    for (let i = 0; i < particleCount; i++) {
      positions[i * 3] += horizontalSpeeds.current[i];
      positions[i * 3 + 1] -= 0.6;
      positions[i * 3 + 2] += depthSpeeds.current[i];

      if (positions[i * 3 + 1] < -100) {
        positions[i * 3 + 1] = 100;
        positions[i * 3] = Math.random() * 200 - 100;
        positions[i * 3 + 2] = Math.random() * 200 - 100;
      }
    }

    particlesRef.current.geometry.attributes.position.needsUpdate = true;
  });

  return (
    <points ref={particlesRef}>
      <bufferGeometry attach="geometry" />
      <pointsMaterial
        attach="material"
        map={texture}
        size={1.5}
        color={THREE.Color.NAMES.white}
        sizeAttenuation={true}
        alphaTest={0.5}
        opacity={0.7}
      />
    </points>
  );
};

const SnowScene: React.FC = () => {
  return (
    <Canvas
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        zIndex: -1,
      }}
      camera={{ fov: 75, near: 0.1, far: 1000, position: [0, 0, 5] }}
      gl={{ alpha: true, antialias: true }}
      dpr={1.2} // Adjust the pixel ratio for performance
    >
      <Snow />
    </Canvas>
  );
};

export default SnowScene;
