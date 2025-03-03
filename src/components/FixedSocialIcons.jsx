import { FaDiscord, FaGithub } from "react-icons/fa";
// import { BsTwitterX } from "react-icons/bs";
import { BiLogoTelegram } from "react-icons/bi";
import { twMerge } from "tailwind-merge";

const FixedSocialHandles = ({ containerClassName, childrenClassName }) => {
  const newContainerClassName = twMerge(
    "transform flex lg:flex-col items-center justify-center gap-3 text-black md:flex",
    containerClassName
  );

  const newChildrenClassName = twMerge(
    "text-5xl duration-300",
    childrenClassName
  );
  return (
    <div className={newContainerClassName}>
      <a href="https://github.com/Ghravitee">
        <FaGithub className={newChildrenClassName} />
      </a>
      <a href="https://t.me/Ghravitee">
        <BiLogoTelegram className={newChildrenClassName} />
      </a>
      <a href="#">
        <FaDiscord className={newChildrenClassName} />
      </a>
    </div>
  );
};

export default FixedSocialHandles;
