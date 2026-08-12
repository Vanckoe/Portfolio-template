import React from "react";
import SiteBlock from "../siteBlock";
import { useTranslations } from "next-intl";

const Project13 = () => {
  const t = useTranslations("Projects");

  return (
    <SiteBlock
      title={t("project14.title")}
      description={t("project14.description")}
      link="https://rigagrad.vercel.app/"
      stack="Next.js, TypeScript, Tailwind CSS, Motion,  Telegram API"
      design="🇷🇺 no info"
    />
  );
};

export default Project13;
