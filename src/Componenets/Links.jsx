import { motion } from "framer-motion";
import React from "react";
const varients = {
  open: {
    transition: { staggerChildren: 0.1, delayChildren: 0.2 },
  },
  closed: {
    transition: { staggerChildren: 0.05, staggerDirection: -1 },
  },
};

const itemlist = {
  open: { y: 0, opacity: 1 },
  closed: { y: 50, opacity: 0 },
};

const Links = ({ setOpen }) => {
  const items = [
    { name: "home", link: "home" },
    { name: "about", link: "aboutMe" },
    { name: "projects", link: "projects" },
    { name: "contact", link: "contact" },
  ];
  return (
    <motion.div
      variants={varients}
      className="absolute z-50 w-full h-full flex flex-col  items-center justify-center gap-6"
    >
      {items.map((item, index) => (
        <motion.a
          key={index}
          variants={itemlist}
          whileHover={{ scale: 1.2 }}
          whileTap={{ scale: 0.95 }}
          href={`#${item.link}`}
          onClick={() => setOpen((prev) => !prev)}
          className="font-custombold3 font-bold text-2xl md:text-3xl text-zinc-950 uppercase"
        >
          {item.name}
        </motion.a>
      ))}
    </motion.div>
  );
};

export default Links;
