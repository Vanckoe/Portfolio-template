"use client";
import React from "react";
import { useCallback, useState } from "react";
// import Button from "@/components/button";
import Link from "next/link";
import { useTranslations } from "next-intl";
import { GithubIcon } from "@/assets/liveIcons/Git";
import { InstagramIcon } from "@/assets/liveIcons/Insta";
import { MailCheckIcon } from "@/assets/liveIcons/Mail";
import { CheckCheckIcon } from "@/assets/liveIcons/Check";

const Hiro = () => {
  const t = useTranslations("Main");

  const [copied, setCopied] = useState(false);

  const handleCopy = useCallback(
    async (e: React.MouseEvent<HTMLAnchorElement>) => {
      e.preventDefault();
      try {
        await navigator.clipboard.writeText("adiltalasbek@gmail.com");
        setCopied(true);
        setTimeout(() => setCopied(false), 2000); // Убираем статус через 2 сек
      } catch (err) {
        console.error("Ошибка при копировании:", err);
      }
    },
    []
  );

  return (
    <div className="flex w-full flex-col md:flex-row  mx-auto container relative px-[30px] items-stretch gap-5">
      <div className="w-full flex flex-col items-start">
        <div className="w-full aspect-video">
          <iframe
            title="Robot Whale"
            className="w-full h-full border-0"
            style={{ overflow: "hidden" }}
            allowFullScreen
            allow="autoplay; fullscreen; xr-spatial-tracking"
            xr-spatial-tracking="true"
            execution-while-out-of-viewport="true"
            execution-while-not-rendered="true"
            web-share="true"
            src="https://sketchfab.com/models/4d11fdf6d57a4fda924e9e5623602022/embed?autostart=1&transparent=1&ui_theme=dark"
          />
        </div>

        <h1>
          {/* Adil Talasbek */}
          {t("title")}
        </h1>
        <div className="flex flex-col md:flex-row w-full md:justify-between md:items-center">
          <p className="text-start">
            {/* 22 y.o */}
            {t("years")}
          </p>
          <p className="md:text-end">
            {/* 3 year e-commerce experience */}
            {t("ecom")}
            <br />
            {t("exp")}
            {/* 10+ project complited */}
          </p>
        </div>
      </div>
      <div className="flex flex-col gap-5 md:w-[50%] ">
        <div className="flex flex-col items-start h-full w-full  md:px-5 justify-between">
          <div className="h-full flex flex-col gap-2 text-xl">
            <p className="text-2xl mb-3">
              {t("subtitle")}
              {/* Front-end Developer focused on creating great user interfaces;
              developing web applications using React and Next.js */}
            </p>
            <GithubIcon
              size={20}
              className="flex flex-row opacity-80 hover:opacity-100 items-center gap-3"
            >
              <Link
                href={"https://github.com/Vanckoe"}
                className="hover:underline text-xl"
              >
                Vanckoe
              </Link>
            </GithubIcon>
            <InstagramIcon
              size={20}
              className="flexflex-row opacity-80 hover:opacity-100 items-center gap-3"
            >
              <Link
                href={"https://www.instagram.com/born_in_the_steppe/?hl=ru"}
                className="hover:underline text-xl"
              >
                @born_in_the_steppe
              </Link>
            </InstagramIcon>

            <CheckCheckIcon
              size={20}
              className="flexflex-row opacity-80 hover:opacity-100 items-center gap-3"
            >
              <Link
                href={"https://t.me/Vanckoe21"}
                className="hover:underline text-xl"
              >
                @Vanckoe21
              </Link>
            </CheckCheckIcon>

            <MailCheckIcon
              size={20}
              className="flexflex-row opacity-80 hover:opacity-100 items-center gap-3"
            >
              <Link
                href={""}
                className="hover:underline text-xl relative"
                onClick={handleCopy}
              >
                adiltalasbek@gmail.com
                {copied && (
                  <span className="absolute top-full left-1/2 transform -translate-x-1/2 bg-gray-800 text-white text-xs rounded-[3px] px-2 py-1 mt-1">
                    {/* Скопировано! */}
                    {t("copy")}
                  </span>
                )}
              </Link>
            </MailCheckIcon>
          </div>
          {/* <Link href={"/about"} className="w-full">
            <Button className="md:w-full mt-10">
              {t("about")}
            </Button>
          </Link> */}
        </div>
      </div>
    </div>
  );
};

export default Hiro;
