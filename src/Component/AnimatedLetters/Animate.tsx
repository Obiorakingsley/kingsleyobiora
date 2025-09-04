import "./Animate.scss";

type animateProps = {
  stringClass: string;
  strArray: string[];
  idx: number;
};

const Animate = ({ stringClass, strArray, idx }: animateProps) => {
  return (
    <span>
      {strArray.map((char, i) => (
        <span key={char + i} className={`${stringClass} _${i + idx}`}>
          {char}
        </span>
      ))}
    </span>
  );
};

export default Animate;
