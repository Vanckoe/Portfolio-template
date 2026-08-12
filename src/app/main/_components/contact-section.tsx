import Link from "next/link";
import { getTranslations } from "next-intl/server";
import { sectionClass, sectionIndexClass, sectionTitleClass } from "./portfolio-primitives";

export default async function ContactSection() {
  const t = await getTranslations("Portfolio.contact");

  return (
    <section id="contact" className={`${sectionClass} grid grid-cols-1 items-start gap-16 md:grid-cols-[minmax(0,0.7fr)_minmax(30rem,1.3fr)] md:gap-24`} aria-labelledby="contact-title">
      <div>
        <p className={sectionIndexClass}>04 / {t("eyebrow")}</p>
        <h2 id="contact-title" className={sectionTitleClass}>{t("title")}</h2>
        <p className="mt-6 max-w-[28rem] text-[0.95rem] leading-[1.7] text-portfolio-muted">{t("description")}</p>
      </div>

      <div>
        <Link className="block break-all text-[1.8rem] font-light leading-tight tracking-[-0.04em] text-portfolio-text transition-colors hover:text-portfolio-accent md:text-[clamp(2rem,3.5vw,3.5rem)]" href="mailto:adiltalasbek@gmail.com">
          adiltalasbek@gmail.com
        </Link>
        <div className="mt-10 flex flex-wrap gap-x-8 gap-y-4 text-[0.82rem] text-portfolio-muted">
          <Link className="border-b border-line-strong pb-1 transition-colors hover:text-portfolio-text" href="https://t.me/Vanckoe" target="_blank" rel="noreferrer">Telegram ↗</Link>
          <a className="border-b border-line-strong pb-1 transition-colors hover:text-portfolio-text" href="/Adil.pdf" download>{t("cv")} ↓</a>
        </div>
      </div>
    </section>
  );
}
