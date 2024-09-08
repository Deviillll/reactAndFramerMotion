import React, { useRef, useState, useEffect } from "react";
import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { FiDownload } from "react-icons/fi";

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

  const container = useRef<HTMLDivElement>(null);
  const container2 = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    gsap.from(".textanime", {
      duration: 2.5,
      xPercent: -90,
      ease: "power4.out",
    });
    gsap.from(".btn", {
      delay: 1.8,
      xPercent: -50,
      ease: "power4.out",
    });
  });

  const downloadCV = () => {
    const link = document.createElement("a");
    link.href = "/hammadtariqcv.pdf";
    link.download = "Hammad_CV.pdf";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <div id="home" className="overflow-hidden">
      <div
        className="h-[80vh] md:h-[80vh]  lg:h-[90vh] w-full relative text-zinc-50 "
        ref={container2}
      >
        <div
          className="uppercase overflow-hidden  w-screen text-[9vw] lg:text-[6.5vw] leading-tight font-custombold1  md:font-bold  lg:-space-y-2 xl:-space-y-3 flex flex-col md:ml-10 ml-10 justify-center md:mt-[6vh] lg:mt-[10vh]  sm:mt-10 space-y-1  h-[80vh] md:h-[80vh] md:w-screen"
          ref={container}
        >
          <h1 className=" md:ml-10 textanime lg:w-full w-[30vw]">
            Hi I&apos;m&nbsp;
            <span
              style={{ backgroundImage: `url(${bg2})` }}
              className="bg-clip-text text-purple-300/80 bg-cover bg-center tracking-wide"
            >
              hammad
            </span>
          </h1>
          <h1 className=" md:ml-10 textanime w-[70vw] md:w-full">
            <span
              style={{
                backgroundImage: `url(${bg1})`,
              }}
              className="h-6 w-12 sm:h-10 sm:w-16 md:h-[52px]  xl:h-[52px] md:w-[85px] textanime  bg-fit bg-bottom inline-block transition-colors ease-linear  bg-clip-border rounded-md bg-purple-300/70   "
            ></span>
            &nbsp;full stack dev loving
            {/*  love circle  */}
          </h1>
          <div className="md:flex   md:w-full  md:ml-10 items-center textanime">
            <h1 className=" relative inline  ">
              to
              {/*  to circle  */}{" "}
              <span className="text-purple-300/90"> create</span>
            </h1>
            <h1
              style={{ backgroundImage: `url(${bg1})` }}
              className="  transition-transform ease-out duration-100   bg-clip-text text-transparent bg-cover bg-center"
            >
              &nbsp;{works[workIndex]}
            </h1>
          </div>

          <h1 className=" md:ml-10 flex   textanime">websites </h1>
          <div className="md:ml-10 lg:ml-12  btn">
            <button
              onClick={downloadCV}
              className=" text-sm text-center md:text-xl flex-col lg:text-3xl uppercase flex mt-5 md:mt-4 lg:mt-3 items-center rounded-md tracking-tight bg-zinc-50 px-2 md:px-3 lg:px-4 lg:py-2 xl:px-5 xl:py-3 font-custombold6 py-3 text-zinc-950/90 hover:scale-110 hover:bg-purple-300/90 hover:text-gray-50 transition-all ease-in-out duration-150 "
            >
              <div className="flex gap-x-2 items-center justify-center">
                <span className="">
                  <FiDownload className="text-purple-400  " />
                </span>
                download cv
              </div>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
