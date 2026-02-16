import React, { useRef } from "react";
import { useGLTF } from "@react-three/drei";

export function Spaceman(props: any) {
  const { nodes, materials } = useGLTF("/models/spaceman.glb") as any;
  return (
    <group {...props} dispose={null}>
      <group scale={0.01}>
        <group
          position={[30.299, 350.856, 1204.626]}
          rotation={[-Math.PI, -0.972, -Math.PI]}
          scale={2.098}
        >
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Cylinder003_Material_0.geometry}
            material={materials.Material}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Cylinder003_Material001_0.geometry}
            material={materials["Material.001"]}
          />
        </group>
        <group
          position={[30.299, 350.856, 1204.626]}
          rotation={[-Math.PI, -0.972, -Math.PI]}
          scale={2.098}
        >
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Cylinder005_Material_0.geometry}
            material={materials.Material}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Cylinder005_Material001_0.geometry}
            material={materials["Material.001"]}
          />
        </group>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cube011_Material001_0.geometry}
          material={materials["Material.001"]}
          position={[-40.503, 352.039, 1145.164]}
          rotation={[-Math.PI, -0.972, -Math.PI]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cube012_Material002_0.geometry}
          material={materials["Material.002"]}
          position={[-42.822, 352.039, 1148.565]}
          rotation={[-Math.PI, -0.972, -Math.PI]}
          scale={[1.238, 1.085, 1.244]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Torus001_Material_0.geometry}
          material={materials.Material}
          position={[-45.711, 266.753, 1152.802]}
          rotation={[-Math.PI, -0.972, -Math.PI]}
          scale={[0.642, 0.717, 0.609]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cube013_Material001_0.geometry}
          material={materials["Material.001"]}
          position={[-45.711, 172.118, 1152.802]}
          rotation={[-Math.PI, -0.972, -Math.PI]}
          scale={[1.023, 0.929, 1.023]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cube014_Material001_0.geometry}
          material={materials["Material.001"]}
          position={[-5.051, 65.946, 1180.525]}
          rotation={[-Math.PI, -0.972, -Math.PI]}
          scale={[0.232, 0.65, 0.229]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cube015_Material_0.geometry}
          material={materials.Material}
          position={[-5.064, 53.129, 1180.544]}
          rotation={[-Math.PI, -0.972, -Math.PI]}
          scale={[1.154, 1.916, 1.154]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cube016_Material_0.geometry}
          material={materials.Material}
          position={[-48.947, 172.118, 1157.549]}
          rotation={[-Math.PI, -0.972, -Math.PI]}
          scale={[1.023, 1.142, 1.023]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cube017_Material_0.geometry}
          material={materials.Material}
          position={[-45.711, 172.118, 1152.802]}
          rotation={[-Math.PI, -0.972, -Math.PI]}
          scale={[1.065, 0.967, 1.065]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cube018_Material001_0.geometry}
          material={materials["Material.001"]}
          position={[43.592, 193.026, 1213.69]}
          rotation={[2.305, -0.777, 2.481]}
          scale={[0.302, 0.751, 0.283]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cube019_Material_0.geometry}
          material={materials.Material}
          position={[37.292, 206.066, 1209.394]}
          rotation={[2.305, -0.777, 2.481]}
          scale={[0.38, 0.963, 0.332]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cube020_Material005_0.geometry}
          material={materials["Material.005"]}
          position={[23.831, 208.749, 1050.806]}
          rotation={[-Math.PI, -0.972, -Math.PI]}
          scale={[0.422, 0.813, 0.932]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cylinder002_Material003_0.geometry}
          material={materials["Material.003"]}
          position={[62.691, 298.839, 1077.301]}
          rotation={[-Math.PI, -0.972, -Math.PI]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cube021_Material003_0.geometry}
          material={materials["Material.003"]}
          position={[63.563, 338.089, 1077.653]}
          rotation={[-Math.PI, -0.972, -Math.PI]}
          scale={0.111}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cube022_Material001_0.geometry}
          material={materials["Material.001"]}
          position={[-40.503, 352.039, 1145.164]}
          rotation={[-Math.PI, -0.972, -Math.PI]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cube023_Material002_0.geometry}
          material={materials["Material.002"]}
          position={[-42.822, 352.039, 1148.565]}
          rotation={[-Math.PI, -0.972, -Math.PI]}
          scale={[1.238, 1.085, 1.244]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Torus002_Material_0.geometry}
          material={materials.Material}
          position={[-45.711, 266.753, 1152.802]}
          rotation={[-Math.PI, -0.972, -Math.PI]}
          scale={[0.642, 0.717, 0.609]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cube024_Material001_0.geometry}
          material={materials["Material.001"]}
          position={[-45.711, 172.118, 1152.802]}
          rotation={[-Math.PI, -0.972, -Math.PI]}
          scale={[1.023, 0.929, 1.023]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cube025_Material001_0.geometry}
          material={materials["Material.001"]}
          position={[-5.051, 65.946, 1180.525]}
          rotation={[-Math.PI, -0.972, -Math.PI]}
          scale={[0.232, 0.65, 0.229]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cube026_Material_0.geometry}
          material={materials.Material}
          position={[-5.064, 53.129, 1180.544]}
          rotation={[-Math.PI, -0.972, -Math.PI]}
          scale={[1.154, 1.916, 1.154]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cube027_Material_0.geometry}
          material={materials.Material}
          position={[-48.947, 172.118, 1157.549]}
          rotation={[-Math.PI, -0.972, -Math.PI]}
          scale={[1.023, 1.142, 1.023]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cube028_Material_0.geometry}
          material={materials.Material}
          position={[-45.711, 172.118, 1152.802]}
          rotation={[-Math.PI, -0.972, -Math.PI]}
          scale={[1.065, 0.967, 1.065]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cube029_Material001_0.geometry}
          material={materials["Material.001"]}
          position={[43.592, 193.026, 1213.69]}
          rotation={[2.305, -0.777, 2.481]}
          scale={[0.302, 0.751, 0.283]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cube030_Material_0.geometry}
          material={materials.Material}
          position={[37.292, 206.066, 1209.394]}
          rotation={[2.305, -0.777, 2.481]}
          scale={[0.38, 0.963, 0.332]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cube031_Material005_0.geometry}
          material={materials["Material.005"]}
          position={[23.831, 208.749, 1050.806]}
          rotation={[-Math.PI, -0.972, -Math.PI]}
          scale={[0.422, 0.813, 0.932]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cylinder004_Material003_0.geometry}
          material={materials["Material.003"]}
          position={[62.691, 298.839, 1077.301]}
          rotation={[-Math.PI, -0.972, -Math.PI]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cube032_Material003_0.geometry}
          material={materials["Material.003"]}
          position={[63.563, 338.089, 1077.653]}
          rotation={[-Math.PI, -0.972, -Math.PI]}
          scale={0.111}
        />
      </group>
    </group>
  );
}

useGLTF.preload("/models/spaceman.glb");
