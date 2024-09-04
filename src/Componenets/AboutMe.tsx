import React, { useRef } from "react";
import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const AboutMe = () => {
  const container = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    const mm = gsap.matchMedia();
    mm.add("(max-width: 767px)", () => {
      const timeline = gsap.timeline({
        scrollTrigger: {
          trigger: container.current, // Trigger animation on container scroll
          start: "20% 50%", // Start when top of container reaches bottom of viewport
          end: "70% 50%", // End when bottom of container reaches top of viewport
          scrub: 0.8, // Smooth animation
          // markers: true, // Enable smooth scrolling animation
          // pin: true,
        },
      });
      timeline
        .to(".sm1", { opacity: 1 })
        .to(".sm2", { opacity: 1 })
        .to(".sm3", { opacity: 1 })
        .to(".sm4", { opacity: 1 })
        .to(".sm5", { opacity: 1 })
        .to(".sm6", { opacity: 1 })
        .to(".sm7", { opacity: 1 });

      return () => {
        // Cleanup code if needed
        timeline.kill();
      };
    });

    mm.add("(min-width: 768px)", () => {
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

      return () => {
        // Cleanup code if needed
        timeline.kill();
      };
    });
  });

  return (
    <div
      className="md:h-[70vh]  lg:h-[100vh] w-screen h-[60vh] overflow-x-hidden  md:bg-zinc-50 "
      ref={container}
    >
      <div className="flex flex-col justify-center px-5 tracking-tighter  font-custombold0  mt-6 md:mt-0  items-center md:w-full h-[40vh] sm:h-[70vh] md:h-[80vh] lg:h-[90vh] xl:h-[100vh] overflow-x-hidden">
        {/* 1st div */}
        <div className="lg:text-3xl xl:text-4xl text-xl md:text-2xl space-y-2  absolute left-[5%] md:text-neutral-950">
          <h1 className="sm1 opacity-30"> Hi! I'm Hammad,</h1>
          <h1 className="sm2 opacity-30">
            a Computer Science student and software engineer.
          </h1>
          <h1 className="sm3 opacity-30">
            love creating animated and modern applications
          </h1>
          <h1 className="sm4 opacity-30">
            combining my skills in both front-end and back-end development
          </h1>
          <h1 className="sm5 opacity-30">to build dynamic web applications.</h1>
          <h1 className="md:mt-2 lg:mt-4 sm6 opacity-30">
            Let's create something amazing together.{" "}
          </h1>
          <h1 className="md:mt-2 lg:mt-6 mt-4 cursor-pointer sm7 opacity-30">
            <a className="text-purple-300 font-custombold8 " href="#">
              Contact me ↗
            </a>
          </h1>
        </div>
        {/* 2nd div */}
        <div className="lg:text-3xl xl:text-4xl md:text-2xl text-xl -mt-28 sm:-mt-6 md:mt-0 hidden md:block text-zinc-950 whitespace-nowrap overflow-hidden opacity-100 absolute left-[5%] space-y-2">
          <h1 className="line0 whitespace-nowrap overflow-hidden w-0">
            Hi! I'm Hammad,
          </h1>
          <h1 className="line1 whitespace-nowrap overflow-hidden w-0">
            a Computer Science student and software engineer.
          </h1>
          <h1 className="line2 whitespace-nowrap overflow-hidden w-0">
            love creating animated and modern applications
          </h1>
          <h1 className="line3 whitespace-nowrap overflow-hidden w-0">
            combining my skills in both front-end and back-end development
          </h1>
          <h1 className="line4 whitespace-nowrap overflow-hidden w-0">
            to build dynamic web applications.
          </h1>
          <h1 className="line5 whitespace-nowrap md:mt-2 lg:mt-4 overflow-hidden w-0">
            Let's create something amazing together.
          </h1>
          <h1 className="line6 whitespace-nowrap md:mt-2 lg:mt-6 overflow-hidden w-0">
            <a className="font-custombold8 text-purple-400" href="#">
              Contact me ↗
            </a>
          </h1>
        </div>
      </div>
      {/* pic  */}
    </div>
  );
};

export default AboutMe;
