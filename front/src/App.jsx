import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import ProductList from './components/ProductList';
import ProductDetail from './components/ProductDetail';
import Nav from "./components/Nav/Nav";

const App = () => {
  return (
    <>
    <Router>
    <Nav  />
   
      <Routes>
        <Route exact path="/" element={<ProductList/>} />
        <Route exact path="/home" element={<ProductList/>} />
        <Route exact path="/about" element={<ProductList/>} />
        {/* <Route path="/product/:productId" element={<ProductDetail/>} /> */}
      </Routes>
      
    </Router>
    </>
  );
};

export default App;
