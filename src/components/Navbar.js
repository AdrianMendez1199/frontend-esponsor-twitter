import { Link } from '@reach/router';
import React from 'react';
import { useCtxUser } from '../userContext';

const Navbar = () => {
  const [user] = useCtxUser();

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
        <button type="button">Crear Post</button>
      </div>

    </div>
  );
};

export default Navbar;
