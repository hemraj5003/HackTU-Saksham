'use client';

import React, { useRef, useMemo } from 'react';
import { Canvas, useFrame, ThreeElements } from '@react-three/fiber';
import { OrbitControls, Float } from '@react-three/drei';
import * as THREE from 'three';

function SecurityShield() {
  const meshRef = useRef<THREE.Mesh>(null!);
  const shieldGeometry = useMemo(() => {
    // Create a custom shield-like geometry
    const shape = new THREE.Shape();
    shape.moveTo(0, 0);
    shape.lineTo(-1, 1);
    shape.lineTo(-0.7, 2);
    shape.lineTo(0, 2.5);
    shape.lineTo(0.7, 2);
    shape.lineTo(1, 1);
    shape.closePath();

    const extrudeSettings = {
      steps: 2,
      depth: 0.5,
      bevelEnabled: true,
      bevelThickness: 0.1,
      bevelSize: 0.1,
      bevelOffset: 0,
      bevelSegments: 5
    };

    return new THREE.ExtrudeGeometry(shape, extrudeSettings);
  }, []);

  const dataPoints = useMemo(() => {
    const count = 100;
    const points = new Float32Array(count * 3);
    
    for (let i = 0; i < count; i++) {
      // Generate points around and through the shield
      points[i * 3] = (Math.random() - 0.5) * 2;
      points[i * 3 + 1] = (Math.random() - 0.5) * 2;
      points[i * 3 + 2] = (Math.random() - 0.5) * 2;
    }
    
    return points;
  }, []);

  useFrame(({ clock }) => {
    if (meshRef.current) {
      const time = clock.getElapsedTime();
      
      // Rotate and slightly distort the shield
      meshRef.current.rotation.x = Math.sin(time) * 0.2;
      meshRef.current.rotation.y = Math.cos(time) * 0.2;
      
      // Subtle pulsing effect
      const scale = 1 + Math.sin(time) * 0.05;
      meshRef.current.scale.set(scale, scale, scale);
    }
  });

  return (
    <group>
      <mesh ref={meshRef} geometry={shieldGeometry}>
        <meshStandardMaterial 
          color="#4338ca" 
          transparent 
          opacity={0.8} 
          metalness={0.7} 
          roughness={0.3}
        />
      </mesh>
      
      {/* Floating data points representing security */}
      <points>
        <bufferGeometry>
          <bufferAttribute 
            attach="attributes-position" 
            count={dataPoints.length / 3}
            array={dataPoints}
            itemSize={3}
          />
        </bufferGeometry>
        <pointsMaterial 
          color="#60a5fa" 
          size={0.05} 
          transparent 
          opacity={0.7}
        />
      </points>
    </group>
  );
}

export default function LandingAnimation() {
  return (
    <div className="absolute inset-0 z-0 pointer-events-none">
      <Canvas 
        camera={{ position: [0, 0, 3] }}
        style={{ 
          position: 'absolute', 
          top: 0, 
          left: 0, 
          width: '100%', 
          height: '100%' 
        }}
      >
        <ambientLight intensity={0.5} />
        <pointLight position={[10, 10, 10]} intensity={1.5} />
        <Float
          speed={1}
          rotationIntensity={0.2}
          floatIntensity={0.3}
        >
          <SecurityShield />
        </Float>
        <OrbitControls 
          enableZoom={false} 
          autoRotate 
          autoRotateSpeed={0.5} 
        />
      </Canvas>
    </div>
  );
}
