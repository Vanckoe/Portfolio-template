import Link from "next/link";
import { ArrowUpRight, CheckCheck, Github, Instagram } from "lucide-react";

type ContactSocialLinksProps = {
  label: string;
};

const socialLinks = [
  {
    platform: "GitHub",
    handle: "Vanckoe",
    href: "https://github.com/Vanckoe",
    icon: Github,
  },
  {
    platform: "Instagram",
    handle: "@born_in_the_steppe",
    href: "https://www.instagram.com/born_in_the_steppe/",
    icon: Instagram,
  },
  {
    platform: "Telegram",
    handle: "@Vanckoe",
    href: "https://t.me/Vanckoe",
    icon: CheckCheck,
  },
] as const;

const linkClass = "group grid min-h-20 grid-cols-[2rem_minmax(0,1fr)_auto] items-center gap-4 border-b border-line py-4 text-portfolio-muted transition-colors hover:text-portfolio-text focus-visible:text-portfolio-text md:min-h-24 md:grid-cols-[2.25rem_minmax(0,1fr)_auto]";

export default function ContactSocialLinks({ label }: ContactSocialLinksProps) {
  return (
    <nav className="mt-12 border-t border-line md:mt-16" aria-label={label}>
      <ul>
        {socialLinks.map(({ platform, handle, href, icon: Icon }) => (
          <li key={href}>
            <Link
              className={linkClass}
              href={href}
              target="_blank"
              rel="noreferrer"
              aria-label={`${platform} — ${handle}`}
            >
              <Icon className="size-7 stroke-[1.5] transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:scale-105 group-focus-visible:-translate-y-0.5 motion-reduce:transform-none motion-reduce:transition-none" aria-hidden="true" />
              <span className="min-w-0 truncate text-[1.15rem] font-light tracking-[-0.02em] text-current md:text-[1.35rem]">{handle}</span>
              <ArrowUpRight className="size-4 text-portfolio-muted transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-focus-visible:-translate-y-0.5 group-focus-visible:translate-x-0.5 motion-reduce:transform-none motion-reduce:transition-none" aria-hidden="true" />
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
}
