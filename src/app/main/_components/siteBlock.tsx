import React from "react";
import { LinkIcon } from "@/assets/liveIcons/Link";
import Link from "next/link";
import { cn } from "@/utils/cn";
import { useTranslations } from "next-intl";
import GlowLink from "./gradient";
// import Button from "@/components/button";

type SiteProps = {
  title?: string;
  description?: string;
  link?: string;
  className?: string;
  stack?: string;
};

const SiteBlock: React.FC<SiteProps> = ({
  title,
  description,
  link,
  className,
  stack,
}) => {
  const t = useTranslations("Projects");

  return (
    <div className="flex md:flex-row  flex-col-reverse gap-10 items-start">
      {link ? (
        <div className="flex flex-col w-full">
          <iframe
            src={link}
            className={cn(className, "w-full h-[50vh] border-none")}
          ></iframe>
          <div className="mt-7 md:hidden">
            <GlowLink href={link || "#"}>Перейти на сайт</GlowLink>
          </div>
        </div>
      ) : (
        <div className="flex flex-col w-full">
          <div className="w-full h-[50vh] flex items-center justify-center border border-gray-300">
            <p className="text-gray-500">{t("previewError")}</p>
          </div>
          <div className="mt-7 md:hidden">
            <GlowLink href={link || "#"}>Перейти на сайт</GlowLink>
          </div>
        </div>
      )}

      <div className="flex md:w-[60%] flex-col justify-between h-full">
        <div className="flex flex-col">
          <h2 className="text-5xl font-semibold">{title}</h2>

          {link && (
            <LinkIcon
              size={20}
              className="flex mt-5 flex-row w-fit text-white opacity-80 hover:opacity-100 items-center gap-3"
            >
              <Link href={link} target="_blank" rel="noopener noreferrer">
                {link}
              </Link>
            </LinkIcon>
          )}

          {description && <p className="mt-2">{description}</p>}

          {stack && (
            <p className="mt-2">
              {t("stack")}: <span className="font-bold"> {stack}</span>
            </p>
          )}
        </div>
        <div className="mt-5 hidden md:block">
          <GlowLink href={link || "#"}>Перейти на сайт</GlowLink>
        </div>
        {/* <Button className="">Перейти на сайт</Button> */}
      </div>
    </div>
  );
};

export default SiteBlock;
