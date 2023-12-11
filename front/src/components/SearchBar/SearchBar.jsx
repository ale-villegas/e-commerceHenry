import { useContext } from "react";

import { useState, useEffect, useRef } from "react";
import { GlobalContext, ACTION_TYPES } from "../../context/GlobalContext";
import { TextField } from "@mui/material";
const SearchBar = () => {
  const { dispatch, resultados } = useContext(GlobalContext);
  const [busqueda, setBusqueda] = useState("");
  const inputRef = useRef(null);

  useEffect(() => {
    // console.log(resultados);
    dispatch({
      type: ACTION_TYPES.GET_ALL_PRODUCTS,
      payload: resultados.filter(
        (guitarra) =>
          guitarra.nombre.toLowerCase().includes(busqueda.toLowerCase()) ||
          guitarra.descripcion.toLowerCase().includes(busqueda.toLowerCase())
      ),
    });
    
  }, [busqueda]);

  const handleChange = (event) => {
    setBusqueda(event.target.value);
  };
  return (
    
      
        <TextField
          onChange={handleChange}
          placeholder="Guitarra acústica, eléctrica, criolla...	"
          type="search"
          value={busqueda}
          ref={inputRef}
          id="outlined-basic"  variant="outlined" 
          InputProps={{
            style: { color: 'white' ,
                     border: "solid 1px white",
                    outline: "none" , 
                  height: "40px"} // Cambia 'blue' al color que desees
          }}
        />
    
    
  );
};

export default SearchBar;


