import React, { useRef, useEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Projects from "./Projects";

gsap.registerPlugin(ScrollTrigger);

const Contact = () => {
  const container2 = useRef<HTMLDivElement>(null);
  const innerContainer = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const mm = gsap.matchMedia();

    mm.add("(min-width: 768px)", () => {
      const timeline3 = gsap.timeline({
        scrollTrigger: {
          trigger: container2.current,
          start: "50% 50%",
          end: "100% -20%",
          scrub: 1.5,
          // markers: true,
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
            top: "80%",
          },
          "name"
        )
        .to(
          ".btmh",
          {
            top: "-80%",
          },
          "name"
        )
        .to(
          ".firstInnerChild",
          {
            scale: 1,
            // xPercent: -15,
            ease: "power1.inOut",
            duration: 0.8,
          },
          "name"
        )

        .to(".innerContainer", {
          xPercent: -50,
          ease: "power1.in",
          delay: 0.2,
        })
        .to(".firstInnerChild2", {
          scale: 1,

          ease: "power1.inOut",
        });
      // .to(innerContainer.current, {
      //   delay: 0.2,
      //   xPercent: -50,
      // });

      // Cleanup function to kill ScrollTrigger instances
      return () => {
        ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
      };
    });

    // Cleanup matchMedia instances on component unmount
    return () => mm.revert();
  }, []);

  return (
    <div
      className="relative uppercase overflow-hidden main  font-custombold1  hidden lg:block lg:h-[100vh] text-black bg-zinc-500"
      ref={container2}
    >
      <div className="h-1/2  bg-zinc-50 overflow-hidden absolute top-0 topbox z-40 w-screen">
        <div className="absolute -bottom-12  lg:bottom-[-155px] toph left-[50%] translate-x-[-50%]">
          <h1 className="text-[15vw] font-bold text-center  ">projects</h1>
        </div>
      </div>
      <div
        className="h-screen hidden lg:flex w-[200vw] bg-zinc-950 innerContainer overflow-hidden justify-between  "
        ref={innerContainer}
      >
        {/* first inner child */}
        <div className="w-[100vw]  scale-90 overflow-hidden firstInnerChild font-custombold8 h-full flex justify-around items-center text-zinc-50  bg-zinc-950">
          <div className=" w-[40%]  ">
            <h1 className="text-4xl font-custombold6 ">Food Ordering app</h1>
            <p className="text-lg md:mt-6 leading-tight tracking-tight">
              {" "}
              Lorem ipsum, dolor sit amet consectetur adipisicing elit.
              Reiciendis id aperiam fugiat a porro voluptatibus, quae
              accusantium beatae accusamus impedit doloremque alias laudantium
              quis voluptatum provident laboriosam eveniet, in iusto?
            </p>
          </div>
          <div className=" w-[40%] justify-center flex flex-col space-y-3  ">
            <img
              className="w-[80%] mx-auto rounded-md"
              src="https://cdn.pixabay.com/photo/2023/08/23/12/50/fog-8208493_1280.jpg"
              alt=""
            />
            <div className="flex gap-x-4 justify-end">
              <img
                className="w-1/2 h-44 block rounded-md "
                src="https://cdn.pixabay.com/photo/2023/08/23/12/50/fog-8208493_1280.jpg"
                alt=""
              />
              <img
                className="w-1/2 h-44 block rounded-md scale-90"
                src="https://cdn.pixabay.com/photo/2023/08/23/12/50/fog-8208493_1280.jpg"
                alt=""
              />
            </div>
          </div>
        </div>
        {/* second inner child */}
        <div className="w-[100vw]  firstInnerChild2 font-custombold8 scale-90  h-full flex justify-around items-center text-zinc-50  bg-zinc-950">
          <div className=" w-[40%] justify-center flex flex-col space-y-3  ">
            <img
              className="w-[80%] mx-auto rounded-md"
              src="https://cdn.pixabay.com/photo/2023/08/23/12/50/fog-8208493_1280.jpg"
              alt=""
            />
            <div className="flex gap-x-4 justify-end">
              <img
                className="w-1/2 h-44 block rounded-md "
                src="https://cdn.pixabay.com/photo/2023/08/23/12/50/fog-8208493_1280.jpg"
                alt=""
              />
              <img
                className="w-1/2 h-44 block rounded-md scale-90"
                src="https://cdn.pixabay.com/photo/2023/08/23/12/50/fog-8208493_1280.jpg"
                alt=""
              />
            </div>
          </div>
          <div className="  w-[40%]  ">
            <h1 className="text-4xl font-custombold6">Movie Streaming App</h1>
            <p className="text-lg md:mt-6 leading-tight tracking-tight ">
              {" "}
              Lorem ipsum, dolor sit amet consectetur adipisicing elit.
              Reiciendis id aperiam fugiat a porro voluptatibus, quae
              accusantium beatae accusamus impedit doloremque alias laudantium
              quis voluptatum provident laboriosam eveniet, in iusto?
            </p>
          </div>
        </div>
      </div>
      <div className="h-1/2 w-screen bg-zinc-50 overflow-hidden    absolute bottom-0 bottombox z-40">
        <div className="absolute -top-10 lg:-top-[134px]  left-[50%] btmh translate-x-[-50%]">
          <h1 className="text-[15vw] font-bold text-center  ">projects</h1>
        </div>
      </div>
    </div>
  );
};

export default Contact;
