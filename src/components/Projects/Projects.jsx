import { Link } from "react-router";
import Slides from "./Slides";
import foddie from "../../assets/projects/foddie.png";
import easyDoc from "../../assets/projects/easyDoc.png";
import percel from "../../assets/projects/percel-point.png";

const Projects = () => {
  return (
    <section className="pb-24">
      <div className="text-center py-8">
        <p className="text-3xl lg:text-5xl font-semibold">Projects</p>
      </div>
      <div className="grid lg:grid-cols-3 gap-6 container mx-auto">
        <Link to="https://percel-point.web.app">
          <Slides description="Curier Management Application" image={percel} />
        </Link>

        <Link to="https://foddie-resturant.netlify.app/">
          <Slides
            description="Restaurant Management Application"
            image={foddie}
          />
        </Link>
        <Link to="https://easy-doctor.netlify.app">
          <Slides description="Doctor Appoinment application" image={easyDoc} />
        </Link>
      </div>
    </section>
  );
};

export default Projects;
