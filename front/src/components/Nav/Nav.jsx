import React, { useState, useContext } from 'react';
import ShoppingCart from './ShoppingCart.jsx';
import SearchBar from '../SearchBar/SearchBar';
import { AppBar, Toolbar, Typography, Container, IconButton, ThemeProvider } from '@mui/material';
import { Link } from 'react-router-dom';
import { useAuth0 } from '@auth0/auth0-react';
import Profile from '../Profile.jsx';
import AccountMenu from '../AccountMenu.jsx'; // Importa el nuevo componente
import style from './Nav.module.css';
import { GlobalContext } from '../../context/GlobalContext';

const Nav = ({ dispatch, resultados}) => {
  const [menuOpen, setMenuOpen] = useState(false); // Estado para controlar la apertura/cierre del menú
  const { isAuthenticated, isLoading, loginWithRedirect, logout} = useAuth0();
  const { state } = useContext(GlobalContext);

  if (isLoading) return <h1>Loading...</h1>;

  // Función para cerrar el menú
  const handleClose = () => {
    setMenuOpen(false);
  };



  return (
    <AppBar position="static">
      <Container>
        <Toolbar>
          <Typography variant="h8" component={Link} to="/home" sx={{ flexGrow: 1, textDecoration: 'none', color: 'inherit' }}>
            Home
          </Typography>
          <Typography variant="h8" component={Link} to="/about" sx={{ textDecoration: 'none', color: 'inherit' }}>
            About
          </Typography>
          <ShoppingCart />
          <SearchBar onSearch={() => console.log('OnSearchBar')} />

          {/* Renderiza el componente de acuerdo al estado de autenticación */}
          {isAuthenticated ? (
            <React.Fragment>
              {/* <IconButton color="inherit" onClick={() => setMenuOpen(true)} variant="contained">
                Open Menu
              </IconButton> */}
              

              <AccountMenu handleClose={handleClose} logout={logout} open={menuOpen} profileComponent={<Profile/>}/>
            </React.Fragment>
          ) : (
            <IconButton color="inherit" onClick={() => loginWithRedirect()} variant="contained">
              Log In
            </IconButton>
          )}

            
          
        </Toolbar>
      </Container>
    </AppBar>
  );
};

export default Nav;