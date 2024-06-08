import React, { useEffect, useRef } from "react";
import { useGLTF, useScroll } from "@react-three/drei";
import * as THREE from "three";
import { useFrame } from "@react-three/fiber";
import { lerp } from "three/src/math/MathUtils.js";

export function Model(props) {
  const { nodes, materials } = useGLTF("/casual.glb");
  const geometry = nodes.Avatar_AlvaMesh_1.geometry;

  // load the suit and make it not visible
  const suitRef = useRef();
  useEffect(() => {
    suitRef.current.visible = false;
    for (let index = 0; index < suitRef.current.children.length; index++) {
      suitRef.current.children[index].material.transparent = true;
      suitRef.current.children[index].material.opacity = 0;
      suitRef.current.children[index].material.color.set(0.6, 0.3, 0.2);
    }
  }, [suitRef.current]);

  const random = (range) => Math.random() * range * 2 - range;

  const scroll = useScroll();
  const page = 1 / scroll.pages;

  const points = [];
  for (let index = 0; index < geometry.attributes.position.count * 3; index += 3) {
    const x = random(500);
    const y = random(500);
    const z = random(500);
    points.push(new THREE.Vector3(x, y, z));
  }
  const bufGeo = new THREE.BufferGeometry().setFromPoints(points);
  const tempGeo = bufGeo.clone();
  const model = new THREE.Points(bufGeo, new THREE.PointsMaterial({ size: 0.1, color: "#EC7700", transparent: true }));

  const lamberModel = new THREE.Mesh(geometry, materials.lambert1_0);
  lamberModel.material.transparent = true;
  lamberModel.material.opacity = 0;

  const sensitivity = 0.4;
  const tempRotation = new THREE.Vector3();

  useFrame(({ pointer }) => {
    // form model from points
    if (scroll.range(0 * page, page * 1.5) < 1 && scroll.range(0 * page, page) > 0) {
      for (let index = 0; index < model.geometry.attributes.position.count * 3; index++) {
        model.geometry.attributes.position.array[index] = lerp(
          tempGeo.attributes.position.array[index],
          geometry.attributes.position.array[index],
          scroll.range(0 * page, page),
        );
      }
      model.geometry.attributes.position.needsUpdate = true;
    }

    // make the dummy visible
    if (scroll.range(2 * page, page) < 1) {
      lamberModel.material.opacity = scroll.range(2 * page, page);
      model.material.size = (1.0 - scroll.range(2 * page, page)) * 0.1;
      model.visible = scroll.range(2 * page, page / 2) < 1;
    }

    // make the suit visible
    if (scroll.range(3 * page, page) > 0) {
      suitRef.current.visible = true;
      for (let index = 0; index < suitRef.current.children.length; index++) {
        console.log('this was called')
        suitRef.current.children[index].material.opacity = scroll.range(3 * page, page);
      }
    }

    // rotate the models with mouse
    tempRotation.lerp({ x: 0, y: -pointer.y * Math.PI * 0.01, z: -pointer.x * Math.PI * sensitivity }, 0.02);
    model.rotation.setFromVector3(tempRotation);
    suitRef.current.rotation.setFromVector3(tempRotation);
    lamberModel.rotation.setFromVector3(tempRotation);
  });

  return (
    <group {...props} dispose={null} position={[0, -80, -150 * 4]} rotation={[Math.PI / 2, 0, 0]}>
      <group ref={(ref) => (suitRef.current = ref)}>
        <mesh geometry={nodes.Design_Piece_mat_0_Outside.geometry} material={materials.Mat_0} />
        <mesh geometry={nodes.Design_Piece_mat_10_Outside.geometry} material={materials.Mat_10} />
        <mesh geometry={nodes.Design_Piece_mat_11_Outside.geometry} material={materials.Mat_11} />
        <mesh geometry={nodes.Design_Piece_mat_12_Outside.geometry} material={materials.Mat_12} />
        <mesh geometry={nodes.Design_Piece_mat_13_Outside.geometry} material={materials.Mat_13} />
        <mesh geometry={nodes.Design_Piece_mat_1_Outside.geometry} material={materials.Mat_1} />
        <mesh geometry={nodes.Design_Piece_mat_2_Outside.geometry} material={materials.Mat_2} />
        <mesh geometry={nodes.Design_Piece_mat_3_Outside.geometry} material={materials.Mat_3} />
        <mesh geometry={nodes.Design_Piece_mat_4_Outside.geometry} material={materials.Mat_4} />
        <mesh geometry={nodes.Design_Piece_mat_5_Outside.geometry} material={materials.Mat_5} />
        <mesh geometry={nodes.Design_Piece_mat_6_Outside.geometry} material={materials.Mat_6} />
        <mesh geometry={nodes.Design_Piece_mat_7_Outside.geometry} material={materials.Mat_7} />
        <mesh geometry={nodes.Design_Piece_mat_8_Outside.geometry} material={materials.Mat_8} />
        <mesh geometry={nodes.Design_Piece_mat_9_Outside.geometry} material={materials.Mat_9} />
      </group>

      <primitive object={model} />
      <primitive object={lamberModel} />
      <mesh>
        <planeGeometry args={[100, 100, 1, 1]} />
        <meshStandardMaterial color={"lime"} />
      </mesh>

      {/* <mesh geometry={nodes.Avatar_pasted__Sport_sneakers_2.geometry} material={materials.pasted__Sport_sneakers_0} /> */}
      {/* <mesh geometry={nodes.Avatar_pasted__Sport_sneakers_3.geometry} material={materials.pasted__Sport_sneakers_0} /> */}
    </group>
  );
}

useGLTF.preload("/casual.glb");
