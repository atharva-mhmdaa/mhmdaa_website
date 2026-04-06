"use client";

import { useEffect, useRef, useState } from "react";

interface AnimatedCounterProps {
  target: number;
  suffix?: string;
  className?: string;
}

function runCount(
  target: number,
  setDisplay: (n: number) => void,
) {
  const duration = 1800;
  let start: number | null = null;
  const step = (ts: number) => {
    if (!start) start = ts;
    const progress = Math.min((ts - start) / duration, 1);
    setDisplay(Math.floor(progress * target));
    if (progress < 1) requestAnimationFrame(step);
  };
  requestAnimationFrame(step);
}

export default function AnimatedCounter({
  target,
  suffix = "",
  className,
}: AnimatedCounterProps) {
  const ref = useRef<HTMLSpanElement>(null);
  const [display, setDisplay] = useState(0);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const isTouch =
      "ontouchstart" in window || navigator.maxTouchPoints > 0;

    if (isTouch) {
      runCount(target, setDisplay);
      return;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          observer.unobserve(el);
          runCount(target, setDisplay);
        }
      },
      { threshold: 0.3 },
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, [target]);

  return (
    <span ref={ref} className={className}>
      {display}
      {suffix && <span className="stat-plus">{suffix}</span>}
    </span>
  );
}
