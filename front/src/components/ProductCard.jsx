
/* eslint-disable react/prop-types */
import React from 'react'
import { Link } from 'react-router-dom';
import './ProductCard.css'


const ProductCard = (props) => {
  const { product } = props;

  return (
    <li key={product.id} className="guitar-card">

     
        <div className="card-content">
        <Link to={`/${product.id}`}>  <p className="product-name">{product.nombre}</p></Link>     
          <p className="product-description">{product.descripcion}</p>
          <p className="product-price">Precio: ${product.precio}</p>
          <p className="product-category">Categoría: {product.categorias}</p>
          <img className="product-image" src={product.image} alt={product.nombre} />
        </div> 
        

    </li>
  );
};

export default ProductCard;
