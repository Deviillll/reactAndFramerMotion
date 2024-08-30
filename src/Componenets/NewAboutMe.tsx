import React, { useRef, useEffect } from "react";

const NewAboutMe = () => {
  const text = useRef<HTMLHeadingElement>(null);

  const data =
    "Hi! I'm Hammad, a Computer Science student and Full Stack Developer. I love creating animated and modern. websites, combining my skills in both front-end. and back-end development to build dynamic web applications. Let's create something amazing together!";
  const newData = data.split("");

  return (
    <div className="h-screen w-screen relative">
      <div className="flex ml-[5%]  w-[49%] text-4xl  font-custombold8 h-full items-center justify-center">
        <h1 ref={text} className=" bg-red-500 flex  flex-wrap w-full ">
          {newData.map((letter, index) => (
            <span key={index}>{letter === " " ? "\u00A0" : letter} </span>
          ))}
        </h1>
      </div>
    </div>
  );
};

export default NewAboutMe;
