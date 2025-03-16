"use client";

import { Locale } from "@/i18n/config";
import { setUserLocale } from "@/i18n/user-locale";
import Image from "next/image";
import React, { useState, useEffect } from "react";
import MobileMenu from "./mobileMenu";

type LanguageSwitcherProps = {
  textColorFirstStage: string;
};

const LanguageSwitcher: React.FC<LanguageSwitcherProps> = ({
  textColorFirstStage,
}) => {
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
    <div className="flex flex-row items-center gap-1">
      {currentLocale === "ru" ? (
        // Button to switch to Chinese
        <button
          className={`py-3 px-9 flex flex-row gap-2 my-3 items-center border transition-colors duration-150 ${textColorFirstStage}`}
          onClick={() => handleLanguageChange("cn")}
        >
          <Image
            src="/flags/kz.png"
            alt="Флаг Казахстана"
            width={16}
            height={16}
          />
          Қазақша
        </button>
      ) : (
        // Button to switch to Russian
        <button
          className={`py-3 px-9 flex flex-row gap-2 my-3 items-center border transition-colors duration-150 ${textColorFirstStage}`}
          onClick={() => handleLanguageChange("ru")}
        >
          <Image
            src="/flags/russia.png"
            alt="Флаг России"
            width={16}
            height={16}
          />
          Русский
        </button>
      )}
      <MobileMenu textColorFirstStage={textColorFirstStage} />
    </div>
  );
};

export default LanguageSwitcher;
