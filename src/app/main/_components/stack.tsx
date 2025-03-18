import React from "react";
import Image from "next/image";

const frontendTools = [
  "/tool/react.png",
  "/tool/next.png",
  "/tool/ts.png",
  "/tool/vercel.png",
  "/tool/js.png",
];

const otherTools = [
  "/tool/tailwind.png",
  "/tool/radixUI.png",
  "/tool/MUI.png",
  "/tool/nxt.png",
];

const Stack = () => {
  return (
    <div className="flex flex-col md:flex-row justify-between gap-5 h-[70vh]">
      <div className="flex flex-col w-1/2 border justify-center rounded-sm p-4">
        <h1>Frontend Development</h1>
        <h2>Here need some subtitle</h2>
      </div>

      <div className="flex flex-col md:flex-row w-1/2 border rounded-sm gap-4 p-4">
        {/* Первая колонка с frontendTools */}
        <div className="flex flex-col w-full items-center gap-4 overflow-auto">
          {frontendTools.map((src, index) => (
            <div key={index} className="relative w-[150px] h-[150px]">
              <Image
                src={src}
                alt={`Tool ${index}`}
                fill
                className="object-contain"
              />
            </div>
          ))}
        </div>

        {/* Вторая колонка с otherTools */}
        <div className="flex flex-col w-full items-center gap-4 overflow-auto">
          {otherTools.map((src, index) => (
            <div key={index} className="relative w-[150px] h-[150px]">
              <Image
                src={src}
                alt={`Tool ${index}`}
                fill
                className="object-contain"
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Stack;
