import React from 'react';

const Modal = ({  onClose, src,  }) => {
  return (
    <div className="overlay" onClick={onClose}>
      <div className="modal">
        <img src={src} alt="" />
      </div>
    </div>
  );
};

export default Modal;
