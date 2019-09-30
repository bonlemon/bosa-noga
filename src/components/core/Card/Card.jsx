import React from 'react';
import { Link } from 'react-router-dom';

import './Card.css';

const Card = ({ id, image, title, price, className }) => {
    const imgStyles = {
        backgroundImage: `url(${image})`,
        backgroundSize: 'contain',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
    };
    return (
        <div className='col-4'>
            <div className={`card ${className || ''}`}>
                <div className='card-img' style={imgStyles}>
                    {/*<img src={image} className='card-img img-fluid' alt={title} />*/}
                </div>
                <div className='card-body'>
                    <p className='card-text'>{title}</p>
                    <p className='card-text'>{price} руб.</p>
                    <Link to={`/products/${id}`} className='btn btn-outline-primary'>
                        Заказать
                    </Link>
                </div>
            </div>
        </div>
    );
};
export default Card;
