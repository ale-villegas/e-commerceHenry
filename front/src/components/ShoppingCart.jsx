import React, { useState } from 'react';

import IconButton from '@mui/material/IconButton';
import Badge from '@mui/material/Badge';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCartOutlined';

//Popover
import Popover from '@mui/material/Popover';
import Typography from '@mui/material/Typography';

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
        <Typography sx={{ p: 2 }}>Contenido del carrito aquí</Typography>
      </Popover>
    </div>
  );
};

export default ShoppingCart;