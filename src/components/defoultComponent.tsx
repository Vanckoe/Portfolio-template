import React from "react";
// import Image from "next/image";

const DefoultComp = () => {
  return (
    <div className="w-full">
      <div className="mx-auto container px-[30px] w-full flex flex-row "></div>
      {/* <div className="relative w-full h-96">
        <Image
          src="/about/aboutTruck.png" // Путь к изображению
          alt="Дорожный грузовик"
          layout="fill" // Занимает весь родительский контейнер
          objectFit="cover" // Обрезка изображения, чтобы покрыть контейнер
          quality={100} // Высокое качество
        />
      </div> */}
    </div>
  );
};

export default DefoultComp;
