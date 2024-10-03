import { useState } from "react";
import {
  FaReact,
  FaCss3,
  FaGit,
  FaGithub,
  FaHtml5,
  FaJs,
} from "react-icons/fa6";
import { RiNextjsFill, RiTailwindCssFill } from "react-icons/ri";
import { SiTypescript } from "react-icons/si";
import framerMotion from "../assets/framer-motion.svg";
import copyIcon from "../assets/copy.svg";
import checkedIcon from "../assets/tick.svg";

const About = () => {
  const [hasCopied, setHasCopied] = useState(false);

  const handleCopy = () => {
    navigator.clipboard.writeText("dyenamics228@gmail.com");
    setHasCopied(true);

    setTimeout(() => {
      setHasCopied(false);
    }, 2000);
  };

  return (
    <section className="">
      <div className="pb-28" id="about" />
      <div className="bg-primaryText py-20 ">
        <div className="container text-white grid grid-cols-1 lg:grid-cols-2 gap-10">
          <div className="flex flex-col">
            <h2
              className="uppercase text-2xl tracking-widest barlow-bold mb-8"
              data-aos="fade-down" // Animating heading
              data-aos-duration="800"
            >
              About me
            </h2>
            <p
              className="text-[2rem] lg:text-[2.5rem] outfit font-semibold max-w-[40rem]"
              data-aos="fade-right" // Animating paragraph
              data-aos-duration="800"
            >
              I am not a perfectionist, to be honest, but my usual guarantee for
              clients is{" "}
              <span className="underline underline-offset-2">satisfaction</span>
              . I am very flexible and often pull all-nighters to get the job
              done.
            </p>

            {/* Contact Me Section */}
            <div
              className="mt-6"
              data-aos="zoom-in" // Animating contact me section
              data-aos-duration="800"
            >
              <h2 className="uppercase text-2xl tracking-widest balow-bold mb-4">
                Contact me
              </h2>
              <div
                className="copy-container cursor-pointer flex items-center gap-2"
                onClick={handleCopy}
              >
                <img src={hasCopied ? checkedIcon : copyIcon} alt="copy" />
                <p className="text-lg font-medium outfit text-white md:text-xl lg:text-2xl">
                  dyenamics228@gmail.com
                </p>
              </div>
            </div>
          </div>

          <div className="flex flex-col gap-4">
            <h2
              className="uppercase text-2xl tracking-widest barlow-bold mb-4"
              data-aos="fade-left" // Animating heading
              data-aos-duration="800"
            >
              There&apos;s more
            </h2>
            <p
              className="text-[1.2rem] outfit font-semibold max-w-[30rem]"
              data-aos="fade-up" // Animating paragraph
              data-aos-duration="800"
            >
              I have a degree in Biochemistry and can speak Chinese and American
              Sign Language, in addition to English.
            </p>
            <p
              className="text-[1.2rem] outfit font-semibold max-w-[30rem]"
              data-aos="fade-up" // Animating paragraph
              data-aos-duration="800"
              data-aos-delay="100"
            >
              I enjoy drawing, playing basketball, researching different topics,
              hanging out with friends, and building meme coin websites.
            </p>

            {/* My Tools Section */}
            <h2
              className="uppercase text-2xl tracking-widest barlow-bold mb-4"
              data-aos="fade-left" // Animating heading
              data-aos-duration="800"
            >
              My tools
            </h2>
            <div className="flex items-center flex-wrap gap-6">
              <div
                className="flex flex-col gap-2 justify-center items-center"
                data-aos="fade-up"
                data-aos-delay="600"
              >
                <FaHtml5 className="text-3xl" />
                <p className="barlow-bold">HTML</p>
              </div>
              <div
                className="flex flex-col gap-2 justify-center items-center"
                data-aos="fade-up"
                data-aos-delay="600"
              >
                <FaCss3 className="text-3xl" />
                <p className="barlow-bold">CSS</p>
              </div>
              <div
                className="flex flex-col gap-2 justify-center items-center"
                data-aos="fade-up"
                data-aos-delay="200"
              >
                <FaJs className="text-3xl" />
                <p className="barlow-bold">JavaScript</p>
              </div>
              <div
                className="flex flex-col gap-2 justify-center items-center"
                data-aos="fade-up"
                data-aos-delay="600"
              >
                <SiTypescript className="text-3xl" />
                <p className="barlow-bold">TypeScript</p>
              </div>
              <div
                className="flex flex-col gap-2 justify-center items-center"
                data-aos="fade-up"
                data-aos-delay="600"
              >
                <FaReact className="text-3xl" />
                <p className="barlow-bold">React</p>
              </div>
              <div
                className="flex flex-col gap-2 justify-center items-center"
                data-aos="fade-up"
                data-aos-delay="400"
              >
                <RiTailwindCssFill className="text-3xl" />
                <p className="barlow-bold">Tailwind CSS</p>
              </div>
              <div
                className="flex flex-col gap-2 justify-center items-center"
                data-aos="fade-up"
                data-aos-delay="600"
              >
                <FaGit className="text-3xl" />
                <p className="barlow-bold">Git</p>
              </div>
              <div
                className="flex flex-col gap-2 justify-center items-center"
                data-aos="fade-up"
                data-aos-delay="600"
              >
                <FaGithub className="text-3xl" />
                <p className="barlow-bold">GitHub</p>
              </div>
              <div
                className="flex flex-col gap-2 justify-center items-center"
                data-aos="fade-up"
                data-aos-delay="600"
              >
                <RiNextjsFill className="text-3xl" />
                <p className="barlow-bold">Next.js</p>
              </div>
              <div
                className="flex flex-col gap-2 justify-center items-center"
                data-aos="fade-up"
                data-aos-delay="600"
              >
                <img
                  src={framerMotion}
                  alt="Framer Motion"
                  className="mt-auto"
                />
                <p className="barlow-bold">Framer Motion</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
