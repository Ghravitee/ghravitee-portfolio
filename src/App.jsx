import Enthusiast from "./components/Enthusiast";
import ScrollToTopButton from "./components/ScrollToTop";
import About from "./sections/About";
import Contact from "./sections/Contact";
import Footer from "./sections/Footer";
import Header from "./sections/Header";
import Hero from "./sections/Hero";
import Intro from "./sections/Intro";
import Projects from "./sections/Projects";

const App = () => {
  return (
    <div className="relative overflow-hidden">
      <Header />
      <Hero />
      <Intro />
      <Projects />
      <Enthusiast />
      <About />
      <Contact />
      <Footer />
      <ScrollToTopButton />
    </div>
  );
};

export default App;
