import { Link } from '@reach/router';
import React from 'react';
import { useCtxUser } from '../userContext';

const Navbar = () => {
  const [user] = useCtxUser();

  return (
    <div className="navbar">
      <Link to="/"> CPTWITTER</Link>
      {user && (
      <div className="avatar">
        {user.name.split('')[0]}
      </div>
      )}
    </div>
  );
};

export default Navbar;
