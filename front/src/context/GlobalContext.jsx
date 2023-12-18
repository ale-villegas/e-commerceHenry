import { createContext, useReducer } from "react";
import { getCartItemsFromLocalStorage } from "../utils/utils";
import { useAuth0 } from "@auth0/auth0-react";

export const GlobalContext = createContext();

//Acciones para el reducer
export const ACTION_TYPES = {
  GET_ALL_PRODUCTS: "GET_ALL_PRODUCTS",
  GET_PRODUCT_BY_ID: "GET_PRODUCT_BY_ID",
  GET_FILTER_GUITARRAS: "GET_FILTER_GUITARRAS",
  ADD_TO_CART: "ADD_TO_CART",
  EMPTY_CART: "EMPTY_CART",
  SET_LOCAL_STORAGE : "SET_LOCAL_STORAGE"
};

export const GlobalContextProvider = (props) => {
  const { isAuthenticated, isLoading, loginWithRedirect, logout, user } = useAuth0();


  const initialState = {
    allProducts: [],
    productById: {},
    cartItems: []
  };
  const reducer = (state, action) => {
    const { payload, type } = action;
    switch (type) {
      case ACTION_TYPES.GET_ALL_PRODUCTS:
        return { ...state, allProducts: payload };

      case ACTION_TYPES.GET_PRODUCT_BY_ID:
        return { ...state, productById: payload };

      case ACTION_TYPES.GET_FILTER_GUITARRAS:
        return { ...state, allProducts: payload };

      case ACTION_TYPES.ADD_TO_CART:
        const alredyExist = state.cartItems.find(
          (item) => item.id === payload.id
        );
        if (alredyExist) {
          const updateQuantity = {
            ...alredyExist,
            quantity: alredyExist.quantity + 1,
          };
          localStorage.setItem(
            isAuthenticated && user.email,
            JSON.stringify(
              state.cartItems.map((item) =>
                item.id === payload.id ? updateQuantity : item
              )
            )
          );
          return {
            ...state,
            cartItems: state.cartItems.map((item) =>
              item.id === payload.id ? updateQuantity : item
            ),
          };
        } else {
          localStorage.setItem(
            isAuthenticated && user.email,
            JSON.stringify([...state.cartItems, payload])
          );
          return { ...state, cartItems: [...state.cartItems, action.payload] };
        }
      case ACTION_TYPES.EMPTY_CART: {
        localStorage.removeItem(isAuthenticated && user.email);
        return { ...state, cartItems: [] };
      }

      case ACTION_TYPES.SET_LOCAL_STORAGE: {
        const storedCartItems = localStorage.getItem(isAuthenticated && user.email);
        const parseItems = JSON.parse(storedCartItems) || [];
        return {...state, cartItems : parseItems}
      }

      default:
        return state;
    }
  };

  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <GlobalContext.Provider
      value={{
        state,
        dispatch,
        isAuthenticated, isLoading, loginWithRedirect, logout, user
      }}
    >
      {props.children}
    </GlobalContext.Provider>
  );
};
