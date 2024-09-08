import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import React, { useRef, useEffect } from "react";

gsap.registerPlugin(ScrollTrigger);
const data = [
  {
    title: "whatsApp",
    link: "https://wa.me/+923019060888",
  },
  {
    title: "Instagram",
    link: "https://www.instagram.com/____hammad__/",
  },
  {
    title: "LinkedIn",
    link: "https://www.linkedin.com/in/hammadtariq77/",
  },
  {
    title: "github",
    link: "https://github.com/Deviillll",
  },
];

const FooterComponent = () => {
  const container = useRef(null);

  useEffect(() => {
    const mm = gsap.matchMedia();

    mm.add("(min-width: 768px)", () => {
      const timeline = gsap.timeline({
        scrollTrigger: {
          trigger: container.current,
          start: "20% 50%",
          end: "70% 70%",
          scrub: 0.8,
          // markers: true,
        },
      });

      timeline.to(".name", {
        translateY: "0%",
        stagger: 0.1,
        duration: 1,
      });

      return () => {
        timeline.kill();
      };
    });

    mm.add("(max-width: 767px)", () => {
      const timeline = gsap.timeline({
        scrollTrigger: {
          trigger: container.current,
          start: "-10% 40%",
          end: "50% 70%",
          scrub: 0.8,
          //markers: true,
        },
      });

      timeline.to(".name", {
        translateY: "0%",
        stagger: 0.1,
        duration: 1,
      });

      return () => {
        timeline.kill();
      };
    });

    return () => {
      mm.revert();
    };
  }, []);

  return (
    <footer
      ref={container}
      className="w-screen h-[60vh] md:h-[85vh] lg:h-screen px-4 md:px-6 pt-10 lg:pt-3"
    >
      <div className="lg:space-y-40 space-y-20">
        {/* upper part */}
        <div className="flex flex-wrap md:flex-nowrap md:justify-around justify-between space-y-10 md:space-y-0 px-4 text-sm md:text-sm font-custombold0 uppercase">
          <div className="md:w-[60%] w-[100%]">
            <h1 className="font-bold md:text-xl text-2xl">
              Relax. I've got you.
            </h1>
          </div>
          {/* contacts and links */}
          <div>
            <a
              className="block hover:scale-105 transition-transform ease-out duration-200"
              href="#home"
            >
              Home
            </a>
            <a
              className="block hover:scale-105 transition-transform ease-out duration-200"
              href="#aboutme"
            >
              About
            </a>
            <a
              className="block hover:scale-105 transition-transform ease-out duration-200"
              href="projects"
            >
              Work
            </a>
            <a
              className="block hover:scale-105 transition-transform ease-out duration-200"
              href="contact"
            >
              Contact
            </a>
          </div>
          {/* social logins */}
          <div>
            {data.map((item, index) => (
              <a
                key={index}
                className="block hover:scale-105 transition-transform ease-out duration-200"
                target="_blank"
                href={item.link}
              >
                {item.title}
              </a>
            ))}
          </div>
        </div>
        {/* lower part */}
        <div className="flex flex-wrap space-y-4 lg:flex-nowrap lg:justify-between px-4 text-sm font-custombold0 uppercase">
          <div className="md:w-[60%] w-[100%]">
            <h1>Lahore, Pakistan</h1>
          </div>
          <div>
            <a href="mailto:hammadtariq7777@gmail.com">
              <p className="lowercase">hammadtariq7777@gmail.com</p>
            </a>
          </div>
          <div>
            <p>© 2024 copyrights reserved</p>
          </div>
        </div>
        {/* last part */}
      </div>
      <div className="relative overflow-hidden w-full lg:h-[50%] ">
        <div className="w-full text-[20vw]  text-center font-custombold1 font-bold">
          <span
            className="name -translate-y-[70%]"
            style={{ display: "inline-block" }}
          >
            H
          </span>
          <span
            className="name -translate-y-[70%]"
            style={{ display: "inline-block" }}
          >
            a
          </span>
          <span
            className="name -translate-y-[70%]"
            style={{ display: "inline-block" }}
          >
            m
          </span>
          <span
            className="name -translate-y-[70%]"
            style={{ display: "inline-block" }}
          >
            m
          </span>
          <span
            className="name -translate-y-[70%]"
            style={{ display: "inline-block" }}
          >
            a
          </span>
          <span
            className="name -translate-y-[70%]"
            style={{ display: "inline-block" }}
          >
            d
          </span>
        </div>
      </div>
    </footer>
  );
};

export default FooterComponent;
