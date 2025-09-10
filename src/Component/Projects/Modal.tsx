import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/free-mode";
import { Autoplay, Pagination, Navigation } from "swiper/modules";
import "swiper/css/pagination";
import "swiper/css/navigation";
import TechBadge from "../../utils/TechBadge";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCode, faLink, faTimes } from "@fortawesome/free-solid-svg-icons";

type modalProps = {
  title?: string;
  description?: string;
  tech?: string[];
  images?: string[];
  projectLink?: string;
  codeLink?: string;
  setIsModal: React.Dispatch<React.SetStateAction<boolean>>;
  isModal: boolean;
  challenges?: string[];
  learnings?: string[];
  features?: string[];
};

const Modal: React.FC<modalProps> = ({
  title,
  description,
  tech,
  projectLink,
  codeLink,
  images,
  setIsModal,
  features,
  learnings,
  challenges,
}) => {
  return (
    <section className="modal-container absolute bg-black inset-1 z-5 top-0 backdrop-blur-sm bg-opacity-30 text-white h-full grid place-content-center place-items-center">
      <div className="text-black modal-details border-2 flex flex-col p-3 gap-3 max-w-screen-sm lg:max-w-screen-sm h-5/6  rounded-xl overflow-y-scroll relative transition-transform">
        <div className="min-h-max">
          {
            <>
              <Swiper
                modules={[Autoplay, Pagination, Navigation]}
                spaceBetween={10}
                centeredSlides={true}
                navigation
                freeMode={true}
                grabCursor={true}
                //loop={true}
                slidesPerView="auto"
                //autoplay={{ delay: 3000 }}
                pagination={{ clickable: true }}
              >
                {images?.map((img, idx) => (
                  <SwiperSlide>
                    <img key={idx} src={img} alt="project image" />
                  </SwiperSlide>
                ))}
              </Swiper>
            </>
          }
        </div>
        <h1>{title}</h1>
        <p>{description}</p>

        <TechBadge name={tech} />

        <div>
          <h2>Features</h2>
          <ul className="grid gap-4 list-disc list-inside  bg-color rounded-md p-2  py-4 text-primary text-sm">
            {features?.map((feat, idx) => (
              <li key={idx}>{feat}</li>
            ))}
          </ul>
        </div>
        <div>
          <h2>Challenges</h2>
          <ul className="grid gap-4 list-disc list-inside  bg-color rounded-md p-2  py-4 text-primary text-sm">
            {challenges?.map((chal, idx) => (
              <li key={idx}>{chal}</li>
            ))}
          </ul>
        </div>
        <div>
          <h2>Learnings</h2>
          <ul className="grid gap-4 list-disc list-inside  bg-color rounded-md p-2  py-4 text-primary text-sm">
            {learnings?.map((learn, idx) => (
              <li key={idx}>{learn}</li>
            ))}
          </ul>
        </div>

        <div className="flex gap-4 z">
          {projectLink && (
            <a
              href={projectLink}
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-600 font-bold hover:underline shadow-md animate-pulse"
            >
              <FontAwesomeIcon icon={faLink} /> Live Demo
            </a>
          )}
          {codeLink && (
            <a
              href={codeLink}
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-800 hover:underline shadow-lg"
            >
              <FontAwesomeIcon icon={faCode} />
              Code
            </a>
          )}
        </div>
        <div
          className="cursor-pointer z-10 right-2 top-2 md:top-8 fixed p-2 text-3xl text-white shadow-xl"
          onClick={() => {
            setIsModal(false);
          }}
        >
          <FontAwesomeIcon icon={faTimes} />
        </div>
      </div>
    </section>
  );
};

export default Modal;
