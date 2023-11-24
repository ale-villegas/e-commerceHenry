import React from 'react';
import { useParams } from 'react-router-dom';
import {guitarras} from '../data/products.js';

const ProductDetail = () => {
  const { productId } = useParams();
  const product = guitarras.find(p => p.id === parseInt(productId, 10));

  return (
    <div>
      <h1>{product.name}</h1>
      <p>{product.description}</p>
      <p>Precio: ${product.price}</p>
    </div>
  );
};

export default ProductDetail;
