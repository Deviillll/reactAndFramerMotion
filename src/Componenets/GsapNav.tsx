import { useRef } from "react";
import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import React from "react";

gsap.registerPlugin(ScrollTrigger);

const Gsap = () => {
  const container = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    gsap.from(".box", {
      y: -200,
      stagger: 0.1,
      duration: 1,

      opacity: 0,
    });
  });

  return (
    <div
      ref={container}
      className="flex  justify-between px-6 uppercase py-6 bg-purple-400 items-center w-screen "
    >
      <div className="flex-1 font-bold text-4xl text-white box">HH</div>
      <div className="flex justify-center text-lg font-bold gap-x-6 flex-1">
        <h1 className="box">home</h1>
        <h1 className="box">about</h1>
        <h1 className="box">contact</h1>
        <h1 className="box">services</h1>
      </div>
      <div className="flex-1 flex justify-end">
        <div className="w-8 h-8 bg-fuchsia-600 rounded-full"></div>
      </div>
    </div>
  );
};

export default Gsap;
