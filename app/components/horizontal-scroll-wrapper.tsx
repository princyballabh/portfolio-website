"use client";

import { useEffect, useRef, useState } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

interface HorizontalScrollProps {
  children: React.ReactNode;
}

export default function HorizontalScrollWrapper({
  children,
}: HorizontalScrollProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const sectionsRef = useRef<HTMLDivElement>(null);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };

    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  useEffect(() => {
    // Don't apply horizontal scroll on mobile
    if (isMobile) return;

    const container = containerRef.current;
    const sections = sectionsRef.current;

    if (!container || !sections) return;

    // Small delay to ensure content is rendered
    const timeoutId = setTimeout(() => {
      // Get the scroll width
      const scrollWidth = sections.scrollWidth;
      const viewportWidth = window.innerWidth;

      // Only apply if there's content to scroll
      if (scrollWidth <= viewportWidth) return;

      // Create the horizontal scroll effect
      const tl = gsap.to(sections, {
        x: -(scrollWidth - viewportWidth),
        ease: "none",
        scrollTrigger: {
          trigger: container,
          pin: true,
          scrub: 1,
          end: () => `+=${scrollWidth}`,
          invalidateOnRefresh: true,
        },
      });

      return () => {
        tl.scrollTrigger?.kill();
        tl.kill();
      };
    }, 100);

    return () => clearTimeout(timeoutId);
  }, [isMobile]);

  // On mobile, just render children without wrapper
  if (isMobile) {
    return <>{children}</>;
  }

  return (
    <div ref={containerRef} className="relative overflow-hidden">
      <div ref={sectionsRef} className="flex w-fit">
        {children}
      </div>
    </div>
  );
}
