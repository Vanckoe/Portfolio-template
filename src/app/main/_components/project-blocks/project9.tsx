import React from "react";
import SiteBlock from "../siteBlock";
import { useTranslations } from "next-intl";

const Project1 = () => {
  const t = useTranslations("Projects");

  return (
    <SiteBlock
      title={t("project10.title")}
      description={t("project10.description")}
      link="https://sabina-pi.vercel.app/"
      stack="Nextjs, TypeScript, Canvas, Tailwind, TelegramAPI, AOS"
      design={t("redesign")}
      designLink="https://t.me/+o_LQSv0jojg3Y2Zi"
    />
  );
};

export default Project1;