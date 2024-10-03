import project2 from "../assets/project-2.webp";
import project3 from "../assets/project-3.webp";
import { FaReact } from "react-icons/fa";
import { RiTailwindCssFill } from "react-icons/ri";
import { SiFirebase } from "react-icons/si";
import { GoArrowUpRight } from "react-icons/go";
import { FaNodeJs } from "react-icons/fa6";
import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css"; // Import AOS styles

const Projects = () => {
  // Initialize AOS animations
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  return (
    <section>
      <div className="pb-28" id="projects" />
      <div className="container pb-20">
        <h2 className="text-[2rem] lg:text-[2.5rem] text-primaryText barlow-bold mb-10 uppercase">
          Latest Projects
        </h2>
        {/* Section Title */}
        {/* <h2
        className="barlow-extrabold text-2xl lg:text-4xl mb-20"
        data-aos="fade-up"
      >
        Latest <span className="text-secondary">Projects</span>
      </h2> */}

        {/* Project 1 */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 justify-center">
          <div data-aos="fade-up-right relative">
            <img
              src={project2}
              alt="TWBS Project"
              className="h-full rounded-md border-8 border-b-[2rem] border-primaryText"
            />
            <div className="absolute bottom-2 left-0 right-0 mx-auto h-4 w-4 bg-white rounded-full" />
          </div>
          <div
            className="flex flex-col gap-4 justify-start items-center"
            data-aos="fade-up-left"
          >
            <div className="flex flex-col gap-4 items-center">
              <h2 className="barlow-bold text-3xl">TrainWithBS</h2>
            </div>
            <div>
              <p className="text-center outfit max-w-[25rem] text-xl">
                This gym website was designed and developed for a personal
                trainer to offer a dynamic online presence. It provides users
                with comprehensive details about training programs, fitness
                classes, and trainer information. The website is fully
                responsive and features a modern, intuitive layout to enhance
                user engagement.
              </p>

              {/* Technologies used */}
              <div className="flex justify-center items-center mt-6 gap-6">
                <div
                  className="flex flex-col gap-2 justify-center items-center"
                  data-aos="fade-up"
                  data-aos-delay="200"
                >
                  <FaReact className="text-5xl" />
                  <p className="barlow-bold">React</p>
                </div>
                <div
                  className="flex flex-col gap-2 justify-center items-center"
                  data-aos="fade-up"
                  data-aos-delay="400"
                >
                  <RiTailwindCssFill className="text-5xl" />
                  <p className="barlow-bold">Tailwindcss</p>
                </div>
                <div
                  className="flex flex-col gap-2 justify-center items-center"
                  data-aos="fade-up"
                  data-aos-delay="600"
                >
                  <SiFirebase className="text-5xl" />
                  <p className="barlow-bold">Firebase</p>
                </div>
              </div>
            </div>

            {/* Live Demo Button */}
            <a
              className="inline-flex bg-primarybtn px-4 py-3 gap-3 justify-center items-center barlow-bold lg:text-[1.2rem] text-white"
              href="https://fitness-web-ebon.vercel.app/"
              data-aos="fade-up"
            >
              Live Demo <GoArrowUpRight className="text-2xl" />
            </a>
          </div>
        </div>

        {/* Project 2 */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 justify-center mt-20">
          <div
            className="flex flex-col gap-4 justify-start items-center"
            data-aos="fade-up-right"
          >
            <div className="flex flex-col gap-4 items-center">
              <h2 className="barlow-bold text-3xl">LovelyPicksBags</h2>
            </div>
            <div>
              <p className="text-center outfit max-w-[25rem] text-xl">
                This e-commerce website was designed to showcase and sell a
                collection of stylish bags. It provides customers with product
                descriptions, reviews, and a seamless shopping experience, while
                offering a responsive and modern design.
              </p>

              {/* Technologies used */}
              <div className="flex justify-center items-center mt-6 gap-6">
                <div
                  className="flex flex-col gap-2 justify-center items-center"
                  data-aos="fade-up"
                  data-aos-delay="200"
                >
                  <FaReact className="text-5xl" />
                  <p className="barlow-bold">React</p>
                </div>
                <div
                  className="flex flex-col gap-2 justify-center items-center"
                  data-aos="fade-up"
                  data-aos-delay="400"
                >
                  <RiTailwindCssFill className="text-5xl" />
                  <p className="barlow-bold">Tailwindcss</p>
                </div>
                <div
                  className="flex flex-col gap-2 justify-center items-center"
                  data-aos="fade-up"
                  data-aos-delay="600"
                >
                  <SiFirebase className="text-5xl" />
                  <p className="barlow-bold">Firebase</p>
                </div>
                <div
                  className="flex flex-col gap-2 justify-center items-center"
                  data-aos="fade-up"
                  data-aos-delay="800"
                >
                  <FaNodeJs className="text-5xl" />
                  <p className="barlow-bold">Nodejs</p>
                </div>
              </div>
            </div>

            {/* Live Demo Button */}
            <a
              className="inline-flex bg-primarybtn px-4 py-3 gap-3 justify-center items-center barlow-bold lg:text-[1.2rem] text-white"
              href="https://fitness-web-ebon.vercel.app/"
              data-aos="fade-up"
            >
              Live Demo <GoArrowUpRight className="text-2xl" />
            </a>
          </div>

          <div data-aos="fade-up-left relative">
            <img
              src={project3}
              alt="e-commerce website"
              className="h-full rounded-md border-8 border-b-[2rem] border-primaryText"
            />
            <div className="absolute bottom-2 left-0 right-0 mx-auto h-4 w-4 bg-white rounded-full" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;
