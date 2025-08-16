'use client'

import React, { Suspense } from 'react'
import { Canvas } from '@react-three/fiber'
import { Environment } from '@react-three/drei'
import SpinningTorus from './SpinningTorus'

export default function Scene() {
  return (
    <div className="absolute inset-0 w-full h-full">
      <Canvas
        camera={{ position: [0, 0, 15], fov: 60 }}
        gl={{
          antialias: true,
          alpha: false, // Important: force opaque white background
          preserveDrawingBuffer: false,
          powerPreference: 'high-performance',
        }}
        dpr={[1, 2]}
        onCreated={({ gl }) => {
          gl.setClearColor(0xffffff, 1) // white background
        }}
      >
        <Suspense fallback={null}>
          <directionalLight intensity={2} position={[3, 3, 3]} />
          <ambientLight intensity={0.5} />
          <Environment preset="city" background={false} />
          <SpinningTorus />
        </Suspense>
      </Canvas>
    </div>
  )
}