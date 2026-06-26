"use client";

import { useState, useEffect } from "react";
import Image from "next/image";

const images = [
  "/hero-images/image 3.jpg",
  "/hero-images/image 24.jpg",
  "/hero-images/image 25.jpg",
  "/hero-images/image 14.jpg",
  "/hero-images/image 17.jpg",
  "/hero-images/image 7.jpg",
];

export function HeroCarousel() {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % images.length);
    }, 7000);
    return () => clearInterval(timer);
  }, []);

  return (
    <>
      <div className="absolute inset-0 z-0">
        {images.map((src, index) => (
          <Image
            key={src}
            src={src}
            alt={`Hero Background ${index + 1}`}
            fill
            priority={index === 0}
            className={`object-cover transition-opacity duration-1000 ${
              index === currentIndex ? "opacity-100" : "opacity-0"
            }`}
          />
        ))}
      </div>
    </>
  );
}
