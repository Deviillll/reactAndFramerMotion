import { useRef } from "react";
import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import React from "react";

gsap.registerPlugin(ScrollTrigger);
//@ts-ignore
import myImage from "../../public/2.png";

const CV = () => {
  const container = useRef<HTMLDivElement>(null);
  useGSAP(() => {
    const timeline = gsap.timeline({
      scrollTrigger: {
        trigger: container.current, // Trigger animation on container scroll
        start: "20% 20%", // Start when top of container reaches bottom of viewport
        end: "80% 90%", // End when bottom of container reaches top of viewport
        scrub: 2, // Smooth animation

        markers: true, // Enable smooth scrolling animation
        // pin: true,
      },
    });
    timeline
      .to(".img2", {
        rotateX: "0deg",
      })
      .to(".img3", {
        rotateX: "0deg",
      })
      .to(".overlay", {
        opacity: 1,
      });

    // .to(".parent", {
    //   marginTop: "70vh",
    // });
  });
  return (
    <div
      ref={container}
      className="flex flex-col justify-center items-center h-[150vh] w-screen relative"
    >
      <div className="h-[35vh] w-1/2 flex flex-col justify-center items-center parent ">
        {/* fist */}
        <div className="h-full w-full relative border border-stone-20 ">
          <div className="w-full  h-full rounded  ">
            <img
              className="w-full h-full object-cover object-top origin-top"
              src={myImage}
              alt=""
            />
          </div>
          <div className=" absolute bottom-0 w-full h-[3px] rounded-b bg-gradient-to-r from-zinc-50 to-gray-50 border border-zinc-50 "></div>
        </div>
        {/* second */}
        <div className="h-full w-full relative img2 border  border-stone-200 my-[.4px] perspective origin-top">
          <div className="w-full  h-full  rounded  ">
            <img
              className="w-full h-full object-cover object-center origin-top  "
              src={myImage}
              alt=""
            />
          </div>
          <div className=" absolute bottom-0 w-full h-[3px] rounded-b bg-gradient-to-r from-gray-100 to-gray-50 border border-zinc-50 "></div>
        </div>
        {/* third */}
        <div className="h-full w-full relative img3 border  border-stone-20 perspective origin-top">
          <div className=" absolute top-0 w-full h-[1px] rounded bg-white  "></div>
          <div className="w-full  h-full  rounded  ">
            <img
              className="w-full h-full object-cover object-bottom origin-top"
              src={myImage}
              alt=""
            />
          </div>
        </div>
      </div>
      <div>
        <h1>Hammad</h1>
      </div>
      <div className="w-full h-full absolute z-20 top-0 bg-black/80 overlay opacity-0"></div>
    </div>
  );
};

export default CV;
