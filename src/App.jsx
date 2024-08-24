import React from "react";
import Navbar from "./Componenets/Navbar";
import ScrollAnimation from "./Componenets/ScrollAnimation";
import Gsap from "./Componenets/GsapNav";
import Header from "./Componenets/Header";
import About from "./Componenets/About";
import VideoBox from "./Componenets/VideoBox";
import Contact from "./Componenets/Contact";
import Projects from "./Componenets/Projects.tsx";
import AboutMe from "./Componenets/AboutMe.tsx";

const App = () => {
  return (
    <div className=" overflow-x-hidden ">
      {/* <Gsap /> */}
      <Navbar />
      <Header />
      <AboutMe />

      <About />
      <Projects />
      <Contact />
    </div>
  );
};

export default App;
