import ArticleCards from "./ArticleCards";
import { articleData } from "./articleData";
const Articles = () => {
  const renderedArticleCards = articleData.map(
    ({ img, title, author, content }, idx) => {
      return (
        <ArticleCards
          img={img}
          title={title}
          author={author}
          content={content}
          key={idx}
        />
      );
    }
  );
  return (
    <section
      className="min-h-screen bg-neutral-50 p-5 border-b border-neutral-300 "
      id="articles"
    >
      <div className="container mx-auto">
        <div className="flex flex-col justify-center items-center gap-5 mt-12">
          <h1 className="text-slate-700 text-4xl max-w-xs text-center">
            Latest Articles
          </h1>
        </div>
        <div className="grid grid-cols-1 gap-10 lg:grid-cols-4 mx-auto my-14">
          {renderedArticleCards}
        </div>
      </div>
    </section>
  );
};

export default Articles;
