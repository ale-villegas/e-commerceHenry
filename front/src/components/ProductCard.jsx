
/* eslint-disable react/prop-types */
import React from 'react'
import { Link } from 'react-router-dom';
//import './ProductCard.css'
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';




const ProductCard = (props) => {
  const { product } = props;

  return (
    <li key={product.id} className="guitar-card">

     
<Card sx={{ maxWidth: 345 }}>
      <CardMedia
        component="img"
        alt={product.nombre}
        height="400"
        image={product.image}
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
        {product.nombre}
        </Typography>
        <Typography variant="body2" color="text.secondary">
        {product.descripcion}
        </Typography>
      </CardContent>
      <CardActions>
        
      <Link to={`/${product.id}`}> <Button size="small">Learn More</Button></Link> 
      <Typography variant="h7" color="text.primary">
         Precio: ${product.precio}
        </Typography>
      </CardActions>
    </Card>
        

    </li>
  );
};

export default ProductCard;

/*  <div className="card-content">
<Link to={`/${product.id}`}>  <p className="product-name">{product.nombre}</p></Link>     
  <p className="product-description">{product.descripcion}</p>
  <p className="product-price">Precio: ${product.precio}</p>
  <p className="product-category">Categoría: {product.categorias}</p>
  <img className="product-image" src={product.image} alt={product.nombre} />
</div>*/