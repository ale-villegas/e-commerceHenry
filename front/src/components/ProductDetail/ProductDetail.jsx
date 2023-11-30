import React, { useContext, useEffect } from "react";
import { useParams } from "react-router-dom";

import { Button } from "@mui/material";

import getProductById from "../../utils/getProductById";
import "../ProductDetail/ProductDetail.css";
import { ACTION_TYPES, GlobalContext } from "../../context/GlobalContext";

const ProductDetail = () => {
  const { productId } = useParams();

  const { state, dispatch } = useContext(GlobalContext);

  useEffect(() => {
    getProductById(productId).then((data) => {
      dispatch({
        type: ACTION_TYPES.GET_PRODUCT_BY_ID,
        payload: data,
      });
    });
  }, []);
  return (
    <>
      <div className="box-product">
        <>
          <div>
            <h1>{state.productById.nombre}</h1>
            <img src={state.productById.image} />
          </div>
          <div>
            <p>{state.productById.descripcion}</p>
            <p>Precio : $ {state.productById.precio}</p>
            <Button variant="contained">Agregar al carrito</Button>
          </div>
        </>
      </div>
    </>
  );
};

export default ProductDetail;
