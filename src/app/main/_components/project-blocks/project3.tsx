import React from "react";
import SiteBlock from "../siteBlock";
import { useTranslations } from "next-intl";

const Project3 = () => {
  const t = useTranslations("Projects");

  return (
    <SiteBlock
      title={t("project3.title")}
      description={t("project3.description")}
      link="https://atmosfera.spa/"
      className="bg-white"
      stack="Nextjs, TypeScript"
      design="🇰🇿 @scliqu"
      designLink="https://t.me/scliqu"
    />
  );
};

export default Project3;