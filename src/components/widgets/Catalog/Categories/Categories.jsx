import React from 'react';
import './Category.css';

const Categories = ({ categories, categoryId, onClickCategory }) => {
    return (
        <ul className='catalog-categories nav justify-content-center'>
            {categories.map(({ id, title }) => {
                const className = categoryId === id ? 'nav-link category active' : ' nav-link category';
                return (
                    <li key={id} onClick={onClickCategory(id)} className='nav-item'>
                        <span className={className}>{title}</span>
                    </li>
                );
            })}
        </ul>
    );
};
export default Categories;
