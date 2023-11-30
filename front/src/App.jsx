import React, { useEffect, useState, useReducer } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import ProductList from "./components/ProductList";
import Nav from "./components/Nav/Nav";
import axios from "axios";

const guitarrasReducer = (state, action) => {
  // console.log(action.payload);
  switch (action.type) {
    case "GET_GUITARRAS":
      return action.payload;
    case "GET_FILTER_GUITARRAS":
      return action.payload;
    default:
      return state;
  }
};

const initialState = [];

const App = () => {
  const [state, distpach] = useReducer(guitarrasReducer, initialState);
  const [resultados, setResultados] = useState(initialState);

  const getGuitarras = async () => {
    try {
      const { data } = await axios.get(`http://localhost:3001/guitarras`);
      console.log(data)
      const response = await data.guitarras;
      console.log(response);
      setResultados(response);

      await distpach({
        type: "GET_GUITARRAS",
        payload: response,
      });
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getGuitarras();
  }, []);
// ToDo: Las rutas de home y about faltan... 
  return ( 
    <>
    
      <Router>
        <Nav distpach={distpach} resultados={resultados} />

        <Routes>
          <Route
            exact
            path="/"
            element={<ProductList distpach={distpach} productos={state} />}
          />
          <Route
            exact
            path="/home"
            element={<ProductList productos={state} />}
          />
          <Route
            exact
            path="/about"
            element={<ProductList productos={state} />}
          />
          {/* <Route path="/product/:productId" element={<ProductDetail/>} /> */}
        </Routes>
      </Router>
    </>
  );
};

export default App;
