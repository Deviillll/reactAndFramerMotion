import React, { useState } from "react";
import Links from "./Links";
import Btn from "./Btn";
import { motion } from "framer-motion";

const Navbar = () => {
  const [open, setOpen] = useState(false);

  const varients = {
    open: {
      clipPath: "circle(950px at calc(100% - 40px) 40px)",
      transition: {
        type: "spring",
        stiffness: 50,
        damping: 30,
      },
    },
    closed: {
      clipPath: "circle(30px at calc(100% - 35px) 40px)",
      transition: {
        type: "spring",
        stiffness: 400,
        delay: 0.5,
        damping: 45,
      },
    },
  };

  return (
    <motion.div
      animate={open ? "open" : "closed"}
      className=" relative z-50 w-screen  "
    >
      <motion.div
        variants={varients}
        className={`fixed lg:top-0 top-2 right-1 bottom-0  w-[80vw] sm:w-[70vw] z lg:w-[35vw] bg-gray-50`}
      >
        <Links setOpen={setOpen} />
      </motion.div>
      <Btn setOpen={setOpen} />
    </motion.div>
  );
};

export default Navbar;
