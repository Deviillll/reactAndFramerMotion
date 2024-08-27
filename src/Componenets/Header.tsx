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
      )
      .to(".curve", {
        height: 0,
        marginTop: 0,
      });
  });

  return (
    <div>
      <div className="h-[100vh] w-full relative bg-gray-700 " ref={container2}>
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
      </div>
      <div className="w-full h-[100px] relative overflow-hidden mt-[-100px] curve ">
        <div className="w-[160%] h-[750%] absolute left-[50%] bg-[#0c0c1d]  translate-x-[-50%] rounded-[50%] "></div>
      </div>
    </div>
  );
};

export default Header;
