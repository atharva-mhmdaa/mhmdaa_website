"use client";

import { useEffect, useRef, useState, type ReactNode } from "react";

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
  const [animClass, setAnimClass] = useState("");

  useEffect(() => {
    const isTouch =
      "ontouchstart" in window || navigator.maxTouchPoints > 0;
    if (isTouch) return;

    const el = ref.current;
    if (!el) return;

    setAnimClass(directionClass[direction]);

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          el.classList.add("v");
          observer.unobserve(el);
        }
      },
      { threshold: 0.08 },
    );

    const raf = requestAnimationFrame(() => observer.observe(el));

    return () => {
      cancelAnimationFrame(raf);
      observer.disconnect();
    };
  }, [direction]);

  const cls = [animClass, className].filter(Boolean).join(" ");

  return (
    <div ref={ref} className={cls}>
      {children}
    </div>
  );
}
