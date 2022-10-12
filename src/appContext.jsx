import React, { createContext, useState } from "react";

export const AppContext = createContext();

const AppProvider = ({ children }) => {
  const [cart, setcart] = useState([]);

  const AddToCart = (item) => {
    if (item) {
      setcart((prev) => [...prev, item]);
    }
  };

  return (
    <AppContext.Provider value={{ cart, AddToCart }}>
      {children}
    </AppContext.Provider>
  );
};

export default AppProvider;
