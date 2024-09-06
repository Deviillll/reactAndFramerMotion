import React from "react";
import { motion } from "framer-motion";

const ContactComponent = () => {
  return (
    <div
      className="w-screen h-screen bg-zinc-50 text-zinc-950 flex lg:flex-row flex-col md:px-8 px-5 pb-7 lg:py-5  md:justify-center"
      id="contact"
    >
      {/* heading */}
      <div className="flex-1 w-1/2   md:flex-col text-2xl mt-20 md:text-[4.5vw] uppercase  font-custombold0 ">
        <div className="md:-space-y-2  leading-tight">
          <h1>lets create</h1>
          <h1>something </h1>
          <h1>cool!</h1>
        </div>
        <div className="lowercase text-2xl md:text-4xl underline underline-offset-8 mt-7 font-custombold1 font-normal">
          <a href="mailto:hammadtariq7777@gmail.com">
            hammadtariq7777@gmail.com
          </a>
        </div>
      </div>
      {/* inputs */}
      <div className="flex-1 md:w-1/2 flex flex-col h-full w-full     md:justify-center">
        {/* note */}
        <div>
          <h1 className="font-custombold0 uppercase">Send me a message</h1>
        </div>
        <div className="flex flex-col space-y-4 w-full px-2 ">
          <div>
            <input
              className="py-4 w-full rounded-sm focus:outline-none capitalize focus:border-purple-400 bg-zinc-50 placeholder-neutral-500 font-custombold9 border-b border-zinc-950 "
              type="text"
              placeholder="what's your name?"
            />
          </div>
          <div>
            <input
              className="py-4 w-full rounded-sm focus:outline-none focus:border-purple-400 capitalize  bg-zinc-50 placeholder-neutral-500 font-custombold9 border-b border-zinc-950 "
              type="text"
              placeholder="what' your company called?"
            />
          </div>
          <div>
            <input
              className="py-4 w-full rounded-sm focus:outline-none focus:border-purple-400 capitalize  bg-zinc-50 placeholder-neutral-500 font-custombold9 border-b border-zinc-950 "
              type="text"
              placeholder="what's your email?"
            />
          </div>
          <div>
            <input
              className="py-4 w-full rounded-sm focus:outline-none focus:border-purple-400 capitalize  bg-zinc-50 placeholder-neutral-500 font-custombold9 border-b border-zinc-950 "
              type="text"
              placeholder="what service you looking for?"
            />
          </div>
          <div>
            <textarea
              className="py-4 w-full rounded-sm focus:outline-none bg-zinc-50 focus:border-purple-400 capitalize  placeholder-neutral-500 font-custombold9 border-b border-zinc-950 "
              placeholder="what's your message?"
            />
          </div>
          <div>
            <button className="  capitalize  text-zinc-950 border hover:bg-black hover:text-white transition-colors ease-in-out duration-300 border-zinc-950  rounded-full px-5 py-4">
              send message
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactComponent;
