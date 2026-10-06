import React, { createContext, useState } from "react";

// Create a context with a default value
const ToggleContext = createContext();

const ToggleProvider = ({ children }) => {
  const [toggle, setToggle] = useState(false);

  return (
    <ToggleContext.Provider value={{ toggle, setToggle }}>
      {children}
    </ToggleContext.Provider>
  );
};

export { ToggleContext, ToggleProvider };
