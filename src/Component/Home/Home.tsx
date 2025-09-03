import { Link } from "react-router-dom";
import "./Home.scss";
import icon from "../../assets/images/logo.png";

const Home = () => {
  return (
    <div className="home-page">
      <div className="container hero-text top-1/4 w-full px-12">
        <h1 className="text-white text-5xl sm:text-6xl">
          Hi, <br />
          <span className="whitespace-nowrap flex">
            I'm
            <img className="ml-4 size-14 sm:size-14" src={icon} alt="logo" />
            ingsley
          </span>
          web developer
        </h1>
        <h2 className="font-bold text-stone-500">
          Frontend Developer / React Specialist
        </h2>
        <div className="flex items-center mt-8 gap-4 text-2xl text-yellow-400">
          <Link to="contact">Contact Me</Link>
          <Link to="Upwork">Hire Me</Link>
        </div>
      </div>
    </div>
  );
};

export default Home;
