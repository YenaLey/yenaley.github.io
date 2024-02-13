import React, { useState, useEffect, memo } from 'react';
import { Canvas } from '@react-three/fiber';
import { Text, Plane } from '@react-three/drei'; 

const AmbientLight = () => <ambientLight intensity={0} />;
const CustomSpotLight = ({ color, position, angle, penumbra, intensity, shadowMapSize, shadowBias }) => (
  <spotLight
    color={color}
    position={position}
    angle={angle}
    penumbra={penumbra}
    intensity={intensity}
    shadow-mapSize-width={shadowMapSize.width}
    shadow-mapSize-height={shadowMapSize.height}
    shadow-bias={shadowBias}
    castShadow
  />
);
const CustomText = ({ color, fontSize, letterSpacing, textAlign, anchorX, anchorY, rotation, position, content }) => (
  <Text
    color={color}
    fontSize={fontSize}
    letterSpacing={letterSpacing}
    textAlign={textAlign}
    anchorX={anchorX}
    anchorY={anchorY}
    rotation={rotation}
    position={position}
    castShadow
  >
    {content}
  </Text>
);
const GroundPlane = () => (
  <Plane
    receiveShadow
    rotation={[0, 0, 0]}
    position={[0, -0.5, -1]}
    args={[7, 7]}
  >
    <meshStandardMaterial attach="material" color="white" />
  </Plane>
);

function R3Fmobile() {
  return (
    <Canvas shadows shadowMap
      camera={{ fov: 50, aspect: window.innerWidth / window.innerHeight, near: 0.1, far: 1000, position: [0, 0, 1.5] }}>
      <AmbientLight />
      <CustomSpotLight
        color="#ffc900"
        position={[0.1, 0, 0.5]}
        angle={0.5}
        penumbra={1}
        intensity={50}
        shadowMapSize={{ width: 2048, height: 2048 }}
        shadowBias={-0.0001}
      />
      <CustomSpotLight
        color="blue"
        position={[-0.1, -0.1, 0.5]}
        angle={0.5}
        penumbra={1}
        intensity={50}
        shadowMapSize={{ width: 2048, height: 2048 }}
        shadowBias={-0.0001}
      />
      <GroundPlane />
    </Canvas>
  );
}

export default memo(R3Fmobile);