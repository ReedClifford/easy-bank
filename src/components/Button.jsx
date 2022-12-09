const Button = ({ children }) => {
  return (
    <button
      className=" bg-gradient-to-br from-green-500  to-cyan-500 text-white  
rounded-3xl font-semibold text-lg py-3 px-11"
    >
      {children}
    </button>
  );
};
export default Button;
