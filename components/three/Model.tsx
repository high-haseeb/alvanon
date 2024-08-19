'use client'
import {  Environment, ScrollControls, Sparkles } from '@react-three/drei'
import { Canvas } from '@react-three/fiber'
import { Model } from './Jump'
import React from 'react'
import { Overlay } from '@/components/three/Overlay'
import Image from 'next/image'
import useOpacityStore from "@/components/three/store.js"


const Scene = () => {
  return (
    <div className='w-screen h-screen section relative' id='points'>
      <Canvas camera={{zoom: 4}} className='bg-transparent'>
        <Environment preset='city' />
        <Sparkles color={'orange'} />
        <ScrollControls pages={4} damping={0.5}  distance={2} prepend  style={{zIndex: 0}}>
          <Model />
          <Overlay />
        </ScrollControls>
      </Canvas>
      <FadeInSection />
    </div>
  )
}

const FadeInSection = () => {
  // @ts-ignore
  const opacity = useOpacityStore(state => state.opacity);
  return (
    <div
      className={`h-screen w-screen flex justify-between p-10 lg:px-40 items-end text-center lg:text-left  pointer-events-none z-0`}
      style={{
        opacity,
        position: "absolute",
        top: 0,
        left: 0,
      }}
    >
      <div className="flex items-center justify-center">
        <div className="max-w-sm w-full font-bold text-white ">
          <Image
            src={"/walking.gif"}
            width={800}
            height={280}
            className="absolute w-1/2 h-screen object-cover bottom-0 left-1/2 -translate-x-1/2 -z-10 "
            alt="walking"
          />
          <div className="text-brOrange z-10">Lorem ipsum dolor </div>sit amet, qui minim labore adipisicing minim sint cillum sint consectetur
          cupidatat.
          <p className="animate-bounce mt-6 z-10">↓</p>
        </div>
      </div>
      <div className="lg:text-right max-w-sm w-full text-3xl lg:font-bold text-white hidden lg:block">
        Lorem ipsum dolor sit amet, qui minim labore adipisicing minim sint cillum sint consectetur cupidatat.
      </div>
    </div>
  );
};

export default Scene
