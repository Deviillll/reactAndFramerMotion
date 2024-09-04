import React, { useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import { motion } from "framer-motion";

gsap.registerPlugin(ScrollTrigger);
const data = [
  {
    name: "react js",
    id: "react",
  },

  {
    name: "next js",
    id: "nextjs",
  },
  {
    name: "javascript",
    id: "javascript",
  },
  {
    name: "tailwind css",
    id: "tailwindcss",
  },
  {
    name: "html 5",
    id: "html5",
  },
  {
    name: "node js",
    id: "nodejs",
  },
  {
    name: "mongodb",
    id: "mongodb",
  },
  {
    name: "express js",
    id: "expressjs",
  },
  {
    name: "typescript",
    id: "typescript",
  },
  {
    name: "gsap",
    id: "gsap",
  },
  {
    name: "framer motion",
    id: "framer-motion",
  },
  {
    name: "python",
    id: "python",
  },
];

const Skills = () => {
  const container = useRef<HTMLDivElement>(null);
  const dragConstraints = useRef<HTMLDivElement>(null);
  useGSAP(() => {
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: container.current,
        start: "30% 40%",
        end: "100% 20%",
        scrub: 1,
        // markers: true,
        pin: true,
      },
    });
    tl.to("#mongodb", {
      filter: "blur(0px)",
    })
      .to("#nextjs", {
        filter: "blur(0px)",
        delay: 0.5,
      })
      .to("#nodejs", {
        filter: "blur(0px)",
      })
      .to("#framer-motion", {
        filter: "blur(0px)",
        delay: 0.2,
      })
      .to("#expressjs", {
        filter: "blur(0px)",
      })
      .to("#python", {
        filter: "blur(0px)",
        delay: 1,
      })
      .to("#react", {
        filter: "blur(0px)",
      })
      .to("#mongodb", {
        filter: "blur(0px)",
      })
      .to("#gsap", {
        filter: "blur(0px)",
        delay: 0.3,
      })
      .to("#typescript", {
        filter: "blur(0px)",
      })
      .to("#tailwindcss", {
        filter: "blur(0px)",
        delay: 0.5,
      })
      .to("#html5", {
        filter: "blur(0px)",
      })
      .to("#javascript", {
        filter: "blur(0px)",
      });
  });

  return (
    <div className=" md:bg-zinc-50 overflow-hidden" ref={container}>
      <motion.div className="flex h-screen md:h-[130vh] w-screen   justify-center items-center overflow-hidden">
        <div
          ref={dragConstraints}
          className=" skills  px-2 md:px-0 flex items-center md:gap-8 gap-5 flex-wrap-reverse  w-full md:w-[60vw] h-[50%] font-custombold0 justify-center md:text-3xl  "
        >
          {data.map((item, index) => (
            <motion.h1
              key={item.id}
              id={item.id}
              // drag
              // dragConstraints={dragConstraints}
              // dragElastic={0.1}
              // whileDrag={{ scale: 1.1 }}
              className="cursor-pointer"
            >
              {item.name}
            </motion.h1>
          ))}
        </div>
      </motion.div>
    </div>
  );
};

export default Skills;
