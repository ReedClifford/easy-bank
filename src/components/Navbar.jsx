import close from "../assets/icon-close.svg";
import burgerMenu from "../assets/icon-hamburger.svg";
import logo from "../assets/logo.svg";
import useToggle from "../hooks/useToggle";
import Button from "./Button";

const Navbar = () => {
  const { active, toggleState } = useToggle();
  const backToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };
  return (
    <nav
      className="flex justify-between z-50 bg-white border-b border-neutral-200 
    items-center fixed top-0 w-full px-4 py-6 lg:px-28 lg:py-5"
    >
      <div onClick={backToTop}>
        <img src={logo} alt="logo" className="w-48 cursor-pointer" />
      </div>
      <div className="hidden lg:block">
        <div className="flex gap-5  ">
          <a
            className="text-neutral-500 font-semibold duration-500 ease-in-out border-b-4 border-white hover:border-green-500 hover:text-neutral-900"
            href="#home"
          >
            Home
          </a>
          <a
            className="text-neutral-500 font-semibold duration-500 ease-in-out border-b-4 border-white hover:border-green-500 hover:text-neutral-900"
            href="#about"
          >
            About
          </a>
          <a
            className="text-neutral-500 font-semibold duration-500 ease-in-out border-b-4 border-white hover:border-green-500 hover:text-neutral-900"
            href="#footer"
          >
            Contact
          </a>
          <a
            className="text-neutral-500 font-semibold duration-500 ease-in-out border-b-4 border-white hover:border-green-500 hover:text-neutral-900"
            href="#article"
          >
            Blog
          </a>
          <a
            className="text-neutral-500 font-semibold duration-500 ease-in-out hover:border-b-4 hover:border-green-500 hover:text-neutral-900"
            href="#footer"
          >
            Careers
          </a>
        </div>
      </div>
      {active ? (
        <img
          src={close}
          alt="burger"
          className="w-5 mr-3 cursor-pointer block lg:hidden "
          onClick={toggleState}
        />
      ) : (
        <img
          src={burgerMenu}
          alt="burger"
          className="w-8 mr-3 cursor-pointer block lg:hidden"
          onClick={toggleState}
        />
      )}
      <div className="hidden lg:block">
        <Button>Request Invite</Button>
      </div>
    </nav>
  );
};
export default Navbar;
