import Link from "next/link";
import VanckoeLogo from "@/assets/VanckoeLogo";
import { shellClass } from "@/app/main/_components/portfolio-primitives";

export default function Footer() {
  return (
    <footer className="border-t border-line bg-[#05080c]">
      <div className={`${shellClass} grid min-h-36 grid-cols-[1fr_auto] items-center gap-8 py-8 md:grid-cols-[1fr_auto_1fr] md:py-0`}>
        <VanckoeLogo width="9.5rem" height="2.28rem" />
        <p className="hidden text-[0.72rem] text-[#687b86] md:block">Frontend development · Almaty · UTC+5</p>
        <div className="flex flex-col items-end gap-1.5 text-[0.72rem] text-portfolio-muted md:justify-self-end md:flex-row md:gap-5">
          <Link className="transition-colors hover:text-accent-soft" href="https://github.com/Vanckoe" target="_blank" rel="noreferrer">GitHub</Link>
          <Link className="transition-colors hover:text-accent-soft" href="https://www.instagram.com/born_in_the_steppe/" target="_blank" rel="noreferrer">Instagram</Link>
          <Link className="transition-colors hover:text-accent-soft" href="/main#top">↑ Top</Link>
        </div>
      </div>
    </footer>
  );
}
