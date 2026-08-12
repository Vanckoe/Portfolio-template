"use client";

import { useEffect, useState } from "react";
import {
  ComposableMap,
  Geographies,
  Geography,
  Graticule,
  Line,
  Marker,
  Sphere,
} from "react-simple-maps";
import { useTranslations } from "next-intl";
import { SectionHeading, sectionClass } from "./portfolio-primitives";

const geoUrl = "/features.json";

const locations = [
  { id: "KAZ", key: "kazakhstan", code: "KZ", coordinates: [71.43, 51.13] },
  { id: "USA", key: "usa", code: "US", coordinates: [-98.58, 39.83] },
  { id: "UKR", key: "ukraine", code: "UA", coordinates: [31.16, 48.38] },
  { id: "RUS", key: "russia", code: "RU", coordinates: [90, 61.5] },
  { id: "IND", key: "india", code: "IN", coordinates: [78.96, 20.59] },
  { id: "CHN", key: "china", code: "CN", coordinates: [104.19, 35.86] },
  { id: "AZE", key: "azerbaijan", code: "AZ", coordinates: [47.58, 40.14] },
  { id: "IRQ", key: "iraq", code: "IQ", coordinates: [43.68, 33.22] },
  { id: "ISR", key: "israel", code: "IL", coordinates: [34.85, 31.05] },
  { id: "GBR", key: "uk", code: "GB", coordinates: [-3.44, 55.38] },
] as const;

type LocationId = (typeof locations)[number]["id"];

export default function ProjectGeography() {
  const t = useTranslations("Portfolio.geography");
  const [activeId, setActiveId] = useState<LocationId>("KAZ");
  const [isMounted, setIsMounted] = useState(false);
  const origin = locations[0];
  const active = locations.find((location) => location.id === activeId) ?? origin;

  useEffect(() => {
    setIsMounted(true);
  }, []);

  return (
    <section id="geography" className={sectionClass} aria-labelledby="geography-title">
      <SectionHeading index="03" eyebrow={t("eyebrow")} title={t("title")} description={t("description")} titleId="geography-title" />

      <div className="grid grid-cols-1 border border-line bg-surface md:grid-cols-[minmax(0,3fr)_minmax(16rem,1fr)]">
        <div className="relative min-h-96 overflow-hidden border-b border-line bg-[#0b1017] md:min-h-[38rem] md:border-b-0 md:border-r" aria-hidden="true">
          <div className="pointer-events-none absolute left-5 top-5 z-[2] flex items-baseline gap-3">
            <span className="font-mono text-[0.68rem] text-portfolio-accent">{active.code}</span>
            <strong className="text-[1.05rem] font-medium">{t(`countries.${active.key}`)}</strong>
          </div>
          {isMounted ? (
          <ComposableMap className="min-h-96 !w-[150%] max-w-none -translate-x-[17%] md:min-h-[38rem] md:!w-full md:translate-x-0" projection="geoNaturalEarth1" width={1000} height={520}>
            <Sphere id="portfolio-sphere" fill="#0b1017" stroke="#24303d" strokeWidth={0.6} />
            <Graticule stroke="#1d2935" strokeWidth={0.35} />
            <Geographies geography={geoUrl}>
              {({ geographies }) => geographies.map((geo) => {
                const isWorkedWith = locations.some((location) => location.id === geo.id);
                const isActive = geo.id === activeId;
                return (
                  <Geography
                    key={geo.rsmKey}
                    geography={geo}
                    tabIndex={-1}
                    fill={isActive ? "#8bdcff" : isWorkedWith ? "#245b73" : "#101720"}
                    stroke="#364653"
                    strokeWidth={0.35}
                    style={{
                      default: { outline: "none", transition: "fill 180ms ease" },
                      hover: { outline: "none" },
                      pressed: { outline: "none" },
                    }}
                  />
                );
              })}
            </Geographies>
            {locations.slice(1).map((location) => (
              <Line
                key={location.id}
                from={[...origin.coordinates]}
                to={[...location.coordinates]}
                stroke={location.id === activeId ? "#bcecff" : "#44758a"}
                strokeWidth={location.id === activeId ? 1.5 : 0.55}
                strokeLinecap="round"
              />
            ))}
            {locations.map((location) => (
              <Marker key={location.id} coordinates={[...location.coordinates]}>
                <circle
                  r={location.id === activeId ? 5 : 2.5}
                  fill={location.id === activeId ? "#dff7ff" : "#75c9ed"}
                  stroke="#071018"
                  strokeWidth={1.5}
                />
              </Marker>
            ))}
          </ComposableMap>
          ) : (
            <div className="min-h-96 bg-[linear-gradient(rgba(139,220,255,0.035)_0.0625rem,transparent_0.0625rem),linear-gradient(90deg,rgba(139,220,255,0.035)_0.0625rem,transparent_0.0625rem)] bg-[size:2rem_2rem] md:min-h-[38rem]" />
          )}
        </div>

        <div className="p-5">
          <p className="mb-4 font-mono text-[0.65rem] uppercase tracking-[0.1em] text-[#60727e]">{t("countryListLabel")}</p>
          <div className="grid grid-cols-2 md:block">
            {locations.map((location, index) => (
              <button
                key={location.id}
                type="button"
                aria-pressed={activeId === location.id}
                onMouseEnter={() => setActiveId(location.id)}
                onFocus={() => setActiveId(location.id)}
                onClick={() => setActiveId(location.id)}
                className={`grid w-full grid-cols-[1.5rem_1fr_auto] items-center gap-3 border-0 border-t border-line bg-transparent py-3 text-left text-[#7e909b] transition-colors hover:text-portfolio-text aria-pressed:text-portfolio-text md:grid-cols-[2rem_1fr_auto] ${index % 2 ? "border-l pl-3 md:border-l-0 md:pl-0" : ""} ${index === locations.length - 1 ? "border-b" : ""}`}
              >
                <span className="font-mono text-[0.62rem] text-[#536671]">{String(index + 1).padStart(2, "0")}</span>
                <strong className="text-[0.8rem] font-medium">{t(`countries.${location.key}`)}</strong>
                <small className="font-mono text-[0.62rem] text-[#536671]">{location.code}</small>
              </button>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
