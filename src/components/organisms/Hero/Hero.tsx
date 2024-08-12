import heroBg from "/hero_bg.png";
export default function Hero() {
  return (
    <section className="flexCenter">
      <img src={heroBg} alt="img" />
      <article className="absolute z-[3] text-center">
        <h1 className="text-[7rem] font-medium">
          ADEX <br /> <span className="italic font-thin">Techonology</span>
        </h1>
        <h2 className="text-[2rem]">
          Votre accélérateur de performance par la technologie !
        </h2>
      </article>
    </section>
  );
}
