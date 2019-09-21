import React from 'react';
import { Link } from 'react-router-dom';

const Card = ({ id, image, title, price }) => {
    return (
        <div className='col-4'>
            <div className='card'>
                <img src={image} className='card-img-top img-fluid' alt={title} />
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
