import React from "react";
import SiteBlock from "../siteBlock";
import { useTranslations } from "next-intl";

const Project4 = () => {
  const t = useTranslations("Projects");

  return (
    <SiteBlock
      title={t("project4.title")}
      description={t("project4.description")}
      link="https://gasyr-ent.vercel.app/"
      className="bg-white"
      stack="Nextjs, TypeScript, Tailwind, HeadlessUI, Radix, Openai, Sentry, Motion.dev"
    />
  );
};

export default Project4;