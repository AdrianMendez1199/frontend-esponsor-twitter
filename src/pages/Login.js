import React from 'react';
import { navigate, Link } from '@reach/router';
import { ErrorMessage, Formik, Form } from 'formik';
import * as yup from 'yup';

import API from '../helpers/api';
import { setToken } from '../helpers/auth';
import { useCtxUser } from '../userContext';
import Loading from '../components/LoadingCircle';

const validationSchema = yup.object({
  username: yup.string().required('El usuario o email es requerido'),
  password: yup.string().required('La contraseña es requerida'),
});

const Login = () => {
  const [error, setError] = React.useState('');
  const [loading, setLoading] = React.useState(false);
  const [, setUser] = useCtxUser();

  const makeLogin = async (username, password) => {
    setLoading(true);
    await API.get('/sanctum/csrf-cookie').then(async () => {
      await API.post('/api/login', {
        username,
        password,
      }).then(async (resp) => {
        setError('');
        await setToken(resp.data.access_token);
        setUser(resp.data.user);
        setLoading(false);
        navigate('/');
      }).catch((err) => {
        setLoading(false);
        setError(err.response.data.message);
      });
    });
  };

  return (
    <div className="container">
      { loading && <Loading />}

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
              <button className="button" type="submit" disabled={loading}>
                Iniciar Sesion
              </button>
              <br />

              <div className="signup-message">
                <Link to="/register">¿Aún no tienes cuenta? Créala aquí</Link>
              </div>

            </div>

          </Form>
        )}

      </Formik>
    </div>
  );
};

export default Login;
