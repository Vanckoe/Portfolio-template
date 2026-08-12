import Link from "next/link";
import { ArrowUpRight, Download, Mail } from "lucide-react";
import { getTranslations } from "next-intl/server";
import { sectionClass, sectionIndexClass, sectionTitleClass } from "./portfolio-primitives";

const rowClass = "group grid grid-cols-[5rem_minmax(0,1fr)_auto] items-center gap-4 border-b border-line py-6 transition hover:bg-portfolio-accent/[0.035] hover:px-4 hover:text-accent-soft md:grid-cols-[9rem_1fr_auto]";
const labelClass = "flex items-center gap-2 text-xs text-portfolio-muted";

export default async function ContactSection() {
  const t = await getTranslations("Portfolio.contact");

  return (
    <section id="contact" className={`${sectionClass} grid grid-cols-1 items-start gap-12 md:grid-cols-[minmax(0,0.8fr)_minmax(30rem,1.2fr)] md:gap-20`} aria-labelledby="contact-title">
      <div>
        <p className={sectionIndexClass}>04 / {t("eyebrow")}</p>
        <h2 id="contact-title" className={sectionTitleClass}>{t("title")}</h2>
        <p className="mt-6 max-w-[30rem] text-[0.95rem] leading-[1.6] text-portfolio-muted">{t("description")}</p>
      </div>

      <div className="border-t border-line">
        <Link className={rowClass} href="mailto:adiltalasbek@gmail.com">
          <span className={labelClass}><Mail size="1.1rem" aria-hidden="true" /> Email</span>
          <strong className="overflow-hidden text-ellipsis text-[0.82rem] font-medium md:text-base">adiltalasbek@gmail.com</strong>
          <ArrowUpRight size="1.2rem" aria-hidden="true" />
        </Link>
        <Link className={rowClass} href="https://t.me/Vanckoe" target="_blank" rel="noreferrer">
          <span className={labelClass}>Telegram</span><strong className="text-[0.82rem] font-medium md:text-base">@Vanckoe</strong><ArrowUpRight size="1.2rem" aria-hidden="true" />
        </Link>
        <a className={rowClass} href="/Adil.pdf" download>
          <span className={labelClass}><Download size="1.1rem" aria-hidden="true" /> PDF</span><strong className="text-[0.82rem] font-medium md:text-base">{t("cv")}</strong><ArrowUpRight size="1.2rem" aria-hidden="true" />
        </a>
      </div>
    </section>
  );
}
