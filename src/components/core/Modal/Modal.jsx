import React from 'react';
import './Modal.css';

const Modal = ({ errorMessage }) => {
    return <div className='modal'>{errorMessage}</div>;
};
export default Modal;
