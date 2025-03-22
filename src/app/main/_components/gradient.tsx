"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { useRef, useState } from "react";

type GlowLinkProps = {
  href: string;
  children: React.ReactNode;
  className?: string;
};

const GlowLink: React.FC<GlowLinkProps> = ({ href, children, className }) => {
  const linkRef = useRef<HTMLAnchorElement>(null);
  const [pos, setPos] = useState({ x: 0, y: 0 });

  const handleMouseMove = (e: React.MouseEvent) => {
    const rect = linkRef.current?.getBoundingClientRect();
    if (!rect) return;

    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    setPos({ x, y });
  };

  return (
    <Link
      href={href}
      ref={linkRef}
      onMouseMove={handleMouseMove}
      target="_blank"
      rel="noopener noreferrer"
      className={`
        relative inline-block overflow-hidden w-full md:w-fit
        rounded-[5px] text-center
        md:px-12 py-4 border border-neutral-800
        text-[#ededed] text-base tracking-normal
        transition duration-300 
         hover:border-neutral-400 
        select-none
        ${className}
      `}
    >
      {/* Glow that follows cursor */}
      <motion.div
        className="pointer-events-none absolute z-0 h-28 w-28 -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#363e46] opacity-25 blur-xl"
        animate={{ left: pos.x, top: pos.y }}
      />

      {/* Border halo glow */}
      <motion.div
        className="pointer-events-none absolute z-0 h-48 w-48 -translate-x-1/2 -translate-y-1/2 rounded-full border border-gray-400 opacity-10 blur-[8px]"
        animate={{ left: pos.x, top: pos.y }}
      />

      {/* Text */}
      <span className="relative z-10 drop-shadow-[0_0_1px_rgba(255,255,255,0.1)]">
        {children}
      </span>
    </Link>
  );
};

export default GlowLink;
