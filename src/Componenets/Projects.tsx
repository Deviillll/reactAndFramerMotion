import React, { useRef, useEffect } from "react";
import gsap from "gsap";

const data = [
  {
    title: "whatsApp",
    img: "https://images.unsplash.com/photo-1724579243894-6a8c9bbfe88c?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHw0fHx8ZW58MHx8fHx8",
  },
  {
    title: "Instagram",
    img: "https://images.unsplash.com/photo-1723965453045-b025e5b3af13?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    title: "LinkedIn",
    img: "https://images.unsplash.com/photo-1724554427582-3b7cba44529b?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    title: "Twitter",
    img: "https://images.unsplash.com/photo-1724649399943-5f50ea36200a?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  // {
  //   title: "SnapChat",
  //   img: "https://images.unsplash.com/photo-1723965453045-b025e5b3af13?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  // },
];

const Projects = () => {
  const ref = useRef<HTMLDivElement>(null);
  const cursor = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const cursorRef = cursor.current;

    if (cursorRef) {
      const handleMouseMove = (e: MouseEvent) => {
        gsap.to(cursorRef, {
          x: e.clientX - cursorRef.offsetWidth / 2,
          y: e.clientY - cursorRef.offsetHeight / 2,
          duration: 0.1,
        });
      };

      document.addEventListener("mousemove", handleMouseMove);

      return () => {
        document.removeEventListener("mousemove", handleMouseMove);
      };
    }
  }, []);

  useEffect(() => {
    const forEachElements = ref.current?.querySelectorAll(".forEach");

    forEachElements?.forEach((element) => {
      const heading = element.querySelector("#parent");

      element.addEventListener("mouseenter", () => {
        const imgIndex = element.getAttribute("data-img");
        cursor.current!.style.width = "200px";
        cursor.current!.style.height = "200px";
        cursor.current!.style.borderRadius = "0px";
        cursor.current!.style.backgroundImage = `url(${imgIndex})`;
      });

      element.addEventListener("mouseleave", () => {
        cursor.current!.style.backgroundImage = "none";
        cursor.current!.style.width = "40px";
        cursor.current!.style.height = "40px";
        cursor.current!.style.borderRadius = "100%";
      });

      // heading?.addEventListener("mouseenter", () => {
      //   cursor.current!.style.backgroundImage = "none";
      // });

      heading?.addEventListener("mouseleave", () => {
        const imgIndex = element.getAttribute("data-img");
        cursor.current!.style.backgroundImage = `url(${imgIndex})`;
      });
    });

    return () => {
      forEachElements?.forEach((element) => {
        element.removeEventListener("mouseenter", () => {});
        element.removeEventListener("mouseleave", () => {});
      });
    };
  }, []);

  return (
    <div
      ref={ref}
      className="flex relative flex-col h-[100vh] bg-zinc-950 py-5 w-full space-y-5 justify-center items-center"
    >
      <div
        ref={cursor}
        className="absolute w-10 h-10 transition-colors ease-in-out duration-150 bg-center bg-cover rounded-full top-0 left-0"
      ></div>
      {data.map((item, index) => (
        <div
          data-img={item.img}
          key={index}
          className={`flex cursor-pointer relative forEach flex-col justify-center items-start h-1/5 w-2/3 border-b ${
            index === 0 && "border-t"
          } `}
        >
          <div id="parent" className=" h-full w-[23%] flex items-center">
            <h1 className="text-2xl text-white font-bold ">
              {item.title}{" "}
              <span className="ml-4 text-3xl text-fuchsia-500 font-bold">
                {" "}
                ↗
              </span>
            </h1>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Projects;
