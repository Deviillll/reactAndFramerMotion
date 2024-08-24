import React from "react";

const Projects = () => {
  return (
    <div className="flex flex-col h-screen w-full space-y-5 justify-center items-center">
      {Array.from({ length: 5 }).map((_, index) => (
        <div key={index} className="flex justify-between h-1/5 w-2/3 ">
          <h1 className="text-2xl text-white font-bold">Heading {index + 1}</h1>
          <img
            src={
              "https://plus.unsplash.com/premium_photo-1724061887469-3a40dce2f611?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            } // Replace with actual image paths
            alt={`Image ${index + 1}`}
            className="w-32 h-full object-cover"
          />
        </div>
      ))}
    </div>
  );
};

export default Projects;
