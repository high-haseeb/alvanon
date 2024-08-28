import { Canvas, useFrame } from "@react-three/fiber";
import * as THREE from "three";
import React, { useMemo } from "react";
import { useGLTF } from "@react-three/drei";

const AlvaForm = () => {
  return (
    <div className="overflow-hidden w-screen h-screen text-white bg-black z-40 relative section" id="alvaform">
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
      <div className="flex flex-col items-center justify-center mb-40 w-full lg:w-1/2 gap-4">
        <div className="text-4xl lg:text-7xl font-bold">
          <span className="text-brOrange">Alva</span>Form
        </div>
        <div className="w-2/3 text-xs lg:text-lg text-center">
          Lorem ipsum dolor sit amet, qui minim labore adipisicing minim sint cillum sint consectetur cupidatat. Lorem ipsum dolor sit amet, qui minim
          labore adipisicing minim sint cillum sint consectetur cupidatat. Lorem ipsum dolor sit amet, qui minim labore adipisicing minim sint cillum
          sint consectetur cupidatat.
        </div>
      </div>
      <div className="grid grid-cols-2 grid-rows-2 lg:flex justify-self-end absolute bottom-0">
        <Section title={"Physical AlvaForm"} />
        <Section title={"Physical AlvaForm"} />
        <Section title={"Physical AlvaForm"} />
        <Section title={"Physical AlvaForm"} />
      </div>
    </div>
  );
};
const Section = ({ title }) => {
  return (
    <div className="backdrop-blur-lg bg-black/20 w-[50vw] lg:w-80 h-[8rem] lg:h-[14rem] border-t border-x border-gray-500 text-md lg:text-3xl font-bold group gap-2 flex flex-col">
      <div className="w-full h-4 bg-transparent group-hover:bg-brOrange group-hover:animate-expandWidth"></div>
      <div className="px-10 flex flex-col gap-4">
        {title}
        <div className="opacity-0 text-xs lg:text-sm font-normal group-hover:opacity-100 transition-opacity text-white ">
          Lorem ipsum dolor sit amet, qui minim labore adipisicing minim sint cillum sint consectetur cupidatat.
        </div>
      </div>
    </div>
  );
};
const Model = () => {
  const { nodes: casualNodes } = useGLTF("/casual_new.glb");
  const { nodes: maleNodes } = useGLTF("/male_new.glb");

  const modelGeo = casualNodes.Avatar_AlvaMesh_1.geometry;
  const maleGeo = maleNodes["ASD-MMNN040-1910_STD_Regular"].geometry;

  const material = useMemo(() => new THREE.PointsMaterial({ color: "#EC7700", size: 0.01, opacity: 0.1 , transparent: true}), []);

  const modela = useMemo(() => new THREE.Points(modelGeo, material), [modelGeo, material]);
  const maleModel = useMemo(() => new THREE.Points(maleGeo, material), [maleGeo, material]);
  const speed = 0.5;
  useFrame((_, delta) => {
    modela.rotation.z -= delta * speed;
    maleModel.rotation.z -= delta * speed;
  });

  const isMobile = window.innerWidth < 600;
  const modelPosition = isMobile ? 40 : 120;
  const groupPositionZ = -150 * (isMobile ? 5 : 4);

  return (
    <>
      <group rotation={[Math.PI / 2, 0, 0]} position={[modelPosition, -80, groupPositionZ]}>
        <primitive object={modela} />
      </group>
      <group rotation={[Math.PI / 2, 0, 0]} position={[-modelPosition, -80, groupPositionZ]}>
        <primitive object={maleModel} />
      </group>
    </>
  );
};

useGLTF.preload('/male_new.glb')
useGLTF.preload('/casual_new.glb')

export default AlvaForm;
