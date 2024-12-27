import { Typewriter } from "react-simple-typewriter";
import banner from "../../assets/aminul.png";
import { Link, animateScroll as scroll } from "react-scroll";
import { FaGithub, FaLinkedinIn, FaArrowUp } from "react-icons/fa";
import useTheme from "../../hooks/useTheme";

const HeroBanner = () => {
  const { darkMode } = useTheme();
  const handleTop = () => {
    scroll.scrollToTop();
  };

  return (
    <section
      id="hero"
      className={`${
        darkMode ? "bg-slate-600 text-white/60" : "bg-slate-300 text-black/60"
      } pt-5 lg:pt-16 `}
    >
      <div className="flex flex-col lg:flex-row justify-between items-center container mx-auto gap-5">
        {/* Left */}
        <div className="flex-1 space-y-4 px-2">
          <p className="text-xl">I'm</p>

          <h1 className="text-3xl lg:text-5xl font-semibold">
            <Typewriter
              words={[
                "Md Aminul Islam",
                "A Front-End Developer",
                "A Creative Thinker",
              ]}
              loop
              cursor
              cursorStyle="_"
              typeSpeed={90}
              deleteSpeed={50}
              delaySpeed={1000}
            />
          </h1>
          <p>
            Creative front-end developer with more than 3 years of experience in
            enterprise companies and startups. Proficient in JavaScript, React,
            and Next.js. Passionate about programming.
          </p>
          <div className="flex items-center gap-2 text-xl">
            <a
              href="https://www.linkedin.com/in/aminul118/"
              target="_blank"
              rel="noopener noreferrer"
              title="LinkedIn Profile"
            >
              <FaLinkedinIn />
            </a>
            <a
              href="https://github.com/aminul118"
              target="_blank"
              rel="noopener noreferrer"
              title="GitHub Profile"
            >
              <FaGithub />
            </a>
          </div>
          <Link to="contact" className="btn btn-warning rounded-full w-32">
            Hire me
          </Link>
        </div>
        {/* Right */}
        <div className="flex-1">
          <div className="float-end">
            <img className="" src={banner} alt="Banner of Md Aminul Islam" />
          </div>
        </div>
      </div>
      <button
        onClick={handleTop}
        className="fixed bottom-10 right-8 btn btn-warning rounded-full p-4 z-20"
        aria-label="Scroll to top"
      >
        <FaArrowUp />
      </button>
    </section>
  );
};

export default HeroBanner;
