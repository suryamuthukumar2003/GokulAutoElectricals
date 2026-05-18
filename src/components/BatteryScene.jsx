import { useRef, useMemo, Suspense } from 'react'
import { Canvas, useFrame } from '@react-three/fiber'
import { Float, OrbitControls, Environment } from '@react-three/drei'
import * as THREE from 'three'

function CarBattery() {
  const ring1   = useRef()
  const ring2   = useRef()
  const aura    = useRef()
  const elapsed = useRef(0)

  useFrame((_, delta) => {
    elapsed.current += delta
    const t = elapsed.current
    if (ring1.current)  ring1.current.rotation.z  =  t * 0.45
    if (ring2.current) { ring2.current.rotation.z = -t * 0.28; ring2.current.rotation.x = t * 0.15 }
    if (aura.current)   aura.current.material.opacity = 0.05 + Math.sin(t * 1.6) * 0.03
  })

  const pts = useMemo(() => {
    const n = 160, arr = new Float32Array(n * 3)
    for (let i = 0; i < n; i++) {
      const phi   = Math.acos(2 * Math.random() - 1)
      const theta = 2 * Math.PI * Math.random()
      const r     = 2.2 + Math.random() * 0.7
      arr[i*3]   = r * Math.sin(phi) * Math.cos(theta)
      arr[i*3+1] = r * Math.sin(phi) * Math.sin(theta)
      arr[i*3+2] = r * Math.cos(phi)
    }
    return arr
  }, [])

  const W = 2.2, H = 1.4, D = 1.4

  return (
    <group rotation={[0.2, 0.4, 0]}>
      {/* Main case */}
      <mesh castShadow>
        <boxGeometry args={[W, H, D]} />
        <meshStandardMaterial color="#0a1a0d" metalness={0.8} roughness={0.18} />
      </mesh>

      {/* Top lid */}
      <mesh position={[0, H/2 + 0.02, 0]}>
        <boxGeometry args={[W - 0.04, 0.06, D - 0.04]} />
        <meshStandardMaterial color="#0d2211" metalness={0.7} roughness={0.25} />
      </mesh>

      {/* 6 cell caps */}
      {[-0.65, 0, 0.65].map((x, col) =>
        [-0.28, 0.28].map((z, row) => (
          <mesh key={`${col}-${row}`} position={[x, H/2 + 0.09, z]}>
            <cylinderGeometry args={[0.13, 0.13, 0.12, 16]} />
            <meshStandardMaterial color="#22c55e" metalness={0.9} roughness={0.08}
              emissive="#22c55e" emissiveIntensity={0.6} />
          </mesh>
        ))
      )}

      {/* + Terminal (green) */}
      <group position={[-W/2 + 0.3, H/2 + 0.1, -D/2 + 0.3]}>
        <mesh>
          <cylinderGeometry args={[0.18, 0.2, 0.12, 20]} />
          <meshStandardMaterial color="#22c55e" metalness={1} roughness={0.05}
            emissive="#22c55e" emissiveIntensity={1.3} />
        </mesh>
        <mesh position={[0, 0.17, 0]}>
          <cylinderGeometry args={[0.1, 0.12, 0.22, 20]} />
          <meshStandardMaterial color="#22c55e" metalness={1} roughness={0.05}
            emissive="#22c55e" emissiveIntensity={1} />
        </mesh>
        <mesh position={[0, 0.3, 0]}>
          <torusGeometry args={[0.13, 0.016, 8, 24]} />
          <meshStandardMaterial color="#4ade80" emissive="#4ade80" emissiveIntensity={3.5} />
        </mesh>
      </group>

      {/* − Terminal (silver) */}
      <group position={[W/2 - 0.3, H/2 + 0.1, -D/2 + 0.3]}>
        <mesh>
          <cylinderGeometry args={[0.15, 0.18, 0.12, 20]} />
          <meshStandardMaterial color="#94a3b8" metalness={1} roughness={0.06} />
        </mesh>
        <mesh position={[0, 0.14, 0]}>
          <cylinderGeometry args={[0.09, 0.1, 0.18, 20]} />
          <meshStandardMaterial color="#cbd5e1" metalness={1} roughness={0.05} />
        </mesh>
      </group>

      {/* Carry handle */}
      <mesh position={[0, H/2 + 0.35, 0]}>
        <torusGeometry args={[0.5, 0.045, 10, 30, Math.PI]} />
        <meshStandardMaterial color="#1a3d22" metalness={0.6} roughness={0.4} />
      </mesh>

      {/* Front label area */}
      <mesh position={[0, 0, D/2 + 0.002]}>
        <planeGeometry args={[W - 0.08, H - 0.12]} />
        <meshStandardMaterial color="#061409" metalness={0.2} roughness={0.8} />
      </mesh>

      {/* LED bars */}
      {[-0.3, -0.1, 0.1, 0.3].map((y, i) => (
        <mesh key={i} position={[0, y, D/2 + 0.004]}>
          <planeGeometry args={[1.6, 0.055]} />
          <meshStandardMaterial color="#4ade80" emissive="#4ade80"
            emissiveIntensity={1.5 + i * 0.15} transparent opacity={0.85} />
        </mesh>
      ))}

      {/* Brand stripe */}
      <mesh position={[0, H/2 - 0.22, D/2 + 0.004]}>
        <planeGeometry args={[W - 0.1, 0.22]} />
        <meshStandardMaterial color="#22c55e" emissive="#22c55e"
          emissiveIntensity={0.5} transparent opacity={0.28} />
      </mesh>

      {/* Inner glow */}
      <pointLight color="#22c55e" intensity={5} distance={4.5} decay={2} position={[0, 0.3, 0.8]} />

      {/* Orbit rings */}
      <mesh ref={ring1}>
        <torusGeometry args={[2.4, 0.013, 8, 100]} />
        <meshStandardMaterial color="#22c55e" emissive="#22c55e"
          emissiveIntensity={3.5} transparent opacity={0.6} />
      </mesh>
      <mesh ref={ring2}>
        <torusGeometry args={[2.85, 0.009, 6, 100]} />
        <meshStandardMaterial color="#4ade80" emissive="#4ade80"
          emissiveIntensity={2.5} transparent opacity={0.35} />
      </mesh>

      {/* Aura */}
      <mesh ref={aura}>
        <sphereGeometry args={[2.7, 32, 32]} />
        <meshStandardMaterial color="#22c55e" transparent opacity={0.055} side={THREE.BackSide} />
      </mesh>

      {/* Particles */}
      <points>
        <bufferGeometry>
          <bufferAttribute attach="attributes-position" count={160} array={pts} itemSize={3} />
        </bufferGeometry>
        <pointsMaterial color="#4ade80" size={0.033} transparent opacity={0.7} />
      </points>
    </group>
  )
}

export default function BatteryScene({ height = '100%' }) {
  return (
    <Canvas
      camera={{ position: [0, 2, 6.5], fov: 40 }}
      gl={{ antialias: true, alpha: true }}
      style={{ background: 'transparent', width: '100%', height }}
    >
      <ambientLight intensity={0.25} />
      <directionalLight position={[4, 7, 4]} intensity={1.8} color="#ffffff" castShadow />
      <pointLight position={[-5, 4, 3]} intensity={3.5} color="#22c55e" />
      <pointLight position={[5, -3, -2]} intensity={1.5} color="#4ade80" />
      <pointLight position={[0, 5, 0]} intensity={1.2} color="#ffffff" />

      <Float speed={1.4} rotationIntensity={0.18} floatIntensity={0.45}>
        <CarBattery />
      </Float>

      <Environment preset="forest" />
      <OrbitControls
        enableZoom={false} enablePan={false}
        autoRotate autoRotateSpeed={1.0}
        minPolarAngle={Math.PI / 4} maxPolarAngle={Math.PI / 2}
      />
    </Canvas>
  )
}