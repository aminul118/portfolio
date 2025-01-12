import { Link } from "react-router";
import Slides from "./Slides";
import foddie from "../../assets/projects/foddie.png";
import easyDoc from "../../assets/projects/easyDoc.png";

const Projects = () => {
  return (
    <section className="pb-24">
      <div className="text-center py-8">
        <p className="text-3xl lg:text-5xl font-semibold">Projects</p>
      </div>
      <div className="grid lg:grid-cols-3 gap-6 container mx-auto">
        <Link to="https://foddie-resturant.netlify.app">
          <Slides
            description="This Restaurant Management Website allows restaurant owners to manage their menu, streamline food ordering processes, and enhance customer satisfaction through efficient backend and interactive frontend technologies."
            image={foddie}
          />
        </Link>
        <Link to="https://easy-doctor.netlify.app">
          <Slides
            description="This Restaurant Management Website allows restaurant owners to manage their menu, streamline food ordering processes, and enhance customer satisfaction through efficient backend and interactive frontend technologies."
            image={easyDoc}
          />
        </Link>
        <Link to="https://foddie-resturant.netlify.app/">
          <Slides
            description="This Restaurant Management Website allows restaurant owners to manage their menu, streamline food ordering processes, and enhance customer satisfaction through efficient backend and interactive frontend technologies."
            image={foddie}
          />
        </Link>
      </div>
    </section>
  );
};

export default Projects;
