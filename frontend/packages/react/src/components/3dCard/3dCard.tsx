import React, { Suspense } from 'react';
import { OrbitControls } from '@react-three/drei';
import { Canvas, useFrame } from '@react-three/fiber';

import { useLoader } from '@react-three/fiber';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader';
import { Container } from './style';

function Card() {
  const gltf = useLoader(GLTFLoader, '/card.glb');
  const myMesh = React.useRef<any>(null);

  useFrame(({ clock }) => {
    myMesh.current.rotation.z = clock.getElapsedTime() * 2;
    myMesh.current.rotation.x = clock.getElapsedTime() * 2;
  });

  return (
    <Suspense fallback={<div>loading...</div> /* or null */}>
      <primitive
        scale={[8, 8, 8]}
        ref={myMesh}
        rotation={[0, 4.8, 0]}
        object={gltf.scene}
        position={[0, 0, 0]}
      />
    </Suspense>
  );
}

const AnimatedCard: React.FC = () => {
  return (
    <Container>
      <Canvas camera={{ position: [0, 0, 25] }}>
        <OrbitControls enableZoom={false} />
        <pointLight position={[-10, 0, 30]} intensity={1} />
        <pointLight position={[10, 0, 30]} intensity={1} />
        <pointLight position={[-10, 0, -30]} intensity={1} />
        <pointLight position={[10, 0, -30]} intensity={1} />

        <pointLight position={[10, 30, 1]} intensity={0.5} />
        <pointLight position={[-10, 30, 1]} intensity={0.5} />
        <pointLight position={[10, -30, 1]} intensity={0.5} />
        <pointLight position={[-10, -30, 1]} intensity={0.5} />
        <Card />
      </Canvas>
    </Container>
  );
};

export default AnimatedCard;
