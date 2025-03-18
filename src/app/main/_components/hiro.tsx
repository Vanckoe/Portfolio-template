import React from "react";
import Button from "@/components/button";

const Hiro = () => {
  return (
    <div className="flex w-full flex-col md:flex-row h-[70vh]  mx-auto container relative px-[30px] items-stretch gap-5">
      <div className="w-full flex flex-col items-start">
        <div className="w-full aspect-video">
          <iframe
            title="Robot Whale"
            className="w-full h-full border-0"
            allowFullScreen
            allow="autoplay; fullscreen; xr-spatial-tracking"
            xr-spatial-tracking="true"
            execution-while-out-of-viewport="true"
            execution-while-not-rendered="true"
            web-share="true"
            src="https://sketchfab.com/models/4d11fdf6d57a4fda924e9e5623602022/embed?autostart=1&transparent=1&ui_theme=dark"
          ></iframe>
        </div>
        <h1>Adil Talasbek</h1>
        <div className="flex flex-col md:flex-row w-full md:justify-between md:items-center">
          <p className="text-start">Frontend Developer</p>
          <p className="md:text-end">
            xx year e-commerce experience <br /> 10+ project complited
          </p>
        </div>
      </div>
      <div className="flex flex-col gap-5 md:w-1/3 ">
        <div className="h-full border-l  border-white py-10 px-5">
          <div className="flex flex-row items-center justify-between">
            <p className="font-normal text-sm">Github</p>
            <p className="font-medium">Vanckoe</p>
          </div>
          <div className="flex flex-row items-center justify-between">
            <p className="font-normal text-sm">Instagram</p>
            <p className="font-medium">Vanckoe</p>
          </div>
          <div className="flex flex-row items-center justify-between">
            <p className="font-normal text-sm">Telegram</p>
            <p className="font-medium">Vanckoe</p>
          </div>
          <div className="flex flex-row items-center justify-between">
            <p className="font-normal text-sm">Gmail</p>
            <p className="font-medium">Vanckoe</p>
          </div>
        </div>

        <Button className="md:w-full">Кнопка</Button>
      </div>
    </div>
  );
};

export default Hiro;
