import { useContext } from "react";
import { CartContext } from "../store/CartContext";
import { UserProgressContext } from "../store/UserProgressContext";
import Button from "./UI/Button";
import Input from "./UI/Input";
import Modal from "./UI/Modal";

export default function Checkout() {
  const cartCtx = useContext(CartContext);
  const userProgressCtx = useContext(UserProgressContext);

  const cartTotal = cartCtx.items.reduce(
    (totalPrice, item) => totalPrice + item.quantity * item.price,
    0
  );

  function handleClose() {
    userProgressCtx.hideCheckout();
  }

  function handleSubmit(event) {
    event.preventDefault();
    const fd = new FormData(event.target);
    const customerData =Object.fromEntries(fd.entries());
  }

  return (
    <Modal open={userProgressCtx.progress === "checkout"}>
      <form onSubmit={handleSubmit}>
        <h2>Checkout</h2>
        <p>Total Amount : {cartTotal}</p>

        <Input label="Full-Name" type="text" id="full-name" />
        <Input label="Email-Address" type="email" id="email" />
        <Input label="Street" type="text" id="street" />

        <p className="control-row">
          <Input label="Postal Code" type="text" id="postal code" />
          <Input label="City" id="city" />
        </p>
        <p className="modal-actions">
          <Button textOnly onClick={handleClose}>
            Close
          </Button>
          <Button type="submit">Submit Order</Button>
        </p>
      </form>
    </Modal>
  );
}
