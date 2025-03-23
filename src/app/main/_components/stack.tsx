import React from "react";
import SiteBlock from "./siteBlock";
import { useTranslations } from "next-intl";

const Stack = () => {
  const t = useTranslations("Projects");

  return (
    <div className="w-full pb-[100px]">
      <div className="flex flex-col justify-between  mx-auto container relative px-[30px] gap-20">
        <h1 className="-mb-10 text-6xl">
          {/* What I’ve Built */}
          {t("generaltitle")}
        </h1>
        <SiteBlock
          title={t("project1.title")}
          description={t("project1.description")}
          link="https://artlumia-1.vercel.app"
          stack="Astro, TypeScript, Calendly, Lozad"
        />
        <SiteBlock
          title={t("project6.title")}
          description={t("project6.description")}
          link="https://gorkytheater.ru/"
          className="bg-white"
          stack="Nextjs, TypeScript, Tailwind"
        />
        <SiteBlock
          title={t("project2.title")}
          description={t("project2.description")}
          link="https://kcmg.kz/"
          className="bg-white"
          stack="Nextjs, TypeScript, Tailwind, i18n"
        />
        <SiteBlock
          title={t("project3.title")}
          description={t("project3.description")}
          link="https://atmosfera.spa/"
          className="bg-white"
          stack="Nextjs, TypeScript"
        />
        <SiteBlock
          title={t("project4.title")}
          description={t("project4.description")}
          link="https://gasyr-ent.vercel.app/"
          className="bg-white"
          stack="Nextjs, TypeScript, Tailwind, HeadlessUI, Radix, Openai, Sentry, Motion.dev"
        />{" "}
      </div>
    </div>
  );
};

export default Stack;
