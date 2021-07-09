import React from 'react';
import PropTypes from 'prop-types';

const Card = ({ content, username }) => (
  <div className="card-container">

    <div className="card-content">
      <div>
        <b>{username}</b>
      </div>
      {content}
    </div>
  </div>
);

Card.propTypes = {
  content: PropTypes.string.isRequired,
  username: PropTypes.string.isRequired,
};
export default Card;
