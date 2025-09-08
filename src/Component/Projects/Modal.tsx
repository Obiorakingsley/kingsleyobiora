import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/free-mode";
import { Autoplay, Pagination, Navigation } from "swiper/modules";
import "swiper/css/pagination";
import "swiper/css/navigation";
import TechBadge from "./TechBadge";

type modalProps = {
  title?: string;
  description?: string;
  tech?: string[];
  images?: string[];
  projectLink?: string;
  codeLink?: string;
  setIsModal: React.Dispatch<React.SetStateAction<boolean>>;
  isModal: boolean;
};

const Modal: React.FC<modalProps> = ({
  title,
  description,
  tech,
  projectLink,
  codeLink,
  images,
  setIsModal,
}) => {
  return (
    <section className="absolute cursor-pointer bg-black inset-1 z-5 top-0 backdrop-blur-sm bg-opacity-30 text-white h-full grid place-content-center">
      <div className=" modal-details border-2 flex flex-col p-2 gap-3 max-w-screen-sm lg:max-w-screen-sm rounded-lg overflow-y-scroll scrollbar-hide">
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
              autoplay={{ delay: 3000 }}
              pagination={{ clickable: true }}
            >
              {images?.map((img) => (
                <SwiperSlide>
                  <img src={img} alt="project image" />
                </SwiperSlide>
              ))}
            </Swiper>
          </>
        }
        <h1>{title}</h1>
        <p>{description}</p>

        <TechBadge name={tech} />

        <p>{projectLink}</p>
        <p>{codeLink}</p>
        <button
          onClick={() => {
            setIsModal(false);
          }}
        >
          Close
        </button>
      </div>
    </section>
  );
};

export default Modal;
