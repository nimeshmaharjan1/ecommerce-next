import { createContext, useReducer } from "react";
export const Store = createContext({});
const initialState = {
  cart: { cartItems: [] },
};

const reducer = (state, action) => {
  switch (action.type) {
    case "CART_ADD_ITEM": {
      const newItem = action.payload;
      const existingItem = state.cart.cartItems.find(
        (item) => item.slug === newItem.slug
      );
      const newCartItems = existingItem
        ? state.cart.cartItems.map((item) =>
            item.name === existingItem.name ? newItem : item
          )
        : [...state.cart.cartItems, newItem];
      return { ...state, cart: { ...state.cart, newCartItems } };
    }
    default:
      return state;
  }
};
export const StoreProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);
  const value = { state, dispatch };
  return <Store.Provider value={value}>{children}</Store.Provider>;
};
