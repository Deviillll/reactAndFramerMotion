import React from "react";
import MobileProjects from "./MobileProjects";

const MblProjContainer = () => {
  return (
    <div className="w-screen overflow-x-hidden mt-5 lg:hidden">
      <div>
        <h1 className="font-custombold3 my-12 text-6xl text-center ">
          Projects
        </h1>
      </div>
      <div>
        <MobileProjects />
        <MobileProjects />
      </div>
    </div>
  );
};

export default MblProjContainer;
