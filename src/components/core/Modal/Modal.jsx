import React from 'react';
import './Modal.css';

const Modal = ({ children, isOpened, onClose }) => {
    if (!isOpened) {
        return null;
    }
    return (
        <div className='modal-container'>
            <div className='background' onClick={onClose} />
            <div className='modal-content'>{children}</div>
        </div>
    );
};
export default Modal;
