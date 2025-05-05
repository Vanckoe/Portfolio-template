'use client';
import React, { useEffect, useState } from 'react';
import {
  ComposableMap,
  Geographies,
  Geography,
  Sphere,
  Graticule,
} from 'react-simple-maps';

const geoUrl = '/features.json';
const highlightedCountries = ['KAZ', 'USA', 'UKR', 'RUS', 'SAU'];

export default function MapChart() {
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  if (!isMounted) {
    return null;
  }

  return (
    <div className="flex flex-col items-center justify-center w-full h-full">
      <h1 className="-mb-32 text-6xl">Где живут мои проекты</h1>
      
      <ComposableMap
        projectionConfig={{
          scale: 147,
          center: [0, 0]
        }}
        style={{
          width: "100%",
          height: "auto",
        }}
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
                  hover: { outline: 'none' },
                  pressed: { outline: 'none' },
                }}
              />
            ))
          }
        </Geographies>
      </ComposableMap>
    </div>
  );
}
