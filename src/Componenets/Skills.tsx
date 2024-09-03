import React, { useEffect } from "react";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";

const skills = [
  "React",
  "Next.js",
  "JavaScript",
  "MongoDB",
  "Node.js",
  "Tailwind",
  "HTML5",
  "GSAP",
  "Framer Motion",
  "Python",
];

const SkillsComponent = () => {
  const controls = useAnimation();
  const [ref, inView] = useInView();

  useEffect(() => {
    if (inView) {
      controls.start("visible");
    } else {
      controls.start("hidden");
    }
  }, [controls, inView]);

  return (
    <div className="bg-zinc-950 text-zinc-50 min-h-screen flex flex-wrap justify-center items-center">
      {skills.map((skill, index) => (
        <motion.div
          key={index}
          className="w-24 h-24 flex justify-center items-center m-4 rounded-full bg-zinc-800"
          whileHover={{ scale: 1.2 }}
          whileTap={{ scale: 0.9 }}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: index * 0.1 }}
        >
          {skill}
        </motion.div>
      ))}

      <motion.div
        ref={ref}
        initial="hidden"
        animate={controls}
        variants={{
          visible: { opacity: 1, x: 0 },
          hidden: { opacity: 0, x: -100 },
        }}
        transition={{ duration: 0.5 }}
        className="w-full h-64 bg-zinc-800 flex justify-center items-center mt-8"
      >
        Scroll Animation
      </motion.div>

      <motion.div
        className="w-24 h-24 bg-zinc-800 rounded-full flex justify-center items-center m-4"
        animate={{ rotate: [0, 360] }}
        transition={{ duration: 2, repeat: Infinity }}
      >
        Rotate
      </motion.div>

      <motion.div
        className="w-24 h-24 bg-zinc-800 rounded-full flex justify-center items-center m-4"
        animate={{ scale: [1, 1.5, 1] }}
        transition={{ duration: 1, repeat: Infinity }}
      >
        Scale
      </motion.div>

      <motion.div
        className="w-24 h-24 bg-zinc-800 rounded-full flex justify-center items-center m-4"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, repeat: Infinity, repeatType: "reverse" }}
      >
        Fade
      </motion.div>
    </div>
  );
};

export default SkillsComponent;
