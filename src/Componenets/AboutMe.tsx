import React, { useRef } from "react";

import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const AboutMe = () => {
  const container = useRef<HTMLDivElement>(null);
  useGSAP(() => {
    const timeline = gsap.timeline({
      scrollTrigger: {
        trigger: container.current, // Trigger animation on container scroll
        start: "40% 50%", // Start when top of container reaches bottom of viewport
        end: "90% 30%", // End when bottom of container reaches top of viewport
        scrub: 0.5, // Smooth animation
        //markers: true, // Enable smooth scrolling animation
        pin: true,
      },
    });
    timeline
      .to(".line1", { width: "100%" })
      .to(".line2", { width: "100%" })
      .to(".line3", { width: "100%" })
      .to(".line4", { width: "100%" })
      .to(".line5", { width: "100%" });
  });

  return (
    <div
      className=" h-screen w-screen   flex items-center  overflow-x-hidden"
      ref={container}
    >
      {/* 1st div */}
      <div className="text-5xl  font-custombold3 text-gray-100 opacity-20 absolute left-[15%]">
        <h1>Lorem ipsum, dolor sit amet consectetur</h1>
        <h1> eaque animi sunt, blanditiis magni at</h1>

        <h1> reiciendis, ad maiores provident soluta illum.</h1>
        <h1>voluptas aut non deleniti vero recusandae</h1>
        <h1>elit. Porro accusantium numquam eligendi</h1>
      </div>
      {/* 2nd div */}
      <div className="text-5xl font-custombold3 text-white whitespace-nowrap overflow-hidden  opacity-100 absolute left-[15%]">
        <h1 className="line1  whitespace-nowrap overflow-hidden w-0">
          Lorem ipsum, dolor sit amet consectetur
        </h1>
        <h1 className="line2 whitespace-nowrap overflow-hidden w-0">
          eaque animi sunt, blanditiis magni at
        </h1>

        <h1 className="line3 whitespace-nowrap overflow-hidden w-0">
          reiciendis, ad maiores provident soluta illum.
        </h1>
        <h1 className="line4 whitespace-nowrap overflow-hidden w-0">
          voluptas aut non deleniti vero recusandae
        </h1>
        <h1 className="line5 whitespace-nowrap overflow-hidden w-0">
          elit. Porro accusantium numquam eligendi
        </h1>
      </div>
    </div>
  );
};

export default AboutMe;
