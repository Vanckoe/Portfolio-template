import React from "react";
import Hiro from "./_components/hiro";
// import Second from "./_components/second";
import RunBunner from "./_components/runBunner";
import ClientStack from "./_components/client-stack";

const About = () => {
  return (
    <div className="flex flex-col mt-[40px] gap-[200px]">
      <Hiro />
      <RunBunner />
      {/* <Second /> */}
      <ClientStack />
      {/* <Second /> */}
    </div>
  );
};

export default About;
