import {
  faLinkedinIn,
  faGithub,
  faTwitter,
  faInstagram,
} from "@fortawesome/free-brands-svg-icons";
import "./Menu.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Menu = () => {
  return (
    <div className="menu-container absolute bg-black right-0 top-16 p-8 min-w-72">
      <span></span>
      <ul className="list-none flex flex-1 justify-between text-primary ">
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
      {/* <ul className="grid w-full items-center gap-8 text-center text-2xl">
        <li>
          <a href="http://" target="_blank" rel="noopener noreferrer">
            View Resume
          </a>
        </li>
        <li>
          <a href="http://" target="_blank" rel="noopener noreferrer">
            View Resume
          </a>
        </li>
        <li>
          <a href="http://" target="_blank" rel="noopener noreferrer">
            View Resume
          </a>
        </li>
        <li>
          <a href="http://" target="_blank" rel="noopener noreferrer">
            View Resume
          </a>
        </li>
      </ul> */}
    </div>
  );
};

export default Menu;
