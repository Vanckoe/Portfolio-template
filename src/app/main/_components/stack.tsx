
import React, { Suspense } from "react";
import { useTranslations } from "next-intl";
import dynamic from 'next/dynamic';

const Project1 = dynamic(() => import("./project-blocks/project1"), {
  loading: () => <div className="animate-pulse bg-gray-700 h-[50vh] w-full"></div>,
  ssr: false
});

const Project2 = dynamic(() => import("./project-blocks/project2"), {
  loading: () => <div className="animate-pulse bg-gray-700 h-[50vh] w-full"></div>,
  ssr: false
});

const Project3 = dynamic(() => import("./project-blocks/project3"), {
  loading: () => <div className="animate-pulse bg-gray-700 h-[50vh] w-full"></div>,
  ssr: false
});

const Project4 = dynamic(() => import("./project-blocks/project4"), {
  loading: () => <div className="animate-pulse bg-gray-700 h-[50vh] w-full"></div>,
  ssr: false
});

const Project5 = dynamic(() => import("./project-blocks/project5"), {
  loading: () => <div className="animate-pulse bg-gray-700 h-[50vh] w-full"></div>,
  ssr: false
});

const Project6 = dynamic(() => import("./project-blocks/project6"), {
  loading: () => <div className="animate-pulse bg-gray-700 h-[50vh] w-full"></div>,
  ssr: false
});
const Project7 = dynamic(() => import("./project-blocks/project7"), {
  loading: () => <div className="animate-pulse bg-gray-700 h-[50vh] w-full"></div>,
  ssr: false
});
const Project8 = dynamic(() => import("./project-blocks/project8"), {
  loading: () => <div className="animate-pulse bg-gray-700 h-[50vh] w-full"></div>,
  ssr: false
});

const Stack = () => {
  const t = useTranslations("Projects");

  return (
    <div className="w-full pb-[100px]">
      <div className="flex flex-col justify-between mx-auto container relative px-[30px] gap-20">
        <h1 className="-mb-10 text-6xl">{t("generaltitle")}</h1>
        <Suspense fallback={<div className="animate-pulse bg-gray-700 h-[50vh] w-full"></div>}>
          <Project1 />
        </Suspense>
        <Suspense fallback={<div className="animate-pulse bg-gray-700 h-[50vh] w-full"></div>}>
          <Project7 />
        </Suspense>
        <Suspense fallback={<div className="animate-pulse bg-gray-700 h-[50vh] w-full"></div>}>
          <Project6 />
        </Suspense>
        <Suspense fallback={<div className="animate-pulse bg-gray-700 h-[50vh] w-full"></div>}>
          <Project8 />
        </Suspense>
        <Suspense fallback={<div className="animate-pulse bg-gray-700 h-[50vh] w-full"></div>}>
          <Project5 />
        </Suspense>
        <Suspense fallback={<div className="animate-pulse bg-gray-700 h-[50vh] w-full"></div>}>
          <Project2 />
        </Suspense>
        <Suspense fallback={<div className="animate-pulse bg-gray-700 h-[50vh] w-full"></div>}>
          <Project3 />
        </Suspense>
        <Suspense fallback={<div className="animate-pulse bg-gray-700 h-[50vh] w-full"></div>}>
          <Project4 />
        </Suspense>
        
      </div>
    </div>
  );
};

export default Stack;
