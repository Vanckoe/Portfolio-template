import React from "react";
import Hiro from "./_components/hiro";
// import Second from "./_components/second";
import Stack from "./_components/stack";
import RunBunner from "./_components/runBunner";

const About = () => {
  return (
    <div className="flex flex-col gap-[150px] mt-[20px]">
      <Hiro />
      <RunBunner />
      {/* <Second /> */}
      <Stack />
      {/* <Second /> */}
    </div>
  );
};

export default About;
