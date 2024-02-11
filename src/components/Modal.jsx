import React, { useState } from 'react';

const Modal = ({ isOpen, onClose, children }) => {
  // Prevents the modal from closing if the modal content is clicked
  const handleModalContentClick = (e) => e.stopPropagation();

  return (
    isOpen && (
      <div className="modal-overlay" onClick={onClose}>
        <div className="modal-content" onClick={handleModalContentClick}>
          <button className="close-button" onClick={onClose}>×</button>
          {children}
        </div>
      </div>
    )
  );
};

export default Modal;
