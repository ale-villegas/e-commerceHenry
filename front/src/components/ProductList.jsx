import { useContext, useEffect} from "react";

import "./ProductCard.css";

import ProductCard from "./ProductCard.jsx";
import { ACTION_TYPES, GlobalContext } from "../context/GlobalContext.jsx";
import getGuitarras from "../utils/getGuittaras.js";

const ProductList = () => {
  const { state, dispatch } = useContext(GlobalContext);

  useEffect(() => {
    getGuitarras().then((data) => {
      dispatch({
        type: ACTION_TYPES.GET_ALL_PRODUCTS,
        payload: data,
      });
    });
  }, []);

  return (
    <div>
      <h1>Lista de Productos</h1>
      <ul className="guitar-cards">
        {state.allProducts.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </ul>
    </div>
  );
};

export default ProductList;
