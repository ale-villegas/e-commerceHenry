import { useContext, useEffect, useState } from "react";

import "./ProductCard.css";

import ProductCard from "./ProductCard.jsx";
import { ACTION_TYPES, GlobalContext } from "../context/GlobalContext.jsx";
import getGuitarras from "../utils/getGuittaras.js";
import getGuitarrasByFilter from "../utils/getGuitarrasByFilter.js"


const ProductList = () => {
  const { state, dispatch, setResultados } = useContext(GlobalContext);
  
  const [filtros, setFiltros] = useState({
    1: true,
    2: true,
    3: true,
  });

  const handleCheckboxChange = (event) => {
    const { name, checked } = event.target;
    setFiltros((prevFiltros) => ({ ...prevFiltros, [name]: checked }));
  };

  const handleFiltrarClick = async () => {
    const filtrosActivos = Object.keys(filtros).filter(
      (filtro) => filtros[filtro]
    );
    getGuitarrasByFilter(filtrosActivos).then((response)=>{
      dispatch({
        type: "GET_FILTER_GUITARRAS",
        payload: response,
      });
      setResultados(response);
    })    

  };  

  useEffect(() => {
    getGuitarras().then((data) => {
      dispatch({
        type: ACTION_TYPES.GET_ALL_PRODUCTS,
        payload: data,
      });
      setResultados(data);
    });
  }, []);

  return (
    <div>
      <h1>Lista de Productos</h1>
      <div className="catalogo-filtros">
          {/* Filtros */}
          <fieldset>
            <legend>Categorías</legend>
            <ul>
              <li>
                <input
                  type="checkbox"
                  name="1"
                  checked={filtros["1"]}
                  onChange={handleCheckboxChange}
                />
                <label>Eléctricas</label>
              </li>
              <li>
                <input
                  type="checkbox"
                  name="2"
                  checked={filtros["2"]}
                  onChange={handleCheckboxChange}
                />
                <label>Acústicas</label>
              </li>
              <li>
                <input
                  type="checkbox"
                  name="3"
                  checked={filtros["3"]}
                  onChange={handleCheckboxChange}
                />
                <label>Criollas</label>
              </li>
            </ul>
            <button onClick={handleFiltrarClick}>Filtrar</button>
          </fieldset>
        </div>
      <ul className="guitar-cards">
        {state.allProducts.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </ul>
    </div>
  );
};

export default ProductList;