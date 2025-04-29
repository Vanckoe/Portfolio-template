import React from "react";
import SiteBlock from "../siteBlock";
import { useTranslations } from "next-intl";

const Project1 = () => {
  const t = useTranslations("Projects");

  return (
    <SiteBlock
      title={t("project1.title")}
      description={t("project1.description")}
      link="https://artlumia-1.vercel.app"
      stack="Astro, TypeScript, Calendly, Lozad"
      design="🇰🇿 @scliqu"
      designLink="https://t.me/scliqu"
    />
  );
};

export default Project1;