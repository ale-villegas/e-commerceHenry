import React, {useEffect, useState} from 'react';
import {guitarras} from '../data/products.js';
import './ProductCard.css'
import axios from "axios"
import ProductCard from './ProductCard.jsx';

const initialState = guitarras;

const ProductList = () => {

  const [productos, setProductos] = useState([])

  const getGuitarras=()=>{
    axios.get(`http://localhost:3001/guitarras`).then(({data})=>{
      console.log(data)
      setProductos(data.guitarras)
    })
  }

useEffect(
  () => {
    getGuitarras();

  },[]
)


  return (
    <div>
      <h1>Lista de Productos</h1>
      <ul className="guitar-cards">
  {productos.map(product => (
    <ProductCard key = {product.id} product = {product}/>
  ))}
</ul>

    </div>
  );
};

export default ProductList;
