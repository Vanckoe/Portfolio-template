"use client";

import Image from "next/image";
import Link from "next/link";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
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

      <div className="-mr-4 mb-8 flex flex-nowrap gap-2 overflow-x-auto pr-4 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden md:mr-0 md:flex-wrap md:pr-0" aria-label={t("filterLabel")}>
        {filters.map((item) => {
          const selected = filter === item;
          return (
            <button
              key={item}
              type="button"
              aria-pressed={selected}
              onClick={() => setFilter(item)}
              className={`inline-flex flex-none items-center gap-2.5 border px-3.5 py-2.5 text-[0.78rem] transition ${selected ? "border-[#527186] bg-surface text-portfolio-text" : "border-line bg-transparent text-portfolio-muted hover:border-[#527186] hover:text-portfolio-text"}`}
            >
              {t(`filters.${item}`)}
              <span className="font-mono text-[0.62rem] text-[#60727e]">{item === "all" ? projects.length : projects.filter((p) => p.category === item).length}</span>
            </button>
          );
        })}
      </div>

      <motion.div layout={!reduceMotion} className="flex flex-col gap-12 md:grid md:grid-cols-12 md:gap-x-5 md:gap-y-16">
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
                  className={`group relative block overflow-hidden border border-line bg-surface ${featured ? "aspect-[4/3] md:aspect-[16/7]" : "aspect-[4/3] md:aspect-[16/10]"}`}
                  aria-label={`${projectT(`${project.translationKey}.title`)} — ${t("openProject")}`}
                >
                  <Image src={project.image} alt="" fill sizes={featured ? "(min-width: 762px) 80rem, 100vw" : "(min-width: 762px) 40rem, 100vw"} className="object-cover object-top saturate-[0.86] contrast-[0.97] transition duration-700 ease-out group-hover:scale-[1.025] group-hover:saturate-100 group-focus-visible:scale-[1.025]" />
                  <span className="absolute right-4 top-4 z-[2] grid size-11 place-items-center rounded-full border border-white/30 bg-[#e1f7ff]/90 text-ink backdrop-blur-xl transition group-hover:rotate-[8deg] group-hover:scale-105" aria-hidden="true"><ArrowUpRight size="1.2rem" /></span>
                  <span className="absolute bottom-3 left-3 z-[2] bg-ink/75 px-2 py-1.5 font-mono text-[0.65rem] text-white backdrop-blur-lg">{String(index + 1).padStart(2, "0")}</span>
                </Link>

                <div className="pt-5">
                  <div className="flex flex-col items-start justify-between gap-3 md:flex-row md:gap-6">
                    <div>
                      <p className="text-[0.72rem] text-[#718591]">{t(`filters.${project.category}`)}</p>
                      <h3 className="mt-1 text-[1.75rem] font-medium tracking-[-0.045em]">{projectT(`${project.translationKey}.title`)}</h3>
                    </div>
                    <div className="flex max-w-none flex-wrap justify-start gap-1.5 md:max-w-[50%] md:justify-end" aria-label={projectT("stack")}>
                      {project.stack.map((item) => <span className="border border-line px-2 py-1.5 text-[0.65rem] text-[#8ea0aa]" key={item}>{item}</span>)}
                    </div>
                  </div>
                  <p className={`mt-4 max-w-[52rem] overflow-hidden text-[0.88rem] leading-[1.65] text-[#a6b5bd] [display:-webkit-box] [-webkit-box-orient:vertical] ${featured ? "[-webkit-line-clamp:4] md:overflow-visible md:[display:block]" : "[-webkit-line-clamp:4] md:[-webkit-line-clamp:3]"}`}>{projectT(`${project.translationKey}.description`)}</p>
                  {project.designer && (
                    <p className="mt-3 text-[0.72rem] text-[#718591]">
                      {projectT("design")}: {project.designer.href ? <Link className="text-[#b8c9d1] underline underline-offset-[0.2rem]" href={project.designer.href} target="_blank" rel="noreferrer">{project.designer.label}</Link> : project.designer.label}
                    </p>
                  )}
                </div>
              </motion.article>
            );
          })}
        </AnimatePresence>
      </motion.div>
    </section>
  );
}
