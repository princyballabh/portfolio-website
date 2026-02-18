"use client";

import { motion } from "framer-motion";
import { useState, useEffect } from "react";

interface Achievement {
  id: number;
  type: "experience" | "achievement";
  title: string;
  subtitle: string;
  description: string;
  details: string[];
  date: string;
  link?: string;
  links?: { label: string; url: string }[];
}

const achievements: Achievement[] = [
  {
    id: 1,
    type: "experience",
    title: "StuFit",
    subtitle: "Software Development Intern",
    description:
      "Contributing to core feature development and frontend integration for a comprehensive student fitness platform.",
    details: [
      "Developed frontend features",
      "Integrated backend APIs",
      "Built responsive UI",
      "Agile collaboration",
    ],
    date: "Present",
    link: "https://drive.google.com/file/d/1j7-rAWiCawj6XU8WtkQc8eZbBTQJd-tt/view",
  },
  {
    id: 2,
    type: "achievement",
    title: "Hacktoberfest Super Contributor",
    subtitle: "Open Source Contributions",
    description:
      "Recognized as a super contributor for significant open source contributions during Hacktoberfest.",
    details: [
      "Multiple PR merges",
      "Quality contributions",
      "Community impact",
      "Open source advocate",
    ],
    date: "2024",
  },
  {
    id: 3,
    type: "achievement",
    title: "Competitive Programming",
    subtitle: "Multi-Platform Problem Solver",
    description:
      "Strong DSA foundation and consistent competitive programming practice across multiple platforms.",
    details: [
      "200+ GFG problems",
      "Active on LeetCode",
      "CodeChef participant",
      "Strong fundamentals",
    ],
    date: "Ongoing",
    links: [
      { label: "LeetCode", url: "https://leetcode.com/u/princyballabh13/" },
      {
        label: "CodeChef",
        url: "https://www.codechef.com/users/princyballabh",
      },
      {
        label: "GeeksforGeeks",
        url: "https://www.geeksforgeeks.org/profile/princyballabh13",
      },
    ],
  },
  {
    id: 4,
    type: "achievement",
    title: "GATE CS Qualified",
    subtitle: "Graduate Aptitude Test in Engineering",
    description: "Qualified GATE CS exam demonstrating strong CS fundamentals.",
    details: [
      "OS, DBMS, CN, Algo",
      "Competitive exam",
      "Analytical thinking",
      "Core CS strength",
    ],
    date: "2024",
    link: "https://drive.google.com/file/d/1M32Y53pU-nFvZKrlbWTrIWMkXJLCuMrn/view",
  },
  {
    id: 5,
    type: "experience",
    title: "GDSC & AWS Cloud Club",
    subtitle: "Core Team Member",
    description:
      "Organized workshops, mentored students, and contributed to tech community.",
    details: ["Workshops", "Hackathons", "Mentorship", "Cloud advocacy"],
    date: "2023 - Present",
    link: "https://drive.google.com/file/d/1nW9zDyPbSzLUgW6vR_VWFGBTGRrq2IiR/view",
  },
];

export default function Achievements() {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };

    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  return (
    <section className="relative py-12 md:py-20">
      {/* Section Heading */}
      <div className="px-6 mb-12 md:mb-16">
        <div className="max-w-6xl mx-auto">
          <motion.h2
            className="text-3xl md:text-6xl font-bold text-white mb-4 text-center"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: false }}
          >
            EXPERIENCES & ACHIEVEMENTS
          </motion.h2>
          <motion.div
            className="h-1 w-32 bg-gradient-to-r from-purple-500 to-blue-500 rounded-full mx-auto"
            initial={{ width: 0 }}
            whileInView={{ width: "8rem" }}
            transition={{ duration: 0.8, delay: 0.3 }}
            viewport={{ once: false }}
          />
        </div>
      </div>

      {/* Mobile View - Vertical Stack */}
      <div className="md:hidden px-6 space-y-8 max-w-6xl mx-auto">
        {achievements.map((item, index) => (
          <motion.div
            key={item.id}
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: index * 0.1 }}
            viewport={{ once: false }}
            style={{
              marginLeft: isMobile ? "0" : `${index * 4}rem`,
            }}
          >
            <div className="bg-gradient-to-r from-slate-800/80 to-slate-900/90 border border-purple-500/20 rounded-2xl p-4 shadow-xl backdrop-blur-sm hover:border-purple-400/60 hover:shadow-[0_0_30px_rgba(168,85,247,0.3)] transition-all duration-300 hover:scale-[1.02]">
              <div className="flex justify-between items-start mb-4">
                <div className="flex-1">
                  <div className="flex items-center gap-3 mb-2">
                    <span
                      className={`px-3 py-1 text-xs font-semibold rounded-full uppercase tracking-wide ${
                        item.type === "experience"
                          ? "bg-blue-500/80 text-white"
                          : "bg-purple-500/80 text-white"
                      }`}
                    >
                      {item.type}
                    </span>
                    <span className="text-sm text-purple-400 font-medium">
                      {item.date}
                    </span>
                  </div>

                  <h3 className="text-xl font-bold text-white mb-1">
                    {item.title}
                  </h3>
                  <p className="text-purple-300 text-xs mb-3">
                    {item.subtitle}
                  </p>
                </div>
              </div>

              <p className="text-gray-400 text-sm leading-relaxed mb-4">
                {item.description}
              </p>

              <div className="grid grid-cols-2 gap-2">
                {item.details.map((detail, i) => (
                  <div
                    key={i}
                    className="flex items-start text-xs text-gray-400"
                  >
                    <span className="text-purple-400 mr-2 mt-0.5">▹</span>
                    <span>{detail}</span>
                  </div>
                ))}
              </div>

              {/* Links Section */}
              {(item.link || item.links) && (
                <div className="mt-4 pt-4 border-t border-purple-500/20">
                  {item.link && (
                    <a
                      href={item.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 px-4 py-2 bg-purple-500/80 hover:bg-purple-600 text-white text-sm font-medium rounded-lg transition-all duration-300 hover:scale-105"
                    >
                      View Certificate
                      <svg
                        className="w-4 h-4"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                        />
                      </svg>
                    </a>
                  )}
                  {item.links && (
                    <div className="flex flex-wrap gap-2">
                      {item.links.map((linkItem, idx) => (
                        <a
                          key={idx}
                          href={linkItem.url}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-purple-500/80 to-blue-500/80 hover:from-purple-600 hover:to-blue-600 text-white text-sm font-medium rounded-lg transition-all duration-300 hover:scale-105"
                        >
                          {linkItem.label}
                          <svg
                            className="w-4 h-4"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth={2}
                              d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                            />
                          </svg>
                        </a>
                      ))}
                    </div>
                  )}
                </div>
              )}
            </div>
          </motion.div>
        ))}
      </div>

      {/* Desktop View - Horizontal Layout for GSAP */}
      <div className="hidden md:flex gap-8 px-6">
        {achievements.map((item, index) => (
          <motion.div
            key={item.id}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: index * 0.1 }}
            viewport={{ once: false }}
            className="flex-shrink-0 w-[500px]"
          >
            <div className="bg-gradient-to-r from-slate-800/80 to-slate-900/90 border border-purple-500/20 rounded-2xl p-6 shadow-xl backdrop-blur-sm hover:border-purple-400/60 hover:shadow-[0_0_30px_rgba(168,85,247,0.3)] transition-all duration-300 hover:scale-[1.02] h-full">
              <div className="flex justify-between items-start mb-4">
                <div className="flex-1">
                  <div className="flex items-center gap-3 mb-2">
                    <span
                      className={`px-3 py-1 text-xs font-semibold rounded-full uppercase tracking-wide ${
                        item.type === "experience"
                          ? "bg-blue-500/80 text-white"
                          : "bg-purple-500/80 text-white"
                      }`}
                    >
                      {item.type}
                    </span>
                    <span className="text-sm text-purple-400 font-medium">
                      {item.date}
                    </span>
                  </div>

                  <h3 className="text-2xl font-bold text-white mb-1">
                    {item.title}
                  </h3>
                  <p className="text-purple-300 text-sm mb-3">
                    {item.subtitle}
                  </p>
                </div>
              </div>

              <p className="text-gray-400 text-sm leading-relaxed mb-4">
                {item.description}
              </p>

              <div className="grid grid-cols-2 gap-2">
                {item.details.map((detail, i) => (
                  <div
                    key={i}
                    className="flex items-start text-xs text-gray-400"
                  >
                    <span className="text-purple-400 mr-2 mt-0.5">▹</span>
                    <span>{detail}</span>
                  </div>
                ))}
              </div>

              {/* Links Section */}
              {(item.link || item.links) && (
                <div className="mt-4 pt-4 border-t border-purple-500/20">
                  {item.link && (
                    <a
                      href={item.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 px-4 py-2 bg-purple-500/80 hover:bg-purple-600 text-white text-sm font-medium rounded-lg transition-all duration-300 hover:scale-105"
                    >
                      View Certificate
                      <svg
                        className="w-4 h-4"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                        />
                      </svg>
                    </a>
                  )}
                  {item.links && (
                    <div className="flex flex-wrap gap-2">
                      {item.links.map((linkItem, idx) => (
                        <a
                          key={idx}
                          href={linkItem.url}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-purple-500/80 to-blue-500/80 hover:from-purple-600 hover:to-blue-600 text-white text-sm font-medium rounded-lg transition-all duration-300 hover:scale-105"
                        >
                          {linkItem.label}
                          <svg
                            className="w-4 h-4"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth={2}
                              d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                            />
                          </svg>
                        </a>
                      ))}
                    </div>
                  )}
                </div>
              )}
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
