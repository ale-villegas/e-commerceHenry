import { useContext, useEffect, useState } from "react";



import ProductCard from "./ProductCard.jsx";
import { ACTION_TYPES, GlobalContext } from "../context/GlobalContext.jsx";
import getGuitarras from "../utils/getGuittaras.js";
import getGuitarrasByFilter from "../utils/getGuitarrasByFilter.js"
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import FormGroup from '@mui/material/FormGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import Divider from '@mui/material/Divider';
import Paper from '@mui/material/Paper';
import Stack from '@mui/material/Stack';
import { styled } from '@mui/material/styles';



const ProductList = () => {
  const { state, dispatch, user } = useContext(GlobalContext);
  const [ordenar, setordenar] =useState(getGuitarras)
  
  const [filtros, setFiltros] = useState({
    1: true,
    2: true,
    3: true,
  });

  const handleCheckboxChange = (event) => {
    const { name, checked } = event.target;
    setFiltros((prevFiltros) => ({ ...prevFiltros, [name]: checked }));
  };

  const handleFiltrarClick = async () => {
    const filtrosActivos = Object.keys(filtros).filter(
      (filtro) => filtros[filtro]
    );
    getGuitarrasByFilter(filtrosActivos).then((response)=>{
      dispatch({
        type: "GET_FILTER_GUITARRAS",
        payload: response,
      });
      setResultados(response); 
    })    

  };  


  const Ordenarasc = () =>{

    const productoscopia = state.allProducts
    productoscopia.sort((a, b) => {
      return a.precio - b.precio
     })

     dispatch({
      type: "GET_FILTER_GUITARRAS",
      payload: productoscopia,
    });

     setResultados(productoscopia) 
 
   }

  const Ordenardes = () => {

    const productoscopia = state.allProducts
    productoscopia.sort((a, b) => {
      return b.precio - a.precio
     })

     dispatch({
      type: "GET_FILTER_GUITARRAS",
      payload: productoscopia,
    });

     setResultados(productoscopia)
 
  } 

  
  


  useEffect(() => {
    getGuitarras().then((data) => {
      dispatch({
        type: ACTION_TYPES.GET_ALL_PRODUCTS,
        payload: data,
      });
      setResultados(data);
    });
dispatch({
  type: ACTION_TYPES.SET_LOCAL_STORAGE,

})

  }, [user]);

  return (
    <div>
      <h1>Lista de Productos</h1>
      <div className="catalogo-filtros">
          {/* Filtros */}
          <fieldset>
            <legend>Categorías</legend>
            <Stack
             direction="row"
             divider={<Divider orientation="vertical" flexItem />}
             spacing={2}
            >


              <div>
                <ul>
              <li>
              <FormControlLabel
                type="checkbox"
                name="1"
                checked={filtros["1"]}
                onChange={handleCheckboxChange}
                control={<Checkbox checked />} label="Eléctricas" />
              </li>
              <li>
              <FormControlLabel
               type="checkbox"
               name="2"
               checked={filtros["2"]}
               onChange={handleCheckboxChange}
               control={<Checkbox checked />} label="Acústicas" />
              </li>
              <li>
              <FormControlLabel
               type="checkbox"
               name="3"
               checked={filtros["3"]}
               onChange={handleCheckboxChange}
               control={<Checkbox checked />} label="Criollas" />
              </li>
            </ul>
            <Box sx={{ '& button': { m: 1 } }}>
            <Button onClick={handleFiltrarClick} variant="outlined" size="small">Filtrar</Button>
            </Box>
            </div>


            <div>
            <h3>Ordenar por precio</h3>
            <Box sx={{ '& button': { m: 1 } }}>
            <Button onClick={Ordenarasc} variant="outlined" size="small">Ascendente</Button>
            <Button onClick={Ordenardes} variant="outlined" size="small">Descendente</Button>
            </Box>
            </div>


            </Stack>
            
            
           
           
          </fieldset>
        </div>
      <Box sx={{
        display: "grid",
        gridTemplateColumns: 'repeat(auto-fill, minmax(345px, 1fr))',
        gap: "20px",
        marginTop: "35px"
      }}>
        {state.allProducts.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </Box>
    </div>
  );
};

export default ProductList;