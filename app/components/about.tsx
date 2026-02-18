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
                Hey, I'm{" "}
                <span className="text-white font-semibold">Princy Ballabh</span>
                , a full-stack developer who genuinely enjoys building things
                from scratch and watching them come to life on the web.
              </p>

              <p className="text-gray-400 leading-relaxed">
                I mostly work with Next.js, React, Node.js, and PostgreSQL, and
                I love handling both sides of an application — designing smooth,
                responsive frontends and building structured, scalable backends
                behind the scenes. I pay attention to performance, clean UI, and
                writing code that actually makes sense when I revisit it later.
              </p>

              <p className="text-gray-400 leading-relaxed">
                During my internship, I worked on real-world features across the
                stack — building multi-role dashboards, integrating REST APIs,
                improving UI responsiveness, and debugging production issues.
                That experience helped me understand how real products evolve,
                how teams collaborate, and why clean architecture and
                maintainable code actually matter.
              </p>

              <p className="text-gray-400 leading-relaxed">
                Recently, I've also been exploring DevOps, working with Docker,
                deployments, and cloud platforms as it is really important not
                just to build applications, but also understand how they run,
                scale, and survive in production.
              </p>

              <p className="text-gray-400 leading-relaxed">
                I enjoy learning by building. Whether it's optimizing
                performance, experimenting with animations, or designing better
                system flows, I'm always trying to improve how I approach
                problems.
              </p>

              <p className="text-gray-300 leading-relaxed">
                Currently, I'm a final-year Computer Science and Engineering
                student at the University of Lucknow with a CGPA of 8.75. <br />
                Still learning! Still building! Always curious :)
              </p>
            </motion.div>
          </motion.div>

          {/* Right Side: Semicircular Photo Design with Satellite */}
          <div className="absolute ml-180 translate-x-1/4 hidden lg:block">
            <div className="relative w-[850px] h-[850px]">
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

          {/* Right Side: Complete Circle Photo Design with Satellite - MOBILE ONLY */}
          <motion.div
            className="flex justify-center mt-12 lg:hidden"
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            viewport={{ once: false }}
          >
            <div className="relative w-[300px] h-[300px]">
              {/* Complete Circle - Satellite Orbit Path */}
              <div className="absolute inset-[-40px]">
                <div className="absolute inset-0 border-2 border-dashed border-purple-500/30 rounded-full" />
              </div>

              {/* Satellite animation on complete circular orbit */}
              <motion.div
                animate={{ rotate: [0, 360] }}
                transition={{
                  duration: 8,
                  repeat: Infinity,
                  ease: "linear",
                }}
                className="absolute inset-[-60px]"
              >
                <motion.div
                  animate={{ rotate: [0, -360] }}
                  transition={{
                    duration: 8,
                    repeat: Infinity,
                    ease: "linear",
                  }}
                  className="absolute left-1/2 top-0 -translate-x-1/2 w-12 h-12"
                >
                  <Image
                    src="/assets/satellite.png"
                    alt="Satellite"
                    fill
                    sizes="48px"
                    className="object-contain drop-shadow-[0_0_15px_rgba(168,85,247,0.6)]"
                  />
                </motion.div>
              </motion.div>

              {/* Complete Circle Photo */}
              <div className="absolute inset-0 rounded-full overflow-hidden border-4 border-purple-500/20">
                <Image
                  src="/assets/memobile.png"
                  alt="Princy Ballabh"
                  fill
                  sizes="300px"
                  className="object-cover"
                  priority
                />
              </div>
            </div>
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
}
