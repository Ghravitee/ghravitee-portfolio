import { useState, useEffect } from "react";
import { FaChevronUp } from "react-icons/fa";
import AOS from "aos";
import "aos/dist/aos.css"; // Ensure AOS styles are imported

const ScrollToTopButton = () => {
  const [visible, setVisible] = useState(false);

  const handleScroll = () => {
    if (window.scrollY > window.innerHeight / 2) {
      setVisible(true);
    } else {
      setVisible(false);
    }
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    AOS.init({
      duration: 800,
      easing: "ease-in-out",
    });
    AOS.refresh();
  }, []);

  return (
    <button
      onClick={scrollToTop}
      data-aos="fade-in" // AOS attribute for fade-in animation
      data-aos-delay="300" // Optional delay for animation
      style={{
        position: "fixed",
        bottom: "20px",
        right: "20px",
        zIndex: "100",
        display: visible ? "flex" : "none",
        backgroundColor: "#EB292C",
        justifyContent: "center",
        alignItems: "center",
        border: "none",
        borderRadius: "50%",
        width: "50px",
        height: "50px",
        textAlign: "center",
        lineHeight: "50px",
        cursor: "pointer",
        boxShadow: "0 2px 5px rgba(0,0,0,0.2)",
        fontSize: "24px",
      }}
    >
      <FaChevronUp size={25} color="white" />
    </button>
  );
};

export default ScrollToTopButton;
