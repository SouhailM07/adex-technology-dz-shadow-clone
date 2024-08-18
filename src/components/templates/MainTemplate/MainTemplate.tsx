import Contact from "../../organisms/Contact/Contact";
import About from "../../organisms/About/About";
import Activities from "../../organisms/Activities/Activities";
import Aside from "../../organisms/Aside/Aside";
import Hero from "../../organisms/Hero/Hero";
import Navbar from "../../organisms/Navbar/Navbar";
import Footer from "../../organisms/Footer/Footer";
import R_D from "../../organisms/R_D/R_D";

export default function MainTemplate() {
  return (
    <>
      <Navbar />
      <Aside />
      <main>
        <Hero />
        <About />
        {/* <Activities /> */}
        {/* <R_D /> */}
        {/* <Contact /> */}
      </main>
      {/* <Footer /> */}
    </>
  );
}
