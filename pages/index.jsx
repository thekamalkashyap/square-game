import { Canvas } from "@react-three/fiber";
import {
  OrbitControls,
  Center,
  KeyboardControls,
  Float,
} from "@react-three/drei";
import { Physics, RigidBody, CuboidCollider } from "@react-three/rapier";
import { Perf } from "r3f-perf";
import * as THREE from "three";
import Car from "../components/Car";
import StartPoint from "@/components/StartPoint";
import FinishPoint from "@/components/FinishPoint";
import JumpBlock from "@/components/JumpBlock";
import RotateBlock from "@/components/RotateBlock";
import AxeBlock from "@/components/AxeBlock";
import { Lights, Walls } from "@/components";
import { useMemo } from "react";

const count = 5;
const blockTypes = [JumpBlock, RotateBlock, AxeBlock];
THREE.ColorManagement.enabled = false;
const boxGeometry = new THREE.BoxGeometry(5, 0.2, 5);
const wallGeometry = new THREE.BoxGeometry(0.2, 3, (count + 2) * 5);

export default function Home() {
  const blocks = useMemo(() => {
    const blocks = [];
    for (let i = 0; i < count; i++) {
      const blockType =
        blockTypes[Math.floor(Math.random() * blockTypes.length)];
      blocks.push(blockType);
    }
    return blocks;
  }, [blockTypes, count]);

  return (
    <KeyboardControls
      map={[
        { name: "forward", keys: ["ArrowUp", "KeyW"] },
        { name: "backward", keys: ["ArrowDown", "KeyS"] },
        { name: "leftward", keys: ["ArrowLeft", "KeyA"] },
        { name: "rightward", keys: ["ArrowRight", "KeyD"] },
      ]}
    >
      <main className="h-screen w-screen bg-[#93B1A6]">
        <Canvas
          shadows
          camera={{
            fov: 45,
            near: 0.1,
            far: 200,
            position: [2.5, 4, 6],
          }}
        >
          <OrbitControls makeDefault />
          <Perf position="top-left" />
          <Physics>
            <Lights />
            <Walls length={count} geometry={wallGeometry} />
            <Car scale={0.12} />
            <StartPoint position={[0, 0, 0]} geometry={boxGeometry} />
            {blocks.map((Block, index) => (
              <Block
                geometry={boxGeometry}
                stageColor={"#5C8374"}
                position={[0, 0, (index + 1) * 5]}
                key={index}
              />
            ))}
            <FinishPoint
              position={[0, 0.1, (count + 1) * 5]}
              geometry={boxGeometry}
            />
          </Physics>
        </Canvas>
      </main>
    </KeyboardControls>
  );
}
