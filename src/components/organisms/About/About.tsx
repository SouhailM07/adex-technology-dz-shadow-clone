import { aboutCards } from "../../../types";
import AboutCard from "../../atoms/AboutCard/AboutCard";
import aboutImg1 from "/Technology.jpg";
import aboutImg2 from "/Expertise.jpg";
import aboutImg3 from "/Partenaire.jpg";
import HeadTitle from "../../atoms/HeadTitle/HeadTitle";
import ReactArr from "../../atoms/ReactArr/ReactArr";

export default function About() {
  const aboutCards: aboutCards[] = [
    {
      headLine: "01.",
      img: aboutImg1,
      title: "Une entreprise driven by technology",
      txt: "Un cœur de métier purement IT avec un business model, une stratégie d’innovation et une croissance centrée sur la technologie. Une diversification d’activité autours du métier de l’IT.",
    },
    {
      headLine: "02.",
      img: aboutImg2,
      direction: "rtl",
      title: "Expertise et savoir faire",
      txt: "Un personnel engagé, qualifié et motivé est le secret de notre succès, et c’est dans ce domaine que nous sommes très exigeants. Les ressources les plus importantes sont les connaissances, le savoir-faire et le développement de la compétence personnels des employés.​",
    },
    {
      headLine: "03.",
      img: aboutImg3,
      title: "Un partenaire de qualité",
      txt: "En tant que partenaire technologique de premier plan, ADEX Technology collabore et co-innove pour aider ses clients à accélérer leur parcours numérique.",
    },
  ];
  return (
    <section id="about" className="py-[4rem] cc">
      <HeadTitle
        customStyles="max-md:w-full"
        title="Qui sommes-nous ?"
        subTitle="Un accélérateur de performance par la technologie !"
        txt={`ADEX Technology, “ALGERIAN DEVELOPEMENT EXPERTISE TECHNOLGY IT”, est un
    groupe technologique spécialisé dans le domaine des nouvelles technologies
    de l’information et de la communication, un accélérateur de performance
    pour ses clients à travers la technologie avec un capital d'expérience de
    plus de 12 ans, il est aussi l’un des leaders en matière de solutions
    informatiques et le Premier Intégrateur du Cloud en Algérie.​`}
      />
      <ul className="max-sm:space-y-[7rem] space-y-[10rem] mt-[10rem]">
        <ReactArr
          arr={aboutCards}
          Component={(e: aboutCards) => <AboutCard {...e} />}
        />
      </ul>
    </section>
  );
}
