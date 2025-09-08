import Loader from "react-loaders";
import "./Project.scss";
import { useEffect, useState } from "react";
import Animate from "../AnimatedLetters/Animate";
import Modal from "./Modal";
import TechBadge from "./TechBadge";

type ProjectType = {
  title: string;
  description: string;
  tech: string[];
  images: string[];
  projectLink?: string;
  codeLink?: string;
};

const projects: ProjectType[] = [
  {
    title: "Portfolio Website",
    description:
      "Personal portfolio showcasing animations, contact form, and responsive design.",
    tech: ["React", "TypeScript", "Tailwind CSS", "Sass", "EmailJS"],
    images: ["e-store.png", "e-store.png"],
    projectLink: "https://kingsleyObiora.com",
    codeLink: "https://github.com/ObioraKingsley/portfolio",
  },
  {
    title: "E-Commerce Website",
    description:
      "EStore is a fully functional, full-stack e-commerce web application built with modern web technologies. It demonstrates core e-commerce functionalities including user authentication, product browsing, shopping cart management, and a seamless checkout flow, all powered by Firebase. A full-stack, responsive e-commerce web application built with React and Firebase. Features user authentication, product filtering, cart management, and Firestore database integration.",

    tech: ["React", "Firebase", "CSS3", "Firestore"],
    images: ["e-store.png"],
    projectLink: "https://e-store-792c2.web.app/",
    codeLink: "https://github.com/Obiorakingsley/E-store-firebase",
  },
  {
    title: "Weather Map App",
    description:
      "A lightweight, user-friendly weather application that delivers accurate current weather conditions for any global location. Built with simplicity in mind, it provides essential weather data at a glance.",
    tech: ["JavaScript", "Open weather API", "Html5", "CSS"],
    images: ["/images/weather.png"],
    projectLink: "https://weather-app-obiora-kingsleys-app.vercel.app/",
    codeLink: "https://github.com/Obiorakingsley/Weather-App",
  },
  {
    title: "Currency Converter",
    description:
      "A sleek two-in-one web app featuring a smart calculator 🤖 and real-time currency converter 🌍, built with vanilla JavaScript",
    tech: ["Javascript", "Html5", "ExchangeRate API", "CSS3"],
    images: ["/images/currency.png"],
    projectLink: "https://currency-calculator-obiora-kingsleys-app.vercel.app/",
    codeLink: "https://github.com/Obiorakingsley/Currency-Calculator",
  },
];

const Projects = () => {
  const [isModal, setIsModal] = useState(false);
  const [modalData, setModalData] = useState<ProjectType | null>(null);
  const [stringClass, setStringClass] = useState("string-animate");
  useEffect(() => {
    const timeOut = setTimeout(() => {
      setStringClass("string-animate-hover");
    }, 3000);

    return () => clearTimeout(timeOut);
  }, []);

  return (
    <>
      <section className="container pl-10 p-2 project-page  px-4 py-16">
        <div>
          <h1 className="mb-16">
            <Animate
              strArray={["P", "r", "o", "j", "e", "c", "t", "s"]}
              stringClass={stringClass}
              idx={15}
            />
          </h1>
        </div>
        <div className="card-container gap-8 w-full grid grid-cols-1 md:grid-cols-2 lg:pl-8 lg:grid-cols-3">
          {projects.map((project, index) => (
            <>
              <div
                onClick={() => {
                  setModalData(project);
                  setIsModal((prev) => !prev);
                }}
                key={index}
                className={`project-card animate-card _${index} flex flex-col gap-2 bg-white shadow-lg  hover:shadow-2xl mx-auto transition-transform`}
              >
                <img
                  src={`/${project.images[0]}`}
                  alt={project.title}
                  className="h-48 w-full object-cover"
                />

                <div className="p-5">
                  <h2 className="text-xl font-semibold mb-2">
                    {project.title}
                  </h2>
                  <p className="text-gray-600 mb-4">
                    {project.description.substring(0, 55) + "..."}
                  </p>

                  <TechBadge name={project.tech} />

                  <div className="flex gap-4">
                    {project.projectLink && (
                      <a
                        href={project.projectLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-blue-600 hover:underline"
                      >
                        Live Demo
                      </a>
                    )}
                    {project.codeLink && (
                      <a
                        href={project.codeLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-gray-800 hover:underline"
                      >
                        Code
                      </a>
                    )}
                  </div>
                </div>
              </div>
            </>
          ))}
        </div>
      </section>
      {isModal && (
        <Modal
          title={modalData?.title}
          codeLink={modalData?.codeLink}
          projectLink={modalData?.projectLink}
          tech={modalData?.tech}
          images={modalData?.images}
          description={modalData?.description}
          setIsModal={setIsModal}
          isModal={isModal}
        />
      )}
      <Loader type="pacman" />
    </>
  );
};

export default Projects;
