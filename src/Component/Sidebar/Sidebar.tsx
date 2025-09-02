import { Link, NavLink } from "react-router-dom";
import Logo from "../../assets/images/logo.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope, faHome, faUser } from "@fortawesome/free-solid-svg-icons";

//type Props = {};

const Sidebar = () => {
  return (
    <div className="min-h-screen w-20 px-8 py-4 absolute top-0 bg-slate-800 items-center flex gap-32 flex-col">
      <Link to={"/"}>
        <img className="h-auto w-8" src={Logo} alt="logo" width={30} />
        <p className="text-white text-lg">Kingsley</p>
      </Link>
      <nav className="flex-1 flex gap-8 flex-col">
        <NavLink to="/">
          <FontAwesomeIcon className="size-6" icon={faHome} />
        </NavLink>
        <NavLink to="about">
          <FontAwesomeIcon className="size-6" icon={faUser} />
        </NavLink>
        <NavLink to="contact">
          <FontAwesomeIcon className="size-6" icon={faEnvelope} />
        </NavLink>
      </nav>
    </div>
  );
};

export default Sidebar;
