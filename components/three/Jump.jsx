import React, { useEffect, useRef } from "react";
import { useGLTF, useScroll } from "@react-three/drei";
import * as THREE from "three";
import { useFrame } from "@react-three/fiber";
import { lerp } from "three/src/math/MathUtils.js";

const random = (range) => Math.random() * range * 2 - range;

export function Model(props) {
  const { nodes, materials } = useGLTF("/casual.glb");
  const geometry = nodes.Avatar_AlvaMesh_1.geometry;

  const scroll = useScroll();
  const page = 1 / scroll.pages;

  const points = [];
  for (let index = 0; index < geometry.attributes.position.count * 3; index += 3) {
    const x = random(250);
    const y = random(250);
    const z = random(250);
    points.push(new THREE.Vector3(x, y, z));
  }
  const bufGeo = new THREE.BufferGeometry().setFromPoints(points);
  const tempGeo = bufGeo.clone();
  const model = new THREE.Points(bufGeo, new THREE.PointsMaterial({ size: 0.1, color: "#EC7700", transparent: true }));

  const lamberModel = new THREE.Mesh(geometry, materials.lambert1_0);
  lamberModel.material.transparent = true;
  lamberModel.material.color = new THREE.Color("#F2D8BD");
  lamberModel.material.opacity = 0;


  useFrame(() => {
    if (scroll.range(0 * page, page * 1.5) < 1 && scroll.range(0 * page, page) > 0) {
      for (let i = 0; i < model.geometry.attributes.position.count * 3; i++) {
        model.geometry.attributes.position.array[i] = lerp(
          tempGeo.attributes.position.array[i],
          geometry.attributes.position.array[i],
          scroll.range(0 * page, page),
        );
      }
      model.geometry.attributes.position.needsUpdate = true;
    }
    if (scroll.range(2 * page, page) < 1) {
      lamberModel.material.opacity = scroll.range(2 * page, page);
      model.material.size = (1.0 - scroll.range(2 * page, page)) * 0.1;
      model.visible = scroll.range(2 * page, page / 2) < 1;
    }

    if (scroll.range(3 * page, page) > 0) {
      lamberModel.material.opacity = 1.0 -  scroll.range(3 * page, page);
      }
  });
  const group = useRef();

  return (
    <group {...props} dispose={null} position={[0, -80, -150 * 4]} rotation={[Math.PI / 2, 0, 0]} ref={group}>
      <primitive object={model} />
      <primitive object={lamberModel} />
    </group>
  );
}

useGLTF.preload("/casual.glb");
