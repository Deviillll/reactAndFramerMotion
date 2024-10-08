import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const data = [
  {
    title: "react",
    color: "bg-red-500",
  },
  {
    title: "next js",
    color: "bg-blue-500",
  },
  {
    title: "javascript",
    color: "bg-green-500",
  },
  {
    title: "tailwind css",
    color: "bg-yellow-500",
  },
  {
    title: "html5",
    color: "bg-purple-500",
  },
  {
    title: "node js",
    color: "bg-pink-500",
  },
  {
    title: "mongodb",
    color: "bg-indigo-500",
  },
  {
    title: "express js",
    color: "bg-gray-500",
  },
  {
    title: "typescript",
    color: "bg-blue-500",
  },
  {
    title: "gsap",
    color: "bg-green-500",
  },
  {
    title: "framer motion",
    color: "bg-yellow-500",
  },
  {
    title: "python",
    color: "bg-purple-500",
  },
  {
    title: "django",
    color: "bg-pink-500",
  },
];

const Marque = () => {
  const marquee = useRef(null);
  useEffect(() => {
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: marquee.current,
        start: "20% 80%",
        end: "100% 40%",
        // markers: true,
        scrub: 2,
      },
    });

    tl.to(
      ".rht",
      {
        xPercent: -25,

        ease: "ease power3",
      },
      "name"
    ).to(
      ".lft",
      {
        xPercent: 25,

        ease: "ease power3",
      },
      "name"
    );
  }, []);

  return (
    <div
      ref={marquee}
      className="marquee-containe hidden md:block overflow-hidden   relative font-custombold9 md:h-[100vh]"
    >
      <div className="absolute top-1/2 space-y-2 left-1/2 -translate-x-1/2  -translate-y-1/2 w-[90vw]">
        {Array.from({ length: 4 }).map((_, index) => (
          <div
            id="row"
            key={index}
            className={`w-full  flex items-center gap-12 whitespace-nowrap ${
              index == 0 || index == 2 ? "rht" : "lft"
            }
             ${
               index === 0
                 ? "translate-x-[-10%]"
                 : index === 1
                 ? "-translate-x-[25%]"
                 : index === 2
                 ? "translate-x-[-15%]"
                 : "translate-x-[-30%]"
             }
            `}
          >
            {data.map((item, itemIndex) => (
              <div
                key={itemIndex}
                className="flex items-center h-full gap-5 whitespace-nowrap"
              >
                <h1 className="text-5xl font-custombold7">{item.title}</h1>
                {/* <div className={`w-10 h-10 rounded-full ${item.color}`}></div> */}
              </div>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Marque;
