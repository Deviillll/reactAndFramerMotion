import React, { useEffect } from "react";

import Header from "./Componenets/Header";
import About from "./Componenets/About";

import Contact from "./Componenets/Contact";
import Projects from "./Componenets/Projects.tsx";
import AboutMe from "./Componenets/AboutMe.tsx";
import CV from "./Componenets/CV.tsx";
import MblProjContainer from "./Componenets/MblProjContainer.tsx";
import Lenis from "lenis";
import "lenis/dist/lenis.css";
import Marque from "./Componenets/Marque.tsx";
import Skills from "./Componenets/Skills.tsx";
import ContactComponent from "./Componenets/ContactNow.tsx";

const App = () => {
  return (
    <div className="overflow-hidden ">
      <Header />
      {/* <Marque /> */}
      <AboutMe />
      <Skills />

      <About />
      <Projects />
      <CV />

      <Contact />
      <MblProjContainer />
      <ContactComponent />
    </div>
  );
};

export default App;
