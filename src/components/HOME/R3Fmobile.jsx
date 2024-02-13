import React, { useState, useEffect } from 'react';
import { Canvas } from '@react-three/fiber';
import { Text, Plane } from '@react-three/drei'; 

function R3Fmobile() {
  const [dynamicText, setDynamicText] = useState("");
  const phrases = ["Front-End", "Devoloper", "Hard Coder"];
  const [phraseIndex, setPhraseIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const currentPhrase = phrases[phraseIndex];
    const updateText = () => {
      if (!isDeleting) {
        setDynamicText(currentPhrase.substring(0, dynamicText.length + 1));
      } else {
        setDynamicText(currentPhrase.substring(0, dynamicText.length - 1));
      }
    };

    let timeoutId;
    if (!isDeleting && dynamicText === currentPhrase) {
      timeoutId = setTimeout(() => {
        setIsDeleting(true);
      }, 1000);
    } else if (isDeleting && dynamicText === '') {
      setIsDeleting(false);
      setPhraseIndex((phraseIndex + 1) % phrases.length);
    } else {
      timeoutId = setTimeout(updateText, isDeleting ? 100 : 100);
    }

    return () => clearTimeout(timeoutId);
  }, [dynamicText, isDeleting, phraseIndex]);

  return (
    <Canvas shadows shadowMap
      camera={{ fov: 50, aspect: window.innerWidth / window.innerHeight, near: 0.1, far: 1000, position: [0, 1.5, 2] }}>
      <ambientLight intensity={0.3} />
      <spotLight
        position={[0.5, 1, 1]}
        angle={0.5}
        penumbra={1}
        intensity={400}
        castShadow
        shadow-mapSize-width={2048}
        shadow-mapSize-height={2048}
        shadow-bias={-0.0001}
      />
      <Text
        color="black"
        fontSize={0.6}
        maxWidth={200}
        lineHeight={1}
        letterSpacing={0.02}
        textAlign={'center'}
        anchorX="center"
        anchorY="middle"
        rotation={[-Math.PI / 6, 0, 0]}
        position={[0, -0.3, -3.5]}
        castShadow
      >
        Hi, there!
      </Text>
      <Text
        color="black"
        fontSize={0.6}
        maxWidth={200}
        lineHeight={1}
        letterSpacing={0.02}
        textAlign={'center'}
        anchorX="center"
        anchorY="middle"
        rotation={[-Math.PI / 6, 0, 0]}
        position={[0, -0.3, -1.9]}
        castShadow
      >
        I'm
      </Text>
      <Text
        color="#E63946"
        fontSize={0.6}
        maxWidth={200}
        lineHeight={1}
        letterSpacing={0.02}
        textAlign={'center'}
        anchorX="center"
        anchorY="middle"
        rotation={[-Math.PI / 6, 0, 0]}
        position={[0, -0.2, -0.5]}
        castShadow
      >
        YENA
      </Text>
      <Text
        color="black"
        fontSize={0.3}
        maxWidth={200}
        lineHeight={1}
        letterSpacing={0.02}
        textAlign={'center'}
        anchorX="center"
        anchorY="middle"
        rotation={[-Math.PI / 2, 0, -Math.PI / 6]}
        position={[-0.1, -0.3, 0.4]}
        castShadow
      >
        {dynamicText}
      </Text>
      <Plane
        receiveShadow
        rotation={[-Math.PI / 2, 0, 0]}
        position={[0, -0.5, -1]}
        args={[100, 100]}
      >
        <meshStandardMaterial attach="material" color="white" />
      </Plane>
    </Canvas>
  );
}

export default R3Fmobile;
