import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import ProductList from './components/ProductList';
import Nav from './components/Nav/Nav';
import ProductDetail from './components/ProductDetail/ProductDetail';
import { Container } from '@mui/material';
import Profile from './components/Profile';

const App = () => {
  

  return (
    <>
      <Router>
        <Nav />
        {/* { isAuthenticated ? <LogoutButton /> : <LoginButton /> } */}
        {/* <Profile />  */}
        {/* Colocado después del condicional */}
        <Container>
          <Routes>
            <Route exact path="/" element={<ProductList />} />
            <Route exact path="/home" element={<ProductList />} />
            <Route exact path="/about" element={<ProductList />} />
            <Route path="/:productId" element={<ProductDetail />} />
          </Routes>
        </Container>
      </Router>
    </>
  );
};

export default App;


