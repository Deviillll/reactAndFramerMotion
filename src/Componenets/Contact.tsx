//@ts-nocheck
import React, { useRef, useEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import foodImageHero from "/food-app-hero-img.png";
import movieImageHero from "/movie-app-hero.png";
import foodImage2 from "/food-app-2.png";
import movieImage2 from "/movie-app-2.png";
import foodImage3 from "/food-app-3.png";
import movieImage3 from "/movie-app-3.png";

gsap.registerPlugin(ScrollTrigger);

const Contact = () => {
  const container2 = useRef<HTMLDivElement>(null);
  const innerContainer = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const mm = gsap.matchMedia();

    mm.add("(min-width: 370px)", () => {
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
          ".line1",
          {
            translateY: "75%",
          },
          "name"
        )
        .to(
          ".line2",
          {
            translateY: "-75%",
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
      className="relative  uppercase  main font-custombold0 overflow-hidden    h-screen text-black "
      ref={container2}
      id="projects"
    >
      <div className="h-1/2 absolute topbox overflow-hidden top-0 z-40 w-full left-[-50%] translate-x-[50%] bg-zinc-50 text-center justify-center items-end flex">
        <h1 className="translate-y-[10.5vw] line1 font-bold text-[15vw]">
          projects
        </h1>
      </div>
      <div
        className="h-screen flex w-[200vw] bg-zinc-950 innerContainer overflow-hidden justify-between  "
        ref={innerContainer}
      >
        <div className="w-[100vw]  scale-90 overflow-hidden firstInnerChild font-custombold1 h-ful flex flex-col lg:flex-row justify-around items-center text-zinc-50  bg-zinc-950">
          <div className=" lg:w-[40%] px-4 ">
            <h1 className="text-4xl  font-bold my-4 text-orange-400 ">
              Food Ordering app
            </h1>
            <p className="text-lg md:mt-6 leading-tight tracking-wider">
              Built a user-friendly food ordering app with Next.js & Auth.js,
              featuring Stripe payment & MongoDB for efficient data management
            </p>
            <button className=" mt-5 capitalize hover:bg-white hover:text-black transition-colors ease-in-out duration-300 text-zinc-50 border border-zinc-50 rounded-full px-4 py-3">
              <a target="blank" href="https://foodbay-pk.vercel.app/">
                preview now
              </a>
            </button>
          </div>
          <div className=" lg:w-[50%] justify-center flex flex-col space-y-3  ">
            <img
              className="w-[90%] mx-auto rounded-md  object-cover object-center"
              src={foodImageHero}
              alt=""
            />
            <div className="flex gap-x-2 lg:gap-x-4 justify-end px-3">
              <img
                className="md:w-1/2 w-[50%] md:h-44 h-36 block rounded-md  object-cover object-center"
                src={foodImage2}
                alt=""
              />
              <img
                className="md:w-1/2 w-[50%] md:h-44 h-36 block rounded-md lg:scale-90 object-cover object-center"
                src={foodImage3}
                alt=""
              />
            </div>
          </div>
        </div>

        <div className="w-[100vw]  firstInnerChild2 font-custombold1 scale-90  h-full flex flex-col lg:flex-row justify-around items-center text-zinc-50  bg-zinc-950">
          <div className=" lg:w-[50%] justify-center flex flex-col space-y-5 px-2 ">
            <img
              className="w-[90%] mx-auto rounded-md object-cover object-center"
              src={movieImageHero}
              alt=""
            />
            <div className="flex gap-x-2 lg:gap-x-2 justify-end object-cover object-center">
              <img
                className="md:w-1/2 md:h-44 w-[50%] h-36 block rounded-md  object-cover object-bottom"
                src={movieImage2}
                alt=""
              />
              <img
                className="md:w-1/2 md:h-44 w-[50%] h-36 block rounded-md lg:scale-90 object-cover object-center"
                src={movieImage3}
                alt=""
              />
            </div>
          </div>
          <div className="  lg:w-[40%] px-3 ">
            <h1 className="text-4xl text-red-600 font-bold my-4">
              Movie Streaming App
            </h1>
            <p className="text-lg md:mt-6 leading-tight tracking-wider ">
              Built a Netflix-like movie streaming app with Next.js and Tailwind
              CSS, utilizing a movie database API. Optimized performance using
              Next.js Image Optimization
            </p>
            <div>
              <button className=" mt-5 capitalize hover:bg-white hover:text-black transition-colors ease-in-out duration-300 text-zinc-50 border border-zinc-50 rounded-full px-4 py-3">
                <a target="blank" href="https://meow-flix.vercel.app/">
                  preview now
                </a>
              </button>
            </div>
          </div>
        </div>
      </div>
      <div className="h-1/2 absolute bottom-0 w-full bottombox overflow-hidden z-40 bg-zinc-50 left-[50%] translate-x-[-50%] text-center flex justify-center items-start">
        <h1 className="-translate-y-[12vw] font-bold line2 text-[15vw]">
          projects
        </h1>
      </div>
    </div>
  );
};

export default Contact;
