'use client'
import { Canvas } from '@react-three/fiber'
import React from 'react'

const Page = () => {
  return (
    <div className='font-sans bg-black w-screen h-screen overflow-hidden'>
      <div className='w-full h-full absolute top-0 left-0 text-white text-5xl font-bold flex items-center justify-center'>NikoD3M</div>
      <Canvas className='w-full h-full absolute top-0 left-0'>
        <mesh>
          <sphereGeometry/>
          <meshNormalMaterial/>
        </mesh>
      </Canvas>
    </div>
  )
}

export default Page
