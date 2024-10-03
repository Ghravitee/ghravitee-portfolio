import FixedSocialHandles from "../components/FixedSocialIcons";
import { navItems } from "../constants";

const Footer = () => {
  return (
    <footer className="bg-primaryText">
      <div className="container flex flex-col lg:flex-row justify-between py-10 lg:py-20 gap-6">
        <div className="flex flex-col gap-8 items-start">
          <p
            className={`protest text-2xl md:text-3xl lg:text-4xl font-black uppercase text-white`}
          >
            Ghrav<span className="text-secondaryText">itee</span>
          </p>
          <p className="text-white lg:max-w-[30rem] font-semibold text-2xl">
            Are you an agency or a freelancer? I always welcome new
            opportunities to exchange ideas and to explore collaborations
          </p>
          <FixedSocialHandles
            containerClassName="lg:flex-row gap-8"
            childrenClassName="text-white text-4xl"
          />
        </div>

        <ul className="flex flex-col justify-end gap-4 items-start text-white outfit font-bold">
          {navItems.map((item, index) => (
            <li key={index}>
              <a
                href={item.href}
                className="text-[1.5rem] lg:text-[2rem] tracking-widest"
              >
                {item.title}
              </a>
            </li>
          ))}
        </ul>

        <p className="text-white text-base lg:self-end">
          {" "}
          © {new Date().getFullYear()} Ghravitee. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
