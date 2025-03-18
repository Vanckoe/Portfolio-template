import React from "react";
import Button from "@/components/button";
import Link from "next/link";
import Image from "next/image";

const Hiro = () => {
  return (
    <div className="flex w-full flex-col md:flex-row h-[80vh]  mx-auto container relative px-[30px] items-stretch gap-5">
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
        <div className="h-full flex flex-col gap-2 text-xl border-white py-10 px-5">
          <div className="flex flex-row items-center gap-2">
            <Image
              src="https://cdn-icons-png.flaticon.com/512/733/733609.png"
              alt="Github"
              width={16}
              height={16}
              className="invert"
            />
            <Link
              href={"https://github.com/Vanckoe"}
              className="underline font-medium"
            >
              Vanckoe
            </Link>
          </div>
          <div className="flex flex-row items-center gap-2">
            <Image
              src="https://cdn-icons-png.flaticon.com/512/2111/2111463.png"
              alt="Instagram"
              width={16}
              height={16}
            />{" "}
            <Link
              href={"https://www.instagram.com/born_in_the_steppe/?hl=ru"}
              className=" underline font-medium"
            >
              Born_in_the_steppe
            </Link>
          </div>
          <div className="flex flex-row items-center gap-2">
            <Image
              src="https://cdn-icons-png.flaticon.com/512/2111/2111646.png"
              alt="Telegram"
              width={16}
              height={16}
            />{" "}
            <Link
              href={"https://t.me/Vanckoe21"}
              className=" underline font-medium"
            >
              @Vanckoe21
            </Link>
          </div>
          <div className="flex flex-row items-center gap-2">
            <Image
              src="https://cdn-icons-png.flaticon.com/512/5968/5968534.png"
              alt="Gmail"
              width={16}
              height={16}
            />{" "}
            <p className="font-medium">adiltalasbek@gmail.com</p>
          </div>
          <Button className="md:w-full mt-10">Кнопка</Button>
        </div>
      </div>
    </div>
  );
};

export default Hiro;
