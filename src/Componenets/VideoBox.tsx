import React from "react";

const VideoBox = ({ img1, img2, head1, head2 }) => {
  return (
    <div className="flex flex-col justify-center items-center font-bold ">
      {" "}
      <div className="flex justify-around items-center w-[80vw] group cursor-pointer">
        <img
          className="w-44 h-52 opacity-0 group-hover:opacity-100 group-hover:-rotate-2 group-hover:translate-y-[10%] transition-all ease-in-out duration-500 absolute left-[20%] object-cover bg-center rounded-sm"
          src={img1}
          alt=""
        />
        <div className="h-12 overflow-hidden text-center ">
          <h1 className="text-5xl uppercase group-hover:text-fuchsia-500 text-white group-hover:-translate-y-full transition-all ease-linear duration-[0.5]">
            {head1}
          </h1>
          <h1 className="text-5xl uppercase group-hover:text-fuchsia-500 text-white transition-all ease-out duration-[0.5] group-hover:-translate-y-full">
            {head2}
          </h1>
        </div>
        <img
          className="w-44 h-52  opacity-0 group-hover:opacity-100 group-hover:translate-y-[10%] group-hover:rotate-2 transition-all ease-in-out duration-500 absolute left-[70%] object-cover bg-center rounded-md"
          src={img2}
          alt=""
        />
      </div>
    </div>
  );
};

export default VideoBox;
