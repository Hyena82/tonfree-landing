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

  /* position: fixed;
  z-index: 1000;
  bottom: 0;
  left: 50%;
  transform: translateX(-50%);
  width: 40vw;

  @media (max-width: 768px) {
    width: 80vw;
    bottom: 10%;
    pointer-events: none;
  }

  height: 750px;
  display: block; */
`;

const RoBotModelBox = () => {
  const mesh = useRef(null);
  const isMobile = false;
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

  const container = useRef(null);

  const { scrollYProgress } = useScroll({
    target: container,

    offset: ["start start", "end end"],
  });

  const [scaleSize, setScale] = useState(0.8);

  useEffect(() => {
    const updateScale = () => {
      let screenWidth = window.innerWidth;
      if (screenWidth < 1700) {
        screenWidth -= 200;
      } else {
        screenWidth += 300;
      }
      // const scaleFactor = 0.5 + (screenWidth / 10000) * 2;
      // setScale(scaleFactor);
    };

    updateScale();
    window.addEventListener("resize", updateScale);

    return () => {
      window.removeEventListener("resize", updateScale);
    };
  }, []);

  const progress = useTransform(
    scrollYProgress,
    [0, 0.45],
    [isMobile ? 0 : -0.6, isMobile ? 0 : -0.3]
  );

  // const scale = useTransform(
  //   scrollYProgress,
  //   [0, 0.45],
  //   [scaleSize, scaleSize + 0.15]
  // );

  // const hiddenY = useTransform(
  //   scrollYProgress,
  //   [0, 0.7, 0.85, 1],
  //   [0, 0, -2, -4]
  // );
  useEffect(() => {
    window.addEventListener("mousemove", manageMouseMove);

    return () => {
      window.removeEventListener("mousemove", manageMouseMove);
    };
  }, []);

  return (
    <ModelBox>
      <Canvas>
        <PerspectiveCamera fov={105} />
        <Environment preset="city" />
        {/* <OrbitControls /> */}
        <motion3D.mesh ref={mesh} rotation-y={progress}>
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
