"use client";

import Hero from "./components/hero";
import About from "./components/about";
import Projects from "./components/projects";
import Achievements from "./components/achievements";
import Contact from "./components/contact";

export default function Home() {
  return (
    <main className="relative min-h-screen overflow-x-hidden">
      <Hero />
      <About />
      <Projects />
      <Achievements />
      <Contact />
    </main>
  );
}
