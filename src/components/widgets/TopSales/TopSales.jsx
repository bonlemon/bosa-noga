import React from 'react';
import { Card } from '../../core';

const TopSales = ({ items }) => {
    return (
        <section className='top-sales'>
            <h2 className='text-center'>Хиты продаж!</h2>

            <div className='row'>
                {items.map(({ id, title, price, images }) => {
                    return <Card key={id} {...{ id, title, price, image: images[0] }} />;
                })}
            </div>
        </section>
    );
};
export default TopSales;
