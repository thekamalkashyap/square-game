import { useRef, useState } from "react";
import { useFrame } from "@react-three/fiber";
import { RigidBody } from "@react-three/rapier";

export default ({ position, geometry, stageColor }) => {
  const barrier = useRef();
  const [timeOffset] = useState(() => Math.random() * Math.PI * 2);
  useFrame((state) => {
    const time = state.clock.getElapsedTime();

    const y = Math.sin(time + timeOffset) + 1.15;
    barrier.current?.setNextKinematicTranslation({
      x: position[0],
      y: position[0] + y,
      z: position[2],
    });
  });

  return (
    <group position={position}>
      <RigidBody
        ref={barrier}
        type="kinematicPosition"
        position={[0, 0.3, 0]}
        restitution={0.2}
        friction={0}
      >
        <mesh position={[0, 0.2, 0]}>
          <boxGeometry args={[4.5, 0.4, 0.4]} />
          <meshBasicMaterial color={"#040D12"} />
        </mesh>
      </RigidBody>
      <mesh receiveShadow geometry={geometry} position={[0, 0, 0]}>
        <meshBasicMaterial color={stageColor} />
      </mesh>
    </group>
  );
};
