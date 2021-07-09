import React from 'react';
import PropTypes from 'prop-types';

const Card = ({ content, user }) => (
  <div className="card-container">

    <div className="card-content">
      <div>
        {user.split(' ')[0]}
      </div>
      { content}
    </div>
  </div>
);

Card.propTypes = {
  content: PropTypes.string.isRequired,
  user: PropTypes.string.isRequired,
};
export default Card;
