"use client";

import { Locale } from "@/i18n/config";
import { setUserLocale } from "@/i18n/user-locale";
import React, { useState, useEffect } from "react";
// import MobileMenu from "./mobileMenu";
// import Image from "next/image";

type LanguageSwitcherProps = {
  textColorFirstStage: string;
};

const LanguageSwitcher: React.FC<LanguageSwitcherProps> = (
  {
    // textColorFirstStage,
  }
) => {
  const [currentLocale, setCurrentLocale] = useState<Locale>("ru");

  // Load language from localStorage on component mount
  useEffect(() => {
    const savedLocale = localStorage.getItem("userLocale") as Locale | null;
    if (savedLocale) {
      setCurrentLocale(savedLocale);
      setUserLocale(savedLocale); // Ensure the app also knows about this locale
    }
  }, []);

  const handleLanguageChange = (lang: Locale) => {
    setCurrentLocale(lang);
    setUserLocale(lang);
    localStorage.setItem("userLocale", lang); // Save language to localStorage
  };

  return (
    <div className="flex flex-row items-center gap-3">
      <button
        className={`transition-colors flex flex-row items-center gap-2 duration-200 ${
          currentLocale === "cn"
            ? "text-white  font-bold"
            : "text-gray-400 hover:text-white hover:font-extrabold"
        }`}
        onClick={() => handleLanguageChange("cn")}
      >
        {/* <Image
          src="/flags/kz.png"
          alt="Флаг Казахстана"
          width={16}
          height={16}
        /> */}
        EN
      </button>
      <span className="text-gray-400">----</span>
      <button
        className={`transition-colors flex flex-row items-center gap-2 duration-200 ${
          currentLocale === "ru"
            ? "text-white font-bold"
            : "text-gray-400 hover:text-white hover:font-extrabold"
        }`}
        onClick={() => handleLanguageChange("ru")}
      >
        {/* <Image
          src="/flags/russia.png"
          alt="Флаг Казахстана"
          width={16}
          height={16}
        /> */}
        RU
      </button>
      {/* <MobileMenu textColorFirstStage={textColorFirstStage} /> */}
    </div>
  );
};

export default LanguageSwitcher;
