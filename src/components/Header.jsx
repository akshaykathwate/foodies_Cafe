import { useContext } from "react";
import { CartContext } from "../store/CartContext.jsx";
import { UserProgressContext } from "../store/UserProgressContext.jsx";
import logo from "../assets/logo.jpg";
import Button from "./UI/Button.jsx";

export default function Header() {
  const cartCtx = useContext(CartContext);
  const userProgressCtx = useContext(UserProgressContext);

  const totalNumberOfItems = cartCtx.items.reduce(
    (total, item) => total + item.quantity,
    0
  );

  function handleShowCart() {
    userProgressCtx.showCart();
  }
  
  return (
    <header id="main-header">
      <div id="title">
        <img src={logo} alt="logo Image" />
        <h1>MYFOOD</h1>
      </div>
      <nav>
        <Button textOnly onClick={handleShowCart}>
          Cart ({totalNumberOfItems})
        </Button>
      </nav>
    </header>
  );
}
