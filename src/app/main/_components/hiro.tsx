import React from "react";

const Hiro = () => {
  return (
    <div className="flex w-full flex-col md:flex-row items-stretch gap-5">
      <div className="border h-[80vh] border-white rounded w-full p-10">
        <p className="">Hero components</p>
      </div>
      <div className="flex flex-col gap-5 w-1/3 ">
        <div className="h-full border border-white rounded p-10"></div>

        <div className=" border border-white rounded p-10"></div>
      </div>
    </div>
  );
};

export default Hiro;
