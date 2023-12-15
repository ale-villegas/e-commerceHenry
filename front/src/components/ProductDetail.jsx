import React, { useContext, useEffect } from "react";
import { useParams } from "react-router-dom";

import { Box, Button, Container, Typography } from "@mui/material";



import { ACTION_TYPES, GlobalContext } from "../context/GlobalContext";
import getProductById from "../utils/getProductById";

const ProductDetail = () => {
  const { productId } = useParams();

  const { state, dispatch } = useContext(GlobalContext);

  useEffect(() => {
    getProductById(productId).then((data) => {
      dispatch({
        type: ACTION_TYPES.GET_PRODUCT_BY_ID,
        payload: data,
      });
      console.log(data);
    });
  }, []);

  //Agregar al carrito de compras
  const addToCart = () => {
    // Enviar la acción para agregar el producto al carrito
    const item = {
      id: state.productById.id,
      nombre: state.productById.nombre,
      precio: state.productById.precio,
      descripcion: state.productById.descripcion,
      quantity: 1,
    };

    dispatch({
      type: ACTION_TYPES.ADD_TO_CART,
      payload: item,
    });
  };

  return (
    <Container>
      <Box
        sx={{
          display: "flex",
          gap: "20px",
          justifyContent: "space-between",
          p: "30px",
          border: "1px solid ",
          borderRadius: "5px",
          margin: "15px",
          flexDirection: { xs: "column", md: "row" },
          textAlign: "center",
        }}
      >
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-between",
            gap: "20px",
          }}
        >
          <Typography variant="h3">{state.productById.nombre}</Typography>
          <img
            width="200px"
            src={state.productById.image}
            style={{ margin: "auto" }}
          />
        </Box>
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-around",
          }}
        >
          <Typography>
            <b>Descripcion:</b> <br />
            {state.productById.descripcion}
          </Typography>
          <Typography>Precio : $ {state.productById.precio}</Typography>
          <Button variant="contained" onClick={addToCart}>
            Agregar al carrito
          </Button>
        </Box>
      </Box>
    </Container>
  );
};

export default ProductDetail;
