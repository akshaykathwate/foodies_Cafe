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
      const updatedItem = {
        ...existingItem,
        quantity: existingItem.quantity + 1,
      };
    } else {
      updatedItems.push({ ...action.items, quantity: 1 });
    }
    return { ...state, items: updatedItems };
  }

  if (action.type === "REMOVE_ITEM") {
    
  }
}

function CartContextProvider({ children }) {
  useReducer(CartReducer, { items: [] });

  return <CartContext.Provider></CartContext.Provider>;
}
