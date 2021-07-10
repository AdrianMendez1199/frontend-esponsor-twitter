import React from 'react';
import PropTypes from 'prop-types';

const Card = ({ content, username, createdAt }) => (
  <div className="card-container">

    <div className="card-content">
      <div>
        <b>{username}</b>
      </div>
      {content}
      <div className="date-post">
        {createdAt}
      </div>
    </div>
  </div>
);

Card.propTypes = {
  content: PropTypes.string.isRequired,
  username: PropTypes.string.isRequired,
  createdAt: PropTypes.string.isRequired,
};
export default Card;
