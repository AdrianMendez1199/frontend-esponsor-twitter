import React, {
  createContext, useState, useContext, useMemo,
} from 'react';
import PropTypes from 'prop-types';

const UserContext = createContext(null);

export const UserProvider = ({ children }) => {
  const [user, setUser] = useState(null);

  const userValue = useMemo(() => [user, setUser], [user]);

  return (
    <UserContext.Provider
      value={userValue}
    >
      {children}
    </UserContext.Provider>
  );
};

export function useCtxUser() {
  return useContext(UserContext);
}

UserProvider.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
  ]).isRequired,
};
