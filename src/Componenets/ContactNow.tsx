import React from "react";
import { motion } from "framer-motion";

const ContactComponent = () => {
  return (
    <div className="w-screen h-screen flex justify-center items-center  md:bg-zinc-50">
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="md:max-w-lg  w-[90vw] lg:w-[70vw] xl:w-[100vw]  px-8 lg:px-24 py-14 bg-zinc-950  rounded-md  shadow-sm font-custombold4 uppercase shadow-zinc-950"
      >
        <h2 className="text-4xl font-bold mb-6 text-center">Contact Me</h2>
        <form className="space-y-6 w-full">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="space-y-2"
          >
            <label htmlFor="name" className="block  text-sm font-medium ">
              Name
            </label>
            <input
              type="text"
              id="name"
              name="name"
              placeholder="John Doe"
              required
              className="w-full px-4 py-2 text-zinc-950 border border-gray-900 rounded-md focus:outline-none focus:ring-2 focus:ring-zinc-950"
            />
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="space-y-2"
          >
            <label htmlFor="email" className="block  text-sm font-medium ">
              Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              placeholder="jhondoe@gmail.com"
              required
              className="w-full px-4 py-2 border text-zinc-950 border-gray-900 rounded-md focus:outline-none focus:ring-2 focus:ring-gray-900"
            />
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.6 }}
            className="space-y-2"
          >
            <label htmlFor="message" className="block  text-sm font-medium ">
              Message
            </label>
            <textarea
              id="message"
              name="message"
              required
              className="w-full text-zinc-950 px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-gray-900"
            ></textarea>
          </motion.div>
          <motion.button
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            className="text-sm text-center md:text-xl border uppercase flex-col lg:text-3xl w-full flex mt-5 md:mt-4 lg:mt-3 items-center rounded-md tracking-tight bg-zinc-50 px-2 md:px-3 lg:px-4 lg:py-2 xl:px-5 xl:py-2 font-custombold9  py-3 text-zinc-950/90 hover:bg-zinc-950 hover:text-zinc-50 transition-all ease-in-out duration-150"
            type="submit"
          >
            contact now
          </motion.button>
        </form>
      </motion.div>
    </div>
  );
};

export default ContactComponent;
