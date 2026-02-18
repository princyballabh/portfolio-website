"use client";

import { useState } from "react";
import { AnimatePresence } from "framer-motion";
import Hero from "./components/hero";
import About from "./components/about";
import Projects from "./components/projects";
import Achievements from "./components/achievements";
import Contact from "./components/contact";
import LoadingScreen from "./components/loading-screen";
import HorizontalScrollWrapper from "./components/horizontal-scroll-wrapper";

export default function Home() {
  const [loading, setLoading] = useState(true);

  return (
    <>
      <AnimatePresence mode="wait">
        {loading && (
          <LoadingScreen onLoadingComplete={() => setLoading(false)} />
        )}
      </AnimatePresence>

      <main
        className={`relative min-h-screen overflow-x-hidden ${loading ? "opacity-0" : "opacity-100"} transition-opacity duration-500`}
      >
        <Hero />
        <About />
        <Projects />
        <HorizontalScrollWrapper>
          <Achievements />
        </HorizontalScrollWrapper>
        <Contact />
      </main>
    </>
  );
}
