import heroBg from "/hero_bg.webp";
export default function Hero() {
  return (
    <section id="main" className="flexCenter h-screen ">
      <img
        loading="eager"
        src={heroBg}
        alt="img"
        className="w-full h-full object-cover object-center"
      />
      <article className="absolute z-[3] text-center">
        <h1 className="lg:text-[7rem] text-[5rem] max-sm:text-[2.8em] lg:leading-[9rem] font-medium">
          ADEX <br /> <span className="italic font-thin">Techonology</span>
        </h1>
        <h2 className="text-[2rem] max-sm:text-[1.3rem] text-wrap">
          Votre accélérateur de performance par la technologie !
        </h2>
      </article>
    </section>
  );
}
