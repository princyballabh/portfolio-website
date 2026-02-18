"use client";

import { motion } from "framer-motion";
import { useEffect, useState } from "react";

const quirkyMessages = [
  "Warming up the pixels... 🎨",
  "Brewing some fresh code ☕",
  "Almost there, I promise!",
  "Loading awesomeness...",
  "Preparing something cool...",
  "This won't take long!",
  "Thanks for your patience 😊",
  "Making things look pretty...",
  "Just a few more seconds...",
];

export default function LoadingScreen({
  onLoadingComplete,
}: {
  onLoadingComplete: () => void;
}) {
  const [progress, setProgress] = useState(0);
  const [imagesLoaded, setImagesLoaded] = useState(false);
  const [messageIndex, setMessageIndex] = useState(0);

  useEffect(() => {
    // Change message every 2 seconds
    const messageInterval = setInterval(() => {
      setMessageIndex((prev) => (prev + 1) % quirkyMessages.length);
    }, 2000);

    // List of all images to preload
    const imageUrls = [
      "/assets/bg.jpg",
      "/assets/mountain.png",
      "/assets/planet-1.png",
      "/assets/planet-2.png",
      "/assets/planet-3.png",
      "/assets/project/tradematrix.png",
      "/assets/project/passlock.png",
      "/assets/project/textutils.png",
      "/assets/project/gst-calc.png",
      "/assets/project/codepenclone.png",
      "/assets/left-border.png",
      "/assets/right-border.png",
      "/assets/satellite.png",
      "/assets/me.png",
      "/assets/memobile.png",
      // Skill icons
      "/assets/icons/React.png",
      "/assets/icons/Next.js.png",
      "/assets/icons/TypeScript.png",
      "/assets/icons/JavaScript.png",
      "/assets/icons/Node.js.png",
      "/assets/icons/Express.png",
      "/assets/icons/MongoDB.png",
      "/assets/icons/MySQL.png",
      "/assets/icons/Python.png",
      "/assets/icons/FastAPI.png",
      "/assets/icons/C++ (CPlusPlus).png",
      "/assets/icons/C.png",
      "/assets/icons/Java.png",
      "/assets/icons/HTML5.png",
      "/assets/icons/CSS3.png",
      "/assets/icons/Tailwind CSS.png",
      "/assets/icons/Bootstrap.png",
      "/assets/icons/Git.png",
      "/assets/icons/GitHub.png",
      "/assets/icons/Postman.png",
      "/assets/icons/Vercel.png",
      "/assets/icons/Figma.png",
      "/assets/icons/Mongoose.js.png",
    ];

    let loadedCount = 0;
    const totalImages = imageUrls.length;

    // Preload all images
    const loadImage = (url: string) => {
      return new Promise((resolve, reject) => {
        const img = new Image();
        img.onload = () => {
          loadedCount++;
          const newProgress = Math.floor((loadedCount / totalImages) * 100);
          setProgress(newProgress);
          resolve(url);
        };
        img.onerror = () => {
          loadedCount++;
          const newProgress = Math.floor((loadedCount / totalImages) * 100);
          setProgress(newProgress);
          resolve(url); // Still resolve even on error to not block loading
        };
        img.src = url;
      });
    };

    // Load all images
    Promise.all(imageUrls.map(loadImage)).then(() => {
      setImagesLoaded(true);
      setProgress(100);
      setTimeout(() => onLoadingComplete(), 500);
    });

    // Fallback timeout (if images take too long, proceed anyway after 10 seconds)
    const fallbackTimeout = setTimeout(() => {
      if (!imagesLoaded) {
        setProgress(100);
        setImagesLoaded(true);
        setTimeout(() => onLoadingComplete(), 500);
        clearInterval(messageInterval);
      }
    }, 10000);

    return () => {
      clearTimeout(fallbackTimeout);
    };
  }, [onLoadingComplete]);

  return (
    <motion.div
      initial={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.8 }}
      className="fixed inset-0 z-[9999] flex items-center justify-center bg-black"
    >
      {/* Loading content */}
      <div className="flex flex-col items-center gap-8 px-6">
        {/* Simple spinner */}
        <motion.div
          animate={{ rotate: 360 }}
          transition={{
            duration: 1,
            repeat: Infinity,
            ease: "linear",
          }}
          className="w-16 h-16 border-4 border-purple-500/20 border-t-purple-500 rounded-full"
        />

        {/* Quirky message */}
        <motion.p
          key={messageIndex}
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -10 }}
          transition={{ duration: 0.5 }}
          className="text-gray-400 text-lg md:text-xl font-medium text-center"
        >
          {quirkyMessages[messageIndex]}
        </motion.p>

        {/* Progress bar */}
        <div className="w-72 md:w-96 space-y-3">
          <div className="h-1.5 bg-gray-800 rounded-full overflow-hidden">
            <motion.div
              className="h-full bg-gradient-to-r from-purple-500 to-blue-500"
              initial={{ width: "0%" }}
              animate={{ width: `${progress}%` }}
              transition={{ duration: 0.3 }}
            />
          </div>

          {/* Percentage */}
          <div className="flex justify-between items-center text-sm">
            <span className="text-gray-500">Loading assets...</span>
            <motion.span
              className="text-purple-400 font-semibold tabular-nums"
              key={progress}
              initial={{ scale: 1 }}
              animate={{ scale: [1, 1.1, 1] }}
              transition={{ duration: 0.3 }}
            >
              {progress}%
            </motion.span>
          </div>
        </div>
      </div>
    </motion.div>
  );
}
