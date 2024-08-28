import React, { useRef, useState, useEffect } from "react";

import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import VideoBox from "./VideoBox";
import About from "./About";

gsap.registerPlugin(ScrollTrigger);

const Header = () => {
  const works = ["animated", "dynamic", "creative", "modern"];
  const [workIndex, setWorkIndex] = useState(0);
  useEffect(() => {
    const interval = setInterval(() => {
      setWorkIndex((prevIndex) => (prevIndex + 1) % works.length);
    }, 1500);

    return () => clearInterval(interval);
  }, []);

  const bg1 =
    "https://i.giphy.com/media/v1.Y2lkPTc5MGI3NjExcmE5eTd2cmFobDZvMWZyaWJhanU3dHp3bDdnNmRweXdpbzZ0dnJ2eCZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/l3q2VB3ltDA0ryk2k/giphy.gif";

  const bg2 =
    "https://i.giphy.com/media/v1.Y2lkPTc5MGI3NjExNzA3emJxemNmazZzNm41cWszZnh2eXVtb2tsNGpsajF3ajJucmQ5MSZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/RIFmnDkGgxcvaS66IN/giphy.gif";

  const bg3 =
    "https://i.giphy.com/media/v1.Y2lkPTc5MGI3NjExd3NkMjI4Z2dhNWcyNXg1N3lqanJnajNocXlreGNpeXlvMjhyMXZrZCZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/3o7TKDWHLxBC6td7lC/giphy.gif";

  const container = useRef<HTMLDivElement>(null);
  const container2 = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    const timeline = gsap.timeline({
      scrollTrigger: {
        trigger: container.current, // Trigger animation on container scroll
        start: "top 25%", // Start when top of container reaches bottom of viewport
        end: "bottom 80%", // End when bottom of container reaches top of viewport
        scrub: 3, // Smooth animation
        // markers: true, // Enable smooth scrolling animation
        // pin: true,
      },
    });

    // main heading animation
    timeline.to(".curve", {
      height: 0,
      marginTop: 0,
    });
  });

  return (
    <div>
      <div className="h-[100vh] w-full relative  " ref={container2}>
        <div
          className="uppercase  -space-y-4 flex flex-col md:ml-10  font-bold mt-[25vh] h-[90vh] w-screen"
          ref={container}
        >
          <h1 className="text-[4vw] md:ml-10">
            Hi I'm&nbsp;
            <span
              style={{ backgroundImage: `url(${bg2})` }}
              className="bg-clip-text text-purple-300/40 bg-cover bg-center tracking-wide"
            >
              hammad
            </span>
          </h1>
          <h1 className="text-[4vw] md:ml-10">
            full stact dev{" "}
            <span className="bg-clip-text text-purple-300/90  bg-top">
              loving
            </span>
          </h1>
          <div className="flex md:ml-10 items-center pt-2">
            <span className="text-[4vw] relative">
              to
              <span
                style={{
                  backgroundImage: `url(${bg3})`,
                }}
                className=" h-[25px] w-[25px] bg-center bg-cover   rounded-full absolute z-10 top-[25px] left-[38px]"
              ></span>{" "}
              create
            </span>
            <h1
              style={{ backgroundImage: `url(${bg1})` }}
              className="transition-all ease-out duration-100 text-[4vw]  bg-clip-text text-transparent bg-cover bg-center"
            >
              &nbsp;{works[workIndex]}
            </h1>
          </div>

          <h1 className="text-[4vw] md:ml-10">websites</h1>
        </div>
      </div>
      <div className="w-full h-[100px] relative overflow-hidden mt-[-100px] curve ">
        <div className="w-[160%] h-[750%] absolute left-[50%] bg-[#0c0c1d]  translate-x-[-50%] rounded-[50%] "></div>
      </div>
    </div>
  );
};

export default Header;
