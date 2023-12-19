import React from 'react';
import ReactDOM from 'react-dom';
import { createRoot } from 'react-dom/client';
import App from './App.jsx';
import './index.css';
import { GlobalContextProvider } from './context/GlobalContext.jsx';

import { Auth0Provider } from '@auth0/auth0-react';
import reportWebVitals from './reportWebVitals.jsx';



// const domain = process.env.REACT_APP_AUTH0_DOMAIN
// const clientId = process.env.REACT_APP_AUTH0_CLIENT_ID

const root = createRoot(document.getElementById('root'));

root.render(

     <Auth0Provider 
     domain= "dev-3ck6qlmlem0mraha.us.auth0.com" 
     clientId = "vEA0S1QstVANFJ7SR7OHUnCg1hmoocFm" 
     authorizationParams={{
      redirect_uri: window.location.origin
    }}>
    <GlobalContextProvider> 
      <App />
    </GlobalContextProvider>
    </Auth0Provider>
 ,

);

reportWebVitals();
