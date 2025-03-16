import React from "react";

const Hiro = () => {
  return (
    <div className="flex mt-5 w-full flex-col md:flex-row items-stretch gap-5">
      <div className="border border-white rounded w-full p-10">
        <p className="">Hero components</p>
      </div>
      <div className="flex flex-col gap-5 border w-1/3 border-white rounded p-10"></div>
    </div>
  );
};

export default Hiro;
