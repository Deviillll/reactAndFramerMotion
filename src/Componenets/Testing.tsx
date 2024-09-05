import React from "react";

const Testing = () => {
  return (
    <div className="h-screen w-screen text-[8vw] font-bold uppercase relative">
      <div className="h-1/2 absolute top-0 w-full bg-orange-400 text-center justify-center items-end flex">
        <h1 className="translate-y-[6vw]">hello</h1>
      </div>
      <div className="h-1/2 absolute bottom-0 w-full bg-green-300 text-center flex justify-center items-start">
        <h1 className="-translate-y-[6vw] ">hello</h1>
      </div>
    </div>
  );
};

export default Testing;
