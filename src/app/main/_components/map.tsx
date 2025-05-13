'use client';
import React, { useEffect, useState } from 'react';
import {
  ComposableMap,
  Geographies,
  Geography,
  Sphere,
  Graticule,
} from 'react-simple-maps';
import { useTranslations } from 'next-intl';

const geoUrl = '/features.json';
const highlightedCountries = ['KAZ', 'USA', 'UKR', 'RUS', 'IND', 'CHN', 'AZE'];

export default function MapChart() {
  const t = useTranslations('Map');

  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  if (!isMounted) {
    return null;
  }

  return (
    <div className="flex flex-col relative my-36 gap-14 items-center justify-center w-full">
      <h1 className="hidden md:block px-5 text-center text-6xl md:text-7xl">{t('title')}</h1>
      <ComposableMap
        projection="geoNaturalEarth1"
        width={1000}
        height={500}
        viewBox="0 0 1000 500"
      >
        <Sphere id="sphere" stroke="#E4E5E650" strokeWidth={0.16} fill="none" />
        <Graticule stroke="#E4E5E650" strokeWidth={0.1} />

        <Geographies geography={geoUrl}>
          {({ geographies }) =>
            geographies.map((geo) => (
              <Geography
                key={geo.rsmKey}
                geography={geo}
                fill={
                  highlightedCountries.includes(geo.id) ? '#1151AB' : '#070c1e'
                }
                stroke="#D6D6DA"
                strokeWidth={0.4}
                style={{
                  default: { outline: 'none' },
                  hover: { outline: 'none', },
                  pressed: { outline: 'none' },
                }}
              />
            ))
          }
        </Geographies>
      </ComposableMap>
      <h1 className=" md:hidden -mb-7 -mt-40 px-5 text-center text-7xl leading-[84%] md:text-7xl">{t('title')}</h1>
      <p className="font-medium hidden py-3 px-10 bg-white text-black -mt-28 rounded-3xl md:block text-center text-xl">
        {t('subtitleTop')} <br className='hidden md:block'/>{t("subtitleBottom")}
      </p>
      <p className="font-medium  md:hidden px-7 text-center text-xl">
        {t('subtitleTop')} <br className='hidden md:block'/>{t("subtitleBottom")}
      </p>
    </div>
  );
}
