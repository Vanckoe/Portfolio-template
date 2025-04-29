import React from "react";
import SiteBlock from "../siteBlock";
import { useTranslations } from "next-intl";

const Project6 = () => {
  const t = useTranslations("Projects");

  return (
    <SiteBlock
      title={t("project7.title")}
      description={t("project7.description")}
      link="https://zypher-six.vercel.app"
      stack="Next.js, TypeScript, Tailwind, Framer Motion"
      design="🇰🇿 @Vanckoe"
      designLink="https://t.me/Vanckoe"
    />
  );
};

export default Project6;