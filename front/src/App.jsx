import React, { useEffect, useState } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import ProductList from "./components/ProductList";
import { Container, CssBaseline, ThemeProvider } from "@mui/material";

import ProductDetail from "./components/ProductDetail";
import Nav from "./components/Nav";
import { darkTheme, lightTheme } from "./styles/theme";
import Login from "./components/Login";
import Footer from "./components/Footer";

const App = () => {

const [theme, setTheme] = useState(false)
const handleChangeTheme = () => {
  setTheme(!theme)
  localStorage.setItem("theme", JSON.stringify(!theme))
} 


useEffect(() => {
  setTheme(JSON.parse(localStorage.getItem("theme")))
}, [])
  return (
    <>
     <ThemeProvider theme={theme ? lightTheme : darkTheme}>
     <CssBaseline />
      <Router>
      <Container>
        <Nav  handleChangeTheme={handleChangeTheme} themeOption={theme}/>
       
          <Routes>
            <Route exact path="/" element={<Login />} />
            <Route exact path="/product-list" element={<ProductList />} />
            <Route path="/:productId" element={<ProductDetail />} />
          </Routes>

         
        </Container>
        <Footer/>
      </Router>
      </ThemeProvider>
    </>
  );
};

export default App;
