"use client";

import { useState, useEffect, useCallback } from "react";

const slides = [
  "https://images.unsplash.com/photo-1551190822-a9333d879b1f?w=1600&q=80",
  "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?w=1600&q=80",
  "/images/hero-3.jpg",
];

export default function HeroCarousel() {
  const [current, setCurrent] = useState(0);

  const next = useCallback(() => {
    setCurrent((prev) => (prev + 1) % slides.length);
  }, []);

  useEffect(() => {
    const id = setInterval(next, 5000);
    return () => clearInterval(id);
  }, [next]);

  return (
    <div className="hero-carousel">
      {slides.map((src, i) => (
        <div
          key={i}
          className={`hero-slide${i === current ? " active" : ""}`}
          style={{ backgroundImage: `url(${src})` }}
        />
      ))}
      <div className="hero-overlay" />
      <div className="hero-carousel-dots">
        {slides.map((_, i) => (
          <button
            key={i}
            className={`hcd${i === current ? " active" : ""}`}
            onClick={() => setCurrent(i)}
            aria-label={`Go to slide ${i + 1}`}
          />
        ))}
      </div>
    </div>
  );
}
