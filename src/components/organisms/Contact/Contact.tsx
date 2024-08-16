import HeadTitle from "../../atoms/HeadTitle/HeadTitle";
import { ReactArr } from "react-array";
import ContactForm from "../../molecules/ContactForm/ContactForm";

export default function Contact() {
  return (
    <section className="mt-[7rem] cc space-y-[3rem]">
      <HeadTitle
        customStyles="w-[35rem]"
        title="Contactez-nous"
        subTitle="Contact"
        txt="Remplissez le formulaire ci-dessous pour être recontacté rapidement par notre équipe commerciale et discuter de votre projet."
      />
      <article className="grid grid-cols-[2fr_1fr]  gap-x-[2rem]">
        <ContactForm />
        <ContactCard />
      </article>
    </section>
  );
}

const ContactCard = () => {
  let contactList: { title: string; txt: string }[] = [
    {
      title: "Adresse",
      txt: "2 éme étage, Batiment Multilocataire, Cyberparc Sidi Abdellah, Rahmania- Zeralda-Alger",
    },
    {
      title: "Phone",
      txt: "+213 21 999 400",
    },
    {
      title: "Email",
      txt: "contact@adextechnology.dz",
    },
  ];
  return (
    <section className="bg-white space-y-[2rem] text-black px-[2rem] py-[3rem] rounded-lg">
      <h1 className="text-[2rem] text-center">Contact Info</h1>
      <ul className="space-y-[1rem]">
        <ReactArr
          arr={contactList}
          Component={(e) => <ContactDetail {...e} />}
        />
      </ul>
    </section>
  );
};

const ContactDetail = ({ title, txt }: { title: string; txt: string }) => (
  <>
    <span className="text-[1.1rem] font-medium ">{title} :</span>
    <p>{txt}</p>
  </>
);
