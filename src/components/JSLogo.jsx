import React, { useRef } from "react";
import { useFrame } from "@react-three/fiber";
import { useGLTF } from "@react-three/drei";

const JavaScriptLogo = ({
  finalPos = [-10, -1, 3], // Target position where logo settles
  position = [-15, 12, 3], // Initial position from which logo animates
}) => {
  const jsRef = useRef();
  const { scene } = useGLTF("/models/javascript.glb");

  useFrame((state) => {
    const t = state.clock.getElapsedTime();
    if (!jsRef.current) return;

    const speed = 0.04;

    // Smooth transition toward final position
    jsRef.current.position.x +=
      (finalPos[0] - jsRef.current.position.x) * speed;
    jsRef.current.position.y +=
      (finalPos[1] - jsRef.current.position.y) * speed;
    jsRef.current.position.z +=
      (finalPos[2] - jsRef.current.position.z) * speed;

    // Floating effect
    jsRef.current.position.y += Math.sin(t * 2) * 0.02;

    // Correct vertical rotation to face front
    jsRef.current.rotation.set(-240 / 2, 180, 0); // 90° X-axis
  });

  return (
    <group ref={jsRef} position={position} scale={[2.0, 2.0, 2.0]}>
      <primitive
        object={scene}
        onUpdate={(self) => {
          self.traverse((child) => {
            if (child.isMesh) {
              child.material.color.set("#F7DF1E"); // JS yellow
              child.material.emissive.set("#F7DF1E");
              child.material.emissiveIntensity = 0.35;
              child.material.roughness = 0.4;
              child.material.metalness = 0.1;
            }
          });
        }}
      />
    </group>
  );
};

export default JavaScriptLogo;
