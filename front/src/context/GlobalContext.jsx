import { createContext, useReducer, useState } from "react";

export const GlobalContext = createContext();

//Acciones para el reducer
export const ACTION_TYPES = {
  GET_ALL_PRODUCTS: "GET_ALL_PRODUCTS",
  GET_PRODUCT_BY_ID: "GET_PRODUCT_BY_ID",
  GET_FILTER_GUITARRAS: "GET_FILTER_GUITARRAS"
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

      case ACTION_TYPES.GET_FILTER_GUITARRAS:
        return { ...state, allProducts: payload };

      default:
        return state;
    }
  };

  const [state, dispatch] = useReducer(reducer, initialState);
  const [resultados, setResultados] = useState(state.allProducts);

  return (
    <GlobalContext.Provider
      value={{
        state,
        dispatch,
        resultados,
        setResultados,
      }}
    >
      {props.children}
    </GlobalContext.Provider>
  );
};