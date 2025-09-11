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
    }, 3000);

    return () => clearTimeout(timeOut);
  }, []);
  return (
    <>
      <div className="about-page container pl-10 sm:pt-12 pt-8 flex flex-col lg:flex-row items-center justify-around gap-10 mb-20">
        <div className="text-zone lg:w-2/3">
          <h1 className="mb-10">
            <Animate
              strArray={["A", "b", "o", "u", "t", " ", "M", "e"]}
              idx={18}
              stringClass={stringClass}
            />
          </h1>

          <div className="about-text">
            <h2>Short Intro</h2>
            <p>
              Hi, I’m Kingsley Obiora, a passionate Front-End Developer focused
              on building clean, interactive, and user-friendly web experiences.
            </p>
          </div>
          <div className="about-text">
            <h2>My Journey</h2>
            <p>
              I started my journey into web development in May 2024 with
              curiosity about how websites worked, and became more serious about
              it in September 2024, and since then it has grown into a passion
              for creating modern, responsive interfaces.
            </p>

            <h2>What I Do Best</h2>
            <ul className="list-disc pl-4">
              <li>
                Building modern React applications with performance and
                scalability in mind
              </li>
              <li>
                Designing pixel-perfect, responsive layouts with Tailwind CSS
              </li>
              <li>
                Writing clean, semantic code that’s easy to maintain and extend
              </li>
              <li>
                Exploring animations and smooth UI interactions to bring
                websites to life
              </li>
            </ul>
          </div>

          <div className="about-text">
            <h2>Currently</h2>
            <p>
              I’m currently working on projects that showcase my skills in
              React, TypeScript, Next.js, and Tailwind CSS.
            </p>

            <p>
              <span className="text-nowrap font-extrabold text-yellow-500">
                I’m also open to opportunities{" "}
              </span>
              where I can collaborate, learn, and grow as a developer, whether
              that’s internships, freelance work, or full-time roles.
            </p>
          </div>
          <div className="about-text">
            <h2>Beyond Code </h2>
            <p>
              When I’m not coding, I enjoy exploring design inspiration, keeping
              up with tech trends, and connecting with other developers. I also
              enjoy ⚽ football, 🎮 gaming, 🎨 design.
            </p>
            <h2>Let’s Connect</h2>
            <p>
              I’d love to collaborate or chat about exciting opportunities. 👉
              [LinkedIn] | [GitHub] | [Email]
            </p>
          </div>
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
      <Loader active={true} type="pacman" />
    </>
  );
};

export default About;
