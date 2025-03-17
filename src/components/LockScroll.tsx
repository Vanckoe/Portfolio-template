"use client";

import { useEffect } from "react";

export function LockScroll() {
  useEffect(() => {
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = "auto";
    };
  }, []);

  return null;
}
