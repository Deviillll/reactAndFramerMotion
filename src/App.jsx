import React, { useEffect } from "react";

import Header from "./Componenets/Header";
import About from "./Componenets/About";

import Contact from "./Componenets/Contact";
import Projects from "./Componenets/Projects.tsx";
import AboutMe from "./Componenets/AboutMe.tsx";
import CV from "./Componenets/CV.tsx";
import MobileProjects from "./Componenets/MobileProjects.tsx";
import MblProjContainer from "./Componenets/MblProjContainer.tsx";

const App = () => {
  // useEffect(() => {
  //   (async () => {
  //     const LocomotiveScroll = (await import("locomotive-scroll")).default;
  //     const locomotiveScroll = new LocomotiveScroll();
  //   })();
  // }, []);

  return (
    <div className=" ">
      <Header />
      <AboutMe />

      <About />
      <Projects />
      <CV />

      <Contact />
      <MblProjContainer />
    </div>
  );
};

export default App;
