import AboutCards from "./AboutCards";
import { aboutData } from "./aboutData";
const About = () => {
  const renderedAboutCards = aboutData.map(({ header, content, img }, idx) => {
    return (
      <AboutCards
        header={header}
        content={content}
        img={img}
        id={idx}
        key={idx}
      />
    );
  });
  return (
    <section
      className="min-h-screen p-5 bg-neutral-100 border-b border-neutral-300 "
      id="about"
    >
      <div className="container mx-auto">
        <h1 className="text-slate-700 text-4xl  text-center p-5 lg:text-start mt-16 lg:max-w-xl lg:p-0 lg:ml-3">
          Why choose Easybank?
        </h1>
        <p className="max-w-sm text-lg text-neutral-400 text-center lg:text-start mt-5 mb-16 lg:max-w-lg lg:ml-3">
          We leverage Open Banking to turn your bank account into your financial
          hub. Control your finances like never before.
        </p>

        <div className="grid grid-cols-1 gap-10 lg:grid-cols-4 my-14   ">
          {renderedAboutCards}
        </div>
      </div>
    </section>
  );
};
export default About;
