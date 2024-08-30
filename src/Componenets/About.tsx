import React, { useEffect, useRef } from "react";
import VideoBox from "./VideoBox";
import gsap from "gsap";

const About = () => {
  const cursor = useRef<HTMLDivElement>(null);
  useEffect(() => {
    const cursorRef = cursor.current;

    if (cursorRef) {
      const handleMouseMove = (e: MouseEvent) => {
        gsap.to(cursorRef, {
          x: e.clientX,
          y: e.clientY,
          duration: 0.05, // Reduced duration for quicker response
          ease: "power4.out", // Changed ease function for smoother animation
        });
      };
      document.addEventListener("mousemove", handleMouseMove);

      return () => {
        document.removeEventListener("mousemove", handleMouseMove);
      };
    }
  }, []);
  return (
    <div className="lg:h-[70vh] overflow-x-hidden h-[50vh]  relative items-center flex flex-col w-screen lg:cursor-none justify-center ">
      <VideoBox
        img1={
          "https://images.unsplash.com/photo-1723903818490-6cb447ad1f05?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        }
        img2={
          "https://images.unsplash.com/photo-1701334616679-5391e3411347?q=80&w=1935&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        }
        head1={"strategy"}
        head2={"strategy"}
      />
      <VideoBox
        img1={
          "https://plus.unsplash.com/premium_photo-1723983556109-7415d601c377?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        }
        img2={
          "https://images.unsplash.com/photo-1724169913051-49f6ff76a070?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        }
        head1={"design"}
        head2={"design"}
      />
      <VideoBox
        img1={
          "https://images.unsplash.com/photo-1724313802205-6f70304e6c64?q=80&w=1935&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        }
        img2={
          "https://plus.unsplash.com/premium_photo-1724061887469-3a40dce2f611?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        }
        head1={"planning"}
        head2={"planning"}
      />
      <div
        ref={cursor}
        className="hidden lg:flex absolute w-10 h-10 transition-transform ease-linear duration-150 text-zinc-950 font-custombold2  bg-purple-400 text-xs items-center  flex-col justify-center rounded-full top-0 left-0"
      >
        hover
      </div>
    </div>
  );
};

export default About;
