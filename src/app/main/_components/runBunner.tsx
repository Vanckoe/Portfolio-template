import React from "react";
import Image from "next/image";

const frontendTools = [
  "/tool/MUI.png",
  "/tool/radixUI.png",
  "/tool/tailwind.png",
  "/tool/astro.png",
  "/tool/html.png",
  "/tool/css.png",
  "/tool/js.png",
  "/tool/ts.png",
  "/tool/react.png",
  "/tool/next.png",
  "/tool/github.png",
  "/tool/MUI.png",
  "/tool/radixUI.png",
  "/tool/tailwind.png",
  "/tool/astro.png",
  "/tool/html.png",
  "/tool/css.png",
  "/tool/js.png",
  "/tool/ts.png",
  "/tool/react.png",
  "/tool/next.png",
  "/tool/github.png",
];

const RunBanner = () => {
  return (
    <div className="overflow-hidden whitespace-nowrap w-full py-4">
      <div className="inline-block animate-marquee">
        {[...frontendTools, ...frontendTools].map((src, index) => (
          <div key={index} className="inline-block mx-2 md:mx-6">
            <Image
              src={src}
              alt={`Tool ${index}`}
              width={50}
              height={50}
              className="object-contain md:hidden"
            />
            <Image
              src={src}
              alt={`Tool ${index}`}
              width={80}
              height={80}
              className="object-contain hidden md:block"
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default RunBanner;
