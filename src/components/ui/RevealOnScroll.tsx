"use client";

import { useEffect, useRef, type ReactNode } from "react";

interface RevealOnScrollProps {
  children: ReactNode;
  className?: string;
  direction?: "up" | "left" | "right";
}

const directionClass = {
  up: "reveal",
  left: "reveal-l",
  right: "reveal-r",
} as const;

export default function RevealOnScroll({
  children,
  className = "",
  direction = "up",
}: RevealOnScrollProps) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          el.classList.add("v");
          observer.unobserve(el);
        }
      },
      { threshold: 0.08 },
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  const cls = [directionClass[direction], className].filter(Boolean).join(" ");

  return (
    <div ref={ref} className={cls}>
      {children}
    </div>
  );
}
