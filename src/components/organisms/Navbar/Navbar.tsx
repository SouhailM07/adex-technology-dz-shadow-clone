import { navLinks } from "../../../types";
import logo from "/logo.png";
import { ReactArr } from "react-array";
export default function Navbar() {
  const links: navLinks[] = [
    { label: "accueil", link: "main" },
    { label: "a propos", link: "about" },
    { label: "nos activites", link: "activities" },
    { label: "contact", link: "contact" },
  ];
  return (
    <header className="bg-[#000000c7] fixed w-full z-[99]">
      <nav className="flex justify-between items-end  w-[52rem]  mx-auto">
        <img
          src={logo}
          alt="img"
          width={210}
          height={210}
          className="translate-y-[0.6rem]"
        />
        <ul className="flex gap-x-[2.2rem] text-center text-[1.1rem] pb-2">
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
    </header>
  );
}
