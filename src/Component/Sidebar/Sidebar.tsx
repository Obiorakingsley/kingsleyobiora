import { Link, NavLink } from "react-router-dom";
import Logo from "../../assets/images/logo.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useState } from "react";
import {
  faEnvelope,
  faHome,
  faNavicon,
  faProjectDiagram,
  faTools,
  faUser,
} from "@fortawesome/free-solid-svg-icons";
import {
  faGithub,
  faInstagram,
  faLinkedinIn,
  faTwitter,
} from "@fortawesome/free-brands-svg-icons";

import Menu from "./Menu";

type isActive = {
  isActive: boolean;
};

const Sidebar = () => {
  const [menu, setMenu] = useState(false);
  return (
    <>
      <section className="sidebar min-h-screen hidden sm:flex w-20 px-8 py-4  absolute top-0 bg-black items-center gap-16 flex-col  ">
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
            className={`skills-link ${({ isActive }: isActive) => {
              isActive && "text-primary";
            }}`}
            to="skills"
          >
            <FontAwesomeIcon className="size-6" icon={faTools} />
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
            to="projects"
          >
            <FontAwesomeIcon className="size-6" icon={faProjectDiagram} />
          </NavLink>
        </nav>

        {/* Social Links */}
        <ul className="list-none flex flex-1 flex-col  gap-6 ">
          <li>
            <a
              href="https://www.linkedin.com/in/kingsley-obiora-27a01a205"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FontAwesomeIcon icon={faLinkedinIn} />
            </a>
          </li>

          <li>
            <a
              href="https://github.com/ObioraKingsley/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FontAwesomeIcon icon={faGithub} />
            </a>
          </li>

          <li>
            <a
              href="https://x.com/kc_devv"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FontAwesomeIcon icon={faTwitter} />
            </a>
          </li>

          <li>
            <a
              href="https://x.com/kc_devv"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FontAwesomeIcon icon={faInstagram} />
            </a>
          </li>
        </ul>
      </section>

      {/* Mobile-menu */}
      <section className="mobile-nav sm:hidden flex gap-3 items-center justify-between p-2 w-full bg-black ">
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
            className={`skills-link ${({ isActive }: isActive) => {
              isActive && "text-primary";
            }}`}
            to="skills"
          >
            <FontAwesomeIcon className="size-6" icon={faTools} />
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
            to="projects"
          >
            <FontAwesomeIcon className="size-6" icon={faProjectDiagram} />
          </NavLink>
        </nav>

        <button
          className={`cursor-pointer text-2xl hover:text-primary  ${
            menu && "text-primary "
          }`}
          type="button"
          onClick={() => {
            setMenu((prev) => !prev);
          }}
        >
          <span className="off-screen">Menu-icon</span>
          <FontAwesomeIcon icon={faNavicon} />
        </button>
        {menu && <Menu />}
      </section>
    </>
  );
};

export default Sidebar;
