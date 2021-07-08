import { navigate } from '@reach/router';
import axios from 'axios';
import { getToken } from './auth';

axios.defaults.withCredentials = true;

axios.defaults.headers.common.Authorization = `Bearer ${getToken()}`;

axios.interceptors.response.use((response) => response, (error) => {
  if (error.response.status === 401) {
    return navigate('/login');
  }

  return Promise.reject(error);
});

export default axios.create({
  baseURL: 'http://localhost:8000',
  // responseType: 'json',
});
