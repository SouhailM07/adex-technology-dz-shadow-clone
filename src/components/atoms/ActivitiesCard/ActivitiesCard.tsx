import "./styles.css";
import { ReactArr } from "react-array";
import { activitiesCards } from "../../../types";

export default function ActivitiesCard({
  cardImg,
  cardLogo,
  title,
  lists,
  link,
}: activitiesCards) {
  return (
    <article className="activityCard overflow-hidden rounded-md md:w-[17rem] lg:w-[18rem] aspect-[9/13] flexCenter ">
      <img
        src={cardImg}
        alt="img"
        className="img1 rounded-lg  md:w-[17rem] lg:w-[18rem] aspect-[9/13] "
      />
      <section className="bg-[#000000CC] activityCardContent z-[1] absolute items-center flex hover-effect opacity-0 py-[1.3rem] w-[16rem] aspect-[8/12]  flex-col justify-between text-center">
        <img src={cardLogo} alt="logo" className="w-[8rem] aspect-auto" />
        <div className=" min-h-[14rem] gap-y-[1rem]  flex flex-col justify-between items-center">
          <h1 className="text-[1.7rem]">{title}</h1>
          <ul
            role="list"
            className="space-y-[0.3rem] list-disc text-start pl-5 "
          >
            <ReactArr arr={lists} Component={(e) => <>{e.e}</>} />
          </ul>
          <a
            target="_blank"
            href={link}
            className="bg-mainRed p-[0.5rem] font-medium rounded-md"
          >
            Voir Plus
          </a>
        </div>
      </section>
    </article>
  );
}
