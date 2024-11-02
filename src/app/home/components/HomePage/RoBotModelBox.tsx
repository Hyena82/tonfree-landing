import { Box } from "@/components/Box";
import { ModelRobot } from "@/components/_3DRobot";
import { Environment, PerspectiveCamera } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import {
  useMotionValue,
  useScroll,
  useSpring,
  useTransform,
  motion,
} from "framer-motion";
import { motion as motion3D } from "framer-motion-3d";
import { useEffect, useRef, useState } from "react";
import styled from "styled-components";

const Wrapper = styled.div`
  position: absolute;
  top: 0;
  width: 100%;
  height: 100%;
  z-index: -1;
  /* visibility: hidden; */

  .box-view {
    position: absolute;
    bottom: 200px;
    width: 20px;
    height: 20px;
  }
`;

const ModelBox = styled.div`
  width: 100%;
  height: 100%;
  position: absolute;
  top: 0;
  left: 0;
`;

const RoBotModelBox = () => {
  const mesh = useRef(null);
  const mouse = {
    x: useSpring(useMotionValue(0)),
    y: useSpring(useMotionValue(0)),
  };

  const manageMouseMove = (e: any) => {
    const { innerWidth, innerHeight } = window;
    const { clientX, clientY } = e;

    const x = -0.5 + clientX / innerWidth;

    const y = -0.5 + clientY / innerHeight;

    mouse.x.set(x);

    mouse.y.set(y);
  };

  useEffect(() => {
    window.addEventListener("mousemove", manageMouseMove);

    return () => {
      window.removeEventListener("mousemove", manageMouseMove);
    };
  }, []);

  return (
    <ModelBox>
      <Canvas>
        <PerspectiveCamera fov={5} />
        <Environment preset="city" />
        <motion3D.mesh ref={mesh}>
          <meshBasicMaterial attach="material" transparent opacity={1} />
          <motion3D.mesh ref={mesh} rotation-y={mouse.x}>
            <ModelRobot
              position={[0, -4.3, 0]}
              scale={[3.3, 3.3, 3.3]}
              castShadow
              receiveShadow
            />
          </motion3D.mesh>
        </motion3D.mesh>
      </Canvas>
    </ModelBox>
  );
};

export default RoBotModelBox;
