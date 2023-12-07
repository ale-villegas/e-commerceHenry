import React, { useState, useEffect } from 'react';

import IconButton from '@mui/material/IconButton';
import Badge from '@mui/material/Badge';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCartOutlined';

//Popover
import Popover from '@mui/material/Popover';
import Typography from '@mui/material/Typography';

//Cart content
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import Divider from '@mui/material/Divider';
import { GlobalContext } from '../context/GlobalContext';
import {getCartItemsFromLocalStorage} from "../utils/utils";

const ShoppingCart = ({ itemCount }) => {
  
  const [anchorEl, setAnchorEl] = useState(null);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const open = Boolean(anchorEl);
  const id = open ? 'simple-popover' : undefined;

  

  const calculateTotal = () => {
    const cartItems = getCartItemsFromLocalStorage();
    return cartItems.reduce((total, item) => total + item.price * item.quantity, 0);
  };

  useEffect(() => {
    // Realizar alguna acción si es necesario al abrir o cerrar el Popover
    console.log("Cart Items:", getCartItemsFromLocalStorage());
  }, [open]);
// !! Revisar que se vacie localStorage cuando se borran los estados
  return (
    <div>
      <IconButton aria-label="Carrito de compras" color="inherit" onClick={handleClick}>
        <Badge badgeContent={itemCount} color="error">
          <ShoppingCartIcon/>
        </Badge>
      </IconButton>
      <Popover id={id} open={open} anchorEl={anchorEl} onClose={handleClose}
              anchorOrigin={{vertical: 'bottom', horizontal: 'right',}}
              transformOrigin={{vertical: 'top', horizontal: 'right',}}>
        <List>
          {getCartItemsFromLocalStorage().length > 0 ? getCartItemsFromLocalStorage().map((item, index) => (
            <React.Fragment key={index}>
              <ListItem>
                <ListItemText primary={item.name}
                              secondary={`Cantidad: ${item.quantity}, Precio: ${item.price}`}/>
              </ListItem>
            </React.Fragment>)) : <p>No hay productos en el carrito</p>
          }
        </List>
        <Divider />
        <Typography sx={{ p: 2 }}>
          Monto Total: ${calculateTotal().toFixed(2)}
        </Typography>
      </Popover>
    </div>
  );
};

export default ShoppingCart;