import { useEffect, useRef, useState } from "react";
import Lenis from "lenis";
import { useScroll, useTransform, motion } from "framer-motion";

// eslint-disable-next-line react/prop-types
const Heading = ({ title }) => {
  const [mousePosition, setMousePosition] = useState({
    x: 0,
    y: 0,
  });

  const [cursorVariant, setCursorVariant] = useState("default");

  useEffect(() => {
    const mouseMove = (e) => {
      setMousePosition({
        x: e.clientX,
        y: e.clientY,
      });
    };

    window.addEventListener("mousemove", mouseMove);

    return () => {
      window.removeEventListener("mousemove", mouseMove);
    };
  }, []);

  const variants = {
    default: {
      x: mousePosition.x - 16,
      y: mousePosition.y - 16,
    },
    text: {
      height: 150,
      width: 150,
      x: mousePosition.x - 75,
      y: mousePosition.y - 75,
      backgroundColor: "white",
      mixBlendMode: "difference",
    },
  };

  const textEnter = () => setCursorVariant("text");
  const textLeave = () => setCursorVariant("default");

  // Lenis for smooth scrolling
  useEffect(() => {
    const lenis = new Lenis();

    function raf(time) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }
    requestAnimationFrame(raf);

    return () => lenis.destroy(); // Clean up the smooth scroll when component unmounts
  }, []);

  // Scroll progress tracking
  const container = useRef();
  const { scrollYProgress } = useScroll({
    target: container,
    offset: ["start end", "end start"], // Scroll trigger points
  });

  // Define the transform values for x-axis animation
  const xLeftToRight = useTransform(scrollYProgress, [0, 1], [300, -150]);
  const xRightToLeft = useTransform(scrollYProgress, [0, 1], [150, 400]);

  return (
    <section className="overflow-hidden" id="projects">
      {/* Spacer div for simulating scroll */}
      {/* <div className="h-[10vh]" /> */}

      {/* Content to be animated */}
      <div ref={container}>
        {/* First motion div sliding from left to right */}
        <motion.div
          className="flex whitespace-nowrap relative"
          style={{ x: xRightToLeft }}
        >
          <h1
            onMouseEnter={textEnter}
            onMouseLeave={textLeave}
            className="text-primaryText text-3xl lg:text-7xl uppercase protest"
          >
            {title}
          </h1>
        </motion.div>

        {/* Second motion div sliding from right to left */}
        <motion.div
          className="flex whitespace-nowrap relative"
          style={{ x: xLeftToRight }}
        >
          <h1
            onMouseEnter={textEnter}
            onMouseLeave={textLeave}
            className="text-secondaryText text-3xl lg:text-7xl uppercase protest"
          >
            {title}
          </h1>
        </motion.div>
      </div>

      <motion.div
        variants={variants}
        animate={cursorVariant}
        className="cursor"
      />

      {/* Spacer div for simulating scroll */}
      {/* <div className="h-[10vh]" /> */}
    </section>
  );
};

export default Heading;
