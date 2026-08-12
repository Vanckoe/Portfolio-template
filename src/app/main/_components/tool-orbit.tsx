"use client";

import Image from "next/image";
import { useTranslations } from "next-intl";
import { useEffect, useRef, useState, type PointerEvent } from "react";

const tools = [
  { name: "Material UI", src: "/tool/MUI.png" },
  { name: "Astro", src: "/tool/astro.png" },
  { name: "CSS", src: "/tool/css.png" },
  { name: "GitHub", src: "/tool/github.png" },
  { name: "HTML", src: "/tool/html.png" },
  { name: "JavaScript", src: "/tool/js.png" },
  { name: "Motion", src: "/tool/motiondev.png" },
  { name: "Next.js", src: "/tool/next.png" },
  { name: "Next.js Mark", src: "/tool/nxt.png" },
  { name: "OpenAI", src: "/tool/openai.png" },
  { name: "Radix UI", src: "/tool/radixUI.png" },
  { name: "React", src: "/tool/react.png" },
  { name: "Tailwind CSS", src: "/tool/tailwind.png" },
  { name: "TypeScript", src: "/tool/ts.png" },
  { name: "Vercel", src: "/tool/vercel.png" },
] as const;

const baseSpeed = -34;
const maxSpeed = 150;

function clamp(value: number, min: number, max: number) {
  return Math.min(Math.max(value, min), max);
}

export default function ToolOrbit() {
  const t = useTranslations("Portfolio.tools");
  const sectionRef = useRef<HTMLElement>(null);
  const trackRef = useRef<HTMLDivElement>(null);
  const segmentRef = useRef<HTMLDivElement>(null);
  const offsetRef = useRef(0);
  const segmentWidthRef = useRef(1);
  const speedRef = useRef(baseSpeed);
  const targetSpeedRef = useRef(baseSpeed);
  const pausedRef = useRef(false);
  const draggingRef = useRef(false);
  const didDragRef = useRef(false);
  const pointerStartRef = useRef({ x: 0, offset: 0 });
  const lastPointerRef = useRef({ x: 0, time: 0 });
  const [activeTool, setActiveTool] = useState<string>(tools[0].name);
  const [paused, setPaused] = useState(false);
  const [direction, setDirection] = useState<"left" | "right">("left");
  const [speedLevel, setSpeedLevel] = useState(1);

  useEffect(() => {
    pausedRef.current = paused;
    if (!paused) targetSpeedRef.current = direction === "left" ? baseSpeed * speedLevel : -baseSpeed * speedLevel;
  }, [direction, paused, speedLevel]);

  useEffect(() => {
    const track = trackRef.current;
    const segment = segmentRef.current;
    if (!track || !segment) return;

    const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)");
    const updateWidth = () => {
      segmentWidthRef.current = Math.max(segment.getBoundingClientRect().width, 1);
    };
    updateWidth();

    const resizeObserver = new ResizeObserver(updateWidth);
    resizeObserver.observe(segment);

    let frame = 0;
    let previousTime = performance.now();

    const animate = (time: number) => {
      const delta = Math.min((time - previousTime) / 1000, 0.05);
      previousTime = time;

      const shouldStop = reduceMotion.matches || pausedRef.current;
      const desiredSpeed = shouldStop ? 0 : targetSpeedRef.current;
      speedRef.current = shouldStop ? 0 : speedRef.current + (desiredSpeed - speedRef.current) * Math.min(delta * 6, 1);

      if (!draggingRef.current) offsetRef.current += speedRef.current * delta;

      const segmentWidth = segmentWidthRef.current;
      while (offsetRef.current <= -segmentWidth) offsetRef.current += segmentWidth;
      while (offsetRef.current > 0) offsetRef.current -= segmentWidth;
      track.style.transform = `translate3d(${offsetRef.current}px, 0, 0)`;

      frame = requestAnimationFrame(animate);
    };

    frame = requestAnimationFrame(animate);
    return () => {
      cancelAnimationFrame(frame);
      resizeObserver.disconnect();
    };
  }, []);

  const updateCourse = (clientX: number) => {
    const section = sectionRef.current;
    if (!section || pausedRef.current) return;

    const rect = section.getBoundingClientRect();
    const normalized = clamp((clientX - rect.left) / rect.width, 0, 1);
    const signedDistance = (normalized - 0.5) * 2;
    const nextDirection = signedDistance < 0 ? "right" : "left";
    const nextLevel = 0.45 + Math.abs(signedDistance) * 2.1;

    targetSpeedRef.current = -signedDistance * maxSpeed;
    setDirection(nextDirection);
    setSpeedLevel(Number(nextLevel.toFixed(1)));
  };

  const handlePointerDown = (event: PointerEvent<HTMLElement>) => {
    if (event.button !== 0) return;
    draggingRef.current = true;
    didDragRef.current = false;
    pointerStartRef.current = { x: event.clientX, offset: offsetRef.current };
    lastPointerRef.current = { x: event.clientX, time: performance.now() };
    event.currentTarget.setPointerCapture(event.pointerId);
  };

  const handlePointerMove = (event: PointerEvent<HTMLElement>) => {
    if (!draggingRef.current) return;

    const deltaX = event.clientX - pointerStartRef.current.x;
    if (Math.abs(deltaX) > 6) didDragRef.current = true;
    offsetRef.current = pointerStartRef.current.offset + deltaX;

    const now = performance.now();
    const elapsed = Math.max(now - lastPointerRef.current.time, 1);
    speedRef.current = clamp(((event.clientX - lastPointerRef.current.x) / elapsed) * 1000, -maxSpeed, maxSpeed);
    lastPointerRef.current = { x: event.clientX, time: now };
  };

  const handlePointerUp = (event: PointerEvent<HTMLElement>) => {
    if (!draggingRef.current) return;
    draggingRef.current = false;
    targetSpeedRef.current = speedRef.current;
    setDirection(speedRef.current < 0 ? "left" : "right");
    setSpeedLevel(Number(clamp(Math.abs(speedRef.current) / Math.abs(baseSpeed), 0.4, 2.5).toFixed(1)));
    event.currentTarget.releasePointerCapture(event.pointerId);
  };

  const togglePaused = () => setPaused((current) => !current);

  const renderTools = (duplicate = false) => (
    <div ref={duplicate ? undefined : segmentRef} className="flex shrink-0 gap-3 pr-3 md:gap-5 md:pr-5" aria-hidden={duplicate || undefined}>
      {tools.map((tool) => {
        const cardClass = "group relative grid size-28 shrink-0 place-items-center overflow-hidden border border-line bg-surface/80 p-6 text-portfolio-muted transition-[border-color,background-color] duration-300 hover:border-line-strong hover:bg-surface-raised focus-visible:border-portfolio-accent md:size-36 md:p-8";
        const toolImage = (
          <Image
            src={tool.src}
            alt=""
            width={144}
            height={144}
            sizes="(min-width: 762px) 9rem, 7rem"
            draggable={false}
            className="size-full object-contain opacity-70 grayscale transition-[filter,opacity,transform] duration-300 group-hover:scale-110 group-hover:opacity-100 group-hover:grayscale-0 group-focus-visible:scale-110 group-focus-visible:opacity-100 group-focus-visible:grayscale-0 motion-reduce:transition-none"
          />
        );

        if (duplicate) {
          return <div key={`duplicate-${tool.src}`} className={cardClass} onMouseEnter={() => setActiveTool(tool.name)}>{toolImage}</div>;
        }

        return (
          <button
            key={tool.src}
            type="button"
            className={cardClass}
            aria-label={`${tool.name}. ${paused ? t("resume") : t("pause")}`}
            onMouseEnter={() => setActiveTool(tool.name)}
            onFocus={() => setActiveTool(tool.name)}
            onClick={() => {
              if (!didDragRef.current) togglePaused();
            }}
          >
            {toolImage}
          </button>
        );
      })}
    </div>
  );

  return (
    <section
      ref={sectionRef}
      className="relative isolate my-6 overflow-hidden border-y border-line bg-surface/30 py-5 before:pointer-events-none before:absolute before:inset-0 before:-z-10 before:bg-[url('/tool/noise.png')] before:bg-cover before:bg-center before:opacity-[0.035] after:pointer-events-none after:absolute after:inset-0 after:-z-10 after:bg-[url('/tool/nooice.png')] after:opacity-[0.018] md:my-8 md:py-7"
      aria-labelledby="tools-title"
      onPointerMove={(event) => {
        if (!draggingRef.current && event.pointerType !== "touch") updateCourse(event.clientX);
      }}
      onPointerLeave={() => {
        if (!draggingRef.current && !pausedRef.current) targetSpeedRef.current = baseSpeed;
      }}
    >
      <div className="mx-auto mb-5 w-[calc(100%-2rem)] md:mb-7 md:w-[min(80rem,calc(100%-3rem))]">
        <div className="min-w-0">
          <h2 id="tools-title" className="font-mono text-[0.65rem] uppercase tracking-[0.12em] text-portfolio-accent">{t("title")}</h2>
          <p className="mt-1 truncate text-[0.72rem] text-portfolio-muted">{activeTool} · {direction === "left" ? "←" : "→"} {speedLevel.toFixed(1)}×</p>
        </div>
      </div>

      <div
        className="cursor-grab touch-pan-y select-none overflow-hidden active:cursor-grabbing"
        onPointerDown={handlePointerDown}
        onPointerMove={handlePointerMove}
        onPointerUp={handlePointerUp}
        onPointerCancel={handlePointerUp}
      >
        <div ref={trackRef} className="flex w-max will-change-transform">
          {renderTools()}
          {renderTools(true)}
        </div>
      </div>

    </section>
  );
}
