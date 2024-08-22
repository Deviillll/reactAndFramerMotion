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
      <div className="flex-1 font-bold text-4xl box">HH</div>
      <div className="flex justify-center text-lg font-bold gap-x-6 flex-1">
        <h1 className="box">home</h1>
        <h1 className="box">about</h1>
        <h1 className="box">contact</h1>
        <h1 className="box">services</h1>
      </div>
      <div className="flex-1 flex justify-end">
        <div className="w-6 h-6 bg-fuchsia-600 rounded-full"></div>
        {/* <img
          className="w-20  rounded-full "
          src="https://images.unsplash.com/photo-1723038386693-b121090524b3?q=80&w=1935&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          alt=""
        /> */}
      </div>
    </div>
  );
};

export default Gsap;
