import React, { useEffect, useRef } from 'react'
import { useGLTF, useAnimations } from '@react-three/drei'

export function Model(props) {
  const group = useRef()
  const { nodes, materials, animations } = useGLTF('/animated.glb')
  const { actions } = useAnimations(animations, group)
  useEffect(() =>  {
    actions.walk.reset()
    actions.walk.play();
    console.log(actions.walk.time)
  })
  return (
    <group ref={group} {...props} dispose={null}>
      <group name="Scene">
        <mesh name="Avatar" geometry={nodes.Avatar.geometry} material={nodes.Avatar.material} position={[-0.455, 1.784, 0.768]} />
      </group>
    </group>
  )
}

useGLTF.preload('/animated.glb')
