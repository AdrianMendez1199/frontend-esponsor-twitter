import { useEffect } from 'react';

import { navigate } from '@reach/router';
import API from '../helpers/api';

// this hook is use to check if user is authenticate
// its'n redirect to loging
const useIsAuth = () => {
  useEffect(() => {
    API.get('/api/whoami').catch((err) => {
      if (err.response.status === 401) {
        navigate('/login');
      }
    });
  }, []);
};

export default useIsAuth;
