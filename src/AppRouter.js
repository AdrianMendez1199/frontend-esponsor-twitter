import React from 'react';
import { Router } from '@reach/router';

import useIsAuth from './hooks/useIsAuth';
import Login from './pages/Login';
import Home from './pages/Home';

function App() {
  useIsAuth();

  return (
    <Router>
      <Login path="/login" />
      <Home path="/" />
    </Router>
  );
}

export default App;
