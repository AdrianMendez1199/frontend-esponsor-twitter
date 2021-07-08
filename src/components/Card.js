import React from 'react';
import PropTypes from 'prop-types';

const Card = ({ username }) => (
  <div className="container">
    <form>
      <textarea
        type="text"
        name="message"
        placeholder={`¿Que estas pensando ${username.split(' ')[0]} ?`}
      />
    </form>
  </div>
);

Card.propTypes = {
  username: PropTypes.string.isRequired,
};
export default Card;
