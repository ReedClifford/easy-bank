const AboutCards = ({ img, content, header, id }) => {
  return (
    <div
      key={id}
      className="flex flex-col justify-center items-center lg:items-start gap-2"
    >
      <img src={img} alt={header} className="select-none" />
      <h1 className="text-slate-700 text-2xl max-w-xs text-center lg:text-start">
        {header}
      </h1>
      <p className="max-w-sm text-lg text-neutral-400 text-center lg:text-start ">
        {content}
      </p>
    </div>
  );
};
export default AboutCards;
