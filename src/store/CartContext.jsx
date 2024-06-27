import { createContext, useReducer } from "react";

const CartContext = createContext({
  items: [],
  addItem: (item) => {},
  removeItem: (id) => {},
});

function CartReducer(state, action) {
  if (action.type === "ADD_ITEM") {
    const existedItemIndex = state.items.find(
      (item) => item.id === action.item.id
    );

    const updatedItems = [...state.items];

    if (existingItem > -1) {
      const existingItem = state.items[existedItemIndex];
      const updatedItems = {
        ...existingItem,
        quantity: existingItem.quantity + 1,
      };
    } else {
      updatedItems.push({ ...action.items, quantity: 1 });
    }
    return { ...state, items: updatedItems };
  }

  if (action.type === "REMOVE_ITEM") {
    const existedCartItemIndex = state.items.findIndex(
      (item) => item.id === action.item.id
    );

    const existedCartItem = state.items[existedCartItemIndex];

    if (existedCartItem.quantity === 1) {
      const updatedItems = [...state.items];
      updatedItems.splice(existedCartItemIndex, 1);
    } else {
      const updatedItem = {
        ...existedCartItem,
        quantity: existedCartItem.quantity - 1,
      };
      updatedItems[existedCartItemIndex] = updatedItem;
    }
    return { ...state, items: updatedItems };
  }
}
 function CartContextProvider({ children }) {
  const [cart, dispatchCartAction] = useReducer(CartReducer, { items: [] });

  function addItems(items) {
    dispatchCartAction({ type: "ADD_ITEM", id });
  }

  function removeItems(id) {
    dispatchCartAction({ type: "REMOVE_ITEM", id });
  }

  const CartContext = {
    items: cart.items,
    addItems,
    removeItems,
  };

  return (
    <CartContext.Provider value={CartContext}>{children}</CartContext.Provider>
  );
}

export default CartContextProvider;
