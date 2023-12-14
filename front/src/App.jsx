import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import ProductList from "./components/ProductList";
import { Container } from "@mui/material";
import CompraExitosa from "./components/Compraexitosa";
import ProductDetail from "./components/ProductDetail";
import Nav from "./components/Nav";

const App = () => {
  return (
    <>
      <Router>
        <Nav />
        <Container>
          <Routes>
            <Route exact path="/" element={<ProductList />} />
            <Route exact path="/home" element={<ProductList />} />
            <Route path="/:productId" element={<ProductDetail />} />
            <Route exact path="/compraexitosa" element={<CompraExitosa />} />
          </Routes>
        </Container>
      </Router>
    </>
  );
};

export default App;
