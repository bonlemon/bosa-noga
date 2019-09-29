import React from 'react';
import classNames from 'classnames';

const Product = ({ product, selected, amount, onClickInBasket, onChangeAmount, onChangeSelected }) => {
    const { title, images, sku, color, manufacturer, sizes, material, season, reason } = product;

    const getSizeClassName = (size) => classNames('catalog-item-size', { selected: size === selected });

    return (
        <section className='catalog-item'>
            <h2 className='text-center'>{title}</h2>
            <div className='row'>
                <div className='col-5'>
                    <img src={images[0]} className='img-fluid' alt='' />
                </div>
                <div className='col-7'>
                    <table className='table table-bordered'>
                        <tbody>
                            <tr>
                                <td>Артикул</td>
                                <td>{sku}</td>
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
                            {sizes.map(({ size, avalible }) => {
                                return avalible ? (
                                    <span
                                        id={size}
                                        key={size}
                                        className={getSizeClassName(size)}
                                        onClick={onChangeSelected}>
                                        {size}
                                    </span>
                                ) : null;
                            })}
                        </p>
                        <p>
                            Количество:
                            <span className='btn-group btn-group-sm pl-2'>
                                <button
                                    className='btn btn-secondary'
                                    onClick={onChangeAmount()}
                                    disabled={Number(amount) === 1}>
                                    -
                                </button>
                                <span className='btn btn-outline-primary'>{amount}</span>
                                <button
                                    className='btn btn-secondary'
                                    onClick={onChangeAmount('add')}
                                    disabled={Number(amount) === 10}>
                                    +
                                </button>
                            </span>
                        </p>
                    </div>
                    <button className='btn btn-danger btn-block btn-lg' onClick={onClickInBasket} disabled={!selected}>
                        В корзину
                    </button>
                </div>
            </div>
        </section>
    );
};
export default Product;
