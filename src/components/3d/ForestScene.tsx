import { useRef, useMemo } from 'react'
import { useFrame } from '@react-three/fiber'
import * as THREE from 'three'

function Tree({ position, scale }: { position: [number, number, number]; scale: number }) {
  const groupRef = useRef<THREE.Group>(null)
  const offset = useMemo(() => Math.random() * Math.PI * 2, [])

  useFrame(({ clock }) => {
    if (groupRef.current) {
      groupRef.current.rotation.z = Math.sin(clock.elapsedTime * 0.4 + offset) * 0.03
    }
  })

  const trunkColor = '#5a3a1a'
  const leafColor = useMemo(
    () => new THREE.Color().setHSL(0.3 + Math.random() * 0.05, 0.6, 0.25 + Math.random() * 0.1),
    []
  )

  return (
    <group ref={groupRef} position={position} scale={scale}>
      {/* Trunk */}
      <mesh position={[0, 0.5, 0]}>
        <cylinderGeometry args={[0.08, 0.12, 1, 6]} />
        <meshStandardMaterial color={trunkColor} roughness={0.9} />
      </mesh>
      {/* Canopy layers */}
      <mesh position={[0, 1.5, 0]}>
        <coneGeometry args={[0.7, 1.2, 7]} />
        <meshStandardMaterial color={leafColor} roughness={0.8} />
      </mesh>
      <mesh position={[0, 2.2, 0]}>
        <coneGeometry args={[0.5, 1.0, 7]} />
        <meshStandardMaterial color={leafColor} roughness={0.8} />
      </mesh>
      <mesh position={[0, 2.8, 0]}>
        <coneGeometry args={[0.3, 0.8, 7]} />
        <meshStandardMaterial color={leafColor} roughness={0.8} />
      </mesh>
    </group>
  )
}

function Particles() {
  const count = 200
  const positions = useMemo(() => {
    const arr = new Float32Array(count * 3)
    for (let i = 0; i < count; i++) {
      arr[i * 3] = (Math.random() - 0.5) * 30
      arr[i * 3 + 1] = Math.random() * 10
      arr[i * 3 + 2] = (Math.random() - 0.5) * 20
    }
    return arr
  }, [])

  const meshRef = useRef<THREE.Points>(null)

  useFrame(({ clock }) => {
    if (meshRef.current) {
      meshRef.current.rotation.y = clock.elapsedTime * 0.03
      const positions = meshRef.current.geometry.attributes.position.array as Float32Array
      for (let i = 0; i < count; i++) {
        positions[i * 3 + 1] += Math.sin(clock.elapsedTime + i) * 0.002
      }
      meshRef.current.geometry.attributes.position.needsUpdate = true
    }
  })

  return (
    <points ref={meshRef}>
      <bufferGeometry>
        <bufferAttribute attach="attributes-position" args={[positions, 3]} />
      </bufferGeometry>
      <pointsMaterial size={0.05} color="#a8d8a8" transparent opacity={0.6} sizeAttenuation />
    </points>
  )
}

export default function ForestScene() {
  const trees = useMemo(() => {
    const result: { pos: [number, number, number]; scale: number }[] = []
    const cols = [-12, -8, -5, -2, 2, 5, 8, 12, -10, -6, -3, 1, 4, 7, 10]
    cols.forEach((x, i) => {
      result.push({
        pos: [x, -2, -3 - (i % 4) * 2],
        scale: 0.7 + Math.random() * 0.5,
      })
    })
    return result
  }, [])

  return (
    <>
      <ambientLight intensity={0.4} />
      <directionalLight position={[5, 10, 5]} intensity={1.2} color="#ffeedd" castShadow />
      <directionalLight position={[-5, 5, -5]} intensity={0.3} color="#88aaff" />
      <fog attach="fog" args={['#0d2a1a', 8, 30]} />

      {/* Ground */}
      <mesh rotation={[-Math.PI / 2, 0, 0]} position={[0, -2, 0]}>
        <planeGeometry args={[60, 40]} />
        <meshStandardMaterial color="#1a3d1a" roughness={1} />
      </mesh>

      {trees.map((t, i) => (
        <Tree key={i} position={t.pos} scale={t.scale} />
      ))}

      <Particles />
    </>
  )
}
