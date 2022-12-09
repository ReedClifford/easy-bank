import { createContext, useState } from "react";

export const ToggleContext = createContext();

export const Provider = ({ children }) => {
  const [active, setActive] = useState(false);
  const toggleState = () => {
    setActive(!active);
  };
  const values = { active, toggleState };
  return (
    <ToggleContext.Provider value={values}>{children}</ToggleContext.Provider>
  );
};
