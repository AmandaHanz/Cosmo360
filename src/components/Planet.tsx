import { useState, useRef } from 'react';
import { useFrame } from '@react-three/fiber';
import { Html } from '@react-three/drei';
import { Mesh, Group } from 'three';
import { PlanetData } from '../types/planet';

interface PlanetProps {
  data: PlanetData;
  onSelect: (name: string) => void;
}

export default function Planet({ data, onSelect }: PlanetProps) {
  const groupRef = useRef<Group>(null);
  const planetRef = useRef<Mesh>(null);
  const atmosphereRef = useRef<Mesh>(null);
  const ringsRef = useRef<Mesh>(null);
  const [hovered, setHovered] = useState(false);
  const [rotation, setRotation] = useState(Math.random() * Math.PI * 2);

  useFrame((state, delta) => {
    if (groupRef.current && planetRef.current) {
      setRotation((prev) => prev + data.orbitSpeed);
      groupRef.current.position.x = Math.cos(rotation) * data.orbitRadius;
      groupRef.current.position.z = Math.sin(rotation) * data.orbitRadius;

      planetRef.current.rotation.y += delta * data.rotationSpeed;

      if (atmosphereRef.current && data.atmosphereColor) {
        atmosphereRef.current.rotation.y -= delta * (data.rotationSpeed * 0.5);
      }

      if (ringsRef.current && data.hasRings) {
        ringsRef.current.rotation.z = Math.PI / 3;
      }
    }
  });

  const handleClick = () => {
    onSelect(data.name);
  };

  return (
    <group ref={groupRef}>
      <mesh rotation-x={Math.PI / 2}>
        <ringGeometry args={[data.orbitRadius - 0.1, data.orbitRadius + 0.1, 64]} />
        <meshBasicMaterial color="#ffffff" opacity={0.1} transparent />
      </mesh>

      <mesh
        ref={planetRef}
        onClick={handleClick}
        onPointerOver={() => setHovered(true)}
        onPointerOut={() => setHovered(false)}
      >
        <sphereGeometry args={[data.size, 64, 64]} />
        <meshStandardMaterial
          color={data.color}
          emissive={data.emissive || "#000000"}
          roughness={data.roughness || 0.5}
          metalness={data.metalness || 0.5}
        />

        {data.atmosphereColor && (
          <mesh ref={atmosphereRef} scale={1.05}>
            <sphereGeometry args={[data.size, 32, 32]} />
            <meshStandardMaterial
              color={data.atmosphereColor}
              transparent
              opacity={0.3}
              roughness={0.1}
              metalness={0}
            />
          </mesh>
        )}

        {data.hasRings && (
          <mesh ref={ringsRef}>
            <ringGeometry args={[data.size * 1.4, data.size * 2.2, 64]} />
            <meshStandardMaterial
              color={data.color}
              transparent
              opacity={0.8}
              roughness={0.6}
              metalness={0.4}
              side={2}
            />
          </mesh>
        )}

        {hovered && (
          <Html distanceFactor={15}>
            <div className="bg-black/80 text-white p-2 rounded-lg whitespace-nowrap">
              <h3 className="font-bold text-lg">{data.name}</h3>
              <p className="text-sm">{data.description}</p>
              <p className="text-xs mt-1 text-yellow-300">Click to learn more!</p>
            </div>
          </Html>
        )}
      </mesh>
    </group>
  );
}