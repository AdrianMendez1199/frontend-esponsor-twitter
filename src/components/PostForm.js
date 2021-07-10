import React from 'react';
import PropTypes from 'prop-types';

const PostForm = ({ handleChange, lengthPost }) => (
  <div className="post-from">
    <div className="form-publish">
      <textarea
        placeholder="¿Sobre qué quieres hablar?"
        type="text"
        maxLength="255"
        onChange={handleChange}
      />
    </div>
    <div>
      {lengthPost}
    </div>
    <button type="button">Publicar</button>
  </div>
);

PostForm.propTypes = {
  handleChange: PropTypes.func.isRequired,
  lengthPost: PropTypes.number.isRequired,
};

export default PostForm;
