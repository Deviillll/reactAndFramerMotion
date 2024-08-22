import React from "react";
import Navbar from "./Componenets/Navbar";
import ScrollAnimation from "./Componenets/ScrollAnimation";
import Gsap from "./Componenets/GsapNav";
import Header from "./Componenets/Header";
import About from "./Componenets/About";
import VideoBox from "./Componenets/VideoBox";

const App = () => {
  return (
    <div className=" overflow-x-hidden ">
      <Gsap />
      <Header />

      <About />
    </div>
  );
};

export default App;
