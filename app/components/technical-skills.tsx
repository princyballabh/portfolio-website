"use client";

import { motion, useInView } from "framer-motion";
import Image from "next/image";
import { useState, useEffect, useRef } from "react";

const skills = [
  {
    name: "React",
    icon: "/assets/icons/React.png",
    aliases: ["react", "reactjs", "react.js"],
  },
  {
    name: "Next.js",
    icon: "/assets/icons/Next.js.png",
    aliases: ["next", "nextjs", "next.js"],
  },
  {
    name: "TypeScript",
    icon: "/assets/icons/TypeScript.png",
    aliases: ["typescript", "ts"],
  },
  {
    name: "JavaScript",
    icon: "/assets/icons/JavaScript.png",
    aliases: ["javascript", "js"],
  },
  {
    name: "Node.js",
    icon: "/assets/icons/Node.js.png",
    aliases: ["node", "nodejs", "node.js"],
  },
  {
    name: "Express",
    icon: "/assets/icons/Express.png",
    aliases: ["express", "expressjs", "express.js"],
  },
  {
    name: "MongoDB",
    icon: "/assets/icons/MongoDB.png",
    aliases: ["mongodb", "mongo"],
  },
  {
    name: "MySQL",
    icon: "/assets/icons/MySQL.png",
    aliases: ["mysql", "my sql"],
  },
  {
    name: "Python",
    icon: "/assets/icons/Python.png",
    aliases: ["python", "py"],
  },
  {
    name: "FastAPI",
    icon: "/assets/icons/FastAPI.png",
    aliases: ["fastapi", "fast api"],
  },
  {
    name: "C++",
    icon: "/assets/icons/C++ (CPlusPlus).png",
    aliases: ["c++", "cpp", "cplusplus"],
  },
  { name: "C", icon: "/assets/icons/C.png", aliases: ["c"] },
  { name: "Java", icon: "/assets/icons/Java.png", aliases: ["java"] },
  {
    name: "HTML5",
    icon: "/assets/icons/HTML5.png",
    aliases: ["html", "html5"],
  },
  { name: "CSS3", icon: "/assets/icons/CSS3.png", aliases: ["css", "css3"] },
  {
    name: "Tailwind CSS",
    icon: "/assets/icons/Tailwind CSS.png",
    aliases: ["tailwind", "tailwindcss", "tailwind css"],
  },
  {
    name: "Bootstrap",
    icon: "/assets/icons/Bootstrap.png",
    aliases: ["bootstrap"],
  },
  { name: "Git", icon: "/assets/icons/Git.png", aliases: ["git"] },
  { name: "GitHub", icon: "/assets/icons/GitHub.png", aliases: ["github"] },
  { name: "Postman", icon: "/assets/icons/Postman.png", aliases: ["postman"] },
  { name: "Vercel", icon: "/assets/icons/Vercel.png", aliases: ["vercel"] },
  { name: "Figma", icon: "/assets/icons/Figma.png", aliases: ["figma"] },
  {
    name: "Mongoose.js",
    icon: "/assets/icons/Mongoose.js.png",
    aliases: ["mongoose", "mongoosejs", "mongoose.js"],
  },
];

export default function TechnicalSkills() {
  const [randomPositions, setRandomPositions] = useState<
    { x: number; y: number }[]
  >([]);
  const [hasAnimated, setHasAnimated] = useState(false);
  const [isGameMode, setIsGameMode] = useState(false);
  const [guessedSkills, setGuessedSkills] = useState<Set<string>>(new Set());
  const [inputValue, setInputValue] = useState("");
  const [hasGivenUp, setHasGivenUp] = useState(false);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });

  useEffect(() => {
    // Generate non-overlapping random positions for each skill
    const positions: { x: number; y: number }[] = [];
    const minDistance = 100; // Minimum distance between icons (in pixels)
    const iconSize = 80; // Approximate icon size
    const containerWidth =
      typeof window !== "undefined" ? window.innerWidth * 0.85 : 1200; // 85% of viewport width
    const containerHeight = 600;

    const isOverlapping = (
      newPos: { x: number; y: number },
      existingPositions: { x: number; y: number }[],
    ) => {
      return existingPositions.some((pos) => {
        const xDist = Math.abs(
          (newPos.x / 100) * containerWidth - (pos.x / 100) * containerWidth,
        );
        const yDist = Math.abs(newPos.y - pos.y);
        const distance = Math.sqrt(xDist * xDist + yDist * yDist);
        return distance < minDistance;
      });
    };

    for (let i = 0; i < skills.length; i++) {
      let attempts = 0;
      let newPosition: { x: number; y: number };

      do {
        newPosition = {
          x: Math.random() * 85, // 0-85% width
          y: Math.random() * 450 + 80, // 80-530px from top
        };
        attempts++;
      } while (isOverlapping(newPosition, positions) && attempts < 50);

      positions.push(newPosition);
    }

    setRandomPositions(positions);
  }, []);

  useEffect(() => {
    if (isInView && !hasAnimated) {
      setHasAnimated(true);
    }
  }, [isInView, hasAnimated]);

  // Check if user input matches any skill name or alias
  useEffect(() => {
    if (!isGameMode || !inputValue.trim()) return;

    const normalizedInput = inputValue.toLowerCase().trim();

    skills.forEach((skill) => {
      const normalizedSkillName = skill.name.toLowerCase();
      const matchesName = normalizedSkillName === normalizedInput;
      const matchesAlias = skill.aliases.includes(normalizedInput);

      if ((matchesName || matchesAlias) && !guessedSkills.has(skill.name)) {
        setGuessedSkills((prev) => new Set([...prev, skill.name]));
        setInputValue(""); // Clear input on correct guess
      }
    });
  }, [inputValue, isGameMode, guessedSkills]);

  const startGame = () => {
    setIsGameMode(true);
    setGuessedSkills(new Set());
    setInputValue("");
    setHasGivenUp(false);
  };

  const giveUp = () => {
    setIsGameMode(true); // Stay in game mode (grid layout)
    setGuessedSkills(new Set()); // Reset guessed skills
    setInputValue("");
    setHasGivenUp(true); // Enable tooltips
  };

  return (
    <section
      id="skills-section"
      className="relative min-h-screen flex items-center justify-center py-20 px-6 overflow-hidden bg-gradient-to-b from-black via-purple-900 to-black"
    >
      <div className="max-w-7xl w-full mx-auto">
        {/* Section Title */}
        <motion.div
          initial={{ opacity: 0, y: -50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: false, amount: 0.3 }}
          className="text-center mb-16"
        >
          <h2 className="text-5xl md:text-6xl font-bold text-white mb-4">
            TECHNICAL SKILLS
          </h2>
          <motion.div
            className="h-1 w-32 bg-gradient-to-r from-purple-500 to-blue-500 rounded-full mx-auto mb-4"
            initial={{ width: 0 }}
            whileInView={{ width: "8rem" }}
            transition={{ duration: 0.8, delay: 0.3 }}
            viewport={{ once: false }}
          />
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.5 }}
            viewport={{ once: false }}
            className="text-gray-400 text-sm md:text-base max-w-3xl mx-auto"
          >
            These include Frontend and Backend technologies along with
            Databases, Programming Languages and Tools that I know of and have
            used before
          </motion.p>
        </motion.div>

        {/* Game UI */}
        {isGameMode && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="mb-8 flex flex-col items-center gap-4"
          >
            <p className="text-gray-300 text-sm md:text-base text-center max-w-2xl">
              Let's see how many of these icons can you guess <br />
              <span className="text-sm text-gray-400">
                (Consider this as a quick memory refresher!!)
              </span>
            </p>
            <div className="flex gap-3 items-center flex-wrap justify-center">
              <input
                type="text"
                value={inputValue}
                onChange={(e) => setInputValue(e.target.value)}
                placeholder="Type skill name..."
                className="px-4 py-2 bg-purple-900/50 text-white rounded-lg border border-purple-500/50 focus:border-purple-400 focus:outline-none focus:ring-2 focus:ring-purple-500/30 w-64"
                autoFocus
              />
              <button
                onClick={giveUp}
                className="px-6 py-2 bg-red-600 hover:bg-red-700 text-white rounded-lg transition-colors"
              >
                Give Up
              </button>
            </div>
            <p className="text-purple-400 text-sm">
              Guessed: {guessedSkills.size} / {skills.length}
            </p>
            {guessedSkills.size === skills.length && (
              <motion.div
                initial={{ scale: 0, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ type: "spring", stiffness: 200, damping: 10 }}
                className="text-center mt-4"
              >
                <p className="text-3xl md:text-4xl font-bold text-green-400 mb-2">
                  🎉 BINGO! YOU DID IT! 🎉
                </p>
                <p className="text-gray-300 text-sm">
                  Good job on remembering all the icons!!!!
                </p>
              </motion.div>
            )}
          </motion.div>
        )}

        {/* Icons Container - Conditional Layout */}
        <div
          ref={ref}
          className={`relative w-full ${
            isGameMode ? "min-h-[400px]" : "h-[600px] md:h-[700px]"
          }`}
        >
          {isGameMode ? (
            // Grid layout for game mode
            <div className="grid grid-cols-4 md:grid-cols-6 lg:grid-cols-8 gap-6 justify-items-center">
              {skills.map((skill) => {
                const isGuessed = guessedSkills.has(skill.name);
                return (
                  <motion.div
                    key={skill.name}
                    initial={{ scale: 0, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    transition={{ duration: 0.3 }}
                    className="relative group cursor-pointer"
                  >
                    {/* Icon with tick overlay */}
                    <div className="w-16 h-16 md:w-20 md:h-20 relative transition-all drop-shadow-[0_0_15px_rgba(168,85,247,0.3)] group-hover:drop-shadow-[0_0_25px_rgba(168,85,247,0.6)]">
                      <Image
                        src={skill.icon}
                        alt={skill.name}
                        fill
                        sizes="80px"
                        className="object-contain"
                      />
                      {isGuessed && (
                        <motion.div
                          initial={{ scale: 0, rotate: -180 }}
                          animate={{ scale: 1, rotate: 0 }}
                          transition={{
                            type: "spring",
                            stiffness: 200,
                            damping: 10,
                          }}
                          className="absolute -top-1 -right-1 w-6 h-6 md:w-7 md:h-7 bg-green-500 rounded-full flex items-center justify-center border-2 border-white shadow-lg"
                        >
                          <svg
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="white"
                            strokeWidth="3"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            className="w-4 h-4 md:w-5 md:h-5"
                          >
                            <polyline points="20 6 9 17 4 12" />
                          </svg>
                        </motion.div>
                      )}
                    </div>
                    {/* Tooltip on hover - only show after giving up */}
                    {hasGivenUp && (
                      <div className="absolute -bottom-8 left-1/2 -translate-x-1/2 opacity-0 group-hover:opacity-100 transition-opacity bg-purple-600 text-white text-xs px-3 py-1 rounded-full whitespace-nowrap pointer-events-none z-10">
                        {skill.name}
                      </div>
                    )}
                  </motion.div>
                );
              })}
            </div>
          ) : (
            // Random falling layout for normal mode
            <>
              {skills.map((skill, index) => {
                const position = randomPositions[index] || { x: 0, y: 300 };
                return (
                  <motion.div
                    key={skill.name}
                    initial={{
                      y: -200,
                      x: `${position.x}%`,
                      opacity: 0,
                      rotate: 0,
                    }}
                    animate={
                      hasAnimated
                        ? {
                            y: position.y,
                            opacity: 1,
                            rotate: Math.random() * 40 - 20,
                          }
                        : {
                            y: -200,
                            x: `${position.x}%`,
                            opacity: 0,
                            rotate: 0,
                          }
                    }
                    transition={{
                      duration: 1.5 + Math.random() * 0.8,
                      delay: index * 0.08,
                      ease: [0.34, 1.56, 0.64, 1],
                    }}
                    className="absolute"
                    style={{
                      left: `${position.x}%`,
                    }}
                  >
                    <motion.div
                      whileHover={{
                        scale: 1.2,
                        rotate: 10,
                        transition: { duration: 0.3 },
                      }}
                      className="relative group cursor-pointer"
                    >
                      {/* Icon */}
                      <div className="w-16 h-16 md:w-20 md:h-20 relative drop-shadow-[0_0_15px_rgba(168,85,247,0.3)] group-hover:drop-shadow-[0_0_25px_rgba(168,85,247,0.6)] transition-all">
                        <Image
                          src={skill.icon}
                          alt={skill.name}
                          fill
                          sizes="80px"
                          className="object-contain"
                        />
                      </div>
                    </motion.div>
                  </motion.div>
                );
              })}
            </>
          )}
        </div>

        {/* Play Game Button - Only show in normal mode */}
        {!isGameMode && hasAnimated && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 2 }}
            className="text-center mt-12"
          >
            <button
              onClick={startGame}
              className="px-8 py-3 bg-orange-500 hover:bg-orange-600 text-white rounded-full font-normal text-lg transition-all transform hover:scale-105 shadow-lg"
              style={{ fontFamily: "Comic Sans MS, cursive" }}
            >
              wanna play a quick game? 🎮
            </button>
          </motion.div>
        )}
      </div>
    </section>
  );
}
