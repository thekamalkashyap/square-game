import { useRef,useState } from "react";
import { useFrame } from "@react-three/fiber";
import { RigidBody } from "@react-three/rapier";
import * as THREE from "three"

const RotateBlock =  ({ position, geometry, stageColor }) => {
  const barrier = useRef();
  const [speed] = useState(
    () => (Math.random() + 0.2) * (Math.random() < 0.5 ? -1 : 1)
  );

  useFrame((state) => {
    const time = state.clock.getElapsedTime();

    const rotation = new THREE.Quaternion();
    rotation.setFromEuler(new THREE.Euler(0, time * speed, 0));
    barrier.current?.setNextKinematicRotation(rotation);
  });

  return (
    <group position={position}>
      <RigidBody
        type="kinematicPosition"
        position={[0, 0.3, 0]}
        restitution={0.2}
        friction={0}
        ref={barrier}
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
export default RotateBlock;