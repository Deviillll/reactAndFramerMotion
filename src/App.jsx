import React from "react";

import Header from "./Componenets/Header";
import About from "./Componenets/About";

import Contact from "./Componenets/Contact";
import Projects from "./Componenets/Projects.tsx";
import AboutMe from "./Componenets/AboutMe.tsx";
import CV from "./Componenets/CV.tsx";

import Skills from "./Componenets/Skills.tsx";
import ContactComponent from "./Componenets/ContactNow.tsx";
import FooterComponent from "./Componenets/Footer.tsx";

const App = () => {
  return (
    <div className="overflow-hidden ">
      <Header />

      <AboutMe />
      <Skills />
      {/* hover animation section */}

      <About />
      {/* projects */}
      <Contact />
      <CV />
      {/* contact */}
      <Projects />
      <ContactComponent />

      <FooterComponent />
    </div>
  );
};

export default App;
