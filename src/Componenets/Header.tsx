import React, { useRef, useState, useEffect } from "react";

import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";

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
  const bg4 =
    "https://i.giphy.com/media/v1.Y2lkPTc5MGI3NjExcGpsY3VqanhscnMxaXpxdHZ6cDU1OXlqdmZ0OHN6bnFkbDU3YWs2MSZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/l3q30uxU49VKhJFE4/giphy.gif";

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
    // gsap.from(".textanime", {
    //   duration: 2.5,
    //   xPercent: -90,
    //   stagger: 0.1,

    //   ease: "power4.out",
    // });
  });

  return (
    <div>
      <div className="h-[100vh] w-full relative  " ref={container2}>
        <div
          className="uppercase  text-[5.5vw] leading-tight font-custombold2 font-bold  -space-y-4 flex flex-col md:ml-10   mt-[25vh] h-[90vh] w-screen"
          ref={container}
        >
          <h1 className=" md:ml-10 textanime">
            Hi Im&nbsp;
            <span
              style={{ backgroundImage: `url(${bg2})` }}
              className="bg-clip-text text-purple-300/80  bg-cover bg-center tracking-wide"
            >
              hammad
            </span>
          </h1>
          <h1 className=" md:ml-10 textanime">
            <span
              style={{
                backgroundImage: `url(${bg1})`,
              }}
              className="h-12 w-[85px] textanime  bg-fit bg-bottom  transition-colors ease-linear  bg-clip-border rounded-md bg-purple-300/70   inline-block"
            ></span>
            &nbsp; full stact dev{" "}
            <span className="bg-clip-text  relative  bg-top">
              loving
              <span
                style={{
                  backgroundImage: `url(${bg3})`,
                }}
                className=" h-[35px] w-[35px] bg-center bg-cover   rounded-full absolute z-10 top-[10px] left-[49px]"
              ></span>
            </span>
          </h1>
          <div className="flex md:ml-10 items-center textanime">
            <h1 className=" relative ">
              to
              <span
                style={{
                  backgroundImage: `url(${bg3})`,
                }}
                className=" h-[35px] w-[35px] bg-center bg-cover   rounded-full absolute z-10 top-[20px] left-[54px]"
              ></span>{" "}
              <span className="text-purple-300/90"> create</span>
            </h1>
            <h1
              style={{ backgroundImage: `url(${bg1})` }}
              className="  transition-transform ease-out duration-100   bg-clip-text text-transparent bg-cover bg-center"
            >
              &nbsp;{works[workIndex]}
            </h1>
          </div>

          <h1 className=" md:ml-10    textanime">websites </h1>
        </div>
      </div>
      <div className="w-full h-[100px] relative overflow-hidden mt-[-100px] curve ">
        <div className="w-[160%] h-[750%] absolute left-[50%] bg-[#0c0c1d]  translate-x-[-50%] rounded-[50%] "></div>
      </div>
    </div>
  );
};

export default Header;
