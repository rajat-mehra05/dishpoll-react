import React from "react";
import Logout from "../components/signout/Logout";
import Tab from "../components/tabscreen/Tab";
import TabHero from "../components/tabscreen/TabHero";

const TabScreen = () => {
  return (
    <div>
      <div className="flex justify-end p-4">
        <Logout />
      </div>
      <div className="flex flex-col space-y-6 justify-center items-center h-full py-40">
        <TabHero />
        <div className="flex gap-12 flex-wrap justify-center">
          <Tab> Vote for Dishes </Tab>
          <Tab> Poll Results </Tab>
        </div>
      </div>
    </div>
  );
};

export default TabScreen;
