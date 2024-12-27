import { Link } from "react-scroll";
import { IoMdMoon } from "react-icons/io";
import { MdLightMode } from "react-icons/md";
import useTheme from "../../hooks/useTheme";

const Navbar = () => {
  const { handleDarkModeToggle, darkMode } = useTheme();
  console.log(darkMode);
  const navLinks = (
    <>
      <li>
        <Link to="hero">Home</Link>
      </li>
      <li>
        <Link to={`services`} smooth={true} duration={500}>
          Services
        </Link>
      </li>
      <li>
        <Link to={`portfolios`} smooth={true} duration={500}>
          Portfolios
        </Link>
      </li>
      <li>
        <Link to={`contact`} smooth={true} duration={500}>
          Contact
        </Link>
      </li>
    </>
  );
  return (
    <header className=" top-0 z-50 backdrop-blur-xl fixed w-full">
      <div className="navbar container mx-auto">
        <div className="navbar-start">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content  rounded-box z-[1] mt-3 w-52 p-2 shadow"
            >
              {navLinks}
            </ul>
          </div>
          <Link to="hero" className="text-xl font-semibold cursor-pointer">
            Aminul
          </Link>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">{navLinks}</ul>
        </div>
        <div className="navbar-end">
          <div className="mr-4 text-xl">
            <button onClick={handleDarkModeToggle}>
              {darkMode ? <IoMdMoon /> : <MdLightMode />}
            </button>
          </div>
          <a
            href="https://drive.google.com/file/d/1r9vn-V0T0ggA_jv7ehoUggTX8W6K2Sx1/view?usp=sharing"
            target="_blank"
            className="btn"
          >
            Resume
          </a>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
