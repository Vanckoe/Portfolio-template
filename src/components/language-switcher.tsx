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
    <div className="flex items-center justify-self-end gap-2 text-[0.72rem] font-bold tracking-[0.08em] text-[#536572]" aria-label="Language">
      <button
        type="button"
        aria-pressed={currentLocale === "cn"}
        className={`border-0 bg-transparent transition-colors hover:text-portfolio-text ${currentLocale === "cn" ? "text-portfolio-text" : ""}`}
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
      <span aria-hidden="true">/</span>
      <button
        type="button"
        aria-pressed={currentLocale === "ru"}
        className={`border-0 bg-transparent transition-colors hover:text-portfolio-text ${currentLocale === "ru" ? "text-portfolio-text" : ""}`}
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
