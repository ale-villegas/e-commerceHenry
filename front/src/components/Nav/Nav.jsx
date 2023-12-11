import React, { useState, useContext } from "react";
import ShoppingCart from "../ShoppingCart.jsx";
import SearchBar from "../SearchBar/SearchBar";
import {
  AppBar,
  Toolbar,
  Typography,
  Container,
  IconButton,
  ThemeProvider,
} from "@mui/material";
import { Link } from "react-router-dom";
import { useAuth0 } from "@auth0/auth0-react";
import Profile from "../Profile.jsx";
import AccountMenu from "../AccountMenu.jsx"; // Importa el nuevo componente

import { GlobalContext } from "../../context/GlobalContext";
import { Box } from "@mui/system";

const Nav = ({ dispatch, resultados }) => {
  const [menuOpen, setMenuOpen] = useState(false); // Estado para controlar la apertura/cierre del menú
  const { isAuthenticated, isLoading, loginWithRedirect, logout } = useAuth0();
  const { state } = useContext(GlobalContext);

  //if (isLoading) return <h1>Loading...</h1>;

  // Función para cerrar el menú
  const handleClose = () => {
    setMenuOpen(false);
  };

  return (
    <AppBar position="static">
      <Toolbar sx={{
        width : "100%",
        display: "flex",
        alignContent: "space-between", 
        justifyContent: "space-around"
      }}>
        <IconButton
          component={Link}
          to="/home"
          sx={{
            fontSize: "16px",
            borderRadius: "5px"}}
            color="inherit"
     
        >
          Home
        </IconButton>
        <Box sx={{
          display: "flex", 
          gap: "35px"
        }}>
        <SearchBar />
     {isAuthenticated && <ShoppingCart /> }   
        {isAuthenticated ? (
            <React.Fragment>
              {/* <IconButton color="inherit" onClick={() => setMenuOpen(true)} variant="contained">
                Open Menu
              </IconButton> */}
              

              <AccountMenu handleClose={handleClose} logout={logout} open={menuOpen} profileComponent={<Profile/>}/>
            </React.Fragment>
          ) : (
            <IconButton sx={{
              fontSize: "16px",
              borderRadius: "5px"
            }} color="inherit" onClick={() => loginWithRedirect()} variant="contained">
              Log In
            </IconButton>
          )}
        </Box> 
      </Toolbar>
    </AppBar>
  );
};

export default Nav;
