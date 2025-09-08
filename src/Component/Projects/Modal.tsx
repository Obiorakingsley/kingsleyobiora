type modalProps = {
  title?: string;
  description?: string;
  tech?: string[];
  image?: string;
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
  image,
  setIsModal,
}) => {
  return (
    <section className="absolute cursor-pointer bg-black inset-1 z-5 top-0 backdrop-blur-sm bg-opacity-30 text-white h-full grid place-content-center">
      <div className=" modal-details border-2 flex flex-col p-2 gap-3 max-w-screen-sm lg:max-w-screen-sm rounded-lg">
        <img src={`/${image}`} alt="e-store" height={300} width={400} />
        <h1 className="text-2xl">{title}</h1>
        <p>{description}</p>
        <div>
          {tech?.map((t, i) => (
            <span key={i}>{t}</span>
          ))}
        </div>
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
