import { navigate, Link } from '@reach/router';
import { ErrorMessage, Formik, Form } from 'formik';
import React from 'react';
import * as yup from 'yup';

import API from '../helpers/api';
import { setToken } from '../helpers/auth';
import { useCtxUser } from '../userContext';

const validationSchema = yup.object({
  name: yup.string().required('El nombre es requerido'),
  username: yup.string().required('El usuario es requerido'),
  email: yup.string().required('El email es requerido').email('El formato de email es invalido'),
  password: yup.string().required('La contraseña es requerida'),
  confirm_password: yup.string()
    .oneOf([yup.ref('password'), null], 'Las contraseñas no coinciden'),
});

const Register = () => {
  const [error, setError] = React.useState('');
  const [, setUser] = useCtxUser();

  const makeRegister = async (data) => {
    API.get('/sanctum/csrf-cookie').then(async () => {
      await API.post('/api/register', {
        ...data,
      }).then((resp) => {
        setError('');
        setToken(resp.data.token);
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
        onSubmit={async (data) => {
          await makeRegister(data);
        }}
        initialValues={{
          username: '',
          password: '',
          password_confirmation: '',
          email: '',
          name: '',
        }}
        validationSchema={validationSchema}
      >
        {({ handleChange }) => (
          <Form>
            <h1>
              Registrate
            </h1>
            <div className="form-content">
              {error && (
              <div className="error-message text-center">
                {error}
                {' '}
              </div>
              )}

              <input
                name="name"
                placeholder="Nombre Completo"
                type="text"
                onChange={handleChange}
              />

              <ErrorMessage name="name" component="div" className="error-message" />

              <input
                name="username"
                placeholder="Nombre de Usuario"
                type="text"
                onChange={handleChange}
              />

              <ErrorMessage name="username" component="div" className="error-message" />

              <input
                name="email"
                placeholder="Email"
                type="text"
                onChange={handleChange}
              />

              <ErrorMessage name="email" component="div" className="error-message" />

              <input
                name="password"
                placeholder="Contraseña"
                type="password"
                onChange={handleChange}
              />

              <ErrorMessage name="password" component="div" className="error-message" />

              <input
                name="password_confirmation"
                placeholder="Confirma Contraseña"
                type="password"
                onChange={handleChange}
              />

              <ErrorMessage name="password_confirmation" component="div" className="error-message" />

              <br />

              <button className="button" type="submit">
                Registrate
              </button>
              <br />

              <div className="signup-message">
                <Link to="/login">¿Ya tienes cuenta? iniciar sesion</Link>
              </div>

            </div>

          </Form>
        )}

      </Formik>
    </div>
  );
};

export default Register;
