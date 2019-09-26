import React, { Fragment } from 'react';
import { Card } from '../../core';
import Categories from './Categories';
import { SearchWidget } from '../index';

const Catalog = ({ items, showSearchWidget, onClickMore }) => {
    return (
        <section className='catalog'>
            <h2 className='text-center'>Каталог</h2>
            {showSearchWidget && <SearchWidget isCatalog />}
            <Categories />
            <div className='row'>
                {items.map(({ id, title, price, images }) => {
                    return <Card key={id} className='divider' {...{ id, title, price, image: images[0] }} />;
                })}
            </div>
            <div className='text-center'>
                <button onClick={onClickMore} className='btn btn-outline-primary'>
                    Загрузить ещё
                </button>
            </div>
        </section>
    );
};
export default Catalog;
