import React, { useContext } from "react";
import Header from "./components/Header.jsx";
import Meals from "./components/Meals.jsx";
import { CartContextProvider } from "./store/CartContext.jsx";
import {UserProgressContextProvider} from "./store/UserProgressContext.jsx";
import Modal from "./components/UI/Modal.jsx";
import Cart from "./components/Cart.jsx";

const App = () => {

  return (
    <UserProgressContextProvider>
      <CartContextProvider>
        <Header />
        <Meals />
        <Cart/>
      </CartContextProvider>
    </UserProgressContextProvider>
  );
};

export default App;
