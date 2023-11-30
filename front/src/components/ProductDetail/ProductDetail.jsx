import React from 'react'
import { useParams } from "react-router-dom";

import { Button } from "@mui/material";
import useFetch from "../../hooks/useFetch";
import getProductById from "../../utils/getProductById";
import "../ProductDetail/ProductDetail.css"


const ProductDetail = () => {
  const { productId } = useParams();

  const {
    isLoading,
    errors,
    data: product,
  } = useFetch(getProductById, productId); 
console.log(product)

  return (
    <>
         <div className="box-product">
      {isLoading ? (
    
        <h1>Cargando ...</h1>
      ) : product ? (
       <>
   

          <div>
            <h1>{product.nombre}</h1>
            <img src={product.image}/>
           { console.log("Ruta de la imagen:", product.image)}
          </div>
          <div>
            <p>{product.descripcion}</p>
            <p>Precio : $ {product.precio}</p>
            <Button variant="contained">Agregar al carrito</Button>
          </div>
          </>
      ) : (
        <p>{errors}</p>
      )}
       </div>
    </>
  );
};

export default ProductDetail;
