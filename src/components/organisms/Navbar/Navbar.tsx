import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { navLinks } from "../../../types";
import logo from "/logo.png";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import { AnimatePresence, motion } from "framer-motion";
import { useState } from "react";
import ReactArr from "../../atoms/ReactArr/ReactArr";

export default function Navbar() {
  const links: navLinks[] = [
    { label: "accueil", link: "main" },
    { label: "a propos", link: "about" },
    { label: "nos activites", link: "activities" },
    { label: "contact", link: "contact" },
  ];

  const [toggleNav, setToggleNav] = useState<boolean>(false);
  return (
    <header className="bg-[#000000c7] fixed w-full z-[99]">
      <nav className="flex justify-between items-end max-lg:items-center max-lg:w-[80%] max-sm:w-[90%] max-lg:px-[1rem]  w-[49rem]  mx-auto">
        <img
          src={logo}
          alt="img"
          width={210}
          height={210}
          className="translate-y-[0.6rem]"
        />
        <FontAwesomeIcon
          icon={faBars}
          aria-label="menu btn"
          role="button"
          onClick={() => setToggleNav(!toggleNav)}
          className="h-[1.4rem] aspect-square lg:hidden"
        />
        <ul className="max-lg:hidden flex gap-x-[2.2rem] text-center text-[1.1rem] pb-2">
          <ReactArr
            arr={links}
            Component={(e: navLinks) => (
              <a href={`#${e.link}`} className="capitalize navLink">
                {e.label}
              </a>
            )}
          />
        </ul>
      </nav>
      <AnimatePresence>
        {toggleNav && <MobileNavLinks links={links} />}
      </AnimatePresence>
    </header>
  );
}

const MobileNavLinks = ({ links }: { links: navLinks[] }) => {
  return (
    <motion.ul
      initial={{ x: "120%" }}
      animate={{ x: "0%" }}
      exit={{ x: "120%" }}
      className="lg:hidden bg-[#000000c7] absolute w-full  flex flex-col items-center justify-evenly h-[17rem] "
    >
      <ReactArr
        arr={links}
        Component={(e: navLinks) => (
          <a href={`#${e.link}`} className="capitalize navLink">
            {e.label}
          </a>
        )}
      />
    </motion.ul>
  );
};
