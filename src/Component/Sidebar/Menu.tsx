import "./Menu.scss";

const Menu = () => {
  return (
    <div className="menu-container absolute bg-black right-0 top-16 p-8 min-w-72">
      <ul className="grid w-full items-center gap-8 text-center text-2xl">
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
      </ul>
    </div>
  );
};

export default Menu;
