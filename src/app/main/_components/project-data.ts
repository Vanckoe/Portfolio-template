export type ProjectCategory = "platform" | "corporate" | "landing";

export type PortfolioProject = {
  slug: string;
  translationKey: string;
  href: string;
  image: string;
  category: ProjectCategory;
  stack: string[];
  designer?: {
    label: string;
    href?: string;
  };
};

export const projects: PortfolioProject[] = [
  {
    slug: "rigagrad",
    translationKey: "project14",
    href: "https://rigagrad.vercel.app/",
    image: "/projects/rigagrad.jpg",
    category: "corporate",
    stack: ["Next.js", "TypeScript", "Motion"],
    designer: { label: "🇷🇺 No info" },
  },
  {
    slug: "artlumia",
    translationKey: "project1",
    href: "https://artlumia-1.vercel.app",
    image: "/projects/artlumia.jpg",
    category: "landing",
    stack: ["Astro", "TypeScript", "Lazy loading"],
    designer: { label: "🇰🇿 @scliqu", href: "https://t.me/scliqu" },
  },
  {
    slug: "voost",
    translationKey: "project10",
    href: "https://scenarify-ai.vercel.app/",
    image: "/projects/voost.jpg",
    category: "platform",
    stack: ["Next.js", "AWS", "PostHog"],
    designer: { label: "🇬🇧 No info" },
  },
  {
    slug: "seomarket",
    translationKey: "project11",
    href: "https://seomarket.vercel.app/ru",
    image: "/projects/seomarket.jpg",
    category: "landing",
    stack: ["Next.js", "i18n", "EmailJS"],
    designer: {
      label: "🇺🇦 @v_maslyanik",
      href: "https://t.me/+o_LQSv0jojg3Y2Zi",
    },
  },
  {
    slug: "everest",
    translationKey: "project12",
    href: "https://everest-sable-alpha.vercel.app",
    image: "/projects/everest.jpg",
    category: "corporate",
    stack: ["Next.js", "Nodemailer", "Telegram API"],
    designer: { label: "🇰🇿 @Vanckoe", href: "https://t.me/Vanckoe" },
  },
  {
    slug: "visa-group",
    translationKey: "project8",
    href: "https://visa-group.vercel.app/",
    image: "/projects/visa-group.jpg",
    category: "landing",
    stack: ["Next.js", "Static generation", "Motion"],
    designer: {
      label: "🇺🇦 @v_maslyanik",
      href: "https://t.me/+o_LQSv0jojg3Y2Zi",
    },
  },
  {
    slug: "zypher",
    translationKey: "project7",
    href: "https://zypher-six.vercel.app",
    image: "/projects/zypher.jpg",
    category: "landing",
    stack: ["Next.js", "Video", "Framer Motion"],
    designer: { label: "🇰🇿 @Vanckoe", href: "https://t.me/Vanckoe" },
  },
  {
    slug: "youacademy",
    translationKey: "project9",
    href: "https://youtube-academy.vercel.app/",
    image: "/projects/youacademy.jpg",
    category: "landing",
    stack: ["Next.js", "Telegram API", "Google Sheets"],
    designer: {
      label: "🇺🇦 @v_maslyanik",
      href: "https://t.me/+o_LQSv0jojg3Y2Zi",
    },
  },
  {
    slug: "kcmg",
    translationKey: "project2",
    href: "https://kcmg.vercel.app/",
    image: "/projects/kcmg.jpg",
    category: "corporate",
    stack: ["Next.js", "i18n", "Interactive UI"],
    designer: { label: "🇰🇿 @scliqu", href: "https://t.me/scliqu" },
  },
  {
    slug: "gasyr",
    translationKey: "project4",
    href: "https://gasyr-ent.vercel.app/",
    image: "/projects/gasyr.jpg",
    category: "platform",
    stack: ["Next.js", "OpenAI", "Sentry"],
    designer: { label: "🇰🇿 @scliqu", href: "https://t.me/scliqu" },
  },
];
