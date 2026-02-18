"use client";

import { motion } from "framer-motion";
import { useEffect, useState } from "react";

export default function LoadingScreen({
  onLoadingComplete,
}: {
  onLoadingComplete: () => void;
}) {
  const [progress, setProgress] = useState(0);
  const [imagesLoaded, setImagesLoaded] = useState(false);

  useEffect(() => {
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
      className="fixed inset-0 z-[9999] flex items-center justify-center bg-gradient-to-b from-black via-slate-900 to-black overflow-hidden"
    >
      {/* Animated stars background */}
      <div className="absolute inset-0 opacity-50">
        <div className="stars"></div>
        <div className="stars2"></div>
        <div className="stars3"></div>
      </div>

      {/* Loading content */}
      <div className="relative z-10 flex flex-col items-center gap-8">
        {/* Rotating rocket */}
        <motion.div
          animate={{
            rotate: [0, 360],
            y: [0, -20, 0],
          }}
          transition={{
            rotate: { duration: 3, repeat: Infinity, ease: "linear" },
            y: { duration: 2, repeat: Infinity, ease: "easeInOut" },
          }}
          className="relative"
        >
          <div className="w-24 h-24 relative">
            <svg viewBox="0 0 24 24" fill="none" className="w-full h-full">
              <path
                d="M12 2L15 8L22 9L17 14L18 21L12 17L6 21L7 14L2 9L9 8L12 2Z"
                fill="url(#gradient)"
                className="drop-shadow-[0_0_20px_rgba(168,85,247,0.8)]"
              />
              <defs>
                <linearGradient
                  id="gradient"
                  x1="0%"
                  y1="0%"
                  x2="100%"
                  y2="100%"
                >
                  <stop offset="0%" stopColor="#a855f7" />
                  <stop offset="100%" stopColor="#3b82f6" />
                </linearGradient>
              </defs>
            </svg>
          </div>
        </motion.div>

        {/* Loading text */}
        <div className="text-center space-y-4">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-3xl md:text-4xl font-bold text-white"
          >
            Loading Portfolio
          </motion.h2>

          {/* Progress bar */}
          <div className="w-64 h-2 bg-slate-800 rounded-full overflow-hidden">
            <motion.div
              className="h-full bg-gradient-to-r from-purple-500 to-blue-500"
              initial={{ width: "0%" }}
              animate={{ width: `${progress}%` }}
              transition={{ duration: 0.3 }}
            />
          </div>

          {/* Percentage */}
          <motion.p
            className="text-purple-400 text-lg font-semibold"
            key={progress}
            initial={{ scale: 1 }}
            animate={{ scale: [1, 1.1, 1] }}
            transition={{ duration: 0.3 }}
          >
            {progress}%
          </motion.p>
        </div>

        {/* Animated dots */}
        <div className="flex gap-2">
          {[0, 1, 2].map((i) => (
            <motion.div
              key={i}
              className="w-3 h-3 rounded-full bg-purple-500"
              animate={{
                scale: [1, 1.5, 1],
                opacity: [0.5, 1, 0.5],
              }}
              transition={{
                duration: 1.5,
                repeat: Infinity,
                delay: i * 0.2,
              }}
            />
          ))}
        </div>
      </div>

      <style jsx>{`
        .stars,
        .stars2,
        .stars3 {
          position: absolute;
          width: 100%;
          height: 100%;
          background: transparent;
        }

        .stars {
          background-image:
            radial-gradient(2px 2px at 20px 30px, #eee, transparent),
            radial-gradient(2px 2px at 60px 70px, #fff, transparent),
            radial-gradient(1px 1px at 50px 50px, #ddd, transparent),
            radial-gradient(1px 1px at 130px 80px, #fff, transparent),
            radial-gradient(2px 2px at 90px 10px, #eee, transparent);
          background-repeat: repeat;
          background-size: 200px 200px;
          animation: twinkle 5s ease-in-out infinite;
        }

        .stars2 {
          background-image:
            radial-gradient(1px 1px at 100px 120px, #fff, transparent),
            radial-gradient(1px 1px at 60px 170px, #eee, transparent),
            radial-gradient(1px 1px at 150px 80px, #ddd, transparent);
          background-repeat: repeat;
          background-size: 250px 250px;
          animation: twinkle 7s ease-in-out infinite;
        }

        .stars3 {
          background-image:
            radial-gradient(1px 1px at 80px 90px, #fff, transparent),
            radial-gradient(1px 1px at 180px 30px, #eee, transparent);
          background-repeat: repeat;
          background-size: 300px 300px;
          animation: twinkle 9s ease-in-out infinite;
        }

        @keyframes twinkle {
          0%,
          100% {
            opacity: 0.5;
          }
          50% {
            opacity: 1;
          }
        }
      `}</style>
    </motion.div>
  );
}
