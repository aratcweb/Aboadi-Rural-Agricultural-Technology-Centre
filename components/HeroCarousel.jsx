"use client";

import { useState, useEffect } from "react";
import Image from "next/image";

const images = [
  { src: "/hero-images/image 3.webp", position: "object-center" },
  { src: "/hero-images/image 24.webp", position: "object-top" }, // Often better for faces/people
  { src: "/hero-images/image 25.webp", position: "object-center" },
  { src: "/hero-images/image 14.webp", position: "object-center" },
  { src: "/hero-images/image 17.webp", position: "object-top" }, // Adjust based on subject
  { src: "/hero-images/image 7.webp", position: "object-center" },
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
        {images.map((img, index) => (
          <Image
            key={img.src}
            src={img.src}
            alt={`Hero Background ${index + 1}`}
            fill
            priority={index === 0}
            className={`object-cover ${img.position} transition-opacity duration-1000 ${
              index === currentIndex ? "opacity-100" : "opacity-0"
            }`}
          />
        ))}
      </div>
    </>
  );
}
