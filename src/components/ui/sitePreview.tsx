/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable @typescript-eslint/no-unused-vars */
'use client';

import React, { useRef, useState, useEffect } from 'react';
import Link from 'next/link';

interface CanvasPreviewProps {
  url: string;
}

export default function CanvasPreview({ url }: CanvasPreviewProps) {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (!url) return;
    handlePreview();
  }, [url]);

  const handlePreview = async () => {
    setLoading(true);
    try {
      const res = await fetch(
        `https://api.microlink.io?url=${encodeURIComponent(url)}&screenshot=true`
      );
      const data = await res.json();
      const imgUrl = data?.data?.screenshot?.url;

      if (imgUrl) {
        const img = new Image();
        img.crossOrigin = 'anonymous';
        img.src = imgUrl;
        img.onload = () => {
          const canvas = canvasRef.current;
          if (canvas) {
            const ctx = canvas.getContext('2d');
            if (ctx) {
              ctx.clearRect(0, 0, canvas.width, canvas.height);
              ctx.drawImage(img, 0, 0, canvas.width, canvas.height);
            }
          }
          setLoading(false);
        };
      } else {
        throw new Error('Image not found');
      }
    } catch (e) {
      alert('Не удалось получить превью.');
      setLoading(false);
    }
  };

  return (
    <Link
      href={url}
      className="relative inline-block w-full h-fit"
      target="_blank"
      rel="noopener noreferrer"
    >
      {loading && (
        <div className="absolute inset-0 z-10 flex items-center justify-center bg-white/60 backdrop-blur-sm">
          <div className="size-[3rem] border-4 border-blue-500 border-t-transparent rounded-full animate-spin"></div>
        </div>
      )}
      <canvas
        ref={canvasRef}
        width={800}
        height={520}
        className="w-full rounded shadow-lg"
      />
    </Link>
  );
}
