import React, { useState, useContext } from "react";
import ShoppingCart from "./ShoppingCart.jsx";
import DarkModeIcon from '@mui/icons-material/DarkMode';
import LightModeIcon from '@mui/icons-material/LightMode';
import {
  AppBar,
  Toolbar,
 IconButton,
 CircularProgress,

} from "@mui/material";
import { Link } from "react-router-dom";

import Profile from "./Profile.jsx";
import AccountMenu from "./AccountMenu.jsx"; // Importa el nuevo componente

import { GlobalContext } from "../context/GlobalContext.jsx";
import { Box } from "@mui/system";
import SearchBar from "./SearchBar.jsx";

const Nav = ({themeOption, handleChangeTheme}) => {
  const [menuOpen, setMenuOpen] = useState(false); // Estado para controlar la apertura/cierre del menú


 const {isAuthenticated, isLoading, loginWithRedirect, logout, user} = useContext(GlobalContext)

  

  // Función para cerrar el menú
  const handleClose = () => {
    setMenuOpen(false);
  };

  return (
    <AppBar position="fixed">
      <Toolbar sx={{
        width : "100%",
        display: "flex",
        alignContent: "space-between", 
        justifyContent: "space-between"
      }}>
        <Box>
         <IconButton
          component={Link}
          to="/"
          sx={{
            fontSize: "16px",
            borderRadius: "5px"}}
            color="inherit"
     
        >
          Home
        </IconButton>
        <IconButton
          component={Link}
          to="/home"
          sx={{
            fontSize: "16px",
            borderRadius: "5px"}}
            color="inherit"
     
        >
          Catalogo
        </IconButton>
        </Box>
        <Box sx={{
          display: "flex", 
          gap: "35px"
        }}>
        <SearchBar />


        {isLoading ?
         <CircularProgress color="inherit" sx={{marginTop : "10px"}} size={20} thickness={4} /> : 
         !isLoading && isAuthenticated ? 
         <>
         <ShoppingCart />   
         <AccountMenu handleClose={handleClose} logout={logout} open={menuOpen} profileComponent={<Profile/>} imagenDeUsuario={user.picture}/> 
         </>
          : 
         <IconButton sx={{
          fontSize: "16px",
          borderRadius: "5px"
        }} color="inherit" onClick={() => loginWithRedirect()} variant="contained">
          Log In
        </IconButton>
         }
            
           
        
          
          


          {
            themeOption ? 
            <DarkModeIcon sx={{
              marginTop: "10px", 
              cursor: "pointer"
            }} onClick={handleChangeTheme} /> : 
             <LightModeIcon onClick={handleChangeTheme} sx={{
              marginTop: "10px", 
              cursor: "pointer"
            }}/>
          }


        </Box> 
      </Toolbar>
    </AppBar>
  );
};

export default Nav;
