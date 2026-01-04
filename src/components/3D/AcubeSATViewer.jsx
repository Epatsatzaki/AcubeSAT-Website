import React, { useState, useRef, Suspense } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { OrbitControls, Html, Text } from '@react-three/drei';
import * as THREE from 'three';
import './AcubeSATViewer.css';

// Main CubeSat model component
function CubeSatModel({ position, rotation, onPartClick, activePart }) {
  // Create a simplified AcuteSAT model
  return (
    <group position={position} rotation={rotation}>
      {/* Main CubeSat body - 3U (340.5 x 100 x 100 mm) */}
      <mesh 
        castShadow 
        receiveShadow 
        position={[0, 0, 0]}
        onClick={() => onPartClick('mainBody')}
        scale={activePart === 'mainBody' ? 1.05 : 1}
      >
        <boxGeometry args={[3.405, 1, 1]} />
        <meshStandardMaterial 
          color="#0a3d62" 
          metalness={0.5}
          roughness={0.3}
          emissive={activePart === 'mainBody' ? '#1e5a8a' : '#000000'}
          emissiveIntensity={activePart === 'mainBody' ? 0.3 : 0}
        />
      </mesh>
      
      {/* Tuna can extension */}
      <mesh 
        castShadow 
        receiveShadow 
        position={[1.9, 0, 0]}
        onClick={() => onPartClick('tunaCan')}
        scale={activePart === 'tunaCan' ? 1.05 : 1}
      >
        <cylinderGeometry args={[0.5, 0.5, 0.5, 32]} />
        <meshStandardMaterial 
          color="#2c3e50" 
          metalness={0.7}
          roughness={0.2}
          emissive={activePart === 'tunaCan' ? '#3a5a7a' : '#000000'}
          emissiveIntensity={activePart === 'tunaCan' ? 0.3 : 0}
        />
      </mesh>
      
      {/* PCB Stack representation */}
      <mesh 
        castShadow 
        receiveShadow 
        position={[0, 0, 0.1]}
        onClick={() => onPartClick('pcbStack')}
        scale={activePart === 'pcbStack' ? 1.05 : 1}
      >
        <boxGeometry args={[2.8, 0.8, 0.05]} />
        <meshStandardMaterial 
          color="#1e8449" 
          metalness={0.8}
          roughness={0.1}
          emissive={activePart === 'pcbStack' ? '#27ae60' : '#000000'}
          emissiveIntensity={activePart === 'pcbStack' ? 0.3 : 0}
        />
      </mesh>
      
      {/* Solar Panels */}
      {/* +X side */}
      <mesh 
        castShadow 
        receiveShadow 
        position={[1.8, 0, 0]} 
        rotation={[0, 0, Math.PI/2]}
        onClick={() => onPartClick('solarPanels')}
        scale={activePart === 'solarPanels' ? 1.05 : 1}
      >
        <planeGeometry args={[1, 0.9]} />
        <meshStandardMaterial 
          color="#f1c40f"
          emissive="#f39c12"
          emissiveIntensity={activePart === 'solarPanels' ? 0.5 : 0.2}
          side={THREE.DoubleSide}
        />
      </mesh>
      
      {/* -X side */}
      <mesh 
        castShadow 
        receiveShadow 
        position={[-1.8, 0, 0]} 
        rotation={[0, 0, -Math.PI/2]}
        onClick={() => onPartClick('solarPanels')}
        scale={activePart === 'solarPanels' ? 1.05 : 1}
      >
        <planeGeometry args={[1, 0.9]} />
        <meshStandardMaterial 
          color="#f1c40f"
          emissive="#f39c12"
          emissiveIntensity={activePart === 'solarPanels' ? 0.5 : 0.2}
          side={THREE.DoubleSide}
        />
      </mesh>
      
      {/* +Y side (top) */}
      <mesh 
        castShadow 
        receiveShadow 
        position={[0, 0.6, 0]}
        onClick={() => onPartClick('solarPanels')}
        scale={activePart === 'solarPanels' ? 1.05 : 1}
      >
        <planeGeometry args={[3.2, 0.9]} />
        <meshStandardMaterial 
          color="#f1c40f"
          emissive="#f39c12"
          emissiveIntensity={activePart === 'solarPanels' ? 0.5 : 0.2}
          side={THREE.DoubleSide}
        />
      </mesh>
      
      {/* -Y side (bottom) */}
      <mesh 
        castShadow 
        receiveShadow 
        position={[0, -0.6, 0]} 
        rotation={[Math.PI, 0, 0]}
        onClick={() => onPartClick('solarPanels')}
        scale={activePart === 'solarPanels' ? 1.05 : 1}
      >
        <planeGeometry args={[3.2, 0.9]} />
        <meshStandardMaterial 
          color="#f1c40f"
          emissive="#f39c12"
          emissiveIntensity={activePart === 'solarPanels' ? 0.5 : 0.2}
          side={THREE.DoubleSide}
        />
      </mesh>
      
      {/* UHF Deployable Antenna */}
      <mesh 
        castShadow 
        receiveShadow 
        position={[-1.5, 0, 0.6]}
        onClick={() => onPartClick('uhfAntenna')}
        scale={activePart === 'uhfAntenna' ? 1.05 : 1}
      >
        <cylinderGeometry args={[0.02, 0.02, 0.8, 8]} />
        <meshStandardMaterial 
          color="#7f8c8d" 
          metalness={0.9}
          roughness={0.1}
          emissive={activePart === 'uhfAntenna' ? '#95a5a6' : '#000000'}
          emissiveIntensity={activePart === 'uhfAntenna' ? 0.3 : 0}
        />
      </mesh>
      
      {/* S-Band Patch Antenna */}
      <mesh 
        castShadow 
        receiveShadow 
        position={[0, -0.5, 0.55]}
        onClick={() => onPartClick('sbandAntenna')}
        scale={activePart === 'sbandAntenna' ? 1.05 : 1}
      >
        <boxGeometry args={[0.3, 0.05, 0.1]} />
        <meshStandardMaterial 
          color="#34495e" 
          metalness={0.9}
          roughness={0.1}
          emissive={activePart === 'sbandAntenna' ? '#4a657f' : '#000000'}
          emissiveIntensity={activePart === 'sbandAntenna' ? 0.3 : 0}
        />
      </mesh>
      
      {/* Payload Container */}
      <mesh 
        castShadow 
        receiveShadow 
        position={[0.5, 0.2, 0.5]}
        onClick={() => onPartClick('payload')}
        scale={activePart === 'payload' ? 1.05 : 1}
      >
        <boxGeometry args={[0.6, 0.4, 0.3]} />
        <meshStandardMaterial 
          color="#e74c3c" 
          transparent
          opacity={0.7}
          emissive={activePart === 'payload' ? '#ff6b6b' : '#000000'}
          emissiveIntensity={activePart === 'payload' ? 0.4 : 0}
        />
      </mesh>
    </group>
  );
}

// Label component for parts
function PartLabel({ position, text, color = "#ffffff", onClick }) {
  return (
    <Html position={position} center>
      <div 
        className="part-label" 
        style={{ color }}
        onClick={onClick}
      >
        {text}
      </div>
    </Html>
  );
}

// Instructions component
function ControlsHelp() {
  return (
    <Html position={[0, -2, 0]}>
      <div className="controls-help">
        <div className="controls-list">
          <div className="control-item">
            <span className="control-key">Mouse Drag:</span>
            <span className="control-desc">Rotate view</span>
          </div>
          <div className="control-item">
            <span className="control-key">Scroll Wheel:</span>
            <span className="control-desc">Zoom in/out</span>
          </div>
          <div className="control-item">
            <span className="control-key">Click Components:</span>
            <span className="control-desc">Highlight & get info</span>
          </div>
        </div>
      </div>
    </Html>
  );
}

// Main viewer component
export default function AcuteSatViewer() {
  const [activePart, setActivePart] = useState(null);
  const [showLabels, setShowLabels] = useState(true);
  const [autoRotate, setAutoRotate] = useState(true);
  const controlsRef = useRef();

  // Parts information
  const parts = [
    { 
      id: 'mainBody', 
      name: "Main Body", 
      description: "3U CubeSat structure (340.5x100x100 mm)", 
      color: "#0a3d62" 
    },
    { 
      id: 'tunaCan', 
      name: "Tuna Can", 
      description: "Extension module", 
      color: "#2c3e50" 
    },
    { 
      id: 'pcbStack', 
      name: "PCB Stack", 
      description: "Electronic boards and systems", 
      color: "#1e8449" 
    },
    { 
      id: 'solarPanels', 
      name: "Solar Panels", 
      description: "Power generation system", 
      color: "#f1c40f" 
    },
    { 
      id: 'uhfAntenna', 
      name: "UHF Antenna", 
      description: "Deployable communication antenna", 
      color: "#7f8c8d" 
    },
    { 
      id: 'sbandAntenna', 
      name: "S-Band Antenna", 
      description: "Patch antenna for communication", 
      color: "#34495e" 
    },
    { 
      id: 'payload', 
      name: "Payload Container", 
      description: "Contains biological experiment cells", 
      color: "#e74c3c" 
    },
  ];

  const handlePartClick = (partId) => {
    setActivePart(partId === activePart ? null : partId);
  };

  const resetView = () => {
    if (controlsRef.current) {
      controlsRef.current.reset();
    }
  };

  const activePartInfo = parts.find(part => part.id === activePart) || null;

  return (
    <div className="acute-sat-container">
      <div className="viewer-header">
        <h2>AcuteSAT: SpaceDot's First Project</h2>
        <p className="subtitle">Interactive 3D CubeSat Viewer</p>
      </div>
      
      <div className="viewer-wrapper">
        <div className="canvas-container">
          <Canvas
            shadows
            camera={{ position: [8, 5, 8], fov: 50 }}
          >
            <ambientLight intensity={0.5} />
            <pointLight position={[10, 10, 10]} intensity={1} castShadow />
            <directionalLight 
              position={[5, 5, 5]} 
              intensity={0.8} 
              castShadow 
            />
            
            <Suspense fallback={null}>
              <CubeSatModel 
                position={[0, 0, 0]} 
                rotation={[0.2, 0.5, 0]} 
                onPartClick={handlePartClick}
                activePart={activePart}
              />
              
              {/* Part Labels */}
              {showLabels && (
                <>
                  <PartLabel position={[0, 1.2, 0]} text="Main Body" onClick={() => handlePartClick('mainBody')} />
                  <PartLabel position={[2.2, 0, 0]} text="Tuna Can" onClick={() => handlePartClick('tunaCan')} />
                  <PartLabel position={[0, 0, 0.6]} text="PCB Stack" onClick={() => handlePartClick('pcbStack')} />
                  <PartLabel position={[2, 0, 0.8]} text="Solar Panel" onClick={() => handlePartClick('solarPanels')} />
                  <PartLabel position={[-1.5, 0, 1.1]} text="UHF Antenna" onClick={() => handlePartClick('uhfAntenna')} />
                  <PartLabel position={[0, -0.7, 0.7]} text="S-Band Antenna" onClick={() => handlePartClick('sbandAntenna')} />
                  <PartLabel position={[0.5, 0.4, 0.8]} text="Payload" onClick={() => handlePartClick('payload')} />
                </>
              )}
              
              <ControlsHelp />
            </Suspense>
            
            <OrbitControls 
              ref={controlsRef}
              enablePan={true}
              enableZoom={true}
              enableRotate={true}
              autoRotate={autoRotate}
              autoRotateSpeed={0.5}
              minDistance={3}
              maxDistance={20}
            />
            
            <gridHelper args={[10, 10]} />
            <axesHelper args={[3]} />
          </Canvas>
        </div>
        
        <div className="controls-panel">
          <div className="controls-section">
            <h3>Controls</h3>
            <div className="control-buttons">
              <button onClick={resetView} className="control-btn">
                Reset View
              </button>
              <button 
                onClick={() => setAutoRotate(!autoRotate)} 
                className={`control-btn ${autoRotate ? 'active' : ''}`}
              >
                {autoRotate ? 'Stop Rotation' : 'Auto Rotate'}
              </button>
              <button 
                onClick={() => setShowLabels(!showLabels)} 
                className={`control-btn ${showLabels ? 'active' : ''}`}
              >
                {showLabels ? 'Hide Labels' : 'Show Labels'}
              </button>
            </div>
          </div>
          
          <div className="parts-section">
            <h3>CubeSat Components</h3>
            <div className="parts-list">
              {parts.map((part) => (
                <div 
                  key={part.id}
                  className={`part-item ${activePart === part.id ? 'active' : ''}`}
                  onClick={() => handlePartClick(part.id)}
                  style={{ borderLeftColor: part.color }}
                >
                  <div className="part-name">{part.name}</div>
                  <div className="part-desc">{part.description}</div>
                </div>
              ))}
            </div>
          </div>
          
          <div className="info-section">
            <h3>About AcuteSAT</h3>
            <p>
              AcuteSAT is a 3U+ CubeSat (340.5x100x100 mm + tuna can) designed and developed by students 
              primarily based at the Aristotle University of Thessaloniki in Greece.
            </p>
            <p>
              The satellite will study the effects of microgravity and cosmic radiation on human-like cells 
              and is supported by the Education Office of the European Space Agency through the 
              "Fly Your Satellite!" programme.
            </p>
            
            {activePartInfo && (
              <div className="active-part-info">
                <h4>Selected: {activePartInfo.name}</h4>
                <p>{activePartInfo.description}</p>
              </div>
            )}
            
            <div className="external-link">
              <a 
                href="https://gitlab.com/acubesat/structural/3d-cads/acubesat-3d-cads/designs/payload/-/tree/pqc-vibe?ref_type=tags" 
                target="_blank" 
                rel="noopener noreferrer"
              >
                View CAD Files on GitLab →
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}