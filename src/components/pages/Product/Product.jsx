import React, { useState } from 'react';
import classNames from 'classnames';

const Product = ({ product, amount, onClickInBasket, onChangeAmount, onChangeSelected }) => {
    const { color, manufacturer, sizes, material, season, reason } = product;

    const [selected, setSelected] = useState(sizes[0].size || null);
    const onClickSize = (e) => {
        setSelected(e.target.id);
        onChangeSelected(e.target.id);
    };
    const getSizeClassName = (size) => classNames('catalog-item-size', { selected: size === selected });

    return (
        <section className='catalog-item'>
            <h2 className='text-center'>Босоножки 'MYER'</h2>
            <div className='row'>
                <div className='col-5'>
                    <img
                        src='https://cdn-images.farfetch-contents.com/12/93/06/52/12930652_13567910_1000.jpg'
                        className='img-fluid'
                        alt=''
                    />
                </div>
                <div className='col-7'>
                    <table className='table table-bordered'>
                        <tbody>
                            <tr>
                                <td>Артикул</td>
                                <td>1000046</td>
                            </tr>
                            <tr>
                                <td>Производитель</td>
                                <td>{manufacturer}</td>
                            </tr>
                            <tr>
                                <td>Цвет</td>
                                <td>{color}</td>
                            </tr>
                            <tr>
                                <td>Материалы</td>
                                <td>{material}</td>
                            </tr>
                            <tr>
                                <td>Сезон</td>
                                <td>{season}</td>
                            </tr>
                            <tr>
                                <td>Повод</td>
                                <td>{reason}</td>
                            </tr>
                        </tbody>
                    </table>
                    <div className='text-center'>
                        <p>
                            Размеры в наличии:
                            {sizes.map(({ size }) => {
                                return (
                                    <span key={size} className={getSizeClassName(size)} id={size} onClick={onClickSize}>
                                        {size}
                                    </span>
                                );
                            })}
                        </p>
                        <p>
                            Количество:
                            <span className='btn-group btn-group-sm pl-2'>
                                <button className='btn btn-secondary' onClick={onChangeAmount()}>
                                    -
                                </button>
                                <span className='btn btn-outline-primary'>{amount}</span>
                                <button className='btn btn-secondary' onClick={onChangeAmount('add')}>
                                    +
                                </button>
                            </span>
                        </p>
                    </div>
                    <button className='btn btn-danger btn-block btn-lg' onClick={onClickInBasket}>
                        В корзину
                    </button>
                </div>
            </div>
        </section>
    );
};
export default Product;
