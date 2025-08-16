'use client'

import React, { useRef, useEffect } from 'react'
import { useFrame, useThree } from '@react-three/fiber'
import { useGLTF } from '@react-three/drei'
import * as THREE from 'three'

export default function SpinningPencil() {
  const pencilRef = useRef<THREE.Group>(null)
  const { gl, viewport } = useThree()
  
  // Load the pencil model
  const { nodes } = useGLTF('/models/pencil.glb')

  // Handle WebGL context loss more gracefully
  useEffect(() => {
    const handleContextLost = (event: Event) => {
      event.preventDefault()
      console.log('WebGL context lost, attempting to restore...')
    }

    const handleContextRestored = () => {
      console.log('WebGL context restored')
    }

    const canvas = gl.domElement
    canvas.addEventListener('webglcontextlost', handleContextLost, false)
    canvas.addEventListener('webglcontextrestored', handleContextRestored, false)

    return () => {
      canvas.removeEventListener('webglcontextlost', handleContextLost)
      canvas.removeEventListener('webglcontextrestored', handleContextRestored)
    }
  }, [gl])

  // Calculate responsive pencil size based on viewport
  const pencilScale = Math.min(viewport.width, viewport.height) * 0.01

  useFrame((state, delta) => {
    if (pencilRef.current) {
      pencilRef.current.rotation.x += delta * 0.2
      pencilRef.current.rotation.y += delta * 0.3
    }
  })

  return (
    <>
      {/* Main Pencil Model */}
      <group
        ref={pencilRef}
        position={[0, 0, 0]}
        scale={[pencilScale, pencilScale, pencilScale]}
      >
        <primitive object={nodes.Scene} />
      </group>
    </>
  )
}
