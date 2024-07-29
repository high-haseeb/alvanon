'use client'
import {  Environment, ScrollControls, Sparkles } from '@react-three/drei'
import { Canvas } from '@react-three/fiber'
import { Model } from './Jump'
import React from 'react'
import { Overlay } from '@/components/three/Overlay'


const Scene = () => {
  return (
    <div className='w-screen h-screen section' id='points'>
      <Canvas camera={{zoom: 4}}>
        <Environment preset='city' />
        <Sparkles color={'orange'} />
        <ScrollControls pages={4} damping={0.5}  distance={2} prepend  >
          <Model />
          <Overlay />
        </ScrollControls>
      </Canvas>
    </div>
  )
}

export default Scene
