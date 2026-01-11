import React, { Suspense } from 'react';
import { Canvas } from '@react-three/fiber';
import { 
  Environment, 
  OrbitControls, 
  useGLTF, 
  Center,
  Grid
} from '@react-three/drei';

function AcuteSatModel() {
  // Use the scene from GLTF
  const { scene } = useGLTF('/images/AcubeSAT.glb');
  
  return (
    <Center top>
      <primitive object={scene} />
    </Center>
  );
}

export default function App() {
  return (
    <div style={{ width: '100vw', height: '100vh', position: 'fixed', top: 0, left: 0, background: '#050505' }}>
      <Canvas 
        shadows 
        camera={{ position: [5, 5, 5], fov: 50 }}
      >
        {/* Lights and Controls stay outside Suspense for stability */}
        <ambientLight intensity={0.5} />
        <pointLight position={[10, 10, 10]} intensity={1.5} />
        <OrbitControls makeDefault />
        <Grid infiniteGrid fadeDistance={50} sectionColor="#333" cellColor="#222" />

        {/* Only the loading parts go inside Suspense */}
        <Suspense fallback={null}>
          <Environment preset="city" />
          <group position={[0, 0, 0]}>
             <AcuteSatModel />
          </group>
        </Suspense>
      </Canvas>
    </div>
  );
}

// Preload for performance
useGLTF.preload('/images/AcubeSAT.glb');