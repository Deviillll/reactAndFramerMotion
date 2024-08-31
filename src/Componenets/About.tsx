import React, { useEffect, useRef } from "react";
import VideoBox from "./VideoBox";
import gsap from "gsap";

const About = () => {
  return (
    <div className="md:h-[70vh] overflow-x-hidden h-[50vh] mb-6 md:py-16  relative items-center flex flex-col w-screen  justify-center ">
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
    </div>
  );
};

export default About;
