import { createContext, useReducer, useState } from "react";
import { getCartItemsFromLocalStorage } from "../utils/utils";

export const GlobalContext = createContext();

//Acciones para el reducer
export const ACTION_TYPES = {
  GET_ALL_PRODUCTS: "GET_ALL_PRODUCTS",
  GET_PRODUCT_BY_ID: "GET_PRODUCT_BY_ID",
  GET_FILTER_GUITARRAS: "GET_FILTER_GUITARRAS",
  ADD_TO_CART : "ADD_TO_CART",
  EMPTY_CART : "EMPTY_CART"
};


export const GlobalContextProvider = (props) => {
  const initialState = {
    allProducts: [],
    productById: {},
    cartItems:  getCartItemsFromLocalStorage() || [] ,
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
        
        const alredyExist = state.cartItems.find((item) => item.id === payload.id)
        if(alredyExist){
          const updateQuantity = {...alredyExist, quantity: alredyExist.quantity + 1} 
          localStorage.setItem('cartItems', JSON.stringify(state.cartItems.map((item) => item.id === payload.id ? updateQuantity : item )));
          return {...state, cartItems: state.cartItems.map((item) => item.id === payload.id ? updateQuantity : item )}
        }else{
          localStorage.setItem("cartItems", JSON.stringify([...state.cartItems, payload]))
          return { ...state, cartItems: [...state.cartItems, action.payload]};
        }
        case ACTION_TYPES.EMPTY_CART: {
          localStorage.removeItem("cartItems")
          return {...state, cartItems: []}
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
        dispatch
      }}
    >
      {props.children}
    </GlobalContext.Provider>
  );
};