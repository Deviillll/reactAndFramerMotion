import React, { useRef } from "react";

import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import VideoBox from "./VideoBox";
import About from "./About";

gsap.registerPlugin(ScrollTrigger);

const Header = () => {
  const container = useRef<HTMLDivElement>(null);
  const container2 = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    const timeline = gsap.timeline({
      scrollTrigger: {
        trigger: container.current, // Trigger animation on container scroll
        start: "top 25%", // Start when top of container reaches bottom of viewport
        end: "bottom 80%", // End when bottom of container reaches top of viewport
        scrub: 3, // Smooth animation
        // markers: true, // Enable smooth scrolling animation
        // pin: true,
      },
    });
    const timeline2 = gsap.timeline({
      scrollTrigger: {
        trigger: container2.current, // Trigger animation on container scroll
        start: "10% 30%", // Start when top of container reaches bottom of viewport
        end: "100% 0%", // End when bottom of container reaches top of viewport
        scrub: 3, // Smooth animation

        //markers: true, // Enable smooth scrolling animation
      },
    });

    timeline2
      .to(
        ".video",
        {
          scale: 2,
          opacity: 1,
          width: "80vw",
          height: "120vh", // Distance to move right (adjust as needed)
          border: "6px solid #f5638f",
          borderRadius: "100%",
        },
        "name2"
      )
      .to(
        ".boxhead",
        {
          fontSize: "10vw",
          y: -50,
          color: "#fb7199",

          opacity: 1,
        },
        "name2"
      );

    gsap.to(".boxhead", {
      y: -40,
    });

    // main heading animation
    timeline
      .to(
        ".leftH",
        {
          x: -200,
          y: -100, // Distance to move left (adjust as needed)
        },
        "name"
      )
      .to(
        ".rightH",

        {
          x: 200, // Distance to move right (adjust as needed)
          y: -100,
        },
        "name"
      );
    gsap.to(".leftH,.rightH", {
      duration: 1,
    });
  });

  return (
    <div className="h-[200vh] w-full relative " ref={container2}>
      <div
        className="uppercase text-fuchsia-400 -space-y-3 text-[5vw] font-bold mt-[25vh] h-[90vh] w-screen"
        ref={container}
      >
        <h1 className=" text-center leftH   tracking-tight">
          Embrace the Journey
        </h1>
        <h1 className="ml-[14vw] rightH tracking-tight text-fuchsia-400">
          Desafía las probabilidades
        </h1>
      </div>
      <div className="w-52 h-52 bg-white absolute left-[50%] translate-x-[-50%] top-[400px] z-20 video  border-2 border-fuchsia-500 overflow-hidden">
        <div className="uppercase font-semibold text-5xl space-y-2 text-center absolute left-[50%] translate-y-[40%] translate-x-[-50%] ">
          <h1 className="boxhead opacity-70 tracking-tighter">Excelence</h1>

          <h1 className="boxhead opacity-70 tracking-tighter">future</h1>
          <h1 className="boxhead opacity-70 tracking-tighter">goals</h1>
        </div>
      </div>
    </div>
  );
};

export default Header;
