"use client";

import {
  motion,
  useInView,
  type HTMLMotionProps,
  type Variants,
} from "framer-motion";
import { useRef, type ReactNode } from "react";

const easeOutExpo: [number, number, number, number] = [0.22, 1, 0.36, 1];

type BaseMotionProps = Omit<
  HTMLMotionProps<"div">,
  "initial" | "animate" | "transition" | "variants" | "ref"
>;

interface RevealProps extends BaseMotionProps {
  children: ReactNode;
  delay?: number;
  y?: number;
  x?: number;
  scale?: number;
  duration?: number;
  once?: boolean;
  amount?: number | "some" | "all";
}

export default function Reveal({
  children,
  delay = 0,
  y = 80,
  x = 0,
  scale = 0.96,
  duration = 1.1,
  once = false,
  amount = 0.2,
  ...rest
}: RevealProps) {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once, amount });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y, x, scale }}
      animate={
        inView
          ? { opacity: 1, y: 0, x: 0, scale: 1 }
          : { opacity: 0, y, x, scale }
      }
      transition={{ duration, ease: easeOutExpo, delay }}
      {...rest}
    >
      {children}
    </motion.div>
  );
}

interface RevealGroupProps extends BaseMotionProps {
  children: ReactNode;
  stagger?: number;
  delay?: number;
  once?: boolean;
  amount?: number | "some" | "all";
}

const groupVariants = (stagger: number, delay: number): Variants => ({
  hidden: {},
  visible: {
    transition: { staggerChildren: stagger, delayChildren: delay },
  },
});

export function RevealGroup({
  children,
  stagger = 0.18,
  delay = 0,
  once = false,
  amount = 0.2,
  ...rest
}: RevealGroupProps) {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once, amount });

  return (
    <motion.div
      ref={ref}
      initial="hidden"
      animate={inView ? "visible" : "hidden"}
      variants={groupVariants(stagger, delay)}
      {...rest}
    >
      {children}
    </motion.div>
  );
}

interface RevealItemProps extends BaseMotionProps {
  children: ReactNode;
  y?: number;
  scale?: number;
  duration?: number;
}

const itemVariants = (
  y: number,
  scale: number,
  duration: number,
): Variants => ({
  hidden: {
    opacity: 0,
    y,
    scale,
    transition: { duration: duration * 0.55, ease: easeOutExpo },
  },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { duration, ease: easeOutExpo },
  },
});

export function RevealItem({
  children,
  y = 60,
  scale = 0.96,
  duration = 1,
  ...rest
}: RevealItemProps) {
  return (
    <motion.div variants={itemVariants(y, scale, duration)} {...rest}>
      {children}
    </motion.div>
  );
}
