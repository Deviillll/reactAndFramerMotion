import React from "react";
import LocomotiveScroll from "locomotive-scroll";

import Header from "./Componenets/Header";
import About from "./Componenets/About";

import Contact from "./Componenets/Contact";
import Projects from "./Componenets/Projects.tsx";
import AboutMe from "./Componenets/AboutMe.tsx";
import CV from "./Componenets/CV.tsx";

//import "node_modules/locomotive-scroll/dist/locomotive-scroll";

const App = () => {
  const locomotiveScroll = new LocomotiveScroll();

  return (
    <div className=" ">
      <Header />
      <AboutMe />

      <About />
      <Projects />
      <CV />

      <Contact />
      <div className="h-screen"></div>
    </div>
  );
};

export default App;
