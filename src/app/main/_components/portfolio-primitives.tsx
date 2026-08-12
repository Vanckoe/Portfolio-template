import type { ReactNode } from "react";

export const shellClass = "mx-auto w-[calc(100%-2rem)] md:w-[min(80rem,calc(100%-3rem))]";
export const sectionClass = `${shellClass} scroll-mt-20 border-t border-line py-20 md:py-28`;
export const sectionTitleClass = "max-w-[56rem] text-[2.85rem] font-normal leading-[0.95] tracking-[-0.065em] md:text-[clamp(2.75rem,5vw,5rem)]";
export const sectionIndexClass = "mb-3 font-mono text-[0.68rem] uppercase tracking-[0.12em] text-portfolio-accent";

type SectionHeadingProps = {
  index: string;
  eyebrow: ReactNode;
  title: ReactNode;
  description: ReactNode;
  titleId: string;
};

export function SectionHeading({ index, eyebrow, title, description, titleId }: SectionHeadingProps) {
  return (
    <div className="mb-8 grid grid-cols-1 gap-5 md:mb-12 md:grid-cols-[minmax(0,1.25fr)_minmax(17rem,0.55fr)] md:items-end md:gap-12">
      <div>
        <p className={sectionIndexClass}>{index} / {eyebrow}</p>
        <h2 id={titleId} className={sectionTitleClass}>{title}</h2>
      </div>
      <p className="text-[0.95rem] leading-[1.6] text-portfolio-muted">{description}</p>
    </div>
  );
}
