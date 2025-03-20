import React from "react";
import SiteBlock from "./siteBlock";

const Stack = () => {
  return (
    <div className="flex flex-col justify-between  mx-auto container relative px-[30px] gap-20">
      <h1 className="-mb-10 text-6xl">What I’ve Built</h1>
      <SiteBlock
        title="Artlumia"
        description="Lending site for a video production agency. <br />
          During the development of the project on Astro, a comprehensive
          performance optimization was carried out. The delayed loading of
          content in Astro (lazy loading) was used, only the elements visible to
          the user are loaded, which increased the speed of the site."
        link="https://artlumia-1.vercel.app"
        stack="Astro, TypeScript, Calendly, Lozad"
      />
      <SiteBlock
        title="KCMG"
        description="Development of a multi-page, multilingual landing website for Kazakhstan-China Mining Group Ltd (KCMG), a company specializing in mining and resource extraction. The project included rapid layout implementation within 2 days, seamless frontend-backend integration, and optimization for performance and multilingual support. The website ensures a modern user experience with a responsive design, structured content, and an intuitive interface to showcase the company's operations, services, and corporate values."
        link="https://kcmg.kz/"
        className="bg-white"
        stack="Nextjs, TypeScript, Tailwind, i18n"
      />
      <SiteBlock
        title="Atmosfera.spa"
        description="Lending site for a video production agency.
      
        During the development of the project on Astro, a comprehensive
        performance optimization was carried out. The delayed loading of
        content in Astro (lazy loading) was used, only the elements visible to
        the user are loaded, which increased the speed of the site."
        link="https://atmosfera.spa/"
        className="bg-white"
        stack="Nextjs, TypeScript"
      />
      <SiteBlock
        title="Gasyr140"
        description="Gasyr140 is an online school for preparing students for the Unified National Test. It includes
        subscription management for paid users, an admission probability assessment for various
        universities, a leaderboard, an AI-powered virtual tutor for additional support, and a mock UNT
        exam. The website is designed to display video lessons, tests, and notes uploaded by
        teachers."
        link="https://gasyr-ent.vercel.app/"
        className="bg-white"
        stack="Nextjs, TypeScript, Tailwind, HeadlessUI, Radix, Openai, Sentry"
      />
    </div>
  );
};

export default Stack;
