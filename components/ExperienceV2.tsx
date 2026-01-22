
import React, { useRef } from 'react';
import { useFrame } from '@react-three/fiber';
import { MeshTransmissionMaterial, Float as DreiFloat, Icosahedron } from '@react-three/drei';
import * as THREE from 'three';
import { MotionValue } from 'framer-motion';

const SceneV2Editorial: React.FC<{ scrollProgress: MotionValue<number> }> = ({ scrollProgress }) => {
  const meshRef = useRef<THREE.Mesh>(null!);

  useFrame((state) => {
    const time = state.clock.getElapsedTime();
    const scroll = scrollProgress.get();
    
    if (meshRef.current) {
      meshRef.current.rotation.x = time * 0.2 + scroll * 5;
      meshRef.current.rotation.y = time * 0.3 + scroll * 2;
    }
  });

  return (
    <>
      <color attach="background" args={["#F8F8F8"]} />
      
      <ambientLight intensity={1.5} />
      <directionalLight position={[10, 10, 5]} intensity={2} />
      <pointLight position={[-10, -10, -10]} intensity={1} color="#003CFF" />

      <DreiFloat speed={2} rotationIntensity={0.5} floatIntensity={1}>
        <Icosahedron ref={meshRef} args={[4, 0]}>
          <MeshTransmissionMaterial 
            backside
            samples={4}
            thickness={2}
            roughness={0}
            chromaticAberration={0.5}
            anisotropy={0.3}
            distortion={0.5}
            distortionScale={0.5}
            temporalDistortion={0.1}
            color="#ffffff"
            attenuationDistance={0.5}
            attenuationColor="#ffffff"
          />
        </Icosahedron>
      </DreiFloat>

      <gridHelper args={[50, 50, "#111111", "#111111"]} position={[0, -10, 0]} opacity={0.05} transparent />
    </>
  );
};

export default SceneV2Editorial;
