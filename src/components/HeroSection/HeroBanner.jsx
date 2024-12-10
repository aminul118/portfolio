import { Typewriter } from "react-simple-typewriter";
import banner from "../../assets/aminul.png";
import { Link } from "react-scroll";
import { FaGithub, FaLinkedin } from "react-icons/fa6";
import { FaLinkedinIn } from "react-icons/fa";
const HeroBanner = () => {
  return (
    <section id="hero" className="bg-slate-300 pt-16 text-black/60">
      <div className="flex justify-between items-center container mx-auto ">
        {/* Left */}
        <div className="flex-1 space-y-4">
          <p className="text-xl">I'm</p>

          <h1 className="text-5xl font-semibold">
            <Typewriter
              words={["Md Aminul Islam"]}
              loop
              cursor
              cursorStyle="_"
              typeSpeed={90}
              deleteSpeed={50}
              delaySpeed={1000}
            />
          </h1>
          <p>
            Creative front-end developer with more than +3 years of experience
            in enterprise companies and startups. Proficient in JavaScript,
            React and Next.js. Passionate about programming.
          </p>
          <div className="flex items-center gap-2 text-xl">
            <a href="" target="_blank">
              <FaLinkedinIn />
            </a>
            <a href="" target="_blank">
              <FaGithub />
            </a>
          </div>
          <Link to="contact" className="btn btn-warning rounded-full w-32">
            Hire me
          </Link>
        </div>
        {/* right */}
        <div className="flex-1">
          <div className="float-end">
            <img className="" src={banner} alt="" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroBanner;
