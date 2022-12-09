import { Fragment } from "react";
import desktopIntro from "../assets/bg-intro-desktop.svg";
import mobileIntro from "../assets/bg-intro-mobile.svg";
import mockups from "../assets/image-mockups.png";
import useToggle from "../hooks/useToggle";
import Button from "./Button";
import HamburgerMenu from "./mobile/HamburgerMenu";
const Home = () => {
  const { active } = useToggle();
  return (
    <Fragment>
      <section
        id="home"
        className="min-h-screen bg-neutral-50 relative   flex flex-col justify-between border-b 
        border-neutral-200 lg:overflow-x-clip lg:flex-row lg:justify-start "
      >
        <div>
          <img
            src={mobileIntro}
            alt="mobile"
            className="absolute -top-10 select-none w-full md:hidden z-10 block "
          />

          <img
            src={desktopIntro}
            alt="mobile"
            className="absolute -top-60 select-none  hidden z-10 md:block -right-96"
          />

          <img
            src={mockups}
            alt="mockups"
            className="absolute -top-40 select-none  z-20 lg:-right-28 "
          />
        </div>

        <div
          className="text-center mb-5  z-40 flex flex-col justify justify-evenly sm:backdrop-blur-lg sm:bg-white/40
     gap-5 items-center lg:bg-none lg:backdrop-blur-none  lg:items-start  lg:justify-center lg:absolute lg:left-44 lg:top-40 lg:bottom-40"
        >
          <div>
            <h1 className="text-slate-700 text-center lg:text-start text-5xl lg:text-7xl mt-10">
              Next generation
            </h1>
            <h1 className="text-slate-700 text-center lg:text-start text-5xl lg:text-7xl">
              digital banking
            </h1>
          </div>
          <p className="max-w-sm text-center lg:text-start text-lg text-neutral-400">
            Take your financial life online. Your Easybank account will be a
            one-stop-shop for spending, saving, budgeting, investing and much
            more.
          </p>
          <div>
            <Button>Request Invite</Button>
          </div>
        </div>
      </section>
      {active ? <HamburgerMenu /> : null}
    </Fragment>
  );
};
export default Home;
