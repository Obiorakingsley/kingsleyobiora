type TechBadgeProps = {
  name?: string[];
};

const TechBadge: React.FC<TechBadgeProps> = ({ name }) => {
  return (
    <div className="flex flex-wrap gap-2 mb-2">
      {name?.map((n) => (
        <span className="bg-white text-black px-3 py-1 text-xs font-medium rounded-full shadow-md hover:scale-105 transition-transform">
          {n}
        </span>
      ))}
    </div>
  );
};

export default TechBadge;
