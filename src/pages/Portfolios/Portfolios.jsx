import Education from "./Education";
import Skills from "./Skills";

const Portfolios = () => {
  return (
    <section id="portfolios" className="py-24">
      <div className="container mx-auto px-2">
        <h1 className="text-3xl lg:text-5xl font-semibold">Education & Skills</h1>
        <div className="grid  md:grid-cols-2 justify-between mt-8">
          <Education/>
          <Skills />
        </div>
      </div>
    </section>
  );
};

export default Portfolios;
