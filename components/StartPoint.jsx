const StartPoint = ({ position, geometry }) => {
  return (
    <group position={position}>
      <mesh receiveShadow geometry={geometry}>
        <meshBasicMaterial color={"#5C8374"} />
      </mesh>
    </group>
  );
};
export default StartPoint;