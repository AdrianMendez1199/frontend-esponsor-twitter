import { navigate } from '@reach/router';
import { ErrorMessage, Formik, Form } from 'formik';
import React from 'react';
import * as yup from 'yup';

import API from '../helpers/api';
import { setToken } from '../helpers/auth';
import { useCtxUser } from '../userContext';

const validationSchema = yup.object({
  username: yup.string().required('El usuario o email es requerido'),
  password: yup.string().required('La contraseña es requerida'),
});

const Login = () => {
  const [error, setError] = React.useState('');
  const [, setUser] = useCtxUser();

  const makeLogin = async (username, password) => {
    API.get('/sanctum/csrf-cookie').then(async () => {
      await API.post('/api/login', {
        username,
        password,
      }).then((resp) => {
        setError('');
        setToken(resp.data.access_token);
        setUser(resp.data.user);
        navigate('/');
      }).catch((err) => {
        setError(err.response.data.message);
      });
    });
  };

  return (
    <div className="container">
      <Formik
        onSubmit={async ({ username, password }) => {
          await makeLogin(username, password);
        }}
        initialValues={{ username: '', password: '' }}
        validationSchema={validationSchema}
      >
        {({ handleChange }) => (
          <Form>
            <h1>
              Iniciar sesión en cpTwitter
            </h1>
            <div className="form-content">
              {error && (
              <div className="error-message text-center">
                {error}
                {' '}
              </div>
              )}

              <input
                name="username"
                placeholder="Nombre de usuario o email"
                type="text"
                onChange={handleChange}
              />

              <ErrorMessage name="username" component="div" className="error-message" />

              <input
                name="password"
                placeholder="Contraseña"
                type="password"
                onChange={handleChange}
              />

              <ErrorMessage name="password" component="div" className="error-message" />
              <br />
              <button className="button" type="submit">
                Iniciar Sesion
              </button>
              <br />

              <div className="signup-message">
                {/* <a href="#">¿Aún no tienes cuenta? Click aquí</a> */}
              </div>

            </div>

          </Form>
        )}

      </Formik>
    </div>
  );
};

export default Login;
