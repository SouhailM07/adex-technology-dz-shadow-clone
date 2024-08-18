import { aboutCards } from "../../../types";

const AboutCard = ({
  direction = "ltr",
  img,
  headLine,
  title,
  txt,
}: aboutCards) => {
  return (
    <article
      dir={direction}
      className="flex max-lg:max-w-[35rem] mx-auto max-lg:flex-col  max-lg:items-center items-start  gap-x-[3rem] "
    >
      <img
        className="lg:w-[74%] rounded-2xl"
        src={img}
        alt="img"
        loading="lazy"
      />
      <div>
        <h1 className="text-mainRed text-[1.3rem]">{headLine}</h1>
        <h2 className="text-[1.8rem] mt-[1rem] mb-[2rem]">{title}</h2>
        <p className="text-[1.1rem]">{txt}</p>
      </div>
    </article>
  );
};

export default AboutCard;
