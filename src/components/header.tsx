"use client";

import React, { useState, useEffect } from "react";
// import Link from "next/link";
import Logo from "@/assets/Logo";
import LanguageSwitcher from "./language-switcher";
// import { useTranslations } from "next-intl";
// import ActivityMenu from "./activityMenu";
import { usePathname } from "next/navigation";

const HeaderMain = () => {
  // const t = useTranslations("Navigation");

  const [isScrolled, setIsScrolled] = useState(false);
  const pathname = usePathname();

  // Маршруты с белым текстом и логотипом
  const whiteTextRoutes = [
    "/about",
    "/technology",
    "/activity/analysis",
    "/activity/geology",
    "/activity/field",
    "/activity/construction",
    "/activity/document",
    "/activity/mining",
  ];

  // Проверяем, нужно ли использовать белый текст (только для начального экрана)
  const isOnWhiteTextRoute = whiteTextRoutes.includes(pathname);
  const useWhiteText = !isScrolled && isOnWhiteTextRoute;

  // Логика цветов
  const textColor = isScrolled
    ? "text-white"
    : useWhiteText
    ? "text-white"
    : "text-white";
  // const getLinkClassName = (route: string) => {
  //   const isActive = pathname === route;
  //   return `${textColor} ${isActive ? "font-extrabold" : "font-semibold"}`;
  // };

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > window.innerHeight);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div
    // className={"fixed top-0 z-50 shadow-md w-full transition-all duration-300"}
    // className={`${
    //   isScrolled
    //     ? "fixed top-0 z-50 shadow-md"
    //     : "absolute top-0 left-0 z-50 bg-transparent"
    // } w-full transition-all duration-300`}
    >
      <div className="mx-auto container relative px-[30px]">
        <header
          className={`flex flex-row items-center w-full gap-5 justify-between`}
        >
          <Logo />

          {/* <div className="hidden md:flex flex-row items-center gap-10">
            <Link
              href={"/main"}
              className={`text-sm  ${getLinkClassName("/main")}`}
            >
              {t("main")}
            </Link>

            <Link
              href={"/about"}
              className={`text-sm  ${getLinkClassName("/about")}`}
            >
              {t("about")}
            </Link>
          </div> */}
          <LanguageSwitcher textColorFirstStage={textColor} />
        </header>
      </div>
      {isScrolled && <div className="w-full h-[1px] bg-gray-200"></div>}
    </div>
  );
};

export default HeaderMain;
