import React, { useState } from 'react';
import { Formik, Form, ErrorMessage } from 'formik';
import * as yup from 'yup';
import PropTypes from 'prop-types';

import API from '../helpers/api';
import { useCtxUser } from '../userContext';

const validationSchema = yup.object({
  message: yup.string().required('Debe escribir algo para poder postear')
    .max(255, 'El post tiene un maximo de 255 carácteres')
    .trim(),
});

const PostForm = ({ setData }) => {
  const [user] = useCtxUser();
  const [error, setError] = useState('');

  const makePost = (message) => {
    API.post('/api/home', {
      message,
    }).then(({ data }) => {
      const { created_at: createdAt, message: msg, id } = data.post;
      const newPost = {
        created_at: createdAt,
        id,
        message: msg,
        user: {
          username: user.username,
        },
      };

      setData((prev) => [newPost, ...prev]);
      document.getElementById('myModal').style.display = 'none';
      // handleClose();
    }).catch((err) => {
      setError(err.message);
    });
  };

  const [lengthPost, setLengthPost] = useState(0);
  return (
    <div className="post-from">
      <div className="form-publish">
        {error}
        <Formik
          onSubmit={async ({ message }) => {
            await makePost(message);
          }}
          validationSchema={validationSchema}
          initialValues={{
            message: '',
          }}
          onChange={(e) => {
            setLengthPost(e.target.value.length);
          }}
        >
          {({ handleChange }) => (
            <Form>
              <textarea
                placeholder="¿Sobre qué quieres hablar?"
                type="text"
                maxLength="255"
                name="message"
                onChange={(e) => {
                  handleChange(e);
                  setLengthPost(e.target.value.length);
                }}

              />
              <ErrorMessage name="message" />
              <button type="submit">Publicar</button>
            </Form>
          )}

        </Formik>
      </div>
      <div>
        {lengthPost > 0 && lengthPost}
      </div>
    </div>
  );
};

PostForm.propTypes = {
  setData: PropTypes.func.isRequired,
};

export default PostForm;
