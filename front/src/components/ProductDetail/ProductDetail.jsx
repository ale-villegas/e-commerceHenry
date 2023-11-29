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
    data: producto,
  } = useFetch(getProductById, productId); 

 
console.log(producto)
  return (
    <>
         <div className="box-product">
      {isLoading ? (
    
        <h1>Cargando ...</h1>
      ) : producto ? (
       <>
          <div>
            <h1>{producto.nombre}</h1>
            <img src={producto.image} alt={producto.descripcion} />
          </div>
          <div>
            <p>{producto.descripcion}</p>
            <p>Precio : $ {producto.precio}</p>
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
