import React from 'react';
import PropTypes from 'prop-types';

const Modal = React.forwardRef(({ children }, ref) => {
  const modalRef = ref;

  const handleClose = () => {
    modalRef.current.style.display = 'none';
  };

  return (
    <div id="myModal" className="modal" ref={modalRef}>
      <div className="modal-content">
        <button
          className="close"
          type="button"
          onClick={handleClose}
        >
          &times;

        </button>
        {children}
      </div>
    </div>
  );
});

Modal.propTypes = {
  children: PropTypes.element,
};

Modal.defaultProps = {
  children: null,
};

export default Modal;
