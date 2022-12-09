import logo from "../assets/footer.svg";
import fb from "../assets/icon-facebook.svg";
import ig from "../assets/icon-instagram.svg";
import pinterest from "../assets/icon-pinterest.svg";
import twitter from "../assets/icon-twitter.svg";
import youtube from "../assets/icon-youtube.svg";
import Button from "./Button";

const Footer = () => {
  return (
    <footer
      id="footer"
      className="bg-slate-800 p-10 flex flex-col justify-center items-center lg:flex-row lg:justify-evenly gap-7"
    >
      <div className="flex flex-col justify-center gap-5 lg:gap-10 items-center">
        <img src={logo} alt="logo" className="fill-white w-40" />
        <div className="flex gap-3">
          <img src={fb} alt="fb" className="w-6 cursor-pointer" />
          <img src={youtube} alt="youtube" className="w-6 cursor-pointer" />
          <img src={twitter} alt="twitter" className="w-6 cursor-pointer" />
          <img src={pinterest} alt="pinterest" className="w-6 cursor-pointer" />
          <img src={ig} alt="instagram" className="w-6 cursor-pointer" />
        </div>
      </div>
      <div className="text-white flex flex-col justify-center items-center gap-2">
        <span className="hover:text-green-400 duration-500 ease-in-out cursor-pointer">
          About Us
        </span>
        <span className="hover:text-green-400 duration-500 ease-in-out cursor-pointer">
          Contact
        </span>
        <span className="hover:text-green-400 duration-500 ease-in-out cursor-pointer">
          Blog
        </span>
      </div>
      <div className="text-white flex flex-col justify-center items-center gap-2">
        <span className="hover:text-green-400 duration-500 ease-in-out cursor-pointer">
          Careers
        </span>
        <span className="hover:text-green-400 duration-500 ease-in-out cursor-pointer">
          Support
        </span>
        <span className="hover:text-green-400 duration-500 ease-in-out cursor-pointer">
          Private Policy
        </span>
      </div>
      <div className="flex flex-col gap-3">
        <Button>Request Invite</Button>
        <span className="text-neutral-400">©Easybank. All Rights Reserved</span>
      </div>
    </footer>
  );
};
export default Footer;
