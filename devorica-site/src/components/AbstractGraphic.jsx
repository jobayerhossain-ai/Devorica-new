import { Canvas, useFrame } from '@react-three/fiber';
import { useRef, Suspense, useMemo } from 'react';
import * as THREE from 'three';

/* ── individual scene variants ── */

function HeroScene() {
  const groupRef = useRef();
  const icoRef = useRef();
  const torusRef = useRef();

  useFrame(({ clock, mouse }) => {
    if (groupRef.current) {
      groupRef.current.rotation.y = clock.getElapsedTime() * 0.12;
      groupRef.current.rotation.x = THREE.MathUtils.lerp(
        groupRef.current.rotation.x,
        mouse.y * 0.3,
        0.05
      );
    }
    if (icoRef.current) icoRef.current.rotation.x = clock.getElapsedTime() * 0.2;
    if (torusRef.current) torusRef.current.rotation.z = clock.getElapsedTime() * 0.4;
  });

  return (
    <group ref={groupRef}>
      {/* Main icosahedron */}
      <mesh ref={icoRef} position={[0, 0, 0]}>
        <icosahedronGeometry args={[1.6, 1]} />
        <meshStandardMaterial
          color="#E85002"
          wireframe
          emissive="#C10801"
          emissiveIntensity={0.4}
        />
      </mesh>
      {/* Inner solid sphere */}
      <mesh position={[0, 0, 0]}>
        <sphereGeometry args={[1.1, 32, 32]} />
        <meshStandardMaterial color="#111" roughness={0.2} metalness={0.8} />
      </mesh>
      {/* Orbiting torus */}
      <mesh ref={torusRef} position={[0, 0, 0]} rotation={[Math.PI / 3, 0, 0]}>
        <torusGeometry args={[2.4, 0.04, 8, 80]} />
        <meshStandardMaterial color="#F16001" emissive="#F16001" emissiveIntensity={0.6} />
      </mesh>
      {/* Small floating cubes */}
      {[[-2.4, 1.2, -0.5], [2.2, -1, 0.3], [-1.6, -1.8, 0.8], [1.8, 1.6, -0.4]].map(([x, y, z], i) => (
        <mesh key={i} position={[x, y, z]}>
          <boxGeometry args={[0.25, 0.25, 0.25]} />
          <meshStandardMaterial color="#E85002" emissive="#E85002" emissiveIntensity={0.5} />
        </mesh>
      ))}
      {/* Ambient + point lights */}
      <ambientLight intensity={0.3} />
      <pointLight position={[4, 4, 4]} intensity={2} color="#F16001" />
      <pointLight position={[-4, -2, -4]} intensity={1.5} color="#C10801" />
    </group>
  );
}

function DiamondScene() {
  const meshRef = useRef();
  useFrame(({ clock }) => {
    if (meshRef.current) {
      meshRef.current.rotation.y = clock.getElapsedTime() * 0.5;
      meshRef.current.rotation.x = Math.sin(clock.getElapsedTime() * 0.3) * 0.4;
      meshRef.current.position.y = Math.sin(clock.getElapsedTime() * 0.8) * 0.2;
    }
  });
  return (
    <>
      <mesh ref={meshRef}>
        <octahedronGeometry args={[1.4, 0]} />
        <meshStandardMaterial color="#E85002" wireframe emissive="#F16001" emissiveIntensity={0.6} />
      </mesh>
      <mesh>
        <octahedronGeometry args={[0.9, 0]} />
        <meshStandardMaterial color="#333" roughness={0.1} metalness={0.9} />
      </mesh>
      <ambientLight intensity={0.4} />
      <pointLight position={[3, 3, 3]} intensity={2.5} color="#E85002" />
    </>
  );
}

function BarrierScene() {
  const groupRef = useRef();
  useFrame(({ clock }) => {
    if (groupRef.current) {
      groupRef.current.rotation.y = clock.getElapsedTime() * 0.15;
    }
  });
  return (
    <group ref={groupRef}>
      {Array.from({ length: 5 }).map((_, row) =>
        Array.from({ length: 5 }).map((_, col) => (
          <mesh key={`${row}-${col}`} position={[col - 2, row - 2, Math.random() * -1]}>
            <boxGeometry args={[0.3, 0.3, 0.3]} />
            <meshStandardMaterial
              color={Math.random() > 0.6 ? '#E85002' : '#333'}
              emissive={Math.random() > 0.6 ? '#C10801' : '#111'}
              emissiveIntensity={0.4}
            />
          </mesh>
        ))
      )}
      <ambientLight intensity={0.3} />
      <pointLight position={[0, 0, 5]} intensity={2} color="#F16001" />
    </group>
  );
}

function AvatarScene({ color = '#E85002' }) {
  const groupRef = useRef();
  useFrame(({ clock }) => {
    if (groupRef.current) groupRef.current.rotation.y = clock.getElapsedTime() * 0.3;
  });
  return (
    <group ref={groupRef}>
      <mesh position={[0, 0.5, 0]}>
        <sphereGeometry args={[0.6, 16, 16]} />
        <meshStandardMaterial color={color} roughness={0.3} metalness={0.5} />
      </mesh>
      <mesh position={[0, -0.5, 0]}>
        <cylinderGeometry args={[0.8, 1.2, 1.2, 8]} />
        <meshStandardMaterial color={color} roughness={0.3} metalness={0.5} />
      </mesh>
      <ambientLight intensity={0.6} />
      <pointLight position={[2, 2, 2]} intensity={1.5} color="#fff" />
    </group>
  );
}

/* ── exported wrapper ── */
const SCENES = {
  hero: { Scene: HeroScene, camera: [0, 0, 6] },
  diamond: { Scene: DiamondScene, camera: [0, 0, 4] },
  barrier: { Scene: BarrierScene, camera: [0, 0, 7] },
  avatar: { Scene: AvatarScene, camera: [0, 0, 3.5] },
};

export default function AbstractGraphic({
  variant = 'hero',
  className = '',
  style = {},
  avatarColor,
}) {
  const cfg = SCENES[variant] || SCENES.hero;

  // Fallback for reduced motion / low-end: static CSS gradient div
  const prefersReduced = typeof window !== 'undefined' &&
    window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  if (prefersReduced) {
    return (
      <div
        className={`bg-brand-gradient-radial ${className}`}
        style={{ minHeight: 320, ...style }}
        aria-hidden="true"
      />
    );
  }

  return (
    <div className={className} style={{ minHeight: 320, ...style }}>
      <Canvas
        camera={{ position: cfg.camera, fov: 50 }}
        gl={{ antialias: true, alpha: true }}
        style={{ background: 'transparent', width: '100%', height: '100%' }}
      >
        <Suspense fallback={null}>
          {variant === 'avatar'
            ? <cfg.Scene color={avatarColor} />
            : <cfg.Scene />}
        </Suspense>
      </Canvas>
    </div>
  );
}
