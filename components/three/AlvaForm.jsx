import { Canvas, useFrame } from "@react-three/fiber";
import * as THREE from "three";
import React from "react";
import { OrbitControls, useGLTF } from "@react-three/drei";

const AlvaForm = () => {
  return (
    <div className="overflow-hidden w-screen h-screen text-white bg-black z-40 relative snap-end section" id="alvaform">
      <Overlay />
      <Canvas camera={{ zoom: 4 }} className="z-10">
        <ambientLight />
        <directionalLight position={[0, 200, 0]} intensity={2.0} />
        <Model />
      </Canvas>
    </div>
  );
};
const Overlay = () => {
  return (
    <div className="h-full w-full z-50 flex items-center justify-center text-white bg-transparent absolute top-0 left-0 flex-col">
      <div className="flex flex-col items-center justify-center w-1/2 gap-4">
        <div className="text-7xl font-bold">
          <span className="text-brOrange">Alva</span>Form
        </div>
        <div className="w-2/3">
          Lorem ipsum dolor sit amet, qui minim labore adipisicing minim sint cillum sint consectetur cupidatat. Lorem ipsum dolor sit amet, qui minim
          labore adipisicing minim sint cillum sint consectetur cupidatat. Lorem ipsum dolor sit amet, qui minim labore adipisicing minim sint cillum
          sint consectetur cupidatat.
        </div>
      </div>
      <div className="flex justify-self-end absolute bottom-0">
        <Section title={"Physical AlvaForm"} />
        <Section title={"Physical AlvaForm"} />
        <Section title={"Physical AlvaForm"} />
        <Section title={"Physical AlvaForm"} />
      </div>
    </div>
  );
};
const Section = ({ title }) => {
  return (<div className="backdrop-blur-lg bg-black/20 w-80 h-[14rem] border-t border-x border-gray-500 text-3xl font-bold group gap-2 flex flex-col">
    <div className="w-full h-4 bg-transparent group-hover:bg-brOrange group-hover:animate-expandWidth"></div>
    <div className="px-10 flex flex-col gap-4">
      {title}
      <div className="opacity-0 text-sm font-normal group-hover:opacity-100 transition-opacity text-white ">
        Lorem ipsum dolor sit amet, qui minim labore adipisicing minim sint cillum sint consectetur cupidatat.
      </div>
    </div>
  </div>)
};
const Model = () => {
  const { nodes } = useGLTF("/casual.glb");
  const modelGeo = nodes.Avatar_AlvaMesh_1.geometry;
  const modela = new THREE.Points(modelGeo, new THREE.PointsMaterial({ color: "#EC7700" }));
  const modelb = modela.clone();
  modela.position.x = 0;
  const speed = 0.5;
  useFrame((_, delta) => {
    modela.rotation.z -= delta * speed;
    modelb.rotation.z += delta * speed;
  });
  return (
    <>
      <group rotation={[Math.PI / 2, 0, 0]} position={[-120, -80, -150 * 4]}>
        b
        <primitive object={modela} />
      </group>
      <group rotation={[Math.PI / 2, 0, 0]} position={[120, -80, -150 * 4]}>
        <primitive object={modelb} />
      </group>
    </>
  );
};

export default AlvaForm;
