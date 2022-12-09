const ArticleCards = ({ img, content, author, title }, id) => {
  return (
    <div key={id} className="shadow-md rounded-xl bg-white">
      <div className="w-full">
        <img
          src={img}
          alt={title}
          className="object-fill object-center rounded-t-xl"
        />
      </div>
      <div className="p-10">
        <span className="text-neutral-400 text-sm mb-2">{author}</span>
        <h2 className="text-xl font-semibold text-neutral-800 mb-2">{title}</h2>
        <p className="text-neutral-400 mb-2">{content}</p>
      </div>
    </div>
  );
};

export default ArticleCards;
