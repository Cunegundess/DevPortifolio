import { motion, useAnimation, useInView } from "framer-motion";
import { useEffect, useRef } from "react";

interface MotionProps {
  children: JSX.Element;
  width?: "fit-content" | "100%";
}

export const Reveal = ({ children, width = "100%" }: MotionProps) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  const mainControls = useAnimation();

  useEffect(() => {
    mainControls.start("visible");
  }, [isInView]);

  return (
    <div ref={ref} style={{ position: "relative", width }}>
      <motion.div
        variants={{
          hidden: { opacity: 0, y: 10 },
          visible: { opacity: 1, y: 0 },
        }}
        initial="hidden"
        animate={mainControls}
        transition={{ duration: 1, delay: 0.25 }}
      >
        {children}
      </motion.div>
    </div>
  );
};
