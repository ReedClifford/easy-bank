import { useContext } from "react";
import { ToggleContext } from "../context/toggleContext";
const useToggle = () => {
  return useContext(ToggleContext);
};
export default useToggle;
