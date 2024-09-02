import React from "react";

const VideoBox = ({ img1, img2, head1, head2 }) => {
  return (
    <div className=" font-custombold2 font-bold overflow-hidden ">
      {" "}
      <div className="flex justify-around items-center w-[80vw] group  ">
        <img
          className="lg:w-44 lg:h-52 w-16 h-14 sm:w-[60px] sm:h-14 md:w-24 md:h-20 opacity-0 group-hover:opacity-100 group-hover:-rotate-2 group-hover:translate-y-[10%] transition-all ease-in-out duration-500 absolute left-[10%] object-cover bg-center rounded-sm"
          src={img1}
          alt=""
        />
        <div className="md:h-[80px] lg:h-[100px] xl:h-[130px]  h-12 overflow-hidden text-center cursor-pointer">
          <h1 className="md:text-[6.5vw] text-[7vw] uppercase group-hover:text-fuchsia-400 text-zinc-50 group-hover:-translate-y-full transition-all ease-linear duration-[0.5]">
            {head1}
          </h1>
          <h1 className="md:text-[6.5vw] text-[7vw]  uppercase group-hover:text-fuchsia-400 text-zinc-50 transition-all ease-out duration-[0.5] group-hover:-translate-y-full">
            {head2}
          </h1>
        </div>
        <img
          className="lg:w-44 lg:h-52 w-16 h-14 sm:w-[60px] sm:h-14 md:w-24 md:h-20  opacity-0 group-hover:opacity-100 group-hover:translate-y-[10%] group-hover:rotate-2 transition-all ease-in-out duration-500 absolute left-[80%] object-cover bg-center rounded-md"
          src={img2}
          alt=""
        />
      </div>
    </div>
  );
};

export default VideoBox;
