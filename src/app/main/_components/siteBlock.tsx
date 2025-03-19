import React from "react";
import { LinkIcon } from "@/assets/liveIcons/Link";
import Link from "next/link";
import { cn } from "@/utils/cn";

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
  return (
    <div className="flex md:flex-row flex-col gap-10 items-start">
      {link ? (
        <iframe
          src={link}
          className={cn(className, "w-full h-[50vh] border-none")}
        ></iframe>
      ) : (
        <div className="w-full h-[50vh] flex items-center justify-center border border-gray-300">
          <p className="text-gray-500">Предпросмотр недоступен</p>
        </div>
      )}

      <div className="flex md:w-[60%] flex-col">
        <h2 className="text-5xl font-semibold">{title}</h2>

        {link && (
          <LinkIcon
            size={20}
            className="flex mt-5 flex-row underline hover:text-cyan-200 items-center gap-3"
          >
            <Link href={link} target="_blank" rel="noopener noreferrer">
              {link}
            </Link>
          </LinkIcon>
        )}

        <p className="mt-2">{description}</p>
        {stack ? (
          <p className="mt-4">
            Stack: <span className="font-bold"> {stack}</span>
          </p>
        ) : null}
      </div>
    </div>
  );
};

export default SiteBlock;
