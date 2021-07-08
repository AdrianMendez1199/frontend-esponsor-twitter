import React from 'react';
import ReactDOM from 'react-dom';
import './App.css';
import { CookiesProvider } from 'react-cookie';
import App from './AppRouter';

ReactDOM.render(
  <React.StrictMode>
    <CookiesProvider>
      <App />
    </CookiesProvider>
  </React.StrictMode>,
  document.getElementById('root'),
);
