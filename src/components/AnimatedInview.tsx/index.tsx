"use client";

import { once } from "events";
import { useInView, motion } from "framer-motion";
import { ReactNode, useRef } from "react";
import styled from "styled-components";

const Wrapper = styled(motion.div)`
  will-change: opacity, transform;
`;

interface AnimatedInViewProps {
  children: ReactNode;
  duration?: number;
}

const AnimatedInview: React.FC<AnimatedInViewProps> = ({
  children,
  duration = 0.7,
}) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true }); // `once` makes sure animation triggers only once

  const variants = {
    hidden: { opacity: 0, y: 80 },
    visible: { opacity: 1, y: 0 },
  };

  const spring = {
    type: "spring",
    stiffness: 50,
    damping: 20,
    duration,
  };

  return (
    <Wrapper
      initial="hidden"
      animate={isInView ? "visible" : "hidden"}
      variants={variants}
      transition={spring}
      ref={ref}
    >
      {children}
    </Wrapper>
  );
};

export default AnimatedInview;
