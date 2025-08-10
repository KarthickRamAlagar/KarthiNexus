import gsap from "gsap";
import { useRef, useState, useEffect } from "react";
import { Float, useGLTF, useTexture } from "@react-three/drei";

// ✅ Preload GLTF model
useGLTF.preload("models/cube.glb");

const Cube = ({ ...props }) => {
  const { nodes } = useGLTF("models/cube.glb");

  // ✅ Load texture safely
  const rawTexture = useTexture("textures/cube.png");
  const [texture, setTexture] = useState(null);

  useEffect(() => {
    if (rawTexture) {
      setTexture(rawTexture);
    }
  }, [rawTexture]);

  const cubeRef = useRef();
  const [hovered, setHovered] = useState(false);

  useEffect(() => {
    if (!cubeRef.current || !texture) return;

    const tl = gsap.timeline({ repeat: -1, repeatDelay: 0.5 });
    tl.to(cubeRef.current.rotation, {
      y: hovered ? "+=2" : `+=${Math.PI * 2}`,
      x: hovered ? "+=2" : `-=${Math.PI * 2}`,
      duration: 2.5,
      stagger: { each: 0.15 },
    });

    return () => tl.kill();
  }, [hovered, texture]);

  return (
    <Float floatIntensity={2}>
      <group
        position={[21, -4, 0]}
        rotation={[2.6, 0.8, -1.8]}
        scale={0.74}
        dispose={null}
        {...props}
      >
        <mesh
          ref={cubeRef}
          castShadow
          receiveShadow
          geometry={nodes.Cube.geometry}
          material={nodes.Cube.material}
          onPointerEnter={() => setHovered(true)}
          onPointerLeave={() => setHovered(false)}
        >
          {texture && (
            <meshMatcapMaterial matcap={texture} toneMapped={false} />
          )}
        </mesh>
      </group>
    </Float>
  );
};

export default Cube;
