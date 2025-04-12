import React from "react";
import SiteBlock from "../siteBlock";
import { useTranslations } from "next-intl";

const Project5 = () => {
  const t = useTranslations("Projects");

  return (
    <SiteBlock
      title={t("project6.title")}
      description={t("project6.description")}
      link="https://gorkytheater.ru/"
      className="bg-white"
      stack="Nextjs, TypeScript, Tailwind"
    />
  );
};

export default Project5;