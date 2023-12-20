import { useState, useEffect, useRef, useContext } from "react";
import { GlobalContext, ACTION_TYPES } from "../context/GlobalContext";
import { TextField } from "@mui/material";
import getGuitarras from "../utils/getGuittaras";

const SearchBar = () => {
  const { dispatch, state } = useContext(GlobalContext);
  const [busqueda, setBusqueda] = useState("");
  const inputRef = useRef(null);

  useEffect(() => {
if(busqueda === "") {
  getGuitarras().then((data) => {
    dispatch({
      type: ACTION_TYPES.GET_ALL_PRODUCTS,
      payload:data
    })
  })
}
    dispatch({
      type: ACTION_TYPES.GET_ALL_PRODUCTS,
      payload: state.allProducts.filter(
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
                  height: "40px"} //
          }}
        />
    
    
  );
};

export default SearchBar;


