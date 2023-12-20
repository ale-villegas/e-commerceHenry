
/* eslint-disable react/prop-types */
import React, { useContext, useState } from 'react'
import { Link } from 'react-router-dom';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { Alert, Divider, Paper, Snackbar } from '@mui/material';
import { ACTION_TYPES, GlobalContext } from '../context/GlobalContext';




const ProductCard = ({product}) => {

const {dispatch} = useContext(GlobalContext)
const [open, setOpen] = useState(false);
 const handleClick = (product) => {

  dispatch({
    type: ACTION_TYPES.ADD_TO_CART,
    payload: product
    
  })

  setOpen(true)
}

  const handleClose = (event, reason) => {
    if (reason === 'clickaway') {
      return;
    }

    setOpen(false);
  };





 return (
<>
  <Paper elevation={1}> 
<Card sx={{ 
  
  }}>
      <CardMedia
        component="img"
        alt={product.nombre}
        height="400"
        image={product.image}
      />
      <CardContent sx={{
        display: "flex",
        flexDirection: "column",
       gap: "5px"
      }}>
        <Typography gutterBottom variant="subtitle1">
      <b>{product.nombre}</b> 
        </Typography>
        <Divider/>
        <Typography variant="body2" color="text.secondary">
        {product.descripcion} 
        </Typography>
        <Typography variant='body2'>
         Precio: <b>${product.precio}</b>
        </Typography>
       
      </CardContent>
      <Divider/>
      <CardActions sx={{
display: "flex",
justifyContent: "space-around"
      }}>
      
      <Link to={`/${product.id}`}> <Button size="small">Ver mas</Button></Link>  
      <Button size="small" variant='contained' onClick={() => handleClick(product)}>Agregar al carrito</Button>
  
      </CardActions>
    </Card>
    <Snackbar open={open} autoHideDuration={6000} onClose={handleClose}>
        <Alert onClose={handleClose} severity="success" sx={{ width: '100%' }}>
        Guitarra <b>{product.nombre}</b> agregada al carrito
        </Alert>
      </Snackbar>
    </Paper>  
 
    </>
  );
};

export default ProductCard;

