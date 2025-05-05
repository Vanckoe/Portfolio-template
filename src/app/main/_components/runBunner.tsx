import React from 'react';
import Image from 'next/image';

const frontendTools = [
  '/tool/MUI.png',
  '/tool/radixUI.png',
  '/tool/motiondev.png',
  '/tool/tailwind.png',
  '/tool/astro.png',
  '/tool/html.png',
  '/tool/css.png',
  '/tool/js.png',
  '/tool/ts.png',
  '/tool/openai.png',
  '/tool/react.png',
  '/tool/next.png',
  '/tool/vercel.png',
  '/tool/github.png',

];


const RunBanner = () => {
  return (
    <div className="overflow mt-36 overflow-hidden flex flex-col md:gap-5 whitespace-nowrap w-full py-4">
      <div className="inline-block animate-marquee">
        {[...frontendTools, ...frontendTools].map((src, index) => (
          <div key={index} className="inline-block mx-2 md:mx-6">
            <Image
              src={src}
              alt={`Tool ${index}`}
              width={50}
              height={50}
              className="object-contain md:hidden rounded-md"
            />
            <Image
              src={src}
              alt={`Tool ${index}`}
              width={80}
              height={80}
              className="object-contai rounded-md hidden md:block"
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default RunBanner;
