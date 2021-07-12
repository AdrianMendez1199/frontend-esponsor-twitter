import React from 'react';
import { Router } from '@reach/router';

import Login from './pages/Login';
import Home from './pages/Home';
import Register from './pages/Register';
import useIsAuth from './hooks/useIsAuth';

function App() {
  useIsAuth();

  return (
    <Router>
      <Login path="/login" />
      <Register path="/register" />
      <Home path="/" />
    </Router>
  );
}

export default App;
