import { useEffect } from 'react';

import { navigate } from '@reach/router';
import API from '../helpers/api';
import { useCtxUser } from '../userContext';

// this hook is use to check if user is authenticate
// its'n redirect to loging
const useIsAuth = () => {
  const [, setUser] = useCtxUser();
  useEffect(() => {
    API.get('/api/whoami')
      .then((resp) => {
        setUser(resp.data);
      })
      .catch((err) => {
        if (err.response.status === 401) {
          navigate('/login');
        }
      });
  }, []);
};

export default useIsAuth;
