import React, { useState } from "react";
import Links from "./Links";
import Btn from "./Btn";
import { motion } from "framer-motion";

const Navbar = () => {
  const [open, setOpen] = useState(false);

  const varients = {
    open: {
      clipPath: "circle(800px at 40px 40px)",
      transition: {
        type: "spring",
        stiffness: 20,
      },
    },
    closed: {
      clipPath: "circle(30px at 35px 40px)",
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
      className=" relative z-50  right-10 text-black  "
    >
      <motion.div
        variants={varients}
        className="fixed top-0 left-0 bottom-0 w-[80vw] sm:w-[60vw] z lg:w-[35vw] bg-white"
      >
        <Links />
      </motion.div>
      <Btn setOpen={setOpen} />
    </motion.div>
  );
};

export default Navbar;
