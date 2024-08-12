import About from "../../organisms/About/About";
import Activities from "../../organisms/Activities/Activities";
import Aside from "../../organisms/Aside/Aside";
import Hero from "../../organisms/Hero/Hero";
import Navbar from "../../organisms/Navbar/Navbar";

export default function MainTemplate() {
  return (
    <>
      <Navbar />
      <Aside />
      <main>
        <Hero />
        <About />
        <Activities />
      </main>
    </>
  );
}
