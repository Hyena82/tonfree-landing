import React, { useEffect, useRef } from "react";
import { useGLTF, useAnimations } from "@react-three/drei";

export function ModelRobot(props: any) {
  const group = useRef();
  const { scene, animations } = useGLTF("/model/RobotFile.glb");
  const { actions } = useAnimations(animations, group);

  useEffect(() => {
    if (actions && Object.keys(actions).length > 0) {
      Object.values(actions).forEach((action) => action?.play());
    }
  }, [actions]);

  return <primitive object={scene} ref={group} {...props} />;
}

useGLTF.preload("/model/RobotFile.glb");
