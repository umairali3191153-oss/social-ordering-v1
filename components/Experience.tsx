
import React, { useRef, useMemo } from 'react';
import { useFrame } from '@react-three/fiber';
import { 
  MeshDistortMaterial, 
  Stars, 
  Sphere, 
  Icosahedron,
  Torus,
  Points, 
  PointMaterial, 
  Grid, 
  Float as DreiFloat,
  Box,
  Cylinder,
  Ring,
  Octahedron,
  Tetrahedron
} from '@react-three/drei';
import * as THREE from 'three';
import { useScroll, useTransform, MotionValue } from 'framer-motion';

interface StageProps {
  children: React.ReactNode;
  index: number;
  scrollYProgress: MotionValue<number>;
}

const Stage: React.FC<StageProps> = ({ children, index, scrollYProgress }) => {
  const ref = useRef<THREE.Group>(null!);
  
  const start = index * 0.1;
  const end = (index + 1) * 0.1;
  const peak = (start + end) / 2;
  
  const opacity = useTransform(
    scrollYProgress,
    [start - 0.05, start, end, end + 0.05],
    [0, 1, 1, 0]
  );

  const scale = useTransform(
    scrollYProgress,
    [start - 0.05, start, peak, end, end + 0.05],
    [0.001, 0.8, 1, 0.8, 0.001]
  );

  const rotationY = useTransform(
    scrollYProgress,
    [start, end],
    [0, Math.PI * 0.5]
  );

  useFrame(() => {
    if (ref.current) {
      const s = scale.get();
      ref.current.scale.set(s, s, s);
      ref.current.rotation.y = rotationY.get();
      
      const currentOpacity = opacity.get();
      ref.current.traverse((child) => {
        const obj = child as any;
        if (obj.isMesh || obj.isPoints || obj.isLine) {
          const materials = Array.isArray(obj.material) ? obj.material : [obj.material];
          materials.forEach((mat: any) => {
            if (mat) {
              mat.transparent = true;
              mat.opacity = currentOpacity;
            }
          });
        }
      });
    }
  });

  return (
    <group ref={ref}>
      {children}
    </group>
  );
};

const Scene: React.FC = () => {
  const { scrollYProgress } = useScroll();
  // Ensure length is a multiple of 3 to avoid NaN in buffer attributes
  const stage3Positions = useMemo(() => {
    const count = 1500; // 1500 * 3 = 4500 elements
    const positions = new Float32Array(count * 3);
    for (let i = 0; i < positions.length; i++) {
      positions[i] = (Math.random() - 0.5) * 12;
    }
    return positions;
  }, []);

  return (
    <>
      <color attach="background" args={["#000000"]} />
      <Stars radius={100} depth={50} count={6000} factor={2} saturation={0} fade speed={0.5} />
      
      <ambientLight intensity={0.2} />
      <pointLight position={[10, 10, 10]} intensity={2} color="#00f2ff" />
      <pointLight position={[-10, -10, -10]} intensity={1} color="#6366f1" />

      {/* STAGE 1: The AI Eye (Lens) */}
      <Stage index={0} scrollYProgress={scrollYProgress}>
        <DreiFloat speed={2}>
          <Torus args={[1.5, 0.02, 16, 100]}>
            <meshBasicMaterial color="#00f2ff" />
          </Torus>
          <Sphere args={[1.2, 64, 64]}>
            <meshPhysicalMaterial 
              color="#00f2ff" 
              transmission={0.9} 
              thickness={1.5} 
              roughness={0} 
              clearcoat={1}
            />
          </Sphere>
        </DreiFloat>
      </Stage>

      {/* STAGE 2: Neural Connections */}
      <Stage index={1} scrollYProgress={scrollYProgress}>
        <DreiFloat speed={4} rotationIntensity={2}>
          <Icosahedron args={[1.8, 1]}>
            <meshStandardMaterial color="#6366f1" wireframe />
          </Icosahedron>
        </DreiFloat>
      </Stage>

      {/* STAGE 3: Data Swarm */}
      <Stage index={2} scrollYProgress={scrollYProgress}>
        <Points positions={stage3Positions} stride={3}>
          <PointMaterial color="#00f2ff" size={0.03} sizeAttenuation transparent depthWrite={false} />
        </Points>
      </Stage>

      {/* STAGE 4: Indexing Grid */}
      <Stage index={3} scrollYProgress={scrollYProgress}>
        <group rotation={[Math.PI / 4, 0, 0]}>
           {Array.from({length: 8}).map((_, i) => (
             <Ring key={i} args={[i * 0.3 + 0.5, i * 0.3 + 0.55, 64]}>
               <meshBasicMaterial color="#ffffff" side={THREE.DoubleSide} wireframe />
             </Ring>
           ))}
        </group>
      </Stage>

      {/* STAGE 5: Privacy Shield */}
      <Stage index={4} scrollYProgress={scrollYProgress}>
        <DreiFloat speed={2}>
           <Tetrahedron args={[2, 0]}>
             <meshStandardMaterial color="#00f2ff" wireframe />
           </Tetrahedron>
        </DreiFloat>
      </Stage>

      {/* STAGE 6: Global Multimodal Swirl */}
      <Stage index={5} scrollYProgress={scrollYProgress}>
        <Torus args={[1.5, 0.4, 16, 100]}>
          <MeshDistortMaterial color="#6366f1" distort={0.6} speed={4} />
        </Torus>
      </Stage>

      {/* STAGE 7: Logic Pillar */}
      <Stage index={6} scrollYProgress={scrollYProgress}>
        <group>
          <Cylinder args={[0.5, 0.5, 4, 32]}>
            <meshStandardMaterial color="#ffffff" wireframe />
          </Cylinder>
          <Cylinder args={[0.1, 0.1, 4.5, 32]} rotation={[0, 0, Math.PI/2]}>
             <meshBasicMaterial color="#00f2ff" />
          </Cylinder>
        </group>
      </Stage>

      {/* STAGE 8: Knowledge Node */}
      <Stage index={7} scrollYProgress={scrollYProgress}>
        <Octahedron args={[1.5, 2]}>
          <meshStandardMaterial color="#6366f1" wireframe />
        </Octahedron>
      </Stage>

      {/* STAGE 9: Infinite Horizon */}
      <Stage index={8} scrollYProgress={scrollYProgress}>
        <group position={[0, -1, 0]}>
          <Grid infiniteGrid sectionSize={1} cellColor="#00f2ff" sectionColor="#ffffff" fadeDistance={30} />
          <Box position={[0, 1.5, 0]} args={[1, 1, 1]}>
             <meshStandardMaterial color="#ffffff" wireframe />
          </Box>
        </group>
      </Stage>

      {/* STAGE 10: The Core Nexus */}
      <Stage index={9} scrollYProgress={scrollYProgress}>
        <Sphere args={[0.1, 32, 32]}>
          <meshBasicMaterial color="#00f2ff" />
          <pointLight color="#00f2ff" intensity={5} distance={10} />
        </Sphere>
        <Torus args={[2, 0.01, 16, 100]} rotation={[Math.PI/2, 0, 0]}>
          <meshBasicMaterial color="#ffffff" />
        </Torus>
      </Stage>
    </>
  );
};

export default Scene;
