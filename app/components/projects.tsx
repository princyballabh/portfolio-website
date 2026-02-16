"use client";

import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import { useState, useEffect } from "react";

interface Project {
  id: number;
  title: string;
  description: string;
  image: string;
  technologies: string[];
  features: string[];
  github?: string;
  live?: string;
}

const projects: Project[] = [
  {
    id: 1,
    title: "Trade Matrix",
    description:
      "A comprehensive inventory and trading management system designed for efficient stock tracking and transaction management.",
    image: "/assets/project/tradematrix.png",
    technologies: ["React", "Node.js", "MongoDB", "Express"],
    features: [
      "Real-time inventory tracking",
      "Automated trade calculations",
      "Interactive dashboard with analytics",
      "Multi-user role management",
    ],
    github: "https://github.com/princyballabh/trade-matrix",
    live: "https://tradematrix.vercel.app/",
  },
  {
    id: 2,
    title: "PassLock",
    description:
      "A secure password manager with advanced encryption to keep your credentials safe and accessible across devices.",
    image: "/assets/project/passlock.png",
    technologies: ["Next.js", "TypeScript", "Prisma", "PostgreSQL"],
    features: [
      "AES-256 encryption for passwords",
      "Password strength analyzer",
      "Auto-fill browser extension",
      "Biometric authentication support",
    ],
    github: "https://github.com/princyballabh/passlock",
    live: "https://passlock-1.onrender.com/",
  },
  {
    id: 3,
    title: "TextUtils",
    description:
      "A versatile text manipulation tool with various utilities for text formatting, analysis, and transformation.",
    image: "/assets/project/textutils.png",
    technologies: ["React", "JavaScript", "Bootstrap", "CSS"],
    features: [
      "Text case conversion (Upper, Lower, Title)",
      "Word and character counter",
      "Remove extra spaces and formatting",
      "Copy to clipboard functionality",
    ],
    github: "https://github.com/princyballabh/TextUtils-React",
  },
  {
    id: 4,
    title: "GST Calculator",
    description:
      "A comprehensive GST calculation tool for businesses to compute taxes, generate invoices, and maintain records.",
    image: "/assets/project/gst-calc.png",
    technologies: ["React", "JavaScript", "Material-UI", "Node.js"],
    features: [
      "GST calculation with multiple rates",
      "Invoice generation and export",
      "Tax breakdown and summaries",
      "Save and manage calculations",
    ],
    github: "https://github.com/princyballabh/gst-calculator",
    live: "https://gst-calculator.up.railway.app/",
  },
  {
    id: 5,
    title: "CodePen Clone",
    description:
      "An online code editor and playground for HTML, CSS, and JavaScript with live preview functionality.",
    image: "/assets/project/codepenclone.png",
    technologies: ["React", "CodeMirror", "JavaScript", "CSS"],
    features: [
      "Live HTML, CSS, JS preview",
      "Code editor with syntax highlighting",
      "Responsive layout panels",
      "Export and share projects",
    ],
    github: "https://github.com/princyballabh/Code-pen",
  },
];

export default function Projects() {
  const [currentIndex, setCurrentIndex] = useState(0);

  // Auto-play slider
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % projects.length);
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % projects.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev - 1 + projects.length) % projects.length);
  };

  const goToSlide = (index: number) => {
    setCurrentIndex(index);
  };

  // Calculate visible cards and their positions
  const getVisibleCards = () => {
    const cards = [];
    for (let i = -2; i <= 2; i++) {
      const index = (currentIndex + i + projects.length) % projects.length;
      cards.push({ project: projects[index], offset: i });
    }
    return cards;
  };

  // Enhanced 3D position calculation
  const getCardTransform = (offset: number) => {
    const isCenter = offset === 0;
    const absOffset = Math.abs(offset);
    const isMobile = typeof window !== 'undefined' && window.innerWidth < 768;

    // Stronger perspective with curved arrangement
    const angle = offset * 45; // Rotation angle
    const radius = isMobile ? 300 : 500; // Smaller radius for mobile
    const x = Math.sin((offset * Math.PI) / 4) * radius;
    const z = Math.cos((offset * Math.PI) / 4) * radius - radius;

    return {
      x,
      z: z * 1.2, // Deeper perspective
      rotateY: angle,
      scale: isCenter ? 1.1 : 0.75 - absOffset * 0.1,
      opacity: absOffset > 1 ? 0.2 : 1 - absOffset * 0.3,
    };
  };

  return (
    <section
      id="projects-section"
      className="relative min-h-screen flex items-center justify-center py-4 md:py-8 px-6"
    >
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: false }}
        className="max-w-7xl w-full mx-auto relative z-10"
      >
        {/* Section Heading */}
        <div className="text-center mt-4">
                <motion.h2
                  className="text-3xl md:text-6xl font-bold text-white mb-4 overflow-hidden"
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  viewport={{ once: false }}
                >
                  {["P", "R", "O", "J", "E", "C", "T", "S"].map(
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
                        {letter}
                      </motion.span>
                    ),
                  )}
                </motion.h2>
                <motion.div
                  className="h-1 w-32 bg-gradient-to-r from-purple-500 to-blue-500 rounded-full mx-auto"
                  initial={{ width: 0 }}
                  whileInView={{ width: "8rem" }}
                  transition={{ duration: 0.8, delay: 0.8 }}
                  viewport={{ once: false }}
                />
              </div>

              {/* 3D Carousel Slider */}
              <div className="relative h-[400px] md:h-[550px] flex items-center justify-center perspective-container mt-8 md:mt-12">
                <div className="relative w-full h-full flex items-center justify-center preserve-3d">
                  <AnimatePresence mode="popLayout">
                    {getVisibleCards().map(({ project, offset }) => {
                      const isCenter = offset === 0;
                      const transform = getCardTransform(offset);

                      return (
                        <motion.div
                          key={project.id}
                          className="absolute w-[280px] md:w-[380px] h-[380px] md:h-[520px] cursor-pointer"
                          initial={false}
                          animate={{
                            x: transform.x,
                            z: transform.z,
                            rotateY: transform.rotateY,
                            scale: transform.scale,
                            opacity: transform.opacity,
                          }}
                          transition={{
                            type: "spring",
                            stiffness: 260,
                            damping: 25,
                          }}
                          style={{
                            transformStyle: "preserve-3d",
                          }}
                          onClick={() =>
                            !isCenter && goToSlide(projects.indexOf(project))
                          }
                        >
                          <div
                            className={`relative w-full h-full rounded-2xl overflow-hidden border-2 transition-all duration-500 ${
                              isCenter
                                ? "border-purple-400/60 shadow-[0_0_40px_rgba(168,85,247,0.4)] bg-gradient-to-br from-slate-800 to-slate-900"
                                : "border-purple-500/20 shadow-2xl bg-gradient-to-br from-slate-800/80 to-slate-900/80"
                            } backdrop-blur-sm`}
                            style={{
                              boxShadow: isCenter
                                ? "0 25px 50px -12px rgba(168, 85, 247, 0.25), 0 0 60px rgba(168, 85, 247, 0.2)"
                                : "0 25px 50px -12px rgba(0, 0, 0, 0.5)",
                            }}
                          >
                            {/* Image Container */}
                            <div className="relative h-44 md:h-64 w-full overflow-hidden bg-slate-900/50">
                              <Image
                                src={project.image}
                                alt={project.title}
                                fill
                                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 380px"
                                className="object-cover"
                                quality={100}
                                priority={project.id <= 3}
                              />
                              <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 via-transparent to-transparent z-10" />
                            </div>

                            {/* Content */}
                            <div className="p-4 md:p-6 space-y-2 md:space-y-4 flex flex-col h-[calc(100%-11rem)] md:h-[calc(100%-16rem)]">
                              <h3
                                className={`text-lg md:text-2xl font-bold transition-colors duration-300 ${
                                  isCenter ? "text-white" : "text-gray-200"
                                }`}
                              >
                                {project.title}
                              </h3>

                              <p
                                className={`text-xs md:text-sm leading-relaxed line-clamp-2 md:line-clamp-3 flex-1 transition-colors duration-300 ${
                                  isCenter ? "text-gray-300" : "text-gray-400"
                                }`}
                              >
                                {project.description}
                              </p>

                              {/* Live Demo Button */}
                              <div className="flex justify-center pt-1 md:pt-2">
                                {(project.live || project.github) && (
                                  <a
                                    href={project.live || project.github}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="py-2 md:py-2.5 px-5 md:px-8 bg-gradient-to-r from-purple-500 to-blue-500 hover:from-purple-600 hover:to-blue-600 rounded-lg text-white text-xs md:text-sm font-semibold transition-all hover:scale-105 shadow-lg hover:shadow-purple-500/50"
                                    onClick={(e) => e.stopPropagation()}
                                  >
                                    {project.live
                                      ? "View Live Demo"
                                      : "View on GitHub"}
                                  </a>
                                )}
                              </div>
                            </div>
                          </div>
                        </motion.div>
                      );
                    })}
                  </AnimatePresence>
                </div>

                {/* Navigation Buttons */}
                <button
                  onClick={prevSlide}
                  className="absolute left-2 md:left-8 z-30 w-10 h-10 md:w-14 md:h-14 rounded-full bg-gradient-to-br from-purple-500/30 to-blue-500/30 hover:from-purple-500/50 hover:to-blue-500/50 border-2 border-purple-400/30 hover:border-purple-400/60 text-white flex items-center justify-center transition-all duration-300 hover:scale-110 backdrop-blur-md shadow-xl"
                  aria-label="Previous project"
                >
                  <svg
                    className="w-5 h-5 md:w-7 md:h-7"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    strokeWidth={2.5}
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M15 19l-7-7 7-7"
                    />
                  </svg>
                </button>

                <button
                  onClick={nextSlide}
                  className="absolute right-2 md:right-8 z-30 w-10 h-10 md:w-14 md:h-14 rounded-full bg-gradient-to-br from-purple-500/30 to-blue-500/30 hover:from-purple-500/50 hover:to-blue-500/50 border-2 border-purple-400/30 hover:border-purple-400/60 text-white flex items-center justify-center transition-all duration-300 hover:scale-110 backdrop-blur-md shadow-xl"
                  aria-label="Next project"
                >
                  <svg
                    className="w-5 h-5 md:w-7 md:h-7"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    strokeWidth={2.5}
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M9 5l7 7-7 7"
                    />
                  </svg>
                </button>
              </div>

              {/* Dots Indicator */}
              <div className="flex justify-center items-center gap-2 md:gap-3 mt-6 md:mt-8">
                {projects.map((project, index) => (
                  <button
                    key={project.id}
                    onClick={() => goToSlide(index)}
                    className={`transition-all duration-300 ${
                      index === currentIndex
                        ? "w-8 h-2.5 md:w-10 md:h-3.5 bg-gradient-to-r from-purple-500 to-blue-500 rounded-full shadow-lg shadow-purple-500/50"
                        : "w-2.5 h-2.5 md:w-3.5 md:h-3.5 bg-purple-500/30 hover:bg-purple-500/60 rounded-full border border-purple-400/20"
                    }`}
                    aria-label={`Go to project ${index + 1}`}
                  />
                ))}
              </div>
      </motion.div>

      <style jsx global>{`
        .perspective-container {
          perspective: 1500px;
          perspective-origin: center center;
        }
        .preserve-3d {
          transform-style: preserve-3d;
        }
      `}</style>
    </section>
  );
}
