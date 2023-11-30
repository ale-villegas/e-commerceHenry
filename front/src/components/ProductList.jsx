import React, { useEffect, useState } from "react";
// import { guitarras } from "../data/products.js";

import ProductCard from "./ProductCard.jsx";

const ProductList = (props) => {
  const { productos, distpach } = props;

  // console.log(productos);

  return (
    <div >
      <div >
        <h1>Lista de Productos</h1>
        <div className="catalogo-filtros">
        {/* Filtros */}
        <fieldset>
          <legend>Categroias</legend>
          <ul>
            <li>
              <input type="checkbox" name="categoria" value="acustica" />
              <label>Acústicas</label>
            </li>
            <li>
              <input type="checkbox" name="categoria" value="electrica" />
              <label>Eléctricas</label>
            </li>
            <li>
              <input type="checkbox" name="categoria" value="criolla" />
              <label>Criollas</label>
            </li>
          </ul>
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
