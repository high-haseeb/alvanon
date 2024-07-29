"use client";
import { Canvas, useFrame } from "@react-three/fiber";
import React, { useRef, useState } from "react";
import * as THREE from "three";
import { BBAnchor, Box, Html, OrbitControls, Text } from "@react-three/drei";

const LineCloud = (props: any) => {
  return (
    <div className="absolute top-0 left-0 w-full h-full z-0 bg-black" {...props}>
      <Canvas className="w-full h-full">
        <OrbitControls enableZoom={false}/>
        <Points />
      </Canvas>
    </div>
  );
};

export const Points = (props: any) => {
  const effectController = {
    showDots: true,
    showLines: true,
    minDistance: 150,
    limitConnections: true,
    maxConnections: 10,
    particleCount: 30,
  };
  let group;
  const particlesData: any[] = [];
  let positions, colors;
  let particles;
  let pointCloud;
  let particlePositions;
  let linesMesh;

  const maxParticleCount = 500;
  let particleCount = 300;
  const r = 800;
  const rHalf = r / 2;

  group = new THREE.Group();

  const segments = maxParticleCount * maxParticleCount;

  positions = new Float32Array(segments * 3);
  colors = new Float32Array(segments * 3);

  const pMaterial = new THREE.PointsMaterial({
    color: "#EC7700",
    size: 3,
    blending: THREE.AdditiveBlending,
    transparent: true,
    sizeAttenuation: false,
  });

  particles = new THREE.BufferGeometry();
  particlePositions = new Float32Array(maxParticleCount * 3);

  for (let i = 0; i < maxParticleCount; i++) {
    const x = Math.random() * r - r / 2;
    const y = Math.random() * r - r / 2;
    const z = Math.random() * r - r / 2;

    particlePositions[i * 3] = x;
    particlePositions[i * 3 + 1] = y;
    particlePositions[i * 3 + 2] = z;

    // add it to the geometry
    particlesData.push({
      velocity: new THREE.Vector3(-1 + Math.random() * 2, -1 + Math.random() * 2, -1 + Math.random() * 2),
      numConnections: 0,
    });
  }

  particles.setDrawRange(0, particleCount);
  particles.setAttribute("position", new THREE.BufferAttribute(particlePositions, 3).setUsage(THREE.DynamicDrawUsage));

  // create the particle system
  pointCloud = new THREE.Points(particles, pMaterial);
  group.add(pointCloud);

  const geometry = new THREE.BufferGeometry();

  geometry.setAttribute("position", new THREE.BufferAttribute(positions, 3).setUsage(THREE.DynamicDrawUsage));
  geometry.setAttribute("color", new THREE.BufferAttribute(colors, 3).setUsage(THREE.DynamicDrawUsage));

  geometry.computeBoundingSphere();

  geometry.setDrawRange(0, 0);

  const material = new THREE.LineBasicMaterial({
    vertexColors: true,
    blending: THREE.AdditiveBlending,
    transparent: true,
    color: "#EC7700",
  });

  linesMesh = new THREE.LineSegments(geometry, material);
  group.add(linesMesh);

  //
  useFrame(() => {
    let vertexpos = 0;
    let colorpos = 0;
    let numConnected = 0;

    for (let i = 0; i < particleCount; i++) particlesData[i].numConnections = 0;

    for (let i = 0; i < particleCount; i++) {
      // get the particle
      const particleData = particlesData[i];

      particlePositions[i * 3] += particleData.velocity.x;
      particlePositions[i * 3 + 1] += particleData.velocity.y;
      particlePositions[i * 3 + 2] += particleData.velocity.z;

      if (particlePositions[i * 3 + 1] < -rHalf || particlePositions[i * 3 + 1] > rHalf) particleData.velocity.y = -particleData.velocity.y;

      if (particlePositions[i * 3] < -rHalf || particlePositions[i * 3] > rHalf) particleData.velocity.x = -particleData.velocity.x;

      if (particlePositions[i * 3 + 2] < -rHalf || particlePositions[i * 3 + 2] > rHalf) particleData.velocity.z = -particleData.velocity.z;

      if (effectController.limitConnections && particleData.numConnections >= effectController.maxConnections) continue;

      // Check collision
      for (let j = i + 1; j < particleCount; j++) {
        const particleDataB = particlesData[j];
        if (effectController.limitConnections && particleDataB.numConnections >= effectController.maxConnections) continue;

        const dx = particlePositions[i * 3] - particlePositions[j * 3];
        const dy = particlePositions[i * 3 + 1] - particlePositions[j * 3 + 1];
        const dz = particlePositions[i * 3 + 2] - particlePositions[j * 3 + 2];
        const dist = Math.sqrt(dx * dx + dy * dy + dz * dz);

        if (dist < effectController.minDistance) {
          particleData.numConnections++;
          particleDataB.numConnections++;

          const alpha = 1.0 - dist / effectController.minDistance;

          positions[vertexpos++] = particlePositions[i * 3];
          positions[vertexpos++] = particlePositions[i * 3 + 1];
          positions[vertexpos++] = particlePositions[i * 3 + 2];

          positions[vertexpos++] = particlePositions[j * 3];
          positions[vertexpos++] = particlePositions[j * 3 + 1];
          positions[vertexpos++] = particlePositions[j * 3 + 2];

          colors[colorpos++] = alpha;
          colors[colorpos++] = alpha;
          colors[colorpos++] = alpha;

          colors[colorpos++] = alpha;
          colors[colorpos++] = alpha;
          colors[colorpos++] = alpha;

          numConnected++;
        }
      }
    }

    linesMesh.geometry.setDrawRange(0, numConnected * 2);
    linesMesh.geometry.attributes.position.needsUpdate = true;
    linesMesh.geometry.attributes.color.needsUpdate = true;

    pointCloud.geometry.attributes.position.needsUpdate = true;
    group.rotation.y += 0.001;
    texta.current.position.set(particlePositions[0] / 100, particlePositions[1]/ 100, particlePositions[2]/ 100); 
    textb.current.position.set(particlePositions[30] / 100, particlePositions[31]/ 100, particlePositions[32]/ 100);
    textc.current.position.set(particlePositions[600] / 100, particlePositions[601]/ 100, particlePositions[602]/100);
    textd.current.position.set(particlePositions[60] / 100, particlePositions[61]/ 100, particlePositions[62] /100);
    // box.current = [particlePositions[0] / 100, particlePositions[1] / 100, 0];
    // console.log(box.current)
    // console.log(box.current.position)
    // console.log(particlePositions[0], particlePositions[1], particlePositions[2])
  });

  // Add floating text to a couple of points
  const textPositions = [
    new THREE.Vector3(particlePositions[0], particlePositions[1], particlePositions[2]),
    new THREE.Vector3(particlePositions[3], particlePositions[4], particlePositions[5]),
  ];


  group.scale.set(0.01, 0.01, 0.01);
  const texta = useRef<any>([0, 0, 0]);
  const textb = useRef<any>([0, 0, 0]);
  const textc = useRef<any>([0, 0, 0]);
  const textd = useRef<any>([0, 0, 0]);
  //
  return (
    <>
      <primitive object={group} />
      <mesh ref={texta}>
        <BBAnchor anchor={[0, 0, 0]}>
          <Html center>
            <div className="border-brOrange border text-white px-4 font-bold w-max text-xs lg:text-md opacity-45 lg:opacity-100 backdrop-blur">Customer 6969</div>
            <div className="rounded-full bg-brOrange w-2 h-2 -translate-x-1/2 -translate-y-1/2"></div>
          </Html>
        </BBAnchor>
      </mesh>

      <mesh ref={textb}>
        <BBAnchor anchor={[0, 0, 0]}>
          <Html center>
            <div className="border-brOrange border text-white px-4 font-bold w-max text-xs lg:text-md opacity-45 lg:opacity-100 backdrop-blur">Customer 4939</div>
            <div className="rounded-full bg-brOrange w-2 h-2 -translate-x-1/2 -translate-y-1/2"></div>
          </Html>
        </BBAnchor>
      </mesh>

      <mesh ref={textc}>
        <BBAnchor anchor={[0, 0, 0]}>
          <Html center>
            <div className="border-brOrange border text-white px-4 font-bold w-max text-xs lg:text-md opacity-45 lg:opacity-100 backdrop-blur">Customer 3094</div>
            <div className="rounded-full bg-brOrange w-2 h-2 -translate-x-1/2 -translate-y-1/2"></div>
          </Html>
        </BBAnchor>
      </mesh>

      <mesh ref={textd}>
        <BBAnchor anchor={[0, 0, 0]}>
          <Html center>
            <div className="border-brOrange border text-white px-4 font-bold w-max text-xs lg:text-md opacity-45 lg:opacity-100 backdrop-blur">Customer 4202</div>
            <div className="rounded-full bg-brOrange w-2 h-2 -translate-x-1/2 -translate-y-1/2"></div>
          </Html>
        </BBAnchor>
      </mesh>
    </>
  );
};

export default LineCloud;
