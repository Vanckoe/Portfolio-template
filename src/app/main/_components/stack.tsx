import React from "react";
import SiteBlock from "./siteBlock";

const Stack = () => {
  return (
    <div className="flex flex-col justify-between  mx-auto container relative px-[30px] gap-20">
      <SiteBlock
        title="Artlumia"
        description="Lending site for a video production agency. <br />
          During the development of the project on Astro, a comprehensive
          performance optimization was carried out. The delayed loading of
          content in Astro (lazy loading) was used, only the elements visible to
          the user are loaded, which increased the speed of the site."
        link="https://artlumia-1.vercel.app"
        stack="Astro, Calendly, TypeScript, Lozad"
      />
      <SiteBlock
        title="KCMG"
        description="Lending site for a video production agency.
        
          During the development of the project on Astro, a comprehensive
          performance optimization was carried out. The delayed loading of
          content in Astro (lazy loading) was used, only the elements visible to
          the user are loaded, which increased the speed of the site."
        link="https://kcmg.kz/"
        className="bg-white"
        stack="Nextjs, Tailwind, i18n, TypeScript"
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
        stack="Nextjs, TypeScript,"
      />
    </div>
  );
};

export default Stack;
