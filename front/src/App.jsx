import React, { useState } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import ProductList from "./components/ProductList";
import { Container, CssBaseline, ThemeProvider } from "@mui/material";
import CompraExitosa from "./components/Compraexitosa";
import ProductDetail from "./components/ProductDetail";
import Nav from "./components/Nav";
import { darkTheme, lightTheme } from "./styles/theme";

const App = () => {

const [theme, setTheme] = useState(true)
const handleChangeTheme = () => {
  setTheme(!theme)
}
  return (
    <>
     <ThemeProvider theme={theme ? lightTheme : darkTheme}>
     <CssBaseline />
      <Router>
        <Nav  handleChangeTheme={handleChangeTheme} themeOption={theme}/>
        <Container>
          <Routes>
            <Route exact path="/" element={<ProductList />} />
            <Route exact path="/home" element={<ProductList />} />
            <Route path="/:productId" element={<ProductDetail />} />
            <Route exact path="/compraexitosa" element={<CompraExitosa />} />
          </Routes>
        </Container>
      </Router>
      </ThemeProvider>
    </>
  );
};

export default App;
