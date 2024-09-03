import React from "react";

const MobileProjects = () => {
  return (
    <div className="flex my-4 uppercase lg:hidden flex-col justify-around mx-auto items-center overflow-hidden h-[100vh] w-[80vw]">
      <div className="my-4">
        <h1 className="text-3xl font-custombold4 font-bold">
          food ordeing app
        </h1>
        <p className="text-lg tracking-tight leading-tight text-md font-custombold8 mt-3 ">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Architecto
          nihil maxime voluptas esse magnam commodi ex error ut sunt,
          doloremque, excepturi deserunt quidem, illum dignissimos sapiente
          tempore repellat et consectetur?
        </p>
      </div>
      <div className="mx-auto ">
        <img
          className="mx-auto rounded-md"
          src="https://cdn.pixabay.com/photo/2023/08/23/12/50/fog-8208493_1280.jpg"
          alt=""
        />
        <div className="flex gap-2 my-6 w-full">
          <img
            className=" w-1/2 rounded-md"
            src="https://cdn.pixabay.com/photo/2023/08/23/12/50/fog-8208493_1280.jpg"
            alt=""
          />
          <img
            className=" w-1/2 rounded-md"
            src="https://cdn.pixabay.com/photo/2023/08/23/12/50/fog-8208493_1280.jpg"
            alt=""
          />
        </div>
        <button className="px-4 py-2 bg-white text-black mt-4 rounded-lg">
          preview
        </button>
      </div>
    </div>
  );
};

export default MobileProjects;
