import React, { useRef } from "react";
import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Projects from "./Projects";

gsap.registerPlugin(ScrollTrigger);

const Contact = () => {
  const container2 = useRef<HTMLDivElement>(null);
  useGSAP(() => {
    const timeline3 = gsap.timeline({
      scrollTrigger: {
        trigger: container2.current, // Trigger animation on container scroll
        start: "50% 50%",
        end: "100% 50%",
        scrub: 2,
        //markers: true,
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
          top: "90%",
        },
        "name"
      )
      .to(
        ".btmh",
        {
          bottom: "-90%",
        },
        "name"
      )
      .to(
        ".cnt",
        {
          marginTop: "0",
        },
        "name"
      );
  }, [container2]);

  return (
    <div
      className="relative uppercase main overflow-hidden h-screen w-full"
      ref={container2}
    >
      <div className="h-[50vh] bg-zinc-950 overflow-hidden w-full  absolute top-0 topbox z-50 ">
        <div className=" absolute left-[50%] translate-x-[-50%] -bottom-36 ">
          <h1 className="text-[15vw] font-bold text-center text-fuchsia-400 bottom-[50%] toph">
            Contact
          </h1>
        </div>
      </div>
      <div className="h-screen w-screen bg-fuchsia-400 flex flex-col justify-center items-center overflow-hidden  ">
        <div className="text-4xl cnt mt-[100vh] font-bold flex w-1/2 justify-between ">
          <div className="space-y-4">
            <h1>Email</h1>
            <h1>phone</h1>
          </div>
          <div className="space-y-4 ">
            <p className="lowercase">hammadtariq7777@gmail.com</p>
            <p>+92 3019060788</p>
          </div>
        </div>
      </div>
      <div className="h-[50vh] bg-zinc-950 w-full overflow-hidden  absolute bottom-0 bottombox z-40">
        <div className=" absolute left-[50%] translate-x-[-50%] -top-36 ">
          <h1 className="text-[15vw] font-bold text-center text-fuchsia-400 btmh">
            Contact
          </h1>
        </div>
      </div>
    </div>
  );
};

export default Contact;
