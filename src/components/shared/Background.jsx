import React, { useRef, useEffect } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import * as THREE from 'three';

const Particles = () => {
  const particlesRef = useRef();

  useEffect(() => {
    const particlesGeometry = new THREE.BufferGeometry();
    const count = 2000;
    const positions = new Float32Array(count * 3);
    const colors = new Float32Array(count * 3);

    for (let i = 0; i < count * 3; i++) {
      positions[i] = (Math.random() - 0.5) * 20;
      colors[i] = Math.random();
    }

    particlesGeometry.setAttribute('position', new THREE.BufferAttribute(positions, 3));
    particlesGeometry.setAttribute('color', new THREE.BufferAttribute(colors, 3));

    particlesRef.current.geometry = particlesGeometry;
  }, []);

  useFrame(({ clock }) => {
    particlesRef.current.rotation.y = clock.elapsedTime * 0.04;
    particlesRef.current.rotation.x = clock.elapsedTime * 0.05;
    particlesRef.current.rotation.z = clock.elapsedTime * 0.03;

    particlesRef.current.position.x += Math.sin(clock.elapsedTime * 0.1) * 0.001;
    particlesRef.current.position.y += Math.cos(clock.elapsedTime * 0.1) * 0.001;
  });

  return (
    <points ref={particlesRef}>
      <pointsMaterial
        attach='material'
        vertexColors
        size={0.03}
        blending={THREE.AdditiveBlending}
      />
    </points>
  );
};

const Scene = () => {
  return (
    <Canvas
      style={{
        position: 'fixed',
        zIndex: -10,
        height: '100%',
        width: '100%',
      }}
    >
      <perspectiveCamera makeDefault fov={75} aspect={window.innerWidth / window.innerHeight} />
      <Particles />
    </Canvas>
  );
};

export default Scene;
