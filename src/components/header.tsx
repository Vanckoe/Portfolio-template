"use client";

import Link from "next/link";
import { useTranslations } from "next-intl";
import LogoNew from "@/assets/logo-new";
import LanguageSwitcher from "./language-switcher";
import { shellClass } from "@/app/main/_components/portfolio-primitives";

export default function HeaderMain() {
  const t = useTranslations("Portfolio.navigation");

  return (
    <header className="sticky top-0 z-50 border-b border-portfolio-accent/10 bg-ink/80 backdrop-blur-xl">
      <div className={`${shellClass} grid min-h-[4.25rem] grid-cols-[1fr_auto] items-center gap-8 md:min-h-[4.75rem] md:grid-cols-[1fr_auto_1fr]`}>
        <Link href="/main#top" className="inline-flex w-fit items-center gap-2.5 text-xs font-bold tracking-[0.16em]" aria-label={t("homeLabel")}>
          <LogoNew width="2.5rem" height="2.5rem" color="#8bdcff" />
          <span className="hidden md:inline">VANCKOE</span>
        </Link>

        <nav className="hidden items-center gap-7 text-[0.82rem] text-portfolio-muted md:flex" aria-label={t("navigationLabel")}>
          <Link className="transition-colors hover:text-accent-soft" href="/main#work">{t("work")}</Link>
          <Link className="transition-colors hover:text-accent-soft" href="/main#capabilities">{t("capabilities")}</Link>
          <Link className="transition-colors hover:text-accent-soft" href="/main#geography">{t("geography")}</Link>
          <Link className="transition-colors hover:text-accent-soft" href="/main#contact">{t("contact")}</Link>
        </nav>

        <LanguageSwitcher textColorFirstStage="text-white" />
      </div>
    </header>
  );
}
