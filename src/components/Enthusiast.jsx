import { useEffect, useRef } from "react";
import Lenis from "lenis";
import { useScroll, useTransform, motion } from "framer-motion";
import { SiFrontendmentor } from "react-icons/si";

const Enthusiast = () => {
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
  const xLeftToRight = useTransform(scrollYProgress, [0, 1], [-100, 200]);
  const xRightToLeft = useTransform(scrollYProgress, [0, 1], [150, -600]);

  return (
    <section className="overflow-hidden">
      {/* Spacer div for simulating scroll */}
      <div className="h-[2vh]" />

      {/* Content to be animated */}
      <div ref={container}>
        {/* First motion div sliding from left to right */}
        <motion.div
          className="flex whitespace-nowrap relative"
          style={{ x: xRightToLeft }}
        >
          <h1 className="text-primaryText text-4xl lg:text-[5rem] uppercase outfit lg:mb-8">
            I am a frontend mentor Enthusiast
          </h1>
        </motion.div>

        {/* Second motion div sliding from right to left */}
        <motion.div
          className="flex whitespace-nowrap relative"
          style={{ x: xLeftToRight }}
        >
          <h1 className="text-primarybtn text-4xl lg:text-[5rem] uppercase outfit font-bold">
            I am a frontend mentor Enthusiast
          </h1>
        </motion.div>
      </div>
      <a
        href="https://www.frontendmentor.io/profile/Ghravitee"
        className="w-fit mx-auto text-lg md:text-2xl tracking-wider gap-2 mt-10 lg:mt-14 barlow-bold uppercase bg-primaryText text-white flex justify-center items-center p-3 lg:p-4"
      >
        Explore my challenges{" "}
        <SiFrontendmentor className="text-2xl text-white" />
      </a>

      {/* Spacer div for simulating scroll */}
      <div className="h-[10vh]" />
    </section>
  );
};

export default Enthusiast;
