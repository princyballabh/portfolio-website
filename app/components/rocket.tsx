"use client";

import { motion, useScroll, useTransform } from "framer-motion";

export default function Rocket() {
  const { scrollYProgress } = useScroll();
  const flameOpacity = useTransform(scrollYProgress, [0, 0.2], [0, 1]);
  const x = useTransform(
    scrollYProgress,
    [0, 0.2, 1],
    ["50vw", "50vw", "80vw"]
  );
  const y = useTransform(
    scrollYProgress,
    [0, 0.2, 1],
    ["50vh", "10vh", "60vh"]
  );

  return (
    <>
      <motion.div
        style={{
          position: "fixed",
          x,
          y,
          zIndex: 50,
          pointerEvents: "none",
        }}
      >
        <div className="text-5xl">🚀</div>
      </motion.div>
      <motion.div
        style={{ opacity: flameOpacity }}
        className="text-orange-500 text-xl -mt-2 text-center"
      >
        🔥
      </motion.div>
    </>
  );
}
