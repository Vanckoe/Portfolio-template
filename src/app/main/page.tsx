import React from "react";
import Hiro from "./_components/hiro";
// import Second from "./_components/second";
import RunBunner from "./_components/runBunner";
import ClientStack from "./_components/client-stack";
import MapChart from "./_components/map";

const About = () => {
  return (
    <div className="flex flex-col mt-[40px]">
      <Hiro />
      <RunBunner />
      <MapChart/>
      {/* <Second /> */}
      <ClientStack />
      {/* <Second /> */}
    </div>
  );
};

export default About;
