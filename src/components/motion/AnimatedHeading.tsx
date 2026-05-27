import { motion, useReducedMotion, type Variants } from "framer-motion";
import { Children, isValidElement, type ReactNode } from "react";

interface AnimatedHeadingProps {
  children: ReactNode;
  className?: string;
  as?: "h1" | "h2" | "h3";
  delay?: number;
  stagger?: number;
}

const wordVariants: Variants = {
  hidden: { y: "100%", opacity: 0, filter: "blur(6px)" },
  show: {
    y: 0,
    opacity: 1,
    filter: "blur(0px)",
    transition: { duration: 0.9, ease: [0.22, 1, 0.36, 1] },
  },
};

const splitText = (node: ReactNode): { text: string; wrapper?: (s: ReactNode) => ReactNode }[] => {
  const out: { text: string; wrapper?: (s: ReactNode) => ReactNode }[] = [];
  Children.forEach(node, (child) => {
    if (typeof child === "string") {
      child.split(/(\s+)/).forEach((part) => {
        if (part.trim().length > 0) out.push({ text: part });
        else if (part.length > 0) out.push({ text: " " });
      });
    } else if (isValidElement(child)) {
      const inner = (child.props as { children?: ReactNode }).children;
      const wrapper = (s: ReactNode) =>
        // re-apply the original element's tag/className/style around the animated word
        // (works for plain <span>, <em>, <i> wrappers)
        // @ts-expect-error generic re-clone
        <child.type {...child.props}>{s}</child.type>;
      if (typeof inner === "string") {
        inner.split(/(\s+)/).forEach((part) => {
          if (part.trim().length > 0) out.push({ text: part, wrapper });
          else if (part.length > 0) out.push({ text: " ", wrapper });
        });
      }
    }
  });
  return out;
};

const AnimatedHeading = ({
  children,
  className,
  as = "h1",
  delay = 0,
  stagger = 0.06,
}: AnimatedHeadingProps) => {
  const reduce = useReducedMotion();
  const Tag = as as keyof JSX.IntrinsicElements;
  const tokens = splitText(children);

  if (reduce) {
    return <Tag className={className}>{children}</Tag>;
  }

  return (
    <Tag className={className}>
      <motion.span
        style={{ display: "inline" }}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, margin: "-80px" }}
        transition={{ staggerChildren: stagger, delayChildren: delay }}
      >
        {tokens.map((tok, i) => {
          if (tok.text === " ") return <span key={i}> </span>;
          const inner = (
            <motion.span
              variants={wordVariants}
              style={{ display: "inline-block", willChange: "transform, opacity, filter" }}
            >
              {tok.text}
            </motion.span>
          );
          const wrapped = tok.wrapper ? tok.wrapper(inner) : inner;
          return (
            <span key={i} style={{ display: "inline-block", overflow: "hidden", verticalAlign: "bottom" }}>
              {wrapped}
            </span>
          );
        })}
      </motion.span>
    </Tag>
  );
};

export default AnimatedHeading;
