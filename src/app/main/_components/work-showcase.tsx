"use client";

import Image from "next/image";
import Link from "next/link";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { useTranslations } from "next-intl";
import { useMemo, useState } from "react";
import { projects, type ProjectCategory } from "./project-data";
import { SectionHeading, sectionClass } from "./portfolio-primitives";

type Filter = "all" | ProjectCategory;
const filters: Filter[] = ["all", "platform", "corporate", "landing"];

export default function WorkShowcase() {
  const t = useTranslations("Portfolio.work");
  const projectT = useTranslations("Projects");
  const reduceMotion = useReducedMotion();
  const [filter, setFilter] = useState<Filter>("all");
  const visibleProjects = useMemo(() => projects.filter((project) => filter === "all" || project.category === filter), [filter]);

  return (
    <section id="work" className={sectionClass} aria-labelledby="work-title">
      <SectionHeading index="01" eyebrow={t("eyebrow")} title={t("title")} description={t("description")} titleId="work-title" />

      <div className="-mr-4 mb-14 flex flex-nowrap gap-7 overflow-x-auto pr-4 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden md:mr-0 md:mb-20 md:flex-wrap md:gap-10 md:pr-0" aria-label={t("filterLabel")}>
        {filters.map((item) => {
          const selected = filter === item;
          return (
            <button
              key={item}
              type="button"
              aria-pressed={selected}
              onClick={() => setFilter(item)}
              className={`flex-none border-b pb-2 text-[0.78rem] transition-colors ${selected ? "border-portfolio-accent text-portfolio-text" : "border-transparent text-portfolio-muted hover:text-portfolio-text"}`}
            >
              {t(`filters.${item}`)}
            </button>
          );
        })}
      </div>

      <motion.div layout={!reduceMotion} className="flex flex-col gap-20 md:grid md:grid-cols-12 md:gap-x-8 md:gap-y-28">
        <AnimatePresence mode="popLayout" initial={false}>
          {visibleProjects.map((project, index) => {
            const featured = index === 0;
            return (
              <motion.article
                layout={!reduceMotion}
                key={project.slug}
                className={`w-full ${featured ? "md:col-span-12" : "md:col-span-6"}`}
                initial={reduceMotion ? false : { opacity: 0, y: 18 }}
                animate={{ opacity: 1, y: 0 }}
                exit={reduceMotion ? undefined : { opacity: 0, y: 12 }}
                transition={{ duration: 0.35 }}
              >
                <Link
                  href={project.href}
                  target="_blank"
                  rel="noreferrer"
                  className={`group relative block overflow-hidden bg-surface ${featured ? "aspect-[4/3] md:aspect-[16/7]" : "aspect-[4/3] md:aspect-[16/10]"}`}
                  aria-label={`${projectT(`${project.translationKey}.title`)} — ${t("openProject")}`}
                >
                  <Image src={project.image} alt="" fill sizes={featured ? "(min-width: 762px) 80rem, 100vw" : "(min-width: 762px) 40rem, 100vw"} className="object-cover object-top saturate-[0.9] transition duration-700 ease-out group-hover:scale-[1.018] group-hover:saturate-100 group-focus-visible:scale-[1.018]" />
                </Link>

                <div className="min-w-0 pt-6">
                  <div className="flex items-baseline justify-between gap-6">
                    <div className="min-w-0">
                      <p className="text-[0.7rem] text-portfolio-muted">{t(`filters.${project.category}`)}</p>
                      <h3 className="mt-1 truncate text-[1.75rem] font-medium tracking-[-0.045em] md:text-[2rem]">{projectT(`${project.translationKey}.title`)}</h3>
                    </div>
                    <span className="hidden shrink-0 font-mono text-[0.65rem] text-[#657883] md:block" aria-hidden="true">↗</span>
                  </div>
                  <p className="mt-4 truncate text-[0.86rem] leading-[1.65] text-[#a6b5bd]">{projectT(`${project.translationKey}.description`)}</p>
                  <div className="mt-4 flex min-w-0 flex-col gap-2 text-[0.68rem] text-[#718591] md:flex-row md:items-center md:gap-5">
                    <p className="truncate" aria-label={projectT("stack")}>{project.stack.slice(0, 3).join(" · ")}</p>
                    {project.designer && (
                      <p className="truncate md:border-l md:border-line md:pl-5">
                        {projectT("design")}: {project.designer.href ? <Link className="text-[#aebdc5] underline decoration-line-strong underline-offset-4 transition-colors hover:text-portfolio-text" href={project.designer.href} target="_blank" rel="noreferrer">{project.designer.label}</Link> : project.designer.label}
                      </p>
                    )}
                  </div>
                </div>
              </motion.article>
            );
          })}
        </AnimatePresence>
      </motion.div>
    </section>
  );
}
