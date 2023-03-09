import Contact from "../../contact/Contact";
import "./Home.scss";

import About from "../../about-us/About";
import Services from "../../services_section/Services";
import Galery from "../../galery/Galery";
import ForzamArt from "../../forzam_art/ForzamArt";
import ProcessSection from "../../process_section/ProcessSection";
import CallToAction from "../../cta/CallToAction";

const Home = () => {
  return (
    <>
      <section className="banner_section">
        <img
          src="/assets/img/forzam_logo.png"
          alt="icone da Forzam Detail"
          className="forzam_logo"
        />
      </section>
      <Services />
      <Galery />
      <CallToAction />
      <ForzamArt />
      <About />
      <Contact />
    </>
  );
};

export default Home;
