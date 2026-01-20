
import React, { useRef } from 'react';
import { useFrame } from '@react-three/fiber';
import { 
  Float as DreiFloat,
  Grid,
  Icosahedron,
  Octahedron,
  Box,
  Edges
} from '@react-three/drei';
import * as THREE from 'three';
import { useScroll, useTransform } from 'framer-motion';

const SceneV2: React.FC = () => {
  const { scrollYProgress } = useScroll();
  const groupRef = useRef<THREE.Group>(null!);
  
  const rotationY = useTransform(scrollYProgress, [0, 1], [0, Math.PI * 4]);
  const scale = useTransform(scrollYProgress, [0, 0.5, 1], [1, 1.5, 0.8]);
  const opacity = useTransform(scrollYProgress, [0, 0.1, 0.9, 1], [0.1, 1, 1, 0.1]);

  useFrame(() => {
    if (groupRef.current) {
      groupRef.current.rotation.y = rotationY.get();
      groupRef.current.scale.setScalar(scale.get());
    }
  });

  return (
    <>
      <color attach="background" args={["#f8f8f8"]} />
      
      <ambientLight intensity={1.5} />
      <directionalLight position={[10, 10, 10]} intensity={1} />

      <group ref={groupRef}>
        {/* Central Complex Geometry */}
        <DreiFloat speed={2} rotationIntensity={1}>
           <Icosahedron args={[2, 1]}>
             <meshBasicMaterial color="#000000" wireframe transparent opacity={0.05} />
           </Icosahedron>
           
           <Octahedron args={[1.5, 0]}>
             <meshBasicMaterial color="#000000" wireframe />
             <Edges color="#bfff00" scale={1.05} />
           </Octahedron>

           {/* Orbiting Elements */}
           {[...Array(6)].map((_, i) => (
             <group key={i} rotation={[0, (i / 6) * Math.PI * 2, 0]}>
               <Box position={[4, 0, 0]} args={[0.2, 0.2, 0.2]}>
                 <meshBasicMaterial color="#bfff00" />
               </Box>
             </group>
           ))}
        </DreiFloat>
      </group>

      <group position={[0, -2, 0]}>
        <Grid 
          infiniteGrid 
          sectionSize={1.5} 
          cellColor="#000000" 
          sectionColor="#000000" 
          fadeDistance={40} 
          cellThickness={0.5} 
          sectionThickness={1.5}
        />
      </group>

      {/* Atmospheric Fog for V2 */}
      <fog attach="fog" args={["#f8f8f8", 5, 20]} />
    </>
  );
};

export default SceneV2;
