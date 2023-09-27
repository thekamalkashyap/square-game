import { RigidBody, CuboidCollider } from "@react-three/rapier";

const Walls = ({ length, geometry }) => {
  return (
    <>
      <RigidBody type="fixed" restitution={0.2} friction={0}>
        <mesh
          receiveShadow
          position={[-2.6, 1.35, ((length + 1) * 5) / 2]}
          geometry={geometry}
        >
          <meshBasicMaterial color={"#183D3D"} />
        </mesh>
        <mesh
          receiveShadow
          position={[2.6, 1.35, ((length + 1) * 5) / 2]}
          geometry={geometry}
        >
          <meshBasicMaterial color={"#183D3D"} />
        </mesh>
        <mesh receiveShadow position={[0, 1.4, (length + 1) * 5 + 2.7]}>
          <boxGeometry args={[5, 3, 0.4]} />
          <meshBasicMaterial color={"#183D3D"} />
        </mesh>
        <CuboidCollider
          type="fixed"
          args={[2.5, 0.1, 2.5 * (length + 2)]}
          position={[0, 0, (length + 1) * 2.5]}
          restitution={0.2}
          friction={1}
        />
      </RigidBody>
    </>
  );
};

export default Walls;
