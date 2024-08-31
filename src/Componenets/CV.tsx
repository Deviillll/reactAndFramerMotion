import { useRef } from "react";
import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import React from "react";

gsap.registerPlugin(ScrollTrigger);
//@ts-ignore
import myImage from "/2.png";

const CV = () => {
  const container = useRef<HTMLDivElement>(null);
  useGSAP(() => {
    const mm = gsap.matchMedia();

    // Animation for screens with a minimum width of 768 pixels
    mm.add("(min-width: 768px)", () => {
      const timeline = gsap.timeline({
        scrollTrigger: {
          trigger: container.current,
          start: "20% 30%",
          end: "90% 70%",
          scrub: 2,
          // markers: true,
          // pin: true,
        },
      });
      timeline
        .to(".img2", { rotateX: "0deg", duration: 2 })
        .to(".img3", { rotateX: "0deg", duration: 2 })
        .to(".parent", { marginTop: "110vh", duration: 1 })
        .to(".head", { marginTop: "-25vh", opacity: 1, duration: 0.3 })
        .to(".overlay", { opacity: 1 })
        .to(".pic", { filter: "grayscale(1)" })
        .to(".parent", { scale: 0.8, delay: 0.4, duration: 2 });

      return () => {
        // Cleanup code if needed
        timeline.kill();
      };
    });
    mm.add("(max-width: 767px)", () => {
      const timeline = gsap.timeline({
        scrollTrigger: {
          trigger: container.current,
          start: "10% 40%",
          end: "90% 80%",
          scrub: 2,
          //markers: true,
          // pin: true,
        },
      });
      timeline
        .to(".img2", { rotateX: "0deg", duration: 2 })
        .to(".img3", { rotateX: "0deg", duration: 2 })
        .to(".parent", { marginTop: "50vh", duration: 1 })
        .to(".head", { marginTop: "-25vh", opacity: 1, duration: 0.3 })
        .to(".overlay", { opacity: 1 })
        .to(".pic", { filter: "grayscale(1)" })
        .to(".parent", { scale: 0.9, delay: 0.4, duration: 2 });

      return () => {
        // Cleanup code if needed
        timeline.kill();
      };
    });
  });
  return (
    <div
      ref={container}
      className="flex  pb-10 md:pb-0 flex-col justify-center items-center h-[110vh] md:h-[210vh] w-screen relative"
    >
      <div className="md:h-[35vh] h-[20vh] md:w-[40vw] w-[80vw] flex flex-col justify-center items-center parent ">
        {/* fist */}
        <div className="h-full w-full relative -mb-[1px] ">
          <div className="w-full  h-full rounded  ">
            <img
              className="w-full pic h-full object-cover object-top origin-top"
              src={myImage}
              alt=""
            />
          </div>
          <div className=" absolute bottom-0 w-full h-[3px] rounded-b bg-gradient-to-r from-gray-100 to-gray-50 border border-zinc-50 "></div>
        </div>
        {/* second */}
        <div className="h-full w-full relative img2 my-[.4px] perspective origin-top">
          <div className=" absolute top-0 w-full h-[1px] rounded bg-white  "></div>
          <div className="w-full  h-full  rounded  ">
            <img
              className="w-full pic h-full object-cover object-center origin-top  "
              src={myImage}
              alt=""
            />
          </div>
          <div className=" absolute bottom-0 w-full h-[3px] rounded-b bg-gradient-to-r from-gray-100 to-gray-50 border border-zinc-50 "></div>
        </div>
        {/* third */}
        <div className="h-full w-full relative img3  perspective origin-top">
          <div className=" absolute top-0 w-full h-[1px] rounded bg-white  "></div>
          <div className="w-full  h-full  rounded  ">
            <img
              className="w-full pic h-full object-cover object-bottom origin-top"
              src={myImage}
              alt=""
            />
          </div>
        </div>
      </div>
      <div className="">
        <h1 className="md:text-4xl text-2xl font-bold head z-30 relative bottom-0 opacity-0">
          Created by Hammad
        </h1>
      </div>
      <div className="w-full h-full absolute z-20 top-0 bg-black/80 overlay opacity-0"></div>
    </div>
  );
};

export default CV;
