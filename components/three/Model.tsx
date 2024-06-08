'use client'
import {  Environment, Loader, ScrollControls, Sparkles } from '@react-three/drei'
import { Canvas } from '@react-three/fiber'
import { Model } from './Jump'
import React from 'react'
import { Overlay } from '@/components/three/Overlay'


const Scene = () => {
  return (
    <div className='w-screen h-screen snap-start section'>
      <Loader/>
      <Canvas camera={{zoom: 4}}>
        <Environment preset='city' />
        <ScrollControls pages={4} damping={0.25}  distance={2} prepend  >
          <Model />
          <Overlay />
        </ScrollControls>
        <Sparkles color={'orange'} />
      </Canvas>
    </div>
  )
}

export default Scene
