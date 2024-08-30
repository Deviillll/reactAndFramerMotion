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
        start: "50% 50%", // Start when top of container reaches bottom of viewport
        end: "90% 30%", // End when bottom of container reaches top of viewport
        scrub: 0.5, // Smooth animation
        //markers: true, // Enable smooth scrolling animation
        pin: true,
      },
    });
    timeline
      .to(".line0", { width: "100%" })
      .to(".line1", { width: "100%" })
      .to(".line2", { width: "100%" })
      .to(".line3", { width: "100%" })
      .to(".line4", { width: "100%" })
      .to(".line5", { width: "100%" })
      .to(".line6", { width: "100%" });
  });

  return (
    <div
      className="md:h-[100vh]  w-screen h-[70vh]  overflow-x-hidden"
      ref={container}
    >
      {/* 1st div */}
      <div className="flex flex-col  justify-center  px-5 font-custombold4 items-center  md:w-full h-[70vh] sm:h-[30vh] md:h-[80vh] lg:h-[90vh] xl:h-[100vh] overflow-x-hidden">
        <div className="lg:text-3xl xl:text-4xl text-xl md:text-2xl md:text-zinc-50 md:opacity-30 font-bold absolute left-[5%]">
          <h1> Hi! I'm Hammad,</h1>
          <h1>a Computer Science student and Full Stack Developer</h1>
          <h1>love creating animated and modern websites</h1>
          <h1>
            combining my skills in both front-end and back-end development
          </h1>
          <h1>to build dynamic web applications.</h1>
          <h1 className="md:mt-2 lg:mt-4">
            Let's create something amazing together{" "}
          </h1>
          <h1 className="md:mt-2 lg:mt-4 cursor-pointer">
            <a className="text-purple-300 " href="#">
              Contact me ↗
            </a>
          </h1>
        </div>
        {/* 2nd div */}
        <div className="lg:text-3xl xl:text-4xl md:text-2xl text-xl -mt-28 sm:-mt-6 md:mt-0 hidden md:block text-zinc-50 whitespace-nowrap overflow-hidden opacity-100 absolute left-[5%]">
          <h1 className="line0 whitespace-nowrap overflow-hidden w-0">
            Hi! I'm Hammad,
          </h1>
          <h1 className="line1 whitespace-nowrap overflow-hidden w-0">
            a Computer Science student and Full Stack Developer.
          </h1>
          <h1 className="line2 whitespace-nowrap overflow-hidden w-0">
            love creating animated and modern websites
          </h1>
          <h1 className="line3 whitespace-nowrap overflow-hidden w-0">
            combining my skills in both front-end and back-end development
          </h1>
          <h1 className="line4 whitespace-nowrap overflow-hidden w-0">
            to build dynamic web applications.
          </h1>
          <h1 className="line5 whitespace-nowrap md:mt-2 lg:mt-4 overflow-hidden w-0">
            Let's create something amazing together
          </h1>
          <h1 className="line6  whitespace-nowrap md:mt-2 lg:mt-4 overflow-hidden w-0">
            <a href="#">Contact me ↗</a>
          </h1>
        </div>
      </div>
    </div>
  );
};

export default AboutMe;
