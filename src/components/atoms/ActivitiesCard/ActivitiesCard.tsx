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
    <article className="activityCard overflow-hidden rounded-md w-[80vw] md:w-[17rem] max-md:h-[22rem] lg:w-[18rem] md:aspect-[9/13] flexCenter">
      <img
        src={cardImg}
        alt="img"
        className="img1 rounded-lg  md:w-[17rem] lg:w-[18rem] w-full max-md:h-full  md:aspect-[9/13] "
      />
      <section className="bg-[#000000CC] activityCardContent z-[1] absolute items-center flex hover-effect opacity-0 py-[1.3rem] md:w-[15rem] lg:w-[16rem] max-md:w-[75vw] max-md:h-[20rem] aspect-[8/12]  flex-col justify-between text-center">
        <img
          src={cardLogo}
          alt="logo"
          className="w-[8rem] max-md:w-[6rem] aspect-auto"
        />
        <div className=" min-h-[14rem] gap-y-[1rem]  flex flex-col justify-between items-center">
          <h1 className="text-[1.7rem] max-md:text-[1.4rem]">{title}</h1>
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
