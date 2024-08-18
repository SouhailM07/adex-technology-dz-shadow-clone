import { asideLinks } from "../../../types";
import ReactArr from "../../atoms/ReactArr/ReactArr";
import aside_img_1 from "/aside_logo_1.webp";
import aside_img_2 from "/aside_logo_2.webp";
import aside_img_3 from "/aside_logo_3.webp";

export default function Aside() {
  const asideLinks: asideLinks[] = [
    { img: aside_img_1, link: "https://adexintegration.dz/" },
    { img: aside_img_2, link: "https://adextraining.dz/" },
    { img: aside_img_3, link: "https://adexcloud.dz/" },
  ];
  return (
    <aside className="  w-1 h-screen flex justify-center flex-col fixed max-sm:hidden">
      <ul className="space-y-[1.5rem] translate-y-[4rem]">
        <ReactArr
          arr={asideLinks}
          Component={(e: asideLinks) => (
            <a
              target="_blank"
              href={e.link}
              className="min-w-[5rem] duration-300 transition-all hover:min-w-[8rem] h-[2.5rem] flex items-center justify-end bg-[#73262f] hover:bg-mainRed rounded-r-md"
            >
              <img
                loading="eager"
                src={e.img}
                alt="img"
                className="w-[5rem] p-3"
              />
            </a>
          )}
        />
      </ul>
    </aside>
  );
}
