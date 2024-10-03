import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import AOS from "aos";
import "aos/dist/aos.css"; // Import AOS styles
import { Reveal } from "../components/Reveal";

const Intro = () => {
  const [mousePosition, setMousePosition] = useState({
    x: 0,
    y: 0,
  });

  const [cursorVariant, setCursorVariant] = useState("default");
  useEffect(() => {
    AOS.init({
      duration: 1000, // Animation duration in milliseconds
      once: true, // Whether the animation should happen only once
    });
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

  return (
    <section className="container flex px-4 lg:pt-44 py-10">
      <div className="lg:text-left block md:hidden">
        <Reveal>
          <h2
            onMouseEnter={textEnter}
            onMouseLeave={textLeave}
            className="text-secondaryText text-[2rem] xl:text-[4.5rem] lg:text-[3rem] outfit font-black leading-[1.3] lg:leading-[1] max-w-[52rem]"
          >
            &#8220;As a{" "}
            <span className="text-primaryText">dedicated freelancer</span>, I
            specialize in crafting{" "}
            <span className="text-primaryText">
              unique, visually appealing, and high-quality {""}
            </span>
            websites that help clients{" "}
            <span className="text-primaryText">stand out</span> and{" "}
            <span className="text-primaryText">achieve</span>
            their goals.&#8221;
          </h2>
        </Reveal>
      </div>

      <div className="hidden md:block lg:text-left">
        <h2
          onMouseEnter={textEnter}
          onMouseLeave={textLeave}
          className="text-secondaryText text-[2rem] xl:text-[4.5rem] lg:text-[3rem] outfit font-black leading-[1.3] lg:leading-[1] max-w-[52rem]"
        >
          <Reveal>&#8220;As a dedicated</Reveal>
          <Reveal>
            <span className="text-primaryText">freelancer</span>, I specialize
          </Reveal>
          <Reveal>
            In crafting{" "}
            <span className="text-primaryText">unique, visually</span>
          </Reveal>
          <Reveal>
            <h2 className="text-primaryText">appealing, and high-</h2>
          </Reveal>
          <Reveal>quality websites that </Reveal>
          <Reveal>
            <span className="text-primaryText">help clients stand out</span> and
          </Reveal>
          <Reveal>
            <span className="text-primaryText">achieve</span> their
            goals.&#8221;
          </Reveal>
        </h2>
      </div>
      <motion.div
        variants={variants}
        animate={cursorVariant}
        className="cursor"
      />
    </section>
  );
};

export default Intro;
