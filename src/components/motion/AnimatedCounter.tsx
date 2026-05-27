import {
  animate,
  useInView,
  useMotionValue,
  useReducedMotion,
  useTransform,
} from "framer-motion";
import { useEffect, useRef } from "react";

interface AnimatedCounterProps {
  to: number;
  duration?: number;
  format?: (n: number) => string;
  className?: string;
  delay?: number;
}

const AnimatedCounter = ({
  to,
  duration = 1.8,
  format = (n) => Math.round(n).toString(),
  className,
  delay = 0,
}: AnimatedCounterProps) => {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true, margin: "-40px" });
  const value = useMotionValue(0);
  const rounded = useTransform(value, format);
  const reduce = useReducedMotion();

  useEffect(() => {
    if (!inView) return;
    if (reduce) {
      value.set(to);
      return;
    }
    const controls = animate(value, to, {
      duration,
      delay,
      ease: [0.22, 1, 0.36, 1],
    });
    return controls.stop;
  }, [inView, to, duration, delay, value, reduce]);

  useEffect(() => {
    return rounded.on("change", (latest) => {
      if (ref.current) ref.current.textContent = latest;
    });
  }, [rounded]);

  return <span ref={ref} className={className}>{format(0)}</span>;
};

export default AnimatedCounter;
