"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { FlipWords } from "./FlipWords";
import { useRef } from "react";
import dynamic from "next/dynamic";

const SpacemanScene = dynamic(() => import("./spaceman-scene"), {
  ssr: false,
});

export default function Hero() {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"],
  });

  // Smoother parallax effects with increased separation between layers
  const bgY = useTransform(scrollYProgress, [0, 1], ["0%", "50%"]);
  const mountainY = useTransform(scrollYProgress, [0, 1], ["0%", "35%"]);
  const planetsY = useTransform(scrollYProgress, [0, 1], ["0%", "20%"]);
  const modelY = useTransform(scrollYProgress, [0, 1], ["0%", "10%"]);

  const words = ["Innovative", "Secure", "Modern", "Scalable"];

  const variants = {
    hidden: { opacity: 0, x: -50 },
    visible: { opacity: 1, x: 0 },
  };

  // Planet positions - positioned on right side only, away from text
  const planets = [
    {
      src: "/assets/planet-1.png",
      size: 200,
      top: "10%",
      right: "50%",
      delay: 0,
    },
    {
      src: "/assets/planet-2.png",
      size: 150,
      top: "35%",
      right: "9%",
      delay: 0.2,
    },
    {
      src: "/assets/planet-3.png",
      size: 180,
      bottom: "8%",
      right: "38%",
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
          src="/assets/bg-layer.jpg"
          alt="Space background"
          className="w-full h-full object-cover"
        />
      </motion.div>

      {/* Transparent Black Overlay */}
      <div className="absolute inset-0 w-full h-full bg-black/40 -z-19" />

      {/* Layer 1.5: Mountains */}
      <motion.div
        style={{ y: mountainY }}
        className="absolute bottom-0 left-0 right-0 h-[60%] -z-10 md:-z-15 will-change-transform"
      >
        <img
          src="/assets/mountain.png"
          alt="Mountains"
          className="w-full h-full object-cover object-bottom"
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
        className="relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-8 items-center px-6 w-full max-w-7xl mx-auto will-change-transform"
      >
        {/* Left Side: Text Content */}
        <div className="flex flex-col gap-6 text-center md:text-left">
          {/* Desktop View */}
          <div className="hidden md:flex md:flex-col">
            <motion.h1
              className="text-3xl font-medium text-gray-300"
              variants={variants}
              initial="hidden"
              animate="visible"
              transition={{ delay: 1 }}
            >
              Hi, I'm Princy
            </motion.h1>
            <div className="flex flex-col items-start mt-4">
              <motion.p
                className="text-4xl font-medium text-neutral-300"
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
                className="my-4"
              >
                <FlipWords
                  words={words}
                  className="font-black text-white text-6xl"
                />
              </motion.div>
              <motion.p
                className="text-3xl font-medium text-neutral-300"
                variants={variants}
                initial="hidden"
                animate="visible"
                transition={{ delay: 1.8 }}
              >
                Digital Experiences
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
                  className="font-bold text-white text-6xl"
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
        <div className="flex justify-center lg:justify-end">
          <SpacemanScene />
        </div>
      </motion.div>
    </section>
  );
}
