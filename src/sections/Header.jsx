import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import { navItems } from "../constants";

const Header = () => {
  const [mousePosition, setMousePosition] = useState({
    x: 0,
    y: 0,
  });

  const [cursorVariant, setCursorVariant] = useState("default");
  const [isMenuOpen, setIsMenuOpen] = useState(false); // Track menu open/close state

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
      height: 60,
      width: 60,
      x: mousePosition.x - 30,
      y: mousePosition.y - 30,
      backgroundColor: "white",
      mixBlendMode: "difference",
    },
  };

  const textEnter = () => setCursorVariant("text");
  const textLeave = () => setCursorVariant("default");

  const topBarVariants = {
    open: { x: -10, y: 0, opacity: 0 }, // Move left and down
    closed: { x: 0, y: 0, opacity: 1 }, // Reset to original position
  };

  const bottomBarVariants = {
    open: { x: 10, y: 0, opacity: 0 }, // Move left and up
    closed: { x: 0, y: 0, opacity: 1 }, // Reset to original position
  };

  const middleBarVariants = {
    open: { opacity: 1 }, // Hide the middle bar
    closed: { opacity: 1 }, // Show the middle bar
  };

  const toggleMenu = () => {
    setIsMenuOpen((prevState) => !prevState); // Toggle between open and closed
  };

  // Function to close the menu when a link is clicked
  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  return (
    <header
      className={`py-8 w-full ${isMenuOpen ? "bg-primaryText" : "bg-primarybg"} fixed top-0 z-50`}
    >
      <nav className={`container flex justify-between items-center`}>
        <p
          onMouseEnter={textEnter}
          onMouseLeave={textLeave}
          className={`protest text-3xl md:text-4xl lg:text-5xl font-black uppercase ${isMenuOpen ? "text-white" : "text-primaryText"}`}
        >
          Ghrav<span className="text-secondaryText">itee</span>
        </p>
        <div className="flex justify-between items-center gap-6">
          <a
            href="#contact"
            onMouseEnter={textEnter}
            onMouseLeave={textLeave}
            className="hidden bg-primarybtn md:flex justify-center outfit font-extrabold items-center text-white text-xl uppercase px-4 py-3 tracking-widest"
          >
            contact
          </a>
          {/* <GiHamburgerMenu className="text-7xl text-primaryText cursor-pointer" /> */}
          <div
            onMouseEnter={textEnter}
            onMouseLeave={textLeave}
            className="flex flex-col gap-2"
            onClick={toggleMenu}
          >
            <motion.div
              className={`h-[6px] md:h-2 lg:h-3 w-12 ${isMenuOpen ? "bg-white" : "bg-primaryText"} `}
              animate={isMenuOpen ? "open" : "closed"}
              variants={topBarVariants}
              transition={{ duration: 0.8, delay: 0.2 }}
            ></motion.div>
            <motion.div
              className={`h-[6px] md:h-2 lg:h-3 w-12 ${isMenuOpen ? "bg-white" : "bg-primaryText"} `}
              animate={isMenuOpen ? "open" : "closed"}
              variants={middleBarVariants}
              transition={{ duration: 0.8, delay: 0.2 }}
            ></motion.div>
            <motion.div
              className={`h-[6px] md:h-2 lg:h-3 w-12 ${isMenuOpen ? "bg-white" : "bg-primaryText"} `}
              animate={isMenuOpen ? "open" : "closed"}
              variants={bottomBarVariants}
              transition={{ duration: 0.8, delay: 0.2 }}
            ></motion.div>
          </div>
        </div>
      </nav>

      {isMenuOpen && (
        <nav className="container bg-primaryText h-screen w-full">
          <div className="mt-[5rem] grid grid-cols-2">
            <ul className="flex flex-col justify-end gap-4 items-start text-white outfit font-bold">
              {navItems.map((item, index) => (
                <li key={index}>
                  <a
                    href={item.href}
                    className="text-[3rem] lg:text-[5rem] tracking-widest"
                    onClick={closeMenu}
                  >
                    {item.title}
                  </a>
                </li>
              ))}
            </ul>
            <div>
              <h2></h2>
            </div>
          </div>
        </nav>
      )}

      <motion.div
        variants={variants}
        animate={cursorVariant}
        className="cursor"
      />
    </header>
  );
};

export default Header;
