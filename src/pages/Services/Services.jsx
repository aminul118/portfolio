import { IoGridSharp, IoLogoFigma } from "react-icons/io5";
import { TfiWorld } from "react-icons/tfi";
import Projects from "../../components/Projects/Projects";

const Services = () => {
  return (
    <section id="services" className="py-24">
      <div className="container mx-auto">
        <div className="text-center">
          <p className="text-3xl lg:text-5xl font-semibold">Specialized in</p>
        </div>
        {/* Card Container */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 mt-8 lg:mt-14 gap-6 2xl:gap-8">
          {/* Card 1 : Web Development*/}
          <div className="flex flex-col items-center text-center gap-4 bg-gray-100 p-8 rounded-lg shadow-lg">
            <p className="text-2xl">
              <TfiWorld />
            </p>
            <h1 className="text-2xl font-semibold">Web Development</h1>
            <p className="text-justify">
              Create and maintain websites and also can boost of its performance
              and traffic capacity.
            </p>
          </div>
          {/* Card 1 End : Web Development*/}
          {/* Card 2 : Web Application*/}
          <div className="flex flex-col items-center text-center gap-4 bg-gray-100 p-8 rounded-lg shadow-lg">
            <p className="text-2xl">
              <IoGridSharp />
            </p>
            <h1 className="text-2xl font-semibold">Web Application</h1>
            <p className="text-justify">
              Standard designing, building, and implementing your applications
              with documentation.
            </p>
          </div>
          {/* Card 2 End : Web Application*/}
          {/* Card 3 : UI/UX Design*/}
          <div className="flex flex-col items-center text-center gap-4 bg-gray-100 p-8 rounded-lg shadow-lg">
            <p className="text-2xl">
              <IoLogoFigma />
            </p>
            <h1 className="text-2xl font-semibold">UI/UX Design</h1>
            <p className="text-justify">
              Turn what you have in mind of a digital product into reality. For
              any platform you consider I am always ready to serve you
            </p>
          </div>
          {/* Card 3 End :UI/UX Design*/}
        </div>
        {/* Card Container End*/}
      </div>
      <div className="py-20">
        <Projects />
      </div>
    </section>
  );
};

export default Services;
