import React, { useContext, useEffect } from "react";
import { useParams } from "react-router-dom";

import { Box, Button, Container, Divider, Typography } from "@mui/material";



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
  
      <Box
        sx={{
          display: "flex",
          gap: "40px",
          justifyContent: "space-between",
          marginTop: "100px" ,
          p: "30px",
          border: "1px solid ",
          borderRadius: "5px",
     
          flexDirection: { xs: "column", md: "row" },
          marginBottom: "50px"
        
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
          <Typography fontSize={30}>{state.productById.nombre}</Typography>
          <Divider/>
          <img
            height="450px"
            src={state.productById.image}
            style={{ margin: "auto", 
          borderRadius: "10px" }}
          />
        </Box>
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-around",
            gap: "15px"
          }}
        >
          <Typography>
   
           
          <b>  {state.productById.descripcion} </b>


            <br/>
            <br/>

            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. 
          </Typography>
          
          <Typography sx={{
            textAlign : "left",
            fontSize: "20px"
          }}><b> $ {state.productById.precio}</b></Typography>
          <Button variant="contained" onClick={addToCart} sx={{
            width: "50%",
          }}>
            Agregar al carrito
          </Button>
        </Box>
      </Box>
  
  );
};

export default ProductDetail;
