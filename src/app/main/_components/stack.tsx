import React, { Suspense } from 'react';
import { useTranslations } from 'next-intl';
import dynamic from 'next/dynamic';

const Project1 = dynamic(() => import('./project-blocks/project1'), {
  loading: () => (
    <div className="animate-pulse bg-gray-700 h-[50vh] w-full"></div>
  ),
  ssr: false,
});

const Project2 = dynamic(() => import('./project-blocks/project2'), {
  loading: () => (
    <div className="animate-pulse bg-gray-700 h-[50vh] w-full"></div>
  ),
  ssr: false,
});

const Project3 = dynamic(() => import('./project-blocks/project3'), {
  loading: () => (
    <div className="animate-pulse bg-gray-700 h-[50vh] w-full"></div>
  ),
  ssr: false,
});

const Project4 = dynamic(() => import('./project-blocks/project4'), {
  loading: () => (
    <div className="animate-pulse bg-gray-700 h-[50vh] w-full"></div>
  ),
  ssr: false,
});

const Project6 = dynamic(() => import('./project-blocks/project6'), {
  loading: () => (
    <div className="animate-pulse bg-gray-700 h-[50vh] w-full"></div>
  ),
  ssr: false,
});
const Project7 = dynamic(() => import('./project-blocks/project7'), {
  loading: () => (
    <div className="animate-pulse bg-gray-700 h-[50vh] w-full"></div>
  ),
  ssr: false,
});
const Project8 = dynamic(() => import('./project-blocks/project8'), {
  loading: () => (
    <div className="animate-pulse bg-gray-700 h-[50vh] w-full"></div>
  ),
  ssr: false,
});
const Project9 = dynamic(() => import('./project-blocks/project9'), {
  loading: () => (
    <div className="animate-pulse bg-gray-700 h-[50vh] w-full"></div>
  ),
  ssr: false,
});
const Project10 = dynamic(() => import('./project-blocks/project10'), {
  loading: () => (
    <div className="animate-pulse bg-gray-700 h-[50vh] w-full"></div>
  ),
  ssr: false,
});
const Project11 = dynamic(() => import('./project-blocks/project11'), {
  loading: () => (
    <div className="animate-pulse bg-gray-700 h-[50vh] w-full"></div>
  ),
  ssr: false,
});

const Stack = () => {
  const t = useTranslations('Projects');

  return (
    <div className="w-full pb-[6.25rem]">
      <div className="flex flex-col justify-between mx-auto container relative px-[1.875rem] gap-20">
        <h1 className="-mb-10 text-6xl">{t('generaltitle')}</h1>
        <Suspense
          fallback={
            <div className="animate-pulse bg-gray-700 h-[50vh] w-full"></div>
          }
        >
          <Project1 data-cta="progect1" />
        </Suspense>
        <Suspense
          fallback={
            <div className="animate-pulse bg-gray-700 h-[50vh] w-full"></div>
          }
        >
          <Project10 data-cta="progect10" />
        </Suspense>
        <Suspense
          fallback={
            <div className="animate-pulse bg-gray-700 h-[50vh] w-full"></div>
          }
        >
          <Project11 data-cta="progect11" />
        </Suspense>
        <Suspense
          fallback={
            <div className="animate-pulse bg-gray-700 h-[50vh] w-full"></div>
          }
        >
          <Project9 data-cta="progect9" />
        </Suspense>
        <Suspense
          fallback={
            <div className="animate-pulse bg-gray-700 h-[50vh] w-full"></div>
          }
        >
          <Project7 data-cta="progect7" />
        </Suspense>
        <Suspense
          fallback={
            <div className="animate-pulse bg-gray-700 h-[50vh] w-full"></div>
          }
        >
          <Project6 data-cta="progect6" />
        </Suspense>
        <Suspense
          fallback={
            <div className="animate-pulse bg-gray-700 h-[50vh] w-full"></div>
          }
        >
          <Project8 data-cta="progect8" />
        </Suspense>
        <Suspense
          fallback={
            <div className="animate-pulse bg-gray-700 h-[50vh] w-full"></div>
          }
        >
          <Project2 data-cta="progect2" />
        </Suspense>
        <Suspense
          fallback={
            <div className="animate-pulse bg-gray-700 h-[50vh] w-full"></div>
          }
        >
          <Project3 data-cta="progect3" />
        </Suspense>
        <Suspense
          fallback={
            <div className="animate-pulse bg-gray-700 h-[50vh] w-full"></div>
          }
        >
          <Project4 data-cta="progect4" />
        </Suspense>
      </div>
    </div>
  );
};

export default Stack;
