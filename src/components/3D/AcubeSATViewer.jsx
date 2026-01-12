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
  const { scene } = useGLTF('/images/AcubeSAT.glb');

  return (
    <Center>
      <primitive object={scene} />
    </Center>
  );
}

export default function AcuteSatViewer() {
  return (
    <div
      style={{
        width: '100%',
        height: '100%',
        borderRadius: '50%',
        overflow: 'hidden', // <-- critical for circle crop
        background: '#050505'
      }}
    >
      <Canvas
        camera={{
          position: [0.4, 0.4, 0.4],
          fov: 45
        }}
      >
        {/* Lighting */}
        <ambientLight intensity={0.6} />
        <pointLight position={[10, 10, 10]} intensity={1.5} />

        {/* Controls enforce size limits */}
        <OrbitControls
          makeDefault
          enablePan={false}

          minDistance={0.5}
          maxDistance={1}

          enableDamping
          dampingFactor={0.08}

          autoRotate
          autoRotateSpeed={0.6}
        />


        <Grid
          infiniteGrid
          fadeDistance={40}
          sectionColor="#333"
          cellColor="#222"
        />

        <Suspense fallback={null}>
          <Environment preset="city" />
          <AcuteSatModel />
        </Suspense>
      </Canvas>
    </div>
  );
}

useGLTF.preload('/images/AcubeSAT.glb');
