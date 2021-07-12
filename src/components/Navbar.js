import { Link, navigate } from '@reach/router';
import React from 'react';
import { useCtxUser } from '../userContext';
import { deleteToken } from '../helpers/auth';

const Navbar = () => {
  const [user] = useCtxUser();

  const logout = () => {
    deleteToken();
    navigate('/login');
  };
  return (
    <div className="navbar">
      <Link to="/"> CPTWITTER</Link>

      <div className="button-container">
        { user && (
        <p>
          Bienvenido
          {' '}
          { user.name.split(' ')[0] }
        </p>
        )}
        <button type="button" onClick={logout}>Salir</button>
      </div>

    </div>
  );
};

export default Navbar;
