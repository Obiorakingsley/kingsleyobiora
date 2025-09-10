import Loader from "react-loaders";
import "./Project.scss";
import { useEffect, useState } from "react";
import Animate from "../AnimatedLetters/Animate";
import Modal from "./Modal";
import TechBadge from "../../utils/TechBadge";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCode, faLink } from "@fortawesome/free-solid-svg-icons";

type ProjectType = {
  title: string;
  description: string;
  tech: string[];
  images: string[];
  features?: string[];
  projectLink?: string;
  codeLink?: string;
  challenges?: string[];
  learnings?: string[];
};

const projects: ProjectType[] = [
  {
    title: "Portfolio Website",
    description:
      "Personal portfolio showcasing animations, contact form, and responsive design.",
    tech: ["React", "TypeScript", "Tailwind CSS", "Sass", "EmailJS"],
    images: ["e-store.png", "img"],
    projectLink: "https://kingsleyObiora.com",
    codeLink: "https://github.com/ObioraKingsley/portfolio",
    challenges: [
      "Integrating animations without hurting performance",
      "Making the design fully responsive across devices",
      "Configuring email service (EmailJS) with TypeScript safely",
    ],
    learnings: [
      "Deepened knowledge of React component structure",
      "Learned advanced CSS/Tailwind animations",
      "Improved deployment workflow with Vercel",
    ],
  },
  {
    title: "E-Commerce Website",
    description:
      "EStore is a fully functional, full-stack e-commerce web application built with modern web technologies. It demonstrates core e-commerce functionalities including user authentication, product browsing and a shopping cart management.",
    tech: ["React", "Firebase", "CSS3", "Firestore"],
    images: [
      "Estore/img1.png",
      "Estore/img2.png",
      "Estore/img3.png",
      "Estore/img3.png",
      "Estore/img5.png",
      "Estore/img6.png",
      "Estore/img7.png",
      "Estore/img8.png",
      "Estore/img9.png",
      "Estore/img10.png",
      "Estore/img11.png",
    ],
    features: [
      "Firebase Authentication( Secure user sign-up and login.)",
      "Product Management( Display products fetched from Firestore database.)",
      "Filtering & Search( Filter products by category)",
      "Shopping Cart( Add/remove items, adjust quantities, and see a persistent cart total.)",
      "User Profile( User-specific order history and data management.)",
      "Fully Responsive( Optimized for desktop, tablet, and mobile devices.)",
      "Image Slider( React Swiper)",
    ],
    projectLink: "https://e-store-792c2.web.app/",
    codeLink: "https://github.com/Obiorakingsley/E-store-firebase",
    challenges: [
      "Structuring Firestore collections for scalability",
      "Managing state between cart, products, and user authentication",
      "Ensuring responsive design worked seamlessly across devices",
    ],
    learnings: [
      "Got comfortable with Firebase Auth & Firestore",
      "Improved skills in state management with React",
      "Learned how to handle async data fetching and errors",
    ],
  },
  {
    title: "Weather Map App",
    description:
      "A lightweight, user-friendly weather application that delivers accurate current weather conditions for any global location.",
    tech: ["JavaScript", "OpenWeather API", "HTML5", "CSS"],
    images: [
      "WeatherApp/img1.png",
      "WeatherApp/img2.png",
      "WeatherApp/img3.png",
    ],
    features: [
      "Instant Weather Updates( Get real time temperature, humidity, and wind data)",
      "Visual Weather Indicators( Dynamic icons for clear, cloudy, rainy, and other conditions)",
      "Daylight Tracking( Precise sunrise and sunset times)",
      "Universal Access( Fully responsive design for all devices)",
      "Smart Error Management( Handles invalid inputs and connection issues)",
    ],
    projectLink: "https://weather-app-obiora-kingsleys-app.vercel.app/",
    codeLink: "https://github.com/Obiorakingsley/Weather-App",
    challenges: [
      "Handling API errors gracefully (invalid city, network failure)",
      "Parsing and displaying data from OpenWeather API",
      "Making UI consistent across devices",
    ],
    learnings: [
      "Learned how to work with REST APIs in depth",
      "Improved error handling & UX design skills",
      "Got more comfortable with vanilla JS DOM manipulation",
    ],
  },
  {
    title: "Calculator & Currency Converter",
    description:
      "A sleek two-in-one web app featuring a smart calculator 🤖 and real-time currency converter 🌍, built with vanilla JavaScript.",
    tech: ["JavaScript", "HTML5", "ExchangeRate API", "CSS3"],
    images: [
      "Currency/img1.png",
      "Currency/img2.png",
      "Currency/img3.png",
      "Currency/img3.png",
    ],
    features: [
      " Regex-powered input validation → Blocks invalid math expressions",
      "Real-time evaluation → See results as you type",
      " Custom keypad",
      " Real-Time Currency Conversion(Convert amounts between multiple currencies using live exchange rates)",
      "160+ currencies with live rates via ExchangeRate-API",
      "🔄 One-click swap ↔️ between currencies",
      "📱 Mobile-friendly keypad → No annoying keyboard popups",
      "📡 Offline-friendly → Shows helpful errors when offline",
      "🏷️ Dynamic descriptions → Shows full currency names (USD → US Dollar)",
    ],
    projectLink: "https://currency-calculator-obiora-kingsleys-app.vercel.app/",
    codeLink: "https://github.com/Obiorakingsley/Currency-Calculator",
    challenges: [
      "Implementing regex validation for calculator inputs",
      "Handling floating-point math precision in JavaScript",
      "Integrating real-time exchange rates API",
    ],
    learnings: [
      "Strengthened vanilla JavaScript fundamentals",
      "Learned how to integrate and handle external APIs",
      "Improved problem-solving for math and currency logic",
    ],
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
      <section className="container pl-10  p-2 project-page  px-4 pb-12 pt-4 sm:py-14">
        <div>
          <h1 className="mb-12">
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
                className={`project-card cursor-pointer animate-card _${index} flex flex-col gap-2 bg-white shadow-lg  hover:shadow-2xl mx-auto transition-transform`}
                onClick={() => {
                  setModalData(project);
                  setIsModal((prev) => !prev);
                }}
                key={index}
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

                  <div className="flex gap-4 z">
                    {project.projectLink && (
                      <a
                        href={project.projectLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-blue-600 hover:underline shadow-md"
                      >
                        <FontAwesomeIcon icon={faLink} /> View
                      </a>
                    )}
                    {project.codeLink && (
                      <a
                        href={project.codeLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-gray-800 hover:underline shadow-lg"
                      >
                        <FontAwesomeIcon icon={faCode} />
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
          features={modalData?.features}
          learnings={modalData?.learnings}
          challenges={modalData?.challenges}
        />
      )}
      <Loader type="pacman" />
    </>
  );
};

export default Projects;
