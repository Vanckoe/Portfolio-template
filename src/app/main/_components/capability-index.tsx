"use client";

import { motion, useReducedMotion } from "framer-motion";
import { useTranslations } from "next-intl";
import { useState } from "react";
import { SectionHeading, sectionClass } from "./portfolio-primitives";

const capabilityKeys = ["interfaces", "motion", "localization", "integrations"] as const;
type PreviewViewport = "desktop" | "mobile";
type PreviewLocale = "ru" | "en";

export default function CapabilityIndex() {
  const t = useTranslations("Portfolio.capabilities");
  const reduceMotion = useReducedMotion();
  const [viewport, setViewport] = useState<PreviewViewport>("desktop");
  const [previewLocale, setPreviewLocale] = useState<PreviewLocale>("ru");

  return (
    <section id="capabilities" className={sectionClass} aria-labelledby="capabilities-title">
      <SectionHeading index="02" eyebrow={t("eyebrow")} title={t("title")} description={t("description")} titleId="capabilities-title" />

      <div className="grid grid-cols-1 gap-12 md:grid-cols-[minmax(0,1fr)_17rem] md:items-stretch md:gap-16">
        <div className="overflow-hidden border border-line bg-surface">
          <div className="flex flex-wrap items-center justify-between gap-4 border-b border-line px-4 py-3 md:px-6">
            <p className="font-mono text-[0.64rem] uppercase tracking-[0.12em] text-portfolio-muted">{t("preview.label")}</p>
            <div className="flex items-center gap-5 text-[0.7rem]">
              <div className="flex gap-3" aria-label={t("preview.viewportLabel")}>
                {(["desktop", "mobile"] as PreviewViewport[]).map((item) => (
                  <button key={item} type="button" aria-pressed={viewport === item} onClick={() => setViewport(item)} className="text-portfolio-muted transition-colors hover:text-portfolio-text aria-pressed:text-portfolio-accent">{t(`preview.${item}`)}</button>
                ))}
              </div>
              <span className="h-3 w-px bg-line" aria-hidden="true" />
              <div className="flex gap-3" aria-label={t("preview.languageLabel")}>
                {(["ru", "en"] as PreviewLocale[]).map((item) => (
                  <button key={item} type="button" aria-pressed={previewLocale === item} onClick={() => setPreviewLocale(item)} className="uppercase text-portfolio-muted transition-colors hover:text-portfolio-text aria-pressed:text-portfolio-accent">{item}</button>
                ))}
              </div>
            </div>
          </div>

          <div className="grid min-h-[31rem] place-items-center overflow-hidden bg-[radial-gradient(circle_at_50%_35%,rgba(62,155,199,0.14),transparent_24rem)] p-5 md:min-h-[38rem] md:p-10">
            <motion.div
              layout={!reduceMotion}
              transition={{ type: "spring", stiffness: 140, damping: 24 }}
              className={`relative w-full overflow-hidden border border-line-strong bg-ink shadow-[0_1.5rem_5rem_rgba(0,0,0,0.24)] ${viewport === "mobile" ? "max-w-[20rem]" : "max-w-[48rem]"}`}
            >
              <div className="flex h-11 items-center justify-between border-b border-line px-4">
                <span className="size-1.5 rounded-full bg-portfolio-accent" aria-hidden="true" />
                <div className="flex gap-4 font-mono text-[0.55rem] uppercase tracking-[0.1em] text-portfolio-muted">
                  <span>{t(`preview.copy.${previewLocale}.navWork`)}</span>
                  <span>{t(`preview.copy.${previewLocale}.navContact`)}</span>
                </div>
              </div>
              <div className={`relative min-h-[24rem] p-6 md:p-10 ${viewport === "mobile" ? "flex flex-col justify-end" : "grid grid-cols-[1fr_0.8fr] items-end gap-8"}`}>
                <motion.div
                  className={`absolute rounded-full border border-portfolio-accent/35 bg-portfolio-accent/5 ${viewport === "mobile" ? "right-[-3rem] top-10 size-48" : "right-[8%] top-[18%] size-56"}`}
                  animate={reduceMotion ? undefined : { y: [0, -8, 0], rotate: [0, 4, 0] }}
                  transition={{ duration: 7, repeat: Infinity, ease: "easeInOut" }}
                  aria-hidden="true"
                >
                  <span className="absolute inset-[22%] rounded-full border border-portfolio-accent/20" />
                </motion.div>
                <div className="relative z-[2]">
                  <p className="font-mono text-[0.58rem] uppercase tracking-[0.12em] text-portfolio-accent">{t(`preview.copy.${previewLocale}.eyebrow`)}</p>
                  <h3 className="mt-4 text-[2rem] font-light leading-[1.02] tracking-[-0.055em] md:text-[2.75rem]">{t(`preview.copy.${previewLocale}.title`)}</h3>
                  <p className="mt-5 max-w-[24rem] text-[0.72rem] leading-[1.65] text-portfolio-muted">{t(`preview.copy.${previewLocale}.description`)}</p>
                </div>
                <div className="relative z-[2] mt-8 flex items-end justify-between md:mt-0 md:justify-end">
                  <span className="border-b border-portfolio-accent pb-1 text-[0.68rem] text-portfolio-text">{t(`preview.copy.${previewLocale}.action`)}</span>
                </div>
              </div>
            </motion.div>
          </div>
        </div>

        <ul className="flex flex-col justify-between border-t border-line">
          {capabilityKeys.map((key) => (
            <li className="flex min-h-20 items-center border-b border-line py-5 text-[1rem] tracking-[-0.02em] text-[#c4d1d7] md:min-h-28" key={key}>{t(`items.${key}.title`)}</li>
          ))}
        </ul>
      </div>
    </section>
  );
}
