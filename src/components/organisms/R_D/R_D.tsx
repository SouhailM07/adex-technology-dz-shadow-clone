import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import rdImg from "/R_D.jpg";
import { faCheck } from "@fortawesome/free-solid-svg-icons";
import { ReactArr } from "react-array";
import HeadTitle from "../../atoms/HeadTitle/HeadTitle";

export default function R_D() {
  const items: string[] = [
    "Traçabilité & mobilité",
    "Identification",
    "E-Payement",
    "Data Center mobile",
  ];
  return (
    <section className="mt-[7rem] cc space-y-[3rem]">
      <HeadTitle
        customStyles="w-[37rem]"
        title="Une conception pour l'avenir"
        subTitle="L’innovation par la R&D​"
        middleImg={rdImg}
        txt="L'innovation technologique est le moteur de la transformation numérique des entreprises. En perpétuel évolution l’innovation se fait par le R&D, qui un élément clé de la créativité pour assurer le développement des entreprises :​"
      />
      <ul className="mx-auto w-[30rem] text-[1.2rem]  grid grid-cols-2 place-items-center  gap-y-[1rem]">
        <ReactArr
          arr={items}
          className="flex w-[10rem] items-center gap-x-3 "
          Component={(e) => <RenderItem {...e} />}
        />
      </ul>
    </section>
  );
}

const RenderItem = ({ e }) => (
  <>
    <FontAwesomeIcon
      icon={faCheck}
      className="bg-mainRed text-black h-[1rem] p-1 text-[1.1rem] aspect-square rounded-full"
    />
    <span>{e}</span>
  </>
);
