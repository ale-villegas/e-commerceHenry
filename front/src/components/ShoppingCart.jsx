import React, { useState, useEffect, useContext } from "react";

import IconButton from "@mui/material/IconButton";
import Badge from "@mui/material/Badge";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCartOutlined";

//Popover
import Popover from "@mui/material/Popover";
import Typography from "@mui/material/Typography";

//Cart content
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemText from "@mui/material/ListItemText";
import Divider from "@mui/material/Divider";
import { ACTION_TYPES, GlobalContext } from "../context/GlobalContext";
import { Box } from "@mui/system";
import { Button } from "@mui/material";
import axios from "axios";

const ShoppingCart = () => {
  const [anchorEl, setAnchorEl] = useState(null);
  const { state, dispatch } = useContext(GlobalContext);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const open = Boolean(anchorEl);
  const id = open ? "simple-popover" : undefined;

  const calculateTotal = () => {
    return state.cartItems.reduce(
      (total, item) => total + item.precio * item.quantity,
      0
    );
  }; 

  const emptyCart = () => {
dispatch({
  type: ACTION_TYPES.EMPTY_CART
})
  }


  const calculateBadge = () => {
    return state.cartItems.reduce(
      (total, item) => total +  item.quantity,
      0
    );
  }; 



 const Funcioncomprar = async () => {

  
    const response = await axios.post("http://localhost:4000/Mercado_Pago", state.cartItems
    )
    
    
    window.location.href = response.data

    console.log(response)

    

 }



  // !! Revisar que se vacie localStorage cuando se borran los estados
  return (
    <div>
      <IconButton
        aria-label="Carrito de compras"
        color="inherit"
        onClick={handleClick}
      >
        <Badge badgeContent={calculateBadge()} color="error">
          <ShoppingCartIcon />
        </Badge>
      </IconButton>
      <Popover
        id={id}
        open={open}
        anchorEl={anchorEl}
        onClose={handleClose}
        anchorOrigin={{ vertical: "bottom", horizontal: "right" }}
        transformOrigin={{ vertical: "top", horizontal: "right" }}
      >
        <List>
          {state.cartItems.length > 0 ? (
            state.cartItems.map((item, index) => (
              <React.Fragment key={index}>
                <ListItem>
                  <ListItemText
                    primary={item.nombre}
                    secondary={`Cantidad: ${item.quantity}, Precio: ${item.precio}`}
                  />
                </ListItem>
              </React.Fragment>
            ))
          ) : (
            <p>No hay productos en el carrito</p>
          )}
        </List>
        <Divider />
        <Typography sx={{ p: 2 }}>
          Monto Total: ${calculateTotal().toFixed(2)}
        </Typography>
        <Box>
          <Button onClick={emptyCart}>Vaciar carrito</Button>
          <Button onClick={Funcioncomprar}>Proceder a pagar</Button>
        </Box>
      </Popover>
    </div>
  );
};

export default ShoppingCart;
