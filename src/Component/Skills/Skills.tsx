import { useState, useEffect } from "react";
import Animate from "../AnimatedLetters/Animate";
import "./Skills.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCss3,
  faSass,
  faJsSquare,
  faGitAlt,
  faHtml5,
  faReact,
} from "@fortawesome/free-brands-svg-icons";
import Loader from "react-loaders";

const Skills = () => {
  const [stringClass, setStringClass] = useState("string-animate");
  useEffect(() => {
    const timeOut = setTimeout(() => {
      setStringClass("string-animate-hover");
    }, 3000);

    return () => clearTimeout(timeOut);
  }, []);

  const softSkils: string[] = [
    "Agile",
    "Methodology",
    "Team Leadership",
    "Client Communication",
    "Problem-Solving",
  ];

  return (
    <>
      <section className="skills-page container pl-8 p-2  px-4 pb-12 pt-4 sm:pt-12 lg:flex  gap-8">
        <div className="text-container pl-1">
          <h1 className="mb-8">
            <Animate
              strArray={["M", "y", " ", "T", "o", "o", "l", "k", "i", "t"]}
              idx={18}
              stringClass={stringClass}
            />
          </h1>
          <div className="text-zone grid gap-3 mb-10">
            <h2 className="text-center text-2xl sm:text-3xl text-white mb-4">
              Bellow is a collection of technologies
              <br /> and tools{" "}
              <span className="text-slate-300">i use to bring</span> ideas to
              life.
            </h2>
            <p className="text-center text-primary">
              This blend of technical and soft skills
              <br /> allows me to contribute effectively to any team and
              project.
            </p>
            <a
              className="place-self-center"
              href="http://"
              target="_blank"
              rel="noopener noreferrer"
            >
              <button className="cta-btn bg-slate-100 text-black py-2 px-3 text-xl shadow-xl mt-4 max-w-max place-self-center hover:scale-105 transition-transform hover:bg-slate-100">
                <span className="cta-text bg-slate-50 rounded-full text-black text-xl shadow-2xl">
                  View Resume
                </span>
              </button>
            </a>
          </div>
          <div className="soft-skill text-white bg-black p-4 rounded-md mr-4">
            <h2 className="text-primary text-xl mb-4"> Beyond Code</h2>
            <p>
              I thrive in collaborative environments and understand that
              building great products requires more than just technical
              execution.
            </p>{" "}
            <strong>I actively practice:</strong>
            <div className="flex gap-3 mt-4 flex-wrap">
              {softSkils.map((skill, idx) => (
                <span
                  key={idx}
                  className="bg-slate-50 text-black px-3 py-1 text-xs font-medium rounded-full shadow-xl shadow-gray-800 hover:scale-105 transition-transform cursor-default"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>
        </div>
        <div className="skills-icons grid pr-4 justify-center items-center grid-cols-3 m-auto gap-4 max-w-96 min-w-80">
          <div>
            <img
              height={35}
              width={35}
              src="/typescript.png"
              alt="typescript icon"
            />
            <span>TypeScript</span>
          </div>

          <div>
            <FontAwesomeIcon icon={faJsSquare} color="#efd81d" />
            <span>JavaScript</span>
          </div>

          <div>
            <FontAwesomeIcon icon={faHtml5} color="#f06520" />
            <span>HTML5</span>
          </div>

          <div>
            <FontAwesomeIcon icon={faReact} color="#5ed4f4" />
            <span>React</span>
          </div>

          <div className="relative">
            <span className="next-text text-xs font-Aurore absolute top-2 text-color">
              Learning
            </span>
            <img height={40} width={40} src="/nextjs.png" alt="nextjs icon" />
            <span>Next.js</span>
          </div>
          <div>
            <FontAwesomeIcon icon={faSass} color="#ec4d28" />
            <span>Sass</span>
          </div>
          <div>
            <img
              height={35}
              width={35}
              src="/tailwind.png"
              alt="tailwind icon"
            />
            <span>Tailwind</span>
          </div>
          <div>
            <FontAwesomeIcon icon={faCss3} color="#28a4d9" />
            <span>CSS3</span>
          </div>
          <div>
            <FontAwesomeIcon icon={faGitAlt} color="#ec4d28" />
            <span>Git</span>
          </div>
          <div>
            <img height={35} width={35} src="/firebase.png" alt="vite icon" />
            <span>Firebase</span>
          </div>

          <div>
            <img height={35} width={35} src="/vite.png" alt="vite icon" />
            <span>Vite</span>
          </div>
          <div>
            <img height={35} width={35} src="/npm.png" alt="npm icon" />
            <span>npm</span>
          </div>
        </div>
      </section>
      <Loader active={true} type="pacman" />
    </>
  );
};

export default Skills;
