import React from 'react';
import PropTypes from 'prop-types';

const Post = ({ handleClick }) => (
  <div className="post-container">
    <button
      type="button"
      onClick={handleClick}
    >
      Crear Publicación

    </button>
  </div>
);

Post.propTypes = {
  handleClick: PropTypes.func.isRequired,
};

export default Post;
