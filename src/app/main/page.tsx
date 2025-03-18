import React from "react";
import Hiro from "./_components/hiro";
import Second from "./_components/second";
import Stack from "./_components/stack";

const About = () => {
  return (
    <div className="flex flex-col mx-auto container relative px-[30px] gap-[150px] mt-[20px]">
      <Hiro />
      {/* <Second /> */}
      <Stack />
      <Second />
    </div>
  );
};

export default About;
