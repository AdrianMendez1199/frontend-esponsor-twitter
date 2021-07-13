import React from 'react';
import ReactDOM from 'react-dom';
import './App.css';
import App from './eSponsorTwitter';
import { UserProvider } from './userContext';

ReactDOM.render(
  <React.StrictMode>
    <UserProvider>
      <App />
    </UserProvider>
  </React.StrictMode>,
  document.getElementById('root'),
);
