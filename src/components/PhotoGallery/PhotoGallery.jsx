import React, { useEffect } from 'react';
import { Heading, SectionContainer, CanvasContainer } from './styles';
import * as THREE from 'three';
import { useRef, useState } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Image } from '@react-three/drei';
import { easing } from 'maath';
import gallery from './data';

const PhotoGallery = () => {
  const [active, setActive] = useState(null);
  const [isMobile, setIsMobile] = useState(false);
  const cameraRef = useRef();

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 768) {
        setIsMobile(true);
      } else {
        setIsMobile(false);
      }
    };

    window.addEventListener('resize', handleResize);
    handleResize();

    return () => window.removeEventListener('resize', handleResize);
  }, []);
  return (
    <SectionContainer>
      <Heading>Photo Gallery</Heading>;
      <CanvasContainer>
        <Canvas
          camera={{ position: [0, 0, isMobile ? 15 : 11], fov: 16 }}
          onCreated={({ camera }) => (cameraRef.current = camera)}
        >
          {/* <color args={['red']} attach='background' /> */}
          <Rig rotation={[0, 0, 0.15]} active={active} isMobile={isMobile}>
            <Carousel active={active} setActive={setActive} isMobile={isMobile} />
          </Rig>
        </Canvas>
      </CanvasContainer>
    </SectionContainer>
  );
};

function createCurvedPlaneGeometry(width, height, widthSegments, heightSegments, curvature) {
  const geometry = new THREE.PlaneGeometry(width, height, widthSegments, heightSegments);

  // Access the vertices of the geometry and modify their positions
  const positionAttribute = geometry.attributes.position;

  for (let i = 0; i < positionAttribute.count; i++) {
    const x = positionAttribute.getX(i);

    // Apply curvature only along the x-axis
    const z = curvature * x * x;

    positionAttribute.setZ(i, z);
  }

  // Update the geometry to reflect the changes
  geometry.computeVertexNormals();

  return geometry;
}

function Rig(props) {
  const ref = useRef();
  useFrame((state, delta) => {
    ref.current.rotation.y = state.clock.getElapsedTime() * 0.5;
    state.events.update();
    easing.damp3(
      state.camera.position,
      [-state.pointer.x * 3, state.pointer.y + 1.5, props.isMobile ? 15 : 11],
      0.3,
      delta,
    ); // Move camera
    state.camera.lookAt(0, 0, 0); // Look at center
  });
  return <group ref={ref} {...props} />;
}

function Carousel({ count = gallery.length }) {
  return gallery.map((image, i) => (
    <Card
      key={image.id}
      url={image.url}
      position={[
        Math.sin((i / count) * Math.PI * 2) * 2.2,
        0,
        Math.cos((i / count) * Math.PI * 2) * 2.2,
      ]}
      rotation={[0, Math.PI + (i / count) * Math.PI * 2, 0]}
    />
  ));
}

function Card({ url, ...props }) {
  const ref = useRef();
  const [hovered, hover] = useState(false);
  const pointerOver = (e) => (e.stopPropagation(), hover(true));
  const pointerOut = () => hover(false);
  useFrame((state, delta) => {
    easing.damp3(ref.current.scale, hovered ? 1.15 : 1, 0.1, delta);
    easing.damp(ref.current.material, 'radius', hovered ? 0.25 : 0.1, 0.2, delta);
    easing.damp(ref.current.material, 'zoom', hovered ? 1 : 1.5, 0.2, delta);
  });
  return (
    <Image
      ref={ref}
      url={url}
      transparent
      side={THREE.DoubleSide}
      onPointerOver={pointerOver}
      onPointerOut={pointerOut}
      {...props}
    >
      <primitive object={createCurvedPlaneGeometry(1, 1.3, 20, 20, 0.5)} />
    </Image>
  );
}

export default PhotoGallery;
