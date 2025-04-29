import React from "react";
import SiteBlock from "../siteBlock";
import { useTranslations } from "next-intl";

const Project1 = () => {
  const t = useTranslations("Projects");

  return (
    <SiteBlock
      title={t("project9.title")}
      description={t("project9.description")}
      link="https://youtube-academy.vercel.app/"
      stack="Nextjs, TypeScript, Static generation, Framer Motion"
      design="🇺🇦 @v_maslyanik"
      designLink="https://t.me/+o_LQSv0jojg3Y2Zi"
    />
  );
};

export default Project1;