import React from 'react';
import ShoppingCart from './ShoppingCart.jsx';
import LoginButton from '../LogingButton';  
import LogoutButton from '../LogoutButton'; 
import { AppBar, Toolbar, Typography, Container } from '@mui/material';

import SearchBar from '../SearchBar/SearchBar';
import {Link} from 'react-router-dom';
//import style from '../Nav/Nav.module.css';


import { useAuth0 } from '@auth0/auth0-react';



const Nav = () => {

    const itemCount = 1; //Enlazar cantidades
    const { isAuthenticated } = useAuth0();
    
    return (
      <AppBar position="static">
        <Container>
          <Toolbar >
            <Typography  variant="h8" component={Link} to="/home" sx={{ flexGrow: 1, textDecoration: 'none', color: 'inherit' }}>
              Home
            </Typography>
            <Typography variant="h8" component={Link} to="/about" sx={{ textDecoration: 'none', color: 'inherit' }}>
              About
            </Typography>
            <ShoppingCart itemCount={itemCount} />
            <SearchBar onSearch={() => console.log('OnSearchBar')} />
  
            {/* Renderiza el componente de acuerdo al estado de autenticación */}
            {isAuthenticated ? <LogoutButton /> : <LoginButton />}
          </Toolbar>
        </Container>
      </AppBar>
    );
};

export default Nav