import { Link, NavLink } from "react-router-dom";
import Logo from "../../assets/images/logo.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faEnvelope,
  faHome,
  faList,
  faProjectDiagram,
  faUser,
} from "@fortawesome/free-solid-svg-icons";
import {
  faGithub,
  faInstagram,
  faLinkedinIn,
  faRProject,
  faTwitter,
} from "@fortawesome/free-brands-svg-icons";

type isActive = {
  isActive: boolean;
};

const Sidebar = () => {
  return (
    <>
      <div className="min-h-screen hidden sm:flex w-20 px-8 py-4 absolute top-0 bg-neutral-950 items-center gap-28 flex-col  ">
        <Link to={"/"}>
          <img className="size-8 mx-auto" src={Logo} alt="logo" width={30} />
          <p className="text-white text-sm">Kingsley</p>
        </Link>
        <nav className="flex-1 flex gap-8 flex-col">
          <NavLink
            className={`home ${({ isActive }: isActive) => {
              isActive && "text-primary";
            }}`}
            to="/"
          >
            <FontAwesomeIcon className="size-6" icon={faHome} />
          </NavLink>
          <NavLink
            className={`about-link ${({ isActive }: isActive) => {
              isActive && "text-primary";
            }}`}
            to="about"
          >
            <FontAwesomeIcon className="size-6" icon={faUser} />
          </NavLink>
          <NavLink
            className={`contact-link ${({ isActive }: isActive) => {
              isActive && "text-primary";
            }}`}
            to="contact"
          >
            <FontAwesomeIcon className="size-6" icon={faEnvelope} />
          </NavLink>
          <NavLink
            className={`project-link ${({ isActive }: isActive) => {
              isActive && "text-primary";
            }}`}
            to="project"
          >
            <FontAwesomeIcon className="size-6" icon={faProjectDiagram} />
          </NavLink>
        </nav>
        <ul className="list-none flex flex-col gap-6 ">
          <Link to="">
            <li>
              <FontAwesomeIcon icon={faLinkedinIn} />
            </li>
          </Link>
          <Link to="">
            <li>
              <FontAwesomeIcon icon={faGithub} />
            </li>
          </Link>
          <Link to="">
            <li>
              <FontAwesomeIcon icon={faTwitter} />
            </li>
          </Link>
          <Link to="">
            <li>
              <FontAwesomeIcon icon={faInstagram} />
            </li>
          </Link>
        </ul>
      </div>

      {/* Mobile-menu */}
      <div className="sm:hidden flex gap-3 items-center justify-between p-2 w-full bg-neutral-950 ">
        <Link to={"/"}>
          <img className="size-8" src={Logo} alt="logo" width={30} />
          <p className="text-white text-sm">Kingsley</p>
        </Link>
        <nav className="flex-1 flex gap-2 justify-around ">
          <NavLink
            className={`home ${({ isActive }: isActive) => {
              isActive && "text-primary";
            }}`}
            to="/"
          >
            <FontAwesomeIcon className="size-6" icon={faHome} />
          </NavLink>
          <NavLink
            className={`about-link ${({ isActive }: isActive) => {
              isActive && "text-primary";
            }}`}
            to="about"
          >
            <FontAwesomeIcon className="size-6" icon={faUser} />
          </NavLink>
          <NavLink
            className={`contact-link ${({ isActive }: isActive) => {
              isActive && "text-primary";
            }}`}
            to="contact"
          >
            <FontAwesomeIcon className="size-6" icon={faEnvelope} />
          </NavLink>
          <NavLink
            className={`project-link ${({ isActive }: isActive) => {
              isActive && "text-primary";
            }}`}
            to="project"
          >
            <FontAwesomeIcon className="size-6" icon={faProjectDiagram} />
          </NavLink>
        </nav>
        <button className="text-primary">
          l<FontAwesomeIcon icon={faList} />
        </button>
      </div>
    </>
  );
};

export default Sidebar;
