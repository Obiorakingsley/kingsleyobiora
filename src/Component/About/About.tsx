import "./About.scss";
import { useState, useEffect } from "react";
import Animate from "../AnimatedLetters/Animate";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCss3,
  faGitAlt,
  faHtml5,
  faJsSquare,
  faReact,
  faSass,
} from "@fortawesome/free-brands-svg-icons";
import Loader from "react-loaders";

const About = () => {
  const [stringClass, setStringClass] = useState("string-animate");
  useEffect(() => {
    const timeOut = setTimeout(() => {
      setStringClass("string-animate-hover");
    }, 2000);

    return () => clearTimeout(timeOut);
  }, []);
  return (
    <>
      <div className="about-page container pl-8 sm:pt-12 pt-8 flex flex-col lg:flex-row items-center justify-around gap-10 mb-20">
        <div className="text-zone lg:w-2/3">
          <h1 className="mb-8">
            <Animate
              strArray={["A", "b", "o", "u", "t", " ", "M", "e"]}
              idx={15}
              stringClass={stringClass}
            />
          </h1>

          <p>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Cupiditate
            omnis placeat consequuntur sit et. Tempore odio dolores, molestiae
            aspernatur dolorum aliquid voluptatibus cumque quam vero vel
            similique repellat fuga quasi!
          </p>
          <p>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Enim
            officia, provident ratione dolores cupiditate quisquam! Dolorum ad
            beatae animi perspiciatis ipsum velit, dolores recusandae est
            numquam alias libero minima asperiores!
          </p>

          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Recusandae,
            veritatis hic quisquam illo ullam, quod aut optio voluptatem magnam
            tempore vero id inventore reprehenderit ad perspiciatis excepturi
            quia expedita? Ipsum?
          </p>
        </div>
        <div className="stage-cube grid items-center relative">
          <div className="cubespinner absolute top-32 ">
            <div className="face1">
              <FontAwesomeIcon icon={faReact} color="#5ed4f4" />
            </div>
            <div className="face2">
              <FontAwesomeIcon icon={faJsSquare} color="#efd81d" />
            </div>
            <div className="face3">
              <FontAwesomeIcon icon={faCss3} color="#28a4d9" />
            </div>
            <div className="face4">
              <FontAwesomeIcon icon={faHtml5} color="#f06520" />
            </div>
            <div className="face5">
              <img
                height={80}
                width={80}
                src="/typescript.png"
                alt="typescript icon"
              />
            </div>
            <div className="face6">
              <FontAwesomeIcon icon={faGitAlt} color="#ec4d28" />
            </div>
            <div className="face7">
              <FontAwesomeIcon icon={faSass} color="#ec4d28" />
            </div>
          </div>
        </div>
      </div>
      <Loader type="pacman" />
    </>
  );
};

export default About;
