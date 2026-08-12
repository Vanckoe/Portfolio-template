"use client";

import dynamic from "next/dynamic";
import Link from "next/link";
import { motion, useReducedMotion } from "framer-motion";
import { useTranslations } from "next-intl";
import { shellClass } from "./portfolio-primitives";

const CapabilityScene = dynamic(() => import("./capability-scene"), {
  ssr: false,
  loading: () => <div className="absolute inset-x-0 inset-y-8 bg-[radial-gradient(circle_at_center,rgba(139,220,255,0.14),transparent_35%)]" aria-hidden="true" />,
});

export default function PortfolioHero() {
  const t = useTranslations("Portfolio.hero");
  const reduceMotion = useReducedMotion();

  return (
    <>
      <section className={`${shellClass} relative min-h-[calc(100svh-4.25rem)] overflow-hidden py-12 md:min-h-[calc(100svh-4.75rem)] md:py-16`} aria-labelledby="hero-title">
        <motion.h1
          id="hero-title"
          className="relative z-[2] max-w-[68rem] text-[3.5rem] font-medium leading-[0.9] tracking-[-0.075em] md:text-[clamp(4.5rem,8.5vw,8.75rem)] md:leading-[0.84]"
          initial={reduceMotion ? false : { opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
        >
          {t("name")}
          <span className="block font-light text-portfolio-accent">{t("role")}</span>
        </motion.h1>

        <motion.div
          className="absolute inset-x-0 bottom-16 top-[15rem] overflow-hidden bg-[radial-gradient(circle_at_58%_48%,rgba(43,129,172,0.2),transparent_34rem)] md:bottom-12 md:left-[30%] md:top-10"
          initial={reduceMotion ? false : { opacity: 0, scale: 0.96 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
        >
          <CapabilityScene />
          <p className="sr-only">{t("labDescription")}</p>
        </motion.div>

        <div className="absolute bottom-7 left-0 z-[2] flex items-center gap-3 font-mono text-[0.65rem] uppercase tracking-[0.14em] text-portfolio-muted md:bottom-9">
          <span>{t("scroll")}</span>
          <span className="h-px w-12 bg-line-strong" aria-hidden="true" />
        </div>
      </section>

      <section className={`${shellClass} grid grid-cols-1 gap-10 border-t border-line py-16 md:grid-cols-[minmax(0,1fr)_auto] md:items-end md:gap-20 md:py-24`} aria-label={t("introductionLabel")}>
        <p className="max-w-[54rem] text-[1.65rem] font-light leading-[1.35] tracking-[-0.035em] text-[#c4d1d7] md:text-[clamp(1.75rem,3vw,2.75rem)]">{t("summary")}</p>
        <div className="flex gap-6 text-[0.82rem]">
          <Link className="border-b border-portfolio-accent pb-1 text-portfolio-text transition-colors hover:text-portfolio-accent" href="#work">{t("viewWork")}</Link>
          <Link className="border-b border-line-strong pb-1 text-portfolio-muted transition-colors hover:text-portfolio-text" href="https://t.me/Vanckoe" target="_blank" rel="noreferrer">Telegram</Link>
        </div>
      </section>
    </>
  );
}
