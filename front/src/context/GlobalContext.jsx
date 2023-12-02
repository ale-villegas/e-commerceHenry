import { createContext, useReducer } from "react";

export const GlobalContext = createContext();

//Acciones para el reducer
export const ACTION_TYPES = {
  GET_ALL_PRODUCTS: "GET_ALL_PRODUCTS",
  GET_PRODUCT_BY_ID: "GET_PRODUCT_BY_ID",
};

export const GlobalContextProvider = (props) => {
  const initialState = {
    allProducts: [],
    productById: {},
  };
  const reducer = (state, action) => {
    const { payload, type } = action;
    switch (type) {
      case ACTION_TYPES.GET_ALL_PRODUCTS:
        return { ...state, allProducts: payload };

      case ACTION_TYPES.GET_PRODUCT_BY_ID:
        return { ...state, productById: payload };

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
      }}
    >
      {props.children}
    </GlobalContext.Provider>
  );
};
