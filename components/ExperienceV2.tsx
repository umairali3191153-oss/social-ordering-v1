
import React, { useRef, useMemo } from 'react';
import { useFrame } from '@react-three/fiber';
import { 
  Points, 
  PointMaterial, 
  Float as DreiFloat 
} from '@react-three/drei';
import * as THREE from 'three';
import { MotionValue } from 'framer-motion';

const SceneV2Horizontal: React.FC<{ scrollProgress: MotionValue<number> }> = ({ scrollProgress }) => {
  const pointsRef = useRef<THREE.Points>(null!);
  
  const count = 3000;
  const positions = useMemo(() => {
    const pos = new Float32Array(count * 3);
    for (let i = 0; i < count; i++) {
      pos[i * 3] = (Math.random() - 0.5) * 30;
      pos[i * 3 + 1] = (Math.random() - 0.5) * 20;
      pos[i * 3 + 2] = (Math.random() - 0.5) * 10;
    }
    return pos;
  }, []);

  useFrame((state) => {
    const time = state.clock.getElapsedTime();
    const scroll = scrollProgress.get();
    
    if (pointsRef.current) {
      // Wave motion based on scroll and time
      const pos = pointsRef.current.geometry.attributes.position.array as Float32Array;
      for (let i = 0; i < count; i++) {
        const x = pos[i * 3];
        const y = pos[i * 3 + 1];
        pos[i * 3 + 2] = Math.sin(time * 0.5 + x * 0.1 + y * 0.1 + scroll * 10) * 2;
      }
      pointsRef.current.geometry.attributes.position.needsUpdate = true;
      
      // Gentle rotation
      pointsRef.current.rotation.y = time * 0.05 + scroll * 2;
      pointsRef.current.rotation.x = Math.sin(time * 0.2) * 0.1;
    }
  });

  return (
    <>
      <color attach="background" args={["#050805"]} />
      
      <ambientLight intensity={0.5} />
      <pointLight position={[10, 10, 10]} intensity={2} color="#10b981" />

      <DreiFloat speed={2} rotationIntensity={0.5} floatIntensity={0.5}>
        <Points ref={pointsRef} positions={positions} stride={3}>
          <PointMaterial 
            color="#10b981" 
            size={0.05} 
            sizeAttenuation 
            transparent 
            opacity={0.4} 
            depthWrite={false} 
            blending={THREE.AdditiveBlending}
          />
        </Points>
      </DreiFloat>

      {/* Atmospheric Glow */}
      <mesh position={[0, 0, -5]}>
        <sphereGeometry args={[20, 32, 32]} />
        <meshBasicMaterial color="#051a0d" side={THREE.BackSide} />
      </mesh>
    </>
  );
};

export default SceneV2Horizontal;
