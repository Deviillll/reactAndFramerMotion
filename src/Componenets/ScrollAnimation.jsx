import React, { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

const ScrollAnimation = () => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll();

  const background = useTransform(
    scrollYProgress,
    [0, 1],
    ["#ff008c", "#7928ca"]
  );

  const moveX = useTransform(
    scrollYProgress,
    [0, 0.5, 1],
    ["0%", "100%", "100%"]
  );

  const scale = useTransform(
    scrollYProgress,
    [0, 0.5, 0.75, 1], // Adjust zoom-in range
    [1, 1, 1.5, 2] // Adjust zoom-in scale
  );

  const showComponent = useTransform(
    scrollYProgress,
    [0, 0.4], // Delay component appearance
    [1, 0]
  );
  const opacity = useTransform(scrollYProgress, [0, 0.5, 1], [0, 1, 0]);

  return (
    <>
      <div ref={ref} className="h-[200vh] w-full relative">
        <motion.div
          style={{ background, x: moveX, scale, opacity }}
          className="h-96 w-72 sticky top-0  rounded-lg"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{
            type: "spring",
            stiffness: 100,
            damping: 20,
            duration: 2,
          }}
        ></motion.div>
        {/* <motion.div
          style={{ opacity: showComponent }}
          className="fixed inset-0 flex items-center justify-center bg-white"
        >
         
          <div className="h-full w-full flex items-center justify-center">
            <p>Here is your video or another component</p>
          </div>
        </motion.div> */}
      </div>
    </>
  );
};

export default ScrollAnimation;
