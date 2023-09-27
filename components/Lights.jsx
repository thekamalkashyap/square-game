import { useRef } from "react";
import { useFrame } from "@react-three/fiber";

const Lights = () => {
  const light = useRef();

  useFrame((state) => {
    light.current.position.z = state.camera.position.z + 1 - 4;
    light.current.target.position.z = state.camera.position.z - 4;
    light.current.target.updateMatrixWorld();
  });

  return (
    <>
      <ambientLight intensity={1} />
      <directionalLight
        ref={light}
        castShadow
        position={[4, 4, 1]}
        intensity={1.5}
      />
    </>
  );
};

export default Lights;
