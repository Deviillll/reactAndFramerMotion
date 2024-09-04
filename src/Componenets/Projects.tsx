import React, { useRef, useEffect } from "react";
import gsap from "gsap";

const data = [
  {
    title: "whatsApp",
  },
  {
    title: "Instagram",
  },
  {
    title: "LinkedIn",
  },
  {
    title: "github",
  },
];

const Projects = () => {
  return (
    <div className="flex relative flex-col h-[80vh] md:bg-neutral-50 md:py-10  md:h-[120vh] font-custombold8 font-semibold uppercase   w-full  justify-center items-center">
      <div className="absolute w-10 h-10 transition-colors ease-in-out duration-150 bg-center bg-cover rounded-full top-0 left-0 hidden md:block"></div>
      {data.map((item, index) => (
        <div
          key={index}
          className={`flex cursor-pointer border-zinc-50 md:border-black relative forEach flex-col justify-center items-start h-[12vh] md:h-[20vh] w-[80%] border-b ${
            index === 0 && "border-t"
          } `}
        >
          <div
            id="parent"
            className="flex w-full h-full justify-between  items-center text-zinc-50 md:text-zinc-950 group sm:px-3 px-2 md:px-5 lg:px-10"
          >
            <div
              id="heading"
              className=" h-full w-[23%] flex items-center group-hover:text-black md:group-hover:text-white z-10 transition-colors duration-300 ease-in-out group-hover:font-bold"
            >
              <h1 className="text-2xl md:text-4xl   ">{item.title}</h1>
            </div>
            <div className="group-hover:text-zinc-50 z-10 group-hover:translate-y-1 transition-transform duration-700 ease-in-out">
              <span className="mr-6 text-3xl md:text-4xl lg:text-5x  font-bold">
                ↗
              </span>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Projects;
