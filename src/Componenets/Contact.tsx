import React, { useRef, useEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Projects from "./Projects";

gsap.registerPlugin(ScrollTrigger);

const Contact = () => {
  const container2 = useRef<HTMLDivElement>(null);
  const innerContainer = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const mm = gsap.matchMedia();

    mm.add("(min-width: 768px)", () => {
      const timeline3 = gsap.timeline({
        scrollTrigger: {
          trigger: container2.current,
          start: "50% 50%",
          end: "100% 0%",
          scrub: 1.5,
          markers: true,
          pin: true,
        },
      });

      timeline3
        .to(
          ".topbox",
          {
            top: "-50%",
          },
          "name"
        )
        .to(
          ".bottombox",
          {
            bottom: "-50%",
          },
          "name"
        )
        .to(
          ".toph",
          {
            top: "100%",
          },
          "name"
        )
        .to(
          ".btmh",
          {
            top: "-50%",
          },
          "name"
        )
        .to(innerContainer.current, {
          delay: 0.2,
          xPercent: -50,
        });

      // Cleanup function to kill ScrollTrigger instances
      return () => {
        ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
      };
    });

    // Cleanup matchMedia instances on component unmount
    return () => mm.revert();
  }, []);

  return (
    <div
      className="relative uppercase  main overflow-hidden font-custombold2 h-[200vh] text-black bg-zinc-50"
      ref={container2}
    >
      <div className="h-1/2 overflow-hidden bg-zinc-50 absolute top-0 topbox z-40 w-screen">
        <div className="absolute -bottom-12  lg:-bottom-[155px] toph left-[50%] translate-x-[-50%]">
          <h1 className="text-[15vw] font-bold text-center ">projects</h1>
        </div>
      </div>
      <div
        className="h-full w-[200vw] bg-black innerContainer  "
        ref={innerContainer}
      >
        <div className="h-[200vh] w-full flex  overflow-hidden  ">
          <div className="w-[100vw] h-full flex-1 bg-zinc-950"></div>
          <div className="w-[100vw] h-full flex-1  bg-zinc-50  "></div>
        </div>
      </div>
      <div className="h-1/2 w-screen bg-zinc-50 overflow-hidden  absolute bottom-0 bottombox z-40">
        <div className="absolute -top-10 lg:-top-[133px]  left-[50%] btmh translate-x-[-50%]">
          <h1 className="text-[15vw] font-bold text-center ">projects</h1>
        </div>
      </div>
    </div>
  );
};

export default Contact;
