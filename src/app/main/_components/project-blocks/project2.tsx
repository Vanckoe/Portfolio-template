import React from "react";
import SiteBlock from "../siteBlock";
import { useTranslations } from "next-intl";

const Project2 = () => {
  const t = useTranslations("Projects");

  return (
    <SiteBlock
      title={t("project2.title")}
      description={t("project2.description")}
      link="https://kcmg.vercel.app/"
      className="bg-white"
      stack="Nextjs, TypeScript, Tailwind, i18n"
    />
  );
};

export default Project2;