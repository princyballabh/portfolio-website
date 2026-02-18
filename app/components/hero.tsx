"use client";

import { motion, useScroll, useTransform, useSpring } from "framer-motion";
import { FlipWords } from "./FlipWords";
import { useRef } from "react";
import dynamic from "next/dynamic";

// const SpacemanScene = dynamic(() => import("./spaceman-scene"), {
//   ssr: false,
// });

export default function Hero() {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  });

  const smoothProgress = useSpring(scrollYProgress, {
    stiffness: 160,
    damping: 25,
    restDelta: 0.001,
  });

  // Smoother parallax effects with increased separation between layers
  const bgY = useTransform(smoothProgress, [0, 1], [-200, 200]);
  const mountainY = useTransform(smoothProgress, [0, 1], [0, 100]);
  const planetsY = useTransform(smoothProgress, [0, 1], [0, 160]);
  const modelY = useTransform(smoothProgress, [0, 1], [0, 100]);

  const words = ["Innovative", "Secure", "Modern", "Scalable"];

  const variants = {
    hidden: { opacity: 0, x: -50 },
    visible: { opacity: 1, x: 0 },
  };

  // Planet positions - positioned on right side only, away from text
  const planets = [
    {
      src: "/assets/planet-1.png",
      size: 180,
      bottom: "45%",
      right: "80%",
      delay: 0,
    },
    {
      src: "/assets/planet-3.png",
      size: 150,
      top: "23%",
      right: "7%",
      delay: 0.2,
    },
    {
      src: "/assets/planet-2.png",
      size: 130,
      bottom: "68%",
      right: "68%",
      delay: 0.4,
    },
  ];

  return (
    <section
      ref={containerRef}
      className="relative min-h-screen flex flex-col justify-center items-center text-center overflow-hidden"
    >
      {/* Layer 1: Background */}
      <motion.div
        style={{ y: bgY }}
        className="absolute inset-0 w-full h-full -z-20 will-change-transform"
      >
        <img
          src="/assets/bg.jpg"
          alt="Space background"
          className="w-full h-full object-cover object-center"
        />
      </motion.div>

      {/* Transparent Black Overlay */}
      {/* <div className="absolute inset-0 w-full h-full bg-black/40 -z-19" /> */}

      {/* Layer 1.5: Mountains */}
      <motion.div
        style={{ y: mountainY }}
        className="absolute top-60 left-0 right-0 h-[85%] -z-10 md:-z-20 will-change-transform"
      >
        <img
          src="/assets/mountain.png"
          alt="Mountains"
          className="w-full h-full object-cover"
        />
      </motion.div>

      {/* Layer 2: Planets */}
      <motion.div
        style={{ y: planetsY }}
        className="absolute inset-0 w-full h-full -z-5 md:-z-10 will-change-transform"
      >
        {planets.map((planet, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: planet.delay }}
            className="absolute"
            style={{
              top: planet.top,
              right: planet.right,
              bottom: planet.bottom,
              width: planet.size,
              height: planet.size,
            }}
          >
            <img
              src={planet.src}
              alt={`Planet ${index + 1}`}
              className="w-full h-full object-contain"
            />
          </motion.div>
        ))}
      </motion.div>

      {/* Layer 3: Text and Spaceman */}
      <motion.div
        style={{ y: modelY }}
        className="relative items-center text-center px-6 w-full max-w-7xl mx-auto will-change-transform"
      >
        {/* Left Side: Text Content */}
        <div className="flex flex-col gap-6 items-center text-center md:text-center">
          {/* Desktop View */}
          <div className="hidden md:flex md:flex-col">
            <motion.h1
              className="text-4xl text-center font-medium text-gray-300"
              variants={variants}
              initial="hidden"
              animate="visible"
              transition={{ delay: 1 }}
            >
              Hi, I'm Princy
            </motion.h1>
            <div className="flex flex-col items-center mt-4">
              <motion.p
                className="text-4xl text-center font-medium text-neutral-300"
                variants={variants}
                initial="hidden"
                animate="visible"
                transition={{ delay: 1.2 }}
              >
                Full Stack Developer <br /> Passionate About Building
              </motion.p>
              <motion.div
                variants={variants}
                initial="hidden"
                animate="visible"
                transition={{ delay: 1.5 }}
                className="my-4 flex items-center justify-center"
              >
                <FlipWords
                  words={words}
                  className="font-black text-center items-center text-white text-7xl space-text mt-4.5 mb-4.5"
                  style={{ fontFamily: "Orbitron, sans-serif" }}
                />
              </motion.div>
              <motion.p
                className="text-4xl text-center font-medium text-neutral-300"
                variants={variants}
                initial="hidden"
                animate="visible"
                transition={{ delay: 1.8 }}
              >
                Web Solutions
              </motion.p>
            </div>
          </div>

          {/* Mobile View */}
          <div className="flex flex-col space-y-6 md:hidden">
            <motion.p
              className="text-4xl font-medium text-gray-300"
              variants={variants}
              initial="hidden"
              animate="visible"
              transition={{ delay: 1 }}
            >
              Hi, I'm Princy
            </motion.p>
            <div>
              <motion.p
                className="text-5xl font-black text-neutral-300"
                variants={variants}
                initial="hidden"
                animate="visible"
                transition={{ delay: 1.2 }}
              >
                Creating
              </motion.p>
              <motion.div
                variants={variants}
                initial="hidden"
                animate="visible"
                transition={{ delay: 1.5 }}
                className="my-2"
              >
                <FlipWords
                  words={words}
                  className="font-bold text-white text-6xl space-text"
                  style={{ fontFamily: "Orbitron, sans-serif" }}
                />
              </motion.div>
              <motion.p
                className="text-4xl font-black text-neutral-300"
                variants={variants}
                initial="hidden"
                animate="visible"
                transition={{ delay: 1.8 }}
              >
                Digital Solutions
              </motion.p>
            </div>
          </div>
        </div>

        {/* Right Side: Spaceman */}
        {/* <div className="flex justify-center lg:justify-end">
          <SpacemanScene />
        </div> */}
      </motion.div>
    </section>
  );
}
