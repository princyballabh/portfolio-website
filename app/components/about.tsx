"use client";

import { motion } from "framer-motion";
import Image from "next/image";

export default function About() {
  return (
    <section
      id="about-section"
      className="relative min-h-screen flex items-center justify-center py-100 px-6 overflow-hidden"
    >
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: false }}
        className="max-w-7xl w-full mx-auto relative"
      >
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 items-center">
          {/* Left Side: About Me Content */}
          <motion.div
            className="space-y-6"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            viewport={{ once: false }}
          >
            <div>
              <motion.h2
                className="text-5xl md:text-6xl font-bold text-white mb-4 overflow-hidden"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: false }}
              >
                {["A", "B", "O", "U", "T", " ", "M", "E"].map(
                  (letter, index) => (
                    <motion.span
                      key={index}
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{
                        duration: 0.3,
                        delay: index * 0.1,
                        ease: "easeOut",
                      }}
                      viewport={{ once: false }}
                      style={{ display: "inline-block" }}
                    >
                      {letter === " " ? "\u00A0" : letter}
                    </motion.span>
                  ),
                )}
              </motion.h2>
              <motion.div
                className="h-1 w-32 bg-gradient-to-r from-purple-500 to-blue-500 rounded-full"
                initial={{ width: 0 }}
                whileInView={{ width: "8rem" }}
                transition={{ duration: 0.8, delay: 0.8 }}
                viewport={{ once: false }}
              />
            </div>

            <motion.div
              className="space-y-4"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 1 }}
              viewport={{ once: false }}
            >
              <p className="text-gray-300 text-lg leading-relaxed">
                I'm{" "}
                <span className="text-white font-semibold">Princy Ballabh</span>
                , a final-year Computer Science and Engineering student at the
                University of Lucknow with a CGPA of 8.75. Over the course of my
                degree, I've built a solid foundation in data structures,
                algorithms, operating systems, DBMS, and computer networks, and
                I've also qualified GATE (CS) in the third year of my college,
                which strengthened my problem-solving skills.
              </p>

              <p className="text-gray-400 leading-relaxed">
                On the practical side, I enjoy developing projects that bring
                ideas to life. I've worked on full-stack applications like
                'Trade Matrix' - an inventory and trading management system,
                'PassLock' - a secure password manager. Currently, I'm interning
                at StuFit, where I contribute to core feature development,
                frontend of the portal, and it's integration.
              </p>

              {/* <p className="text-gray-400 leading-relaxed">
                Beyond academics, I've solved 200+ coding problems on
                GeeksforGeeks (600+ score), secured 1st place in Code Abhyaas by
                AlgoZenith, and actively contributed as a core team member in
                communities like GDSC and AWS Cloud Club.
              </p> */}

              {/* <p className="text-gray-400 leading-relaxed">
                I'm eager to apply my technical skills, problem-solving mindset,
                and teamwork experience to challenging roles in software
                development, where I can keep learning while delivering
                impactful solutions.
              </p> */}
            </motion.div>
          </motion.div>

          {/* Right Side: Semicircular Photo Design with Satellite */}
          <div className="absolute ml-195 translate-x-1/4 hidden lg:block">
            <div className="relative w-[750px] h-[750px]">
              {/* Outer Semicircle - Satellite Orbit Path */}
              <div className="absolute inset-[-100px]">
                <div
                  className="absolute inset-0 border-2 border-dashed border-purple-500/30 rounded-full"
                  style={{ clipPath: "inset(0 50% 0 0%)" }}
                />
              </div>

              {/* Satellite animation on outer orbit */}
              <motion.div
                animate={{ rotate: [-90, 90] }}
                transition={{
                  duration: 8,
                  repeat: Infinity,
                  ease: "linear",
                }}
                className="absolute inset-[-150px]"
              >
                <motion.div
                  animate={{ rotate: [-180, 0] }}
                  transition={{
                    duration: 8,
                    repeat: Infinity,
                    ease: "linear",
                  }}
                  className="absolute left-0 top-1/2 -translate-y-1/2 w-30 h-30"
                >
                  <Image
                    src="/assets/satellite.png"
                    alt="Satellite"
                    fill
                    sizes="120px"
                    className="object-contain drop-shadow-[0_0_15px_rgba(168,85,247,0.6)]"
                  />
                </motion.div>
              </motion.div>

              {/* Inner Semicircle Frame (Dark Border) */}
              {/* <div className="absolute inset-[50px]">
                <div
                  className="absolute inset-0 bg-gradient-to-br from-slate-800 to-slate-900 rounded-full shadow-2xl"
                  style={{ clipPath: "inset(0 50% 0 0)" }}
                />
              </div> */}

              {/* Photo inside Inner Semicircle */}
              <div className="absolute inset-[0px]">
                <div
                  className="absolute inset-0 rounded-full overflow-hidden"
                  style={{ clipPath: "inset(0% 50% 0% -20%)" }}
                >
                  <Image
                    src="/assets/me.png"
                    alt="Princy Ballabh"
                    fill
                    sizes="750px"
                    className="object-cover object-left object-scale-down"
                    priority
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </motion.div>
    </section>
  );
}
