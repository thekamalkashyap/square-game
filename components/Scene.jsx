import { Physics, Debug } from "@react-three/rapier";
const Scene = () => {
  return (
    <>
      <Physics>
        <ambientLight intensity={5} />
        <directionalLight intensity={10} position={[0, 10, 4]} />
        <Walls />
        <Center position={[0, 0.4, 0]}>
          <Car scale={0.12} rotation={[0, Math.PI / 2, 0]} />
        </Center>
        <StartPoint position={[0, 0, 0]} geometry={boxGeometry} />
        {blocks.map((Block, index) => (
          <Block
            geometry={boxGeometry}
            stageColor={"green"}
            position={[0, 0, (index + 1) * 5]}
            key={index}
          />
        ))}
        <FinishPoint
          position={[0, 0.1, (count + 1) * 5]}
          geometry={boxGeometry}
        />
      </Physics>
    </>
  );
};

export default Scene;
