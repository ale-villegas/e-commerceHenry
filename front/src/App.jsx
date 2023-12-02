
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import ProductList from './components/ProductList';

import Nav from "./components/Nav/Nav";
import ProductDetail from './components/ProductDetail/ProductDetail';



const App = () => {
  const [state, dispatch] = useReducer(guitarrasReducer, initialState);
  const [resultados, setResultados] = useState(initialState);

  const getGuitarras = async () => {
    try {
      const { data } = await axios.get(`http://localhost:3001/guitarras`);
      const response = data.guitarras;
      setResultados(response);

      dispatch({
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
    <Nav  />
 
      <Routes>
        <Route exact path="/" element={<ProductList/>} />
        <Route exact path="/home" element={<ProductList/>} />
        <Route exact path="/about" element={<ProductList/>} />
        <Route path="/:productId" element={<ProductDetail/>} />
      </Routes>
     
    </Router>

    </>
  );
};

export default App;
