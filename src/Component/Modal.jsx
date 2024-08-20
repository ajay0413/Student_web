// Modal.js
import React from "react";
import './Modal.css';

const Modal = ({ show, onClose, children }) => {
  if (!show) return null;

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="mbc">
      <div className="modal-content" onClick={(e) => e.stopPropagation()}>
        <button onClick={onClose} className="modal-close-btn">
          &times;
        </button>
        {children}
      </div>
      </div>
    </div>
  );
};

export default Modal;