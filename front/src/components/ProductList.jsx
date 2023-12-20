import { useContext, useEffect, useMemo, useState } from "react";
import ProductCard from "./ProductCard.jsx";
import { ACTION_TYPES, GlobalContext } from "../context/GlobalContext.jsx";
import getGuitarras from "../utils/getGuittaras.js";
import getGuitarrasByFilter from "../utils/getGuitarrasByFilter.js";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Divider from "@mui/material/Divider";

import {
  Alert,
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  Snackbar,
  Typography,
} from "@mui/material";
import { useLocation, useParams } from "react-router-dom";

const ProductList = () => {
  const { state, dispatch, user } = useContext(GlobalContext);
  const [open, setOpen] = useState(false);
  const { search } = useLocation();
  const queryParams = new URLSearchParams(search);

  const collectionId = queryParams.get('collection_id');
  const collectionStatus = queryParams.get('collection_status'); 


  const [filter, setFilter] = useState(0);

  const handleChange = (event) => {
    setFilter(event.target.value);
  };

  const Ordenarasc = () => {
    const productoscopia = state.allProducts;
    productoscopia.sort((a, b) => {
      return a.precio - b.precio;
    });

    dispatch({
      type: "GET_FILTER_GUITARRAS",
      payload: productoscopia,
    });
  };

  const Ordenardes = () => {
    const productoscopia = state.allProducts;
    productoscopia.sort((a, b) => {
      return b.precio - a.precio;
    });

    dispatch({
      type: "GET_FILTER_GUITARRAS",
      payload: productoscopia,
    });
  };

  const fetchData = useMemo(
    () => async () => {
      let response;
      if (filter === 0) {
        response = await getGuitarras();
      } else {
        response = await getGuitarrasByFilter(filter);
      }

      dispatch({
        type:
          filter === 0
            ? ACTION_TYPES.GET_ALL_PRODUCTS
            : ACTION_TYPES.GET_FILTER_GUITARRAS,
        payload: response,
      });
    },
    [filter, dispatch] 

  ); 

  const handleClose = (event, reason) => {
    if (reason === 'clickaway') {
      return;
    }

    setOpen(false);
  };


  useEffect(() => {
    fetchData();
  }, [filter]);



  useEffect(() => {

    if(collectionStatus){
      dispatch({
        type: ACTION_TYPES.EMPTY_CART
      }) 
      setOpen(true)
    }else{
      dispatch({
        type: ACTION_TYPES.SET_LOCAL_STORAGE,
      });
    }
   
  }, [user]);



  return (
    <Box
      sx={{
        marginTop: "80px",
        display: "flex",
        flexDirection: "column",
        gap: "10px",
      }}
    >
      <Typography
        sx={{
          fontSize: "30px",
        }}
      >
        Catalogo de guitarras
      </Typography>

      <Divider />
      <Typography>Filtros</Typography>

      <Box
        sx={{
          border: "solid 1px",
          padding: "15px",
          borderRadius: "5px",
          display: "flex",
          justifyContent: "space-between",
        }}
      >
        <FormControl
          sx={{
            width: "25%",
          }}
        >
          <InputLabel id="filter-by-type">Tipo de guitarra</InputLabel>
          <Select
            labelId="filter-by-type"
            id="filter-by-type"
            value={filter}
            label="Tipo de guitarra"
            onChange={handleChange}
          >
            <MenuItem value={0}>Todas</MenuItem>
            <MenuItem value={1}>Electricas</MenuItem>
            <MenuItem value={2}>Acusticas</MenuItem>
            <MenuItem value={3}>Criollas</MenuItem>
          </Select>
        </FormControl>

        <Box sx={{
          display:"flex",
          gap: "5px",
          alignItems:"center"
        }}>
          <Typography>Ordenar por precio</Typography>

          <Button onClick={Ordenarasc} variant="outlined" size="small">
            Menor precio
          </Button>
          <Button onClick={Ordenardes} variant="outlined" size="small">
            Mayor precio
          </Button>
        </Box>
      </Box>
      <Box
        sx={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fill, minmax(345px, 1fr))",
          gap: "20px",
          marginTop: "35px",
          marginBottom: "50px",
          minHeight: "100vh"
        }}
      >
        {state.allProducts.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </Box> 

      
  <Snackbar open={open} autoHideDuration={6000} onClose={handleClose}>
  <Alert onClose={handleClose} severity="success" sx={{ width: '100%' }}>
Tu compra fue exitosa.
  </Alert>
</Snackbar>
    </Box>
  );
};

export default ProductList;
