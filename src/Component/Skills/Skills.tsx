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
    <section className="skills-page container pl-10 p-2  px-4 pb-12 pt-4 sm:pt-12 lg:flex  gap-8">
      <div className="text-container">
        <h1 className="mb-8">
          <Animate
            strArray={["M", "y", " ", "T", "o", "o", "l", "k", "i", "t"]}
            idx={18}
            stringClass={stringClass}
          />
        </h1>
        <div className="grid gap-3 mb-10">
          <h2 className="text-center text-2xl sm:text-3xl text-white mb-4">
            Bellow is a collection of technologies
            <br /> and tools i use to bring ideas to life.
          </h2>
          <p className="text-center text-primary">
            This blend of technical and soft skills
            <br /> allows me to contribute effectively to any team and project.
          </p>
          <a
            className="place-self-center"
            href="http://"
            target="_blank"
            rel="noopener noreferrer"
          >
            <button className="cta-btn bg-white text-black py-2 px-3 text-xl shadow-xl mt-4 max-w-max place-self-center hover:scale-105 transition-transform hover:bg-slate-100">
              <span className="cta-text bg-white rounded-full text-black text-xl shadow-2xl">
                View Resume
              </span>
            </button>
          </a>
        </div>
        <div className="text-white bg-black p-4 rounded-md">
          <h2 className="text-primary text-xl mb-4"> Beyond Code</h2>
          <p>
            I thrive in collaborative environments and understand that building
            great products requires more than just technical execution.
          </p>{" "}
          <strong>I actively practice:</strong>
          <div className="flex gap-3 mt-4 flex-wrap">
            {softSkils.map((skill) => (
              <span className="bg-white text-black px-3 py-1 text-xs font-medium rounded-full shadow-xl shadow-gray-800 hover:scale-105 transition-transform cursor-default">
                {skill}
              </span>
            ))}
          </div>
        </div>
      </div>
      <div className="skills-icons grid justify-center items-center grid-cols-3 m-auto gap-4 max-w-96 min-w-80">
        <div>
          <span>TypeScript</span>
          <img
            height={40}
            width={40}
            src="/typescript.png"
            alt="typescript icon"
          />
        </div>

        <div>
          <span>JavaScript</span>
          <FontAwesomeIcon icon={faJsSquare} color="#efd81d" />
        </div>

        <div>
          <span>HTML5</span>
          <FontAwesomeIcon icon={faHtml5} color="#f06520" />
        </div>

        <div>
          <span>React</span>
          <FontAwesomeIcon icon={faReact} color="#5ed4f4" />
        </div>
        <div>
          <span>Next.js</span>
          <img height={40} width={40} src="/nextjs.png" alt="nextjs icon" />
        </div>
        <div>
          <span>Sass</span>
          <FontAwesomeIcon icon={faSass} color="#ec4d28" />
        </div>
        <div>
          <span>Tailwind</span>
          <img height={40} width={40} src="/tailwind.png" alt="tailwind icon" />
        </div>
        <div>
          <span>CSS3</span>
          <FontAwesomeIcon icon={faCss3} color="#28a4d9" />
        </div>
        <div>
          <span>Git</span>
          <FontAwesomeIcon icon={faGitAlt} color="#ec4d28" />
        </div>

        <div>
          <span>Vite</span>
          <img height={40} width={40} src="/vite.png" alt="vite icon" />
        </div>
        <div>
          <span>npm</span>
          <img height={40} width={40} src="/npm.png" alt="npm icon" />
        </div>
      </div>
    </section>
  );
};

export default Skills;
