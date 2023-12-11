
import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import ProductList from './components/ProductList';
import ProductDetail from './components/ProductDetail';
import './index.css'; 

ReactDOM.render(
  <Router>
    <Switch>
      <Route exact path="/" component={ProductList} />
      <Route path="/product/:productId" component={ProductDetail} />
    </Switch>
  </Router>,
  document.getElementById('root')
);
