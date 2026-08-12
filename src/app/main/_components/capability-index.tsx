"use client";

import type { CSSProperties, PointerEvent } from "react";
import { Gauge, Languages, MonitorSmartphone, PlugZap } from "lucide-react";
import { useTranslations } from "next-intl";
import { SectionHeading, sectionClass } from "./portfolio-primitives";

const capabilityKeys = ["interfaces", "motion", "localization", "integrations"] as const;
const icons = [MonitorSmartphone, Gauge, Languages, PlugZap];

function handlePointerMove(event: PointerEvent<HTMLElement>) {
  const rect = event.currentTarget.getBoundingClientRect();
  event.currentTarget.style.setProperty("--pointer-x", `${event.clientX - rect.left}px`);
  event.currentTarget.style.setProperty("--pointer-y", `${event.clientY - rect.top}px`);
}

export default function CapabilityIndex() {
  const t = useTranslations("Portfolio.capabilities");

  return (
    <section id="capabilities" className={sectionClass} aria-labelledby="capabilities-title">
      <SectionHeading index="02" eyebrow={t("eyebrow")} title={t("title")} description={t("description")} titleId="capabilities-title" />

      <div className="grid grid-cols-1 border-l border-t border-line md:grid-cols-4">
        {capabilityKeys.map((key, index) => {
          const Icon = icons[index];
          return (
            <article
              key={key}
              className="relative min-h-[21rem] overflow-hidden border-b border-r border-line bg-surface p-6 before:pointer-events-none before:absolute before:inset-0 before:bg-[radial-gradient(20rem_circle_at_var(--pointer-x)_var(--pointer-y),rgba(139,220,255,0.13),transparent_45%)] md:min-h-[25rem]"
              onPointerMove={handlePointerMove}
              style={{ "--pointer-x": "50%", "--pointer-y": "50%" } as CSSProperties}
            >
              <div className="relative flex justify-between text-portfolio-accent">
                <Icon size="1.25rem" strokeWidth={1.5} aria-hidden="true" />
                <span className="font-mono text-[0.7rem] text-[#526570]">0{index + 1}</span>
              </div>
              <h3 className="relative mt-12 text-[1.45rem] font-medium tracking-[-0.035em] md:mt-20">{t(`items.${key}.title`)}</h3>
              <p className="relative mt-3 text-[0.82rem] leading-[1.55] text-portfolio-muted">{t(`items.${key}.description`)}</p>
              <ul className="relative mt-8">
                {(t.raw(`items.${key}.facts`) as string[]).map((fact) => <li className="border-t border-line py-2.5 text-[0.72rem] text-[#bcc9cf]" key={fact}>{fact}</li>)}
              </ul>
            </article>
          );
        })}
      </div>

      <div className="flex justify-start gap-8 overflow-x-auto whitespace-nowrap border-b border-line py-5 font-mono text-[0.68rem] text-[#6e818c] md:justify-between" aria-label={t("technologyLabel")}>
        <span>React</span><span>Next.js</span><span>TypeScript</span><span>Astro</span><span>Three.js</span><span>Motion</span><span>Tailwind</span><span>PostHog</span>
      </div>
    </section>
  );
}
