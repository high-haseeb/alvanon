import { Canvas } from "@react-three/fiber";
import * as THREE from "three";
import React from "react";
import { OrbitControls, useGLTF } from "@react-three/drei";

const AlvaForm = () => {
  return (
    <div className="overflow-hidden w-screen h-screen text-white bg-black z-40 relative snap-end section">
      <Canvas camera={{ zoom: 4 }}>
        {/* <OrbitControls /> */}
        <ambientLight />
        <directionalLight position={[0, 200, 0]} intensity={2.0} />
        <Model />
      </Canvas>
    </div>
  );
};
const Model = () => {
  const { nodes } = useGLTF("/casual.glb");
  const modelGeo = nodes.Avatar_AlvaMesh_1.geometry;
  const modela = new THREE.Points(modelGeo, new THREE.PointsMaterial({ color: "#EC7700" }));
  const modelb = modela.clone()
  modela.position.x = 0
  return (
    <>
      <group rotation={[Math.PI / 2, 0, 0]} position={[-100, -80, -150 * 4]}>
        <primitive object={modela} />
      </group>
      <group rotation={[Math.PI / 2, 0, 0]} position={[100, -80, -150 * 4]}>
        <primitive object={modelb} />
      </group>
    </>
  );
};

export default AlvaForm;
