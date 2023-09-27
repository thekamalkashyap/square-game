import { useRef, useState } from "react";
import { useFrame } from "@react-three/fiber";
import { RigidBody } from "@react-three/rapier";

const AxeBlock = ({ position, geometry, stageColor }) => {
  const barrier = useRef();
  const [timeOffset] = useState(() => Math.random() * Math.PI * 2.5);

  useFrame((state) => {
    const time = state.clock.getElapsedTime();

    const x = Math.sin(time + timeOffset);
    barrier.current?.setNextKinematicTranslation({
      x: position[0] + x,
      y: position[0] + 0.5,
      z: position[2],
    });
  });

  return (
    <group position={position}>
      <RigidBody
        ref={barrier}
        type="kinematicPosition"
        position={[0, 0, 0]}
        restitution={0.2}
        friction={0}
      >
        <mesh position={[0, 0, 0]}>
          <boxGeometry args={[1, 1, 0.4]} />
          <meshBasicMaterial color={"#040D12"} />
        </mesh>
      </RigidBody>
      <mesh geometry={geometry} position={[0, 0, 0]}>
        <meshBasicMaterial color={stageColor} />
      </mesh>
    </group>
  );
};

export default AxeBlock;
