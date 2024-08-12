import ActivitiesCard from "../../atoms/ActivitiesCard/ActivitiesCard";
import HeadTitle from "../../atoms/HeadTitle/HeadTitle";
import card1 from "/card_1.jpg";
import card2 from "/card_2.jpg";
import card3 from "/card_3.jpg";
import logo1 from "/aside_logo_1.png";
import logo2 from "/aside_logo_2.png";
import logo3 from "/aside_logo_3.png";
import { activitiesCards } from "../../../types";
import { ReactArr } from "react-array";

export default function Activities() {
  let activitiesCards: activitiesCards[] = [
    {
      cardImg: card1,
      cardLogo: logo1,
      link: "https://adexintegration.dz/",
      title: "ADEX Intégration",
      lists: [
        "Data Center",
        "Cyber Security Solutions",
        "Data Management",
        "Consulting",
        "Professional Service",
      ],
    },
    {
      cardImg: card2,
      cardLogo: logo2,
      link: "https://www.adextraining.dz/",
      title: "ADEX Training",
      lists: [
        "Formations IT",
        "Formations transversales",
        "Séminaires",
        "Centre agréé Zimbra",
        "Centre agréé Red Hat",
      ],
    },
    {
      cardImg: card3,
      cardLogo: logo3,
      link: "",
      title: "ADEX Cloud",
      lists: [
        "Serveurs",
        "Cloud Entreprise Solution",
        "E-Commerce",
        "Web Hosting",
        "Services",
      ],
    },
  ];
  return (
    <section className=" cc space-y-[4rem]">
      <HeadTitle
        title="Les pôles d’activité d’ADEX Technology​"
        subTitle="L’IT c’est notre métier."
        txt={`Pour mieux servir ses clients et répondre à leurs différents besoins et problématiques, ADEX Technology a développé 3 pôles d’activités :`}
      />
      <ul className="flexBetween  ">
        <ReactArr
          arr={activitiesCards}
          Component={(e: activitiesCards) => <ActivitiesCard {...e} />}
        />
      </ul>
    </section>
  );
}
