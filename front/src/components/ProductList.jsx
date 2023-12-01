import React, { useEffect, useState } from "react";
// import { guitarras } from "../data/products.js";
import axios from "axios";

import ProductCard from "./ProductCard.jsx";

const ProductList = (props) => {
  const { productos, dispatch } = props;

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
    const { data } = await axios.get(
      `http://localhost:3001/guitarras/filtros?categorias=[${filtrosActivos}]`
    );

    dispatch({
      type: "GET_FILTER_GUITARRAS",
      payload: data.guitarras,
    });
  };

  return (
    <div>
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
          {productos !== undefined &&
            productos.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
        </ul>
      </div>
    </div>
  );
};

export default ProductList;
