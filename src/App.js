import { useEffect } from "react";
import About from "./components/about/About";
import Articles from "./components/articles/Articles";
import Footer from "./components/Footer";
import Home from "./components/Home";
import Navbar from "./components/Navbar";
const App = () => {
  useEffect(() => {
    document.body.classList.add("scroll-smooth");
  });

  return (
    <section className="min-h-screen ">
      <Navbar />
      <Home />
      <About />
      <Articles />
      <Footer />
    </section>
  );
};
export default App;
