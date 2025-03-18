import React from "react";

const Hiro = () => {
  return (
    <div className="flex w-full flex-col md:flex-row h-[70vh] items-stretch gap-5">
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
        <div className="flex flex-col md:flex-row w-full justify-between items-center">
          <p>Frontend Developer</p>
          <p className="text-end">
            2 year e-commerce experience <br /> 10+ project complited
          </p>
        </div>
      </div>
      <div className="flex flex-col gap-5 w-1/3 ">
        <div className="h-full border border-white rounded p-10"></div>

        <div className=" border border-white rounded p-10"></div>
      </div>
    </div>
  );
};

export default Hiro;
