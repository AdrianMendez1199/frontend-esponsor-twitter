import React from 'react';
import { Router } from '@reach/router';

import Login from './pages/Login';
import Home from './pages/Home';
import useIsAuth from './hooks/useIsAuth';

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
