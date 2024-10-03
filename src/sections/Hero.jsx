import FixedSocialHandles from "../components/FixedSocialIcons";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import AOS from "aos";
import "aos/dist/aos.css"; // Import AOS styles
import { FaLongArrowAltDown } from "react-icons/fa";

const Hero = () => {
  const [mousePosition, setMousePosition] = useState({
    x: 0,
    y: 0,
  });

  const [cursorVariant, setCursorVariant] = useState("default");

  // Initialize AOS
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  // Handle mouse movement
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

  // Cursor animation variants
  const variants = {
    default: {
      x: mousePosition.x - 16,
      y: mousePosition.y - 16,
    },
    text: {
      height: 120,
      width: 120,
      x: mousePosition.x - 60,
      y: mousePosition.y - 60,
      backgroundColor: "white",
      mixBlendMode: "difference",
    },
  };

  const textEnter = () => setCursorVariant("text");
  const textLeave = () => setCursorVariant("default");

  // Animation for the h1 text
  const container = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3, // Stagger effect
      },
    },
  };

  const item = {
    hidden: { opacity: 0, x: 50 }, // Slide in from the right
    visible: { opacity: 1, x: 0, transition: { duration: 0.8 } },
  };

  return (
    <section className="container pt-36">
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Social icons */}
        <div
          data-aos="fade-up" // AOS animation
          className="lg:justify-self-start self-center lg:col-start-1 lg:col-end-2"
        >
          <FixedSocialHandles />
          <a
            href="#projects"
            className="hidden w-44 h-44 rounded-full lg:flex justify-center items-center border-4 border-primaryText mt-10"
          >
            <FaLongArrowAltDown className="text-2xl lg:text-6xl" />
          </a>
        </div>

        {/* Main content */}
        <div
          className="lg:col-start-2 lg:col-end-4 flex-col gap-4 justify-end relative"
          data-aos="fade-up"
        >
          <p
            onMouseEnter={textEnter}
            onMouseLeave={textLeave}
            className="uppercase outfit text-2xl lg:text-right text-center outfit"
            data-aos="fade-right"
          >
            Hello, I&apos;m <span className="font-black">Daniel</span>.
          </p>

          {/* H1 with staggered animation */}
          <motion.h1
            className="text-[3rem] xl:text-[5rem] lg:text-[4rem] barlow-black lg:text-right text-center leading-[1.1] lg:leading-[1.2]"
            onMouseEnter={textEnter}
            onMouseLeave={textLeave}
            initial="hidden"
            animate="visible"
            variants={container} // Container for staggered children
          >
            <motion.span className="block" variants={item}>
              a Freelance?. Web Developer,
            </motion.span>
            <motion.span className="block" variants={item}>
              transforming the web
            </motion.span>
            <motion.span className="block" variants={item}>
              into your{" "}
              <span className="text-secondaryText">digital masterpiece!</span>
            </motion.span>
          </motion.h1>
        </div>
      </div>

      {/* Custom cursor */}
      <motion.div
        variants={variants}
        animate={cursorVariant}
        className="cursor"
      />
    </section>
  );
};

export default Hero;
