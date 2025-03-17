"use client";

import { useEffect, useRef, useState } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { LockScroll } from "@/components/LockScroll";
import Image from "next/image";

const images = [
  "/tool/next.png",
  "/tool/next.png",
  "/tool/next.png",
  "/tool/next.png",
  "/tool/next.png",
  "/tool/next.png",
  "/tool/next.png",
  "/tool/next.png",
]; // Замените своими картинками

export default function PhotographySection() {
  const [scrollLocked, setScrollLocked] = useState(true);
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ container: containerRef });

  // Прогресс-бар от 0 до 100%
  const progress = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);

  useEffect(() => {
    if (scrollYProgress.get() === 1) {
      setScrollLocked(false);
    }
  }, [scrollYProgress]);

  return (
    <div className="relative h-screen flex items-center text-white overflow-hidden">
      {/* {scrollLocked && <LockScroll />}  */}
      {/* Левая часть: заголовок и текст */}
      <div className="w-1/2 pl-16">
        <h1 className="text-7xl font-serif">Photography</h1>
        <p className="mt-6 text-lg max-w-md">
          I have been into photography for about four years now: landscapes,
          portraits, events, pack shots, food shots... a bit of everything. Im
          currently shooting with a Sony A7 III and a Zeiss 24-70mm f/4.0 lens.
        </p>
        <div className="mt-6 text-gray-400">
          <p>#Adobe Photoshop</p>
          <p>#Adobe Lightroom</p>
          <p>#Adobe Camera Raw</p>
        </div>
        <motion.div
          className="border rounded-[20px] h-1 w-24 bg-gray-300"
          style={{ width: progress }}
        />
      </div>
      {/* Правая часть: колонки фотографий */}
      <div
        ref={containerRef}
        className="w-1/2 h-full overflow-y-scroll snap-mandatory snap-y"
      >
        <div className="relative flex justify-center gap-8">
          {/* Левая колонка (движется вверх) */}
          <motion.div
            className="w-1/3 space-y-3"
            initial={{ y: "100%" }}
            animate={{ y: "-100%" }}
            transition={{ ease: "linear", duration: 1, repeat: Infinity }}
          >
            {images.map((src, i) => (
              <Image
                width={500}
                height={500}
                key={i}
                src={src}
                alt={`img-${i}`}
                className="w-full rounded-lg shadow-lg"
              />
            ))}
          </motion.div>

          {/* Правая колонка (движется вниз) */}
          <motion.div
            className="w-1/3 space-y-3"
            initial={{ y: "-100%" }}
            animate={{ y: "100%" }}
            transition={{ ease: "linear", duration: 1, repeat: Infinity }}
          >
            {images.reverse().map((src, i) => (
              <Image
                width={500}
                height={500}
                key={i}
                src={src}
                alt={`img-${i}`}
                className="w-full rounded-lg shadow-lg"
              />
            ))}
          </motion.div>
        </div>
      </div>
    </div>
  );
}
