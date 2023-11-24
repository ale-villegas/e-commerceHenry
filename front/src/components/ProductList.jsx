import React from 'react';
import { Link } from 'react-router-dom';
import {guitarras} from '../data/products.js';

const ProductList = () => {
  return (
    <div>
      <h1>Lista de Productos</h1>
      <ul>
        {guitarras.map(product => (
          <li key={product.id}>
            <Link to={`/product/${product.id}`}>
              <p>{product.nombre}</p>
              <p>{product.descrpicion}</p>
              <p>${product.precio}</p>
              <p>{product.categorias}</p>
              <img src={product.imagen}/>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ProductList;
