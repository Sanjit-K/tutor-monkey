'use client'

import React, { useRef, useEffect } from 'react'
import { useFrame, useThree, useLoader } from '@react-three/fiber'
import { OrbitControls, MeshTransmissionMaterial, Environment } from '@react-three/drei'
import * as THREE from 'three'
import { TextureLoader } from 'three'
// Helper component to render an image as a plane with texture
function ImagePlane({
  position = [0, 0, 0] as [number, number, number],
  width = 4,
  height = 4,
}: {
  position?: [number, number, number]
  width?: number
  height?: number
}) {
  const texture = useLoader(TextureLoader, '/images/tutormonkeylogo.png')
  return (
    <mesh position={position}>
      <planeGeometry args={[width, height]} />
      <meshBasicMaterial map={texture} transparent={true} />
    </mesh>
  )
}

function SpinningTorus() {
  const torusRef = useRef<THREE.Mesh>(null)
  const { gl, viewport } = useThree()

  // Set white background
  useEffect(() => {
    gl.setClearColor('white', 1)
  }, [gl])

  // WebGL context loss handling
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

  useFrame((state, delta) => {
    if (torusRef.current) {
      torusRef.current.rotation.x += delta * 0.3
      torusRef.current.rotation.y += delta * 0.2
    }
  })

  const cubeSize = Math.min(viewport.width, viewport.height) * 0.3

  return (
    <>

      {/* Logo image far behind the cube for visibility */}
      <ImagePlane position={[0, 0, -2]} width={cubeSize} height={cubeSize} />

      {/* Spinning Glass Cube */}
      <mesh ref={torusRef} position={[0, 0, 0]}>
        <boxGeometry args={[cubeSize, cubeSize, cubeSize]} />
        <MeshTransmissionMaterial
          transmission={1}
          thickness={3.2}
          roughness={0}
          ior={1.2}
          chromaticAberration={0.02}
          backside
          distortion={0.2}
          distortionScale={0.5}
          temporalDistortion={0.1}
          attenuationDistance={0.5}
        />
      </mesh>

      <OrbitControls />
      <Environment preset="sunset" background={false} />
    </>
  )
}

export default SpinningTorus