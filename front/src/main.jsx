import React from 'react';
import ReactDOM from 'react-dom';
import { createRoot } from 'react-dom/client';
import App from './App.jsx';
import './index.css';
import { GlobalContextProvider } from './context/GlobalContext.jsx';
import { CssBaseline } from "@mui/material";
import { Auth0Provider } from '@auth0/auth0-react';
import reportWebVitals from './reportWebVitals.jsx';

// const domain = process.env.REACT_APP_AUTH0_DOMAIN
// const clientId = process.env.REACT_APP_AUTH0_CLIENT_ID

const root = createRoot(document.getElementById('root'));

root.render(
  <React.StrictMode>
     <Auth0Provider 
     domain= "dev-4rcwkii8y3tyeimk.us.auth0.com" 
     clientId = "QADsdTc4oLvmm0tNypalaUynGdYzyjdi" 
     authorizationParams={{
      redirect_uri: window.location.origin
    }}>
    <GlobalContextProvider>
      <CssBaseline />
      <App />
    </GlobalContextProvider>
    </Auth0Provider>
  </React.StrictMode>,

);

reportWebVitals();
