import { asideLinks } from "../../../types";
import aside_img_1 from "/aside_logo_1.png";
import aside_img_2 from "/aside_logo_2.png";
import aside_img_3 from "/aside_logo_3.png";
import { ReactArr } from "react-array";

export default function Aside() {
  const asideLinks: asideLinks[] = [
    { img: aside_img_1, link: "https://adexintegration.dz/" },
    { img: aside_img_2, link: "https://adextraining.dz/" },
    { img: aside_img_3, link: "https://adexcloud.dz/" },
  ];
  return (
    <aside className="  w-1 h-screen flex justify-center flex-col fixed">
      <ul className="space-y-[1.5rem] translate-y-[4rem]">
        <ReactArr
          arr={asideLinks}
          Component={(e: asideLinks) => (
            <a
              target="_blank"
              href={e.link}
              className="min-w-[5rem] duration-300 transition-all hover:min-w-[8rem] h-[2.5rem] flex items-center justify-end bg-[#73262f] hover:bg-mainRed rounded-r-md"
            >
              <img src={e.img} alt="img" className="w-[5rem] p-3" />
            </a>
          )}
        />
      </ul>
    </aside>
  );
}
