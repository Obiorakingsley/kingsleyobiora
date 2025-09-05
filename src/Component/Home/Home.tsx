import { Link } from "react-router-dom";
import "./Home.scss";
import icon from "../../assets/images/logo.png";
import { useEffect, useState } from "react";
import Animate from "../AnimatedLetters/Animate";
import Logo from "./AnimateLogo/Logo";
import Profilepic from "../../assets/images/profilepic.jpg";
import Loader from "react-loaders";

const Home = () => {
  const [stringClass, setStringClass] = useState("string-animate");
  const nameArray = ["i", "n", "g", "s", "l", "e", "y"];
  const skillArray = [
    "w",
    "e",
    "b",
    " ",
    "d",
    "e",
    "v",
    "e",
    "l",
    "o",
    "p",
    "e",
    "r",
  ];

  useEffect(() => {
    const timeOut = setTimeout(() => {
      setStringClass("string-animate-hover");
    }, 4000);

    return () => clearTimeout(timeOut);
  }, []);
  return (
    <>
      <div className="home-page flex items-center gap-4">
        <div className="container w-full pl-10 transition-all duration-500">
          <h1 className="text-white text-4xl sm:text-6xl">
            <span className={stringClass}>H</span>
            <span className={`${stringClass} _12`}>i,</span>
            <br />
            <span className="whitespace-nowrap flex">
              <span className={`${stringClass} _13`}>I</span>
              <span className={`${stringClass} _14`}>'m</span>
              <img className="ml-4 size-14 sm:size-14" src={icon} alt="logo" />
              <Animate
                stringClass={stringClass}
                strArray={nameArray}
                idx={15}
              />
            </span>
            <Animate stringClass={stringClass} strArray={skillArray} idx={22} />
          </h1>
          <h2 className="font-bold text-stone-500">
            Frontend Developer / React Specialist
          </h2>
          <div className="flex items-center mt-4 gap-4 text-xl text-nowrap">
            <Link
              className="cta-btn text-yellow-400 hover:bg-yellow-400 hover:text-slate-700 px-3 py-1 border-2 border-yellow-400 whitespace-nowrap"
              to="contact"
            >
              Contact Me
            </Link>
            <Link
              className="cta-btn text-yellow-400 hover:bg-yellow-400 hover:text-slate-700 px-3 py-1 border-2 border-yellow-400 whitespace-nowrap"
              to="Upwork"
            >
              Hire Me
            </Link>
          </div>
        </div>
        <div className="hidden profile-img lg:flex items-center justify-around w-full">
          <img
            className="rounded-full border-8 border-amber-400 hover:animate-pulse"
            src={Profilepic}
            alt="profile pic"
            width={350}
            height={350}
          />
        </div>
        <Logo />
      </div>
      <Loader type="pacman" />
    </>
  );
};

export default Home;
