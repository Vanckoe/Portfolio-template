"use client";

import dynamic from "next/dynamic";
import Link from "next/link";
import { ArrowDown, ArrowUpRight, Download, Github } from "lucide-react";
import { motion, useReducedMotion } from "framer-motion";
import { useTranslations } from "next-intl";
import { shellClass } from "./portfolio-primitives";

const CapabilityScene = dynamic(() => import("./capability-scene"), {
  ssr: false,
  loading: () => <div className="absolute inset-x-0 inset-y-8 bg-[radial-gradient(circle_at_center,rgba(139,220,255,0.14),transparent_35%)]" aria-hidden="true" />,
});

const actionClass = "inline-flex min-h-[3.25rem] flex-1 items-center justify-center gap-3 border px-5 py-3.5 text-[0.9rem] font-semibold transition hover:-translate-y-0.5 md:flex-none";
const utilityLinkClass = "inline-flex items-center gap-2 text-[0.78rem] text-portfolio-muted transition-colors hover:text-portfolio-text";

export default function PortfolioHero() {
  const t = useTranslations("Portfolio.hero");
  const reduceMotion = useReducedMotion();

  return (
    <section className={`${shellClass} relative grid min-h-0 grid-cols-1 gap-10 py-16 pb-20 md:min-h-[calc(100svh-4.75rem)] md:grid-cols-[minmax(0,1.05fr)_minmax(26rem,0.95fr)] md:items-center md:gap-16 md:py-20 md:pb-12`} aria-labelledby="hero-title">
      <motion.div
        className="relative z-[2]"
        initial={reduceMotion ? false : { opacity: 0, y: 24 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
      >
        <div className="flex items-center gap-2.5 text-[0.78rem] tracking-[0.02em] text-portfolio-muted">
          <span className="size-2 rounded-full bg-[#70e0a3] shadow-[0_0_0_0.3rem_rgba(112,224,163,0.09)]" aria-hidden="true" />
          <span>{t("availability")}</span>
          <span className="ml-auto text-[#5f727e]">Almaty · UTC+5</span>
        </div>

        <h1 id="hero-title" className="mt-6 text-[3.35rem] font-medium leading-[0.92] tracking-[-0.075em] md:mt-8 md:text-[clamp(3.5rem,5.7vw,6rem)] md:leading-[0.86]">
          {t("name")}
          <span className="block font-light text-portfolio-accent">{t("role")}</span>
        </h1>

        <p className="mt-8 max-w-[40rem] text-base leading-[1.55] text-[#b8c5cc] md:text-[1.15rem]">{t("summary")}</p>

        <div className="mt-8 flex flex-wrap gap-3">
          <Link href="#work" className={`${actionClass} border-portfolio-accent bg-portfolio-accent text-ink`}>
            {t("viewWork")}<ArrowDown size="1rem" aria-hidden="true" />
          </Link>
          <Link href="https://t.me/Vanckoe" className={`${actionClass} border-line-strong bg-white/[0.025] hover:bg-surface-raised`} target="_blank" rel="noreferrer">
            Telegram<ArrowUpRight size="1rem" aria-hidden="true" />
          </Link>
        </div>

        <dl className="mt-9 grid grid-cols-3 border-t border-line md:mt-12" aria-label={t("factsLabel")}>
          {[["10+", t("projects")], ["3+", t("years")], ["10", t("countries")]].map(([value, label], index) => (
            <div key={value} className={`pt-5 ${index ? "border-l border-line pl-4" : "pr-4"}`}>
              <dt className="text-[1.35rem] font-medium tracking-[-0.04em] md:text-[1.65rem]">{value}</dt>
              <dd className="mt-1 max-w-36 text-[0.64rem] leading-[1.35] text-portfolio-muted md:text-[0.72rem]">{label}</dd>
            </div>
          ))}
        </dl>
      </motion.div>

      <motion.div
        className="relative min-h-[28rem] overflow-hidden border border-line bg-[radial-gradient(circle_at_50%_50%,#142c3c,#091018_62%)] shadow-[inset_0_0_5rem_rgba(73,170,213,0.07)] before:pointer-events-none before:absolute before:inset-0 before:bg-[linear-gradient(rgba(139,220,255,0.045)_0.0625rem,transparent_0.0625rem),linear-gradient(90deg,rgba(139,220,255,0.045)_0.0625rem,transparent_0.0625rem)] before:bg-[size:2rem_2rem] after:pointer-events-none after:absolute after:inset-0 after:border-[1.5rem] after:border-ink/10 md:min-h-[36rem]"
        initial={reduceMotion ? false : { opacity: 0, scale: 0.96 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.85, delay: 0.08, ease: [0.22, 1, 0.36, 1] }}
      >
        <div className="absolute inset-x-5 top-5 z-[2] flex justify-between font-mono text-[0.66rem] tracking-[0.08em] text-[#8ba0ad]">

        </div>
        <CapabilityScene />
        <div className="absolute inset-x-5 bottom-5 z-[2] flex justify-between font-mono text-[0.66rem] tracking-[0.08em] text-[#8ba0ad]" aria-hidden="true">
<span>R3F · THREE.JS</span>
        </div>
        <p className="sr-only">{t("labDescription")}</p>
      </motion.div>

      <div className="absolute bottom-5 left-0 flex gap-5 md:bottom-7">
        <Link className={utilityLinkClass} href="https://github.com/Vanckoe" target="_blank" rel="noreferrer"><Github size="1rem" aria-hidden="true" /> GitHub</Link>
        <a className={utilityLinkClass} href="/Adil.pdf" download><Download size="1rem" aria-hidden="true" /> {t("downloadCv")}</a>
      </div>
    </section>
  );
}
