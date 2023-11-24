import React from 'react';
import { Link } from 'react-router-dom';
import {guitarras} from '../data/products.js';
import './ProductList.css'

const ProductList = () => {
  return (
    <div>
      <h1>Lista de Productos</h1>
      <ul className="guitar-cards">
  {guitarras.map(product => (
    <li key={product.id} className="guitar-card">
      <Link to={`/product/${product.id}`}>
        <div className="card-content">
          <p className="product-name">{product.nombre}</p>
          <p className="product-description">{product.descrpicion}</p>
          <p className="product-price">${product.precio}</p>
          <p className="product-category">{product.categorias}</p>
          <img className="product-image" src={product.imagen} alt={product.nombre} />
        </div>
      </Link>
    </li>
  ))}
</ul>

    </div>
  );
};

export default ProductList;
