'use client'
import { Center, Environment, OrbitControls,  PresentationControls, ScrollControls } from '@react-three/drei'
import { Canvas } from '@react-three/fiber'
import { Model } from './Jump'
import React from 'react'
import LineCloud from './LineCloud'


const Scene = () => {
  return (
    <div className='w-screen h-screen relative'>
      <LineCloud/>
      <Canvas gl={{depth: true}} className='z-40'>
        <Environment preset='city' />
        {/* <OrbitControls enableZoom={true} /> */}
        <ScrollControls pages={6}>
          <Model />
        </ScrollControls>

      </Canvas>
    </div>
  )
}

export default Scene
