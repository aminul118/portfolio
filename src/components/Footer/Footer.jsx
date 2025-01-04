import { FaFacebook, FaGithub, FaLinkedinIn } from "react-icons/fa6";
import { Link } from "react-router";

const Footer = () => {
  return (
    <footer className="footer footer-center bg-black text-white/80 rounded p-10">
      <nav>
        <div className="grid grid-flow-col gap-4 text-xl">
          <Link to="https://www.facebook.com/aminul118/" target="_blank">
            <FaFacebook />
          </Link>
          <Link to="https://www.linkedin.com/in/aminul118/" target="_blank">
            <FaLinkedinIn />
          </Link>
          <Link to="https://github.com/aminul118" target="_blank">
            <FaGithub />
          </Link>
        </div>
      </nav>
      <aside>
        <p>
          Copyright © {new Date().getFullYear()} - All right reserved by Md.
          Aminul Islam
        </p>
      </aside>
    </footer>
  );
};

export default Footer;
