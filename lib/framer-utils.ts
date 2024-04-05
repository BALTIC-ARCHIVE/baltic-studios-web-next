"use client";
import { useSpring, useTransform } from "framer-motion";

// Code from here: https://codesandbox.io/p/sandbox/react-framer-motion-parallax-on-hover-forked-99m77q?file=%2Fsrc%2FuseParallax.js%3A38%2C16
export const useParallax = (stiffness = 250, damping = 20, force = 95) => {
  const x = useSpring(0, { stiffness, damping });
  const y = useSpring(0, { stiffness, damping });

  const primaryX = useTransform(x, (event) => event / force);
  const primaryY = useTransform(y, (event) => event / force);
  const secondaryX = useTransform(x, (event) => event / -force);
  const secondaryY = useTransform(y, (event) => event / -force);

  const onMouseMoveHandler = (event: any) => {
    x.set(event.clientX);
    y.set(event.clientY);
  };

  const onMouseLeaveHandler = () => {
    x.set(100);
    y.set(100);
  };

  return {
    primaryX,
    primaryY,
    secondaryX,
    secondaryY,
    onMouseMoveHandler,
    onMouseLeaveHandler,
  };
};
