
import { FaFacebook, FaLinkedinIn } from "react-icons/fa6";
import { Link } from "react-router";



const Footer = () => {
    return (
      <footer className="footer footer-center bg-base-200 text-base-content rounded p-10">
        <nav>
          <div className="grid grid-flow-col gap-4 text-xl">
            <Link>
              <FaFacebook />
            </Link>
            <Link>
              <FaLinkedinIn />
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