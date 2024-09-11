import React, { useRef, Suspense } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { OrbitControls, Stars } from "@react-three/drei";
import * as THREE from "three";

const RotatingEarth: React.FC = () => {
  const earthRef = useRef<THREE.Mesh>(null);
  const cloudsRef = useRef<THREE.Mesh>(null);

  const earthTexture = new THREE.TextureLoader().load("/earth_albedo.png");
  const earthBumpMap = new THREE.TextureLoader().load("/earth_bump.png");
  const earthSpecularMap = new THREE.TextureLoader().load("/earth_oceans.png");
  const cloudsTexture = new THREE.TextureLoader().load("/earth_clouds.jpg");

  useFrame(() => {
    if (earthRef.current) {
      earthRef.current.rotation.y += 0.02;
      earthRef.current.rotation.x = Math.PI / 16;
    }
    if (cloudsRef.current) {
      cloudsRef.current.rotation.y += 0.02;
      cloudsRef.current.rotation.x = Math.PI / 16;
    }
  });

  return (
    <>
      <mesh ref={earthRef}>
        <sphereGeometry args={[1, 16, 16]} />
        <meshPhongMaterial
          map={earthTexture}
          bumpMap={earthBumpMap}
          specularMap={earthSpecularMap}
          specular={new THREE.Color("lightblue")}
          shininess={80}
        />
      </mesh>

      <mesh ref={cloudsRef}>
        <sphereGeometry args={[1.01, 16, 16]} />
        <meshPhongMaterial
          map={cloudsTexture}
          transparent={true}
          opacity={0.3}
          side={THREE.DoubleSide}
        />
      </mesh>
    </>
  );
};

type SpaceProps = {
  withEarth: boolean;
};

const Space: React.FC<SpaceProps> = ({ withEarth }: SpaceProps) => {
  return (
    <>
      <Canvas
        style={{
          position: "fixed",
          top: 0,
          left: 0,
          width: "100%",
          height: "100%",
          zIndex: -1,
          pointerEvents: "none",
        }}
        camera={{ position: [0, 0, 5], fov: 75 }}
        gl={{ antialias: true }}
      >
        <ambientLight intensity={1.0} />
        <directionalLight
          position={[5, 5, 5]}
          intensity={1.0}
          castShadow={false}
          color={THREE.Color.NAMES.white}
        />
        <Stars
          radius={100}
          depth={50}
          count={5000}
          factor={4}
          saturation={0}
          fade
        />

        {withEarth && (
          <Suspense fallback={null}>
            <RotatingEarth />
          </Suspense>
        )}

        <OrbitControls enableZoom={false} />
      </Canvas>
    </>
  );
};

export default Space;
