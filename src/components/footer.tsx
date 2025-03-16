import React from "react";
import Link from "next/link";
import Logo from "@/assets/Logo";
import { useTranslations } from "next-intl";
import LanguageSwitcher from "./language-switcher";
const Footer = () => {
  const t = useTranslations("FooterBlock");

  return (
    <div className="w-full bg-[#020B18] mt-24 pt-5 pb-10">
      <footer className="container px-5 justify-between  text-white mx-auto w-full flex flex-col md:flex-row items-center">
        <div className="flex flex-row items-center md:items-start justify-between md:justify-start w-full md:w-fit md:flex-col gap-2.5 ">
          <Link href={"/main"}>
            <Logo />
          </Link>
          <p className="text-sm font-semibold ">
            {t("copyright")}
            {/* © Все права защищены */}
          </p>
        </div>
        <div className="flex flex-col-reverse md:flex-col items-end">
          <div className="flex flex-col-reverse w-full md:w-fit md:flex-row items-center gap-8 md:gap-12 justify-end">
            <div className="flex flex-col md:flex-row items-center gap-5 md:gap-10">
              <Link
                href={
                  "https://ru.wikipedia.org/wiki/%D0%9C%D0%B5%D0%B6%D0%B4%D1%83%D0%BD%D0%B0%D1%80%D0%BE%D0%B4%D0%BD%D1%8B%D0%B9_%D0%B6%D0%B5%D0%BD%D1%81%D0%BA%D0%B8%D0%B9_%D0%B4%D0%B5%D0%BD%D1%8C"
                }
                className="text-sm font-semibold"
              >
                {t("aboutCompany")}
                {/* О компании */}
              </Link>
              {/* <Link href={"/activity/analys"} className="text-sm font-semibold">
                {t("activities")}
                Деятельность
              </Link> */}
              <Link href={"/main"} className="text-sm font-semibold">
                {t("sustainableDevelopment")}
                {/* Технологии{" "} */}
              </Link>
              {/* <Link href={"/media"} className="text-sm font-semibold">
                {t("mediaCenter")}
                Медиа-центр
              </Link> */}
              <Link href={"/contacts"} className="text-sm font-semibold">
                {t("contacts")}
                {/* Контакты */}
              </Link>
            </div>
            {/* <button className="py-3 px-9 w-full md:w-fit flex justify-center flex-row gap-2 my-3 hover:bg-[#FFFFFF] hover:font-semibold hover:bg-opacity-30  active:bg-opacity-50 items-center border transition-colors duration-150">
              <Image
                src="/flags/china.png"
                alt="Флаг Китая"
                width={16}
                height={16}
              />
              更改为中文
            </button> */}
            <LanguageSwitcher textColorFirstStage={"text-white"} />
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
