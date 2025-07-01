import React, { useRef,useState } from 'react';
import { Canvas, useFrame, useLoader } from '@react-three/fiber';
import { OrbitControls, Stars } from '@react-three/drei';
import { TextureLoader, DoubleSide } from 'three';
import { planets } from '../constants/planets';
import OrbitRing from './OrbitRing';
import { EffectComposer, Bloom } from '@react-three/postprocessing';
import '../styles/components/SolarSystem.css'; 

function Planet({ name, texture, position, size, hasRing, onClick }) {
  const meshRef = useRef();
  const tex = useLoader(TextureLoader, texture);

  useFrame(() => {
    meshRef.current.rotation.y += 0.002;
  });

  return (
    <group position={position}>
      <mesh ref={meshRef} onClick={() => onClick(name)}>
        <sphereGeometry args={[size, 64, 64]} />
        <meshStandardMaterial
          map={tex}
          emissive={name === 'Sun' ? '#ffaa00' : '#111'}
          emissiveIntensity={name === 'Sun' ? 1 : 0.1}
          metalness={0.4}
          roughness={0.6}
          toneMapped={false}
        />
      </mesh>

      {hasRing && (
        <mesh rotation={[Math.PI / 2, 0, 0]}>
          <ringGeometry args={[size * 1.2, size * 1.8, 64]} />
          <meshBasicMaterial
            color={name === 'Uranus' ? 'white' : 'gray'}
            side={DoubleSide}
            transparent
            opacity={0.4}
          />
        </mesh>
      )}
    </group>
  );
}

export default function SolarSystem() {
  const [selectedPlanet, setSelectedPlanet] = useState(null);

  const handlePlanetClick = (planetName) => {
    const data = planets.find(p => p.name === planetName);
    if (data) setSelectedPlanet(data);
  };
  return (
    <>
    <Canvas camera={{ position: [0, 25, 50], fov: 50 }}>
      <EffectComposer>
      <Bloom luminanceThreshold={0.3} luminanceSmoothing={0.9} intensity={2.5} />
      </EffectComposer>
      <OrbitControls
        enableZoom={true}
        minPolarAngle={Math.PI / 4}
        maxPolarAngle={Math.PI / 2}
        minDistance={40}
        maxDistance={120}
      />
      <ambientLight intensity={0.4} />
      <pointLight position={[0, 0, 0]} intensity={3.5} decay={2} />
      <Stars radius={100} depth={50} count={5000} factor={4} fade />
      <ambientLight />
      <pointLight position={[0, 0, 0]} />
      <OrbitControls />

      {planets.map((planet, idx) => (
  <>
    <Planet key={idx} {...planet} onClick={handlePlanetClick} />
    {planet.name !== 'Sun' && <OrbitRing radius={planet.distance} />}
  </>
))}

    </Canvas>
      {selectedPlanet && (
        <div className="planet-popup" onClick={() => setSelectedPlanet(null)}>
          <div className="popup-inner" onClick={(e) => e.stopPropagation()}>
            <button className="popup-close" onClick={() => setSelectedPlanet(null)}>×</button>
            <h2>{selectedPlanet.name}</h2>
            <p>{selectedPlanet.description}</p>
          </div>
        </div>
      )}
    </>
  );
}

