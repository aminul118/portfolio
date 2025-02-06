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
        <Slides
          liveLink="https://percel-point.web.app"
          description="Curier Management Application"
          image={percel}
        />
        <Slides
          detailsLinks={"/foddie"}
          liveLink="https://foddie-resturant.netlify.app"
          description="Restaurant Management Application"
          image={foddie}
        />
        <Slides
          liveLink={"https://easy-doctor.netlify.app"}
          description="Doctor Appoinment application"
          image={easyDoc}
        />
      </div>
    </section>
  );
};

export default Projects;
