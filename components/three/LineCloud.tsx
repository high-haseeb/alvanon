"use client";
import { OrbitControls } from "@react-three/drei";
import { Canvas, useFrame } from "@react-three/fiber";
import React from "react";
import * as THREE from "three";

const LineCloud = (props: any) => {
  return (
    <div className="absolute top-0 left-0 w-full h-full z-0" {...props}>
      <Canvas className="w-full h-full" >
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
    maxConnections: 20,
    particleCount: 50,
  };
  let group;
  const particlesData: any[] = [];
  let positions, colors;
  let particles;
  let pointCloud;
  let particlePositions;
  let linesMesh;

  const maxParticleCount = 200;
  let particleCount = 100;
  const r = 800;
  const rHalf = r / 2;

  group = new THREE.Group();

  // const helper = new THREE.BoxHelper(
  //   new THREE.Mesh(new THREE.BoxGeometry(r, r, r)),
  // );
  // helper.material.color.setHex(0x474747);
  // helper.material.blending = THREE.AdditiveBlending;
  // helper.material.transparent = true;
  // group.add(helper);

  const segments = maxParticleCount * maxParticleCount;

  positions = new Float32Array(segments * 3);
  colors = new Float32Array(segments * 3);

  const pMaterial = new THREE.PointsMaterial({
    color: '#EC7700',
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
      velocity: new THREE.Vector3(
        -1 + Math.random() * 2,
        -1 + Math.random() * 2,
        -1 + Math.random() * 2,
      ),
      numConnections: 0,
    });
  }

  particles.setDrawRange(0, particleCount);
  particles.setAttribute(
    "position",
    new THREE.BufferAttribute(particlePositions, 3).setUsage(
      THREE.DynamicDrawUsage,
    ),
  );

  // create the particle system
  pointCloud = new THREE.Points(particles, pMaterial);
  group.add(pointCloud);

  const geometry = new THREE.BufferGeometry();

  geometry.setAttribute(
    "position",
    new THREE.BufferAttribute(positions, 3).setUsage(THREE.DynamicDrawUsage),
  );
  geometry.setAttribute(
    "color",
    new THREE.BufferAttribute(colors, 3).setUsage(THREE.DynamicDrawUsage),
  );

  geometry.computeBoundingSphere();

  geometry.setDrawRange(0, 0);

  const material = new THREE.LineBasicMaterial({
    vertexColors: true,
    blending: THREE.AdditiveBlending,
    transparent: true,
    color: '#EC7700'
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

      if (
        particlePositions[i * 3 + 1] < -rHalf ||
        particlePositions[i * 3 + 1] > rHalf
      )
        particleData.velocity.y = -particleData.velocity.y;

      if (particlePositions[i * 3] < -rHalf || particlePositions[i * 3] > rHalf)
        particleData.velocity.x = -particleData.velocity.x;

      if (
        particlePositions[i * 3 + 2] < -rHalf ||
        particlePositions[i * 3 + 2] > rHalf
      )
        particleData.velocity.z = -particleData.velocity.z;

      if (
        effectController.limitConnections &&
        particleData.numConnections >= effectController.maxConnections
      )
        continue;

      // Check collision
      for (let j = i + 1; j < particleCount; j++) {
        const particleDataB = particlesData[j];
        if (
          effectController.limitConnections &&
          particleDataB.numConnections >= effectController.maxConnections
        )
          continue;

        const dx = particlePositions[i * 3] - particlePositions[j * 3];
        const dy = particlePositions[i * 3 + 1] - particlePositions[j * 3 + 1];
        const dz = particlePositions[i * 3 + 2] - particlePositions[j * 3 + 2];
        const dist = Math.sqrt(dx * dx + dy * dy + dz * dz);

        if (dist < effectController.minDistance) {
          particleData.numConnections++;
          particleDataB.numConnections++;

          const alpha=  0.3 ;//1.0 - dist / effectController.minDistance;

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
  });
  group.scale.set(0.01, 0.01, 0.01)

  //
  return <primitive object={group} />;
};

export default LineCloud;
