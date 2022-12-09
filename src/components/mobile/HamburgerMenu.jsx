import useToggle from "../../hooks/useToggle";
const HamburgerMenu = () => {
  const { toggleState } = useToggle();
  return (
    <div className="relative">
      <div
        className="backdrop-blur-sm bg-white/10 z-40 fixed inset-0"
        onClick={toggleState}
      ></div>
      <div className="fixed top-24 bottom-64 h-fit py-6 text-lg font-base left-20 right-20 shadow-sm flex flex-col  gap-4 shadow-neutral-400 rounded-sm bg-white z-50 text-center">
        <span>Home</span>
        <span>About</span>
        <span>Contact</span>
        <span>Blog</span>
        <span>Careers</span>
      </div>
    </div>
  );
};

export default HamburgerMenu;
