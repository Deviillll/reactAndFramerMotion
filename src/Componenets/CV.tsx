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
    const timeline = gsap.timeline({
      scrollTrigger: {
        trigger: container.current, // Trigger animation on container scroll
        start: "20% 20%", // Start when top of container reaches bottom of viewport
        end: "90% 90%", // End when bottom of container reaches top of viewport
        scrub: 2, // Smooth animation

        // markers: true, // Enable smooth scrolling animation
        // pin: true,
      },
    });
    timeline
      .to(".img2", {
        rotateX: "0deg",
        duration: 2,
      })
      .to(".img3", {
        rotateX: "0deg",
        duration: 2,
      })
      .to(".overlay", {
        opacity: 1,
      })

      .to(".parent", {
        marginTop: "85vh",
        duration: 1,
      })
      .to(".head", {
        marginTop: "-30vh",
        opacity: 1,
      })
      .to(".parent", {
        scale: 0.8,
        delay: 0.4,
      })
      .to(".pic", {
        filter: "grayscale(1)",
      });
  });
  return (
    <div
      ref={container}
      className="flex flex-col justify-center items-center h-[200vh] w-screen relative"
    >
      <div className="h-[35vh] w-[40vw] flex flex-col justify-center items-center parent ">
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
      <div className="text-fuchsia-400">
        <h1 className="text-4xl font-bold head z-30 relative bottom-0 opacity-0">
          Created by Hammad
        </h1>
      </div>
      <div className="w-full h-full absolute z-20 top-0 bg-black/80 overlay opacity-0"></div>
    </div>
  );
};

export default CV;
