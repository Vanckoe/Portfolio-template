"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Burger from "@/assets/Burger";
import Logo from "@/assets/Logo";
import Link from "next/link";
// import RightTini from "@/assets/RightTini";
// import Down from "@/assets/Down";
import { useTranslations } from "next-intl";

type MobileMenuProps = {
  textColorFirstStage: string;
};

const MobileMenu: React.FC<MobileMenuProps> = ({ textColorFirstStage }) => {
  const t = useTranslations("Services"); // Подключаем перевод

  const [isOpen, setIsOpen] = useState(false);
  const [isActivitiesOpen, setIsActivitiesOpen] = useState(false);

  const handleClose = () => {
    setIsOpen(false);
    setIsActivitiesOpen(false);
  };

  // const toggleActivities = () => setIsActivitiesOpen((prev) => !prev);

  return (
    <div className="relative">
      <button
        className={`border p-2.5 md:hidden ${textColorFirstStage}`}
        onClick={() => setIsOpen(true)}
      >
        <Burger
          color={textColorFirstStage === "text-white" ? "white" : "#3E3E3E"}
        />
      </button>

      <AnimatePresence>
        {isOpen && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
              onClick={handleClose}
              className="fixed inset-0 bg-[#0f2d58] bg-opacity-50 backdrop-blur-sm z-40"
            ></motion.div>

            <motion.div
              initial={{ x: "100%" }}
              animate={{ x: "1%" }}
              exit={{ x: "100%" }}
              transition={{ duration: 0.5 }}
              className="fixed top-0 right-0 h-full w-[80%] z-50 bg-white shadow-lg p-9 flex flex-col gap-6"
            >
              <Link href={"/main"} onClick={handleClose}>
                <Logo />
              </Link>

              <nav className="flex flex-col gap-6 mt-9 text-[#3E3E3E] text-2xl font-semibold">
                {/* <button
                  className="hover:text-[#1151AB] text-sm flex items-center justify-between"
                  onClick={toggleActivities}
                >
                  {t("activities")}
                  {isActivitiesOpen ? (
                    <Down width="20" height="20" />
                  ) : (
                    <RightTini width="20" height="20" />
                  )}
                </button> */}
                <AnimatePresence>
                  {isActivitiesOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      className="flex flex-col gap-4"
                    >
                      <Link
                        href="/activity/analysis"
                        className="text-xs font-semibold opacity-70 hover:text-[#1151AB]"
                        onClick={handleClose}
                      >
                        {t("servicesList.explorationAndAnalysis")}
                        {/* Поиск и анализ месторождений */}
                      </Link>
                      <Link
                        href="/activity/geology"
                        className="text-xs font-semibold opacity-70 hover:text-[#1151AB]"
                        onClick={handleClose}
                      >
                        {t("servicesList.geologicalSurveys")}
                        {/* Геологические работы */}
                      </Link>
                      <Link
                        href="/activity/field"
                        className="text-xs font-semibold opacity-70 hover:text-[#1151AB]"
                        onClick={handleClose}
                      >
                        {t("servicesList.development")}
                        {/* Разработка месторождений */}
                      </Link>
                      <Link
                        href="/activity/construction"
                        className="text-xs font-semibold opacity-70 hover:text-[#1151AB]"
                        onClick={handleClose}
                      >
                        {t("servicesList.construction")}
                        {/* Строительство фабрик и объектов */}
                      </Link>
                      <Link
                        href="/activity/document"
                        className="text-xs font-semibold opacity-70 hover:text-[#1151AB]"
                        onClick={handleClose}
                      >
                        {t("servicesList.consulting")}
                        {/* Консалтинг */}
                      </Link>
                      <Link
                        href="/activity/mining"
                        className="text-xs font-semibold opacity-70 hover:text-[#1151AB]"
                        onClick={handleClose}
                      >
                        {t("servicesList.research")}
                        {/* Научно-исследовательские работы */}
                      </Link>
                    </motion.div>
                  )}
                </AnimatePresence>
                <Link
                  href="/main"
                  className="hover:text-[#1151AB] text-sm"
                  onClick={handleClose}
                >
                  {t("sustainableDevelopment")}
                </Link>
                <Link
                  href="https://ru.wikipedia.org/wiki/%D0%9C%D0%B5%D0%B6%D0%B4%D1%83%D0%BD%D0%B0%D1%80%D0%BE%D0%B4%D0%BD%D1%8B%D0%B9_%D0%B6%D0%B5%D0%BD%D1%81%D0%BA%D0%B8%D0%B9_%D0%B4%D0%B5%D0%BD%D1%8C"
                  className="hover:text-[#1151AB] text-sm"
                  onClick={handleClose}
                >
                  {t("aboutCompany")}
                </Link>
                {/* Медиа-центр */}

                <Link
                  href="/contacts"
                  className="hover:text-[#1151AB] text-sm"
                  onClick={handleClose}
                >
                  {t("contacts")}
                  {/* Контакты */}
                </Link>
              </nav>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </div>
  );
};

export default MobileMenu;
