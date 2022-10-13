import React, { createContext, useState } from "react";

export const AppContext = createContext();

const AppProvider = ({ children }) => {
  const [cart, setcart] = useState([]);

  const AddToCart = (item) => {
    if (item) {
      setcart((prev) => [...prev, item]);
      console.log(cart);
    }
  };

  const RemoveItemFromCart = (index) => {
    setcart((prev) => {
      prev.splice(index, 1);

      return prev;
    });
  };

  return (
    <AppContext.Provider value={{ cart, AddToCart, RemoveItemFromCart }}>
      {children}
    </AppContext.Provider>
  );
};

export default AppProvider;
