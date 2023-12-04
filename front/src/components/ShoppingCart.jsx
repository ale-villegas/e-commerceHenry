import React from 'react';
import IconButton from '@mui/material/IconButton';
import Badge from '@mui/material/Badge';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCartOutlined';

const ShoppingCart = ({ itemCount }) => {
  return (
    <IconButton aria-label="Carrito de compras" color="inherit">
      <Badge badgeContent={itemCount} color="error">
        <ShoppingCartIcon />
      </Badge>
    </IconButton>
  );
};

export default ShoppingCart;