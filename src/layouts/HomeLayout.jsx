import HeroBanner from "../components/HeroSection/HeroBanner";
import Projects from "../components/Projects/Projects";
import AboutMe from "../pages/AboutMe/AboutMe";
import Contact from "../pages/Contact/Contact";
import Portfolios from "../pages/Portfolios/Portfolios";
import Services from "../pages/Services/Services";
import Skills2 from "../pages/Skills/Skills2";

const HomeLayout = () => {
  return (
    <div>
      <HeroBanner />
      <AboutMe />
      <Skills2 />
      <Portfolios />
      <Services />
      <Projects />
      <Contact />
    </div>
  );
};

export default HomeLayout;
