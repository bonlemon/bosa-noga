import React from 'react';
import classNames from 'classnames';
import './Search.css';

const Search = ({ invisible, isHeader, isCatalog, onSubmit, onChange }) => {
    const formClassName = classNames({
        'header-controls-search-form': isHeader,
        'catalog-search-form': isCatalog,
        'form-inline ': true,
        invisible: isHeader && invisible,
    });

    return (
        <form onSubmit={onSubmit} data-id='search-form' className={formClassName}>
            <input className='form-control' onChange={onChange} placeholder='Поиск' />
        </form>
    );
};
export default Search;
