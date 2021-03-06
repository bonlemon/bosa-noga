import React, { Fragment, useState } from 'react';
import { Link } from 'react-router-dom';
import './Basket.css';
import nanoid from 'nanoid';
import Modal from '../../core/Modal';

const Items = ({ items, onRemove }) => {
    return (
        <table className='table table-bordered'>
            <thead>
                <tr>
                    <th scope='col'>#</th>
                    <th scope='col'>Название</th>
                    <th scope='col'>Размер</th>
                    <th scope='col'>Кол-во</th>
                    <th scope='col'>Стоимость</th>
                    <th scope='col'>Итого</th>
                    <th scope='col'>Действия</th>
                </tr>
            </thead>
            <tbody>
                {items.map(({ id, title, size, count, price, result }, index) => (
                    <tr key={nanoid()}>
                        <th scope='row'>{index + 1}</th>
                        <td>
                            <Link to={`/products/${id}`}>{title}</Link>
                        </td>
                        <td>{size}</td>
                        <td>{count}</td>
                        <td>{price} руб.</td>
                        <td>{price * count} руб.</td>
                        <td>
                            <button className='btn btn-outline-danger btn-sm' onClick={onRemove(id)}>
                                Удалить
                            </button>
                        </td>
                    </tr>
                ))}

                <tr>
                    <td colSpan='5' className='text-right'>
                        Общая стоимость
                    </td>
                    <td>
                        {items.reduce((acc, { price, count }) => {
                            return acc + price * count;
                        }, 0)}
                        руб.
                    </td>
                </tr>
            </tbody>
        </table>
    );
};
const Order = ({ phone, address, onEditOwner, onSubmit }) => {
    const [isAgreeWithRules, setIsAgreeWithRules] = useState(false);
    const onClick = () => {
        setIsAgreeWithRules(!isAgreeWithRules);
    };
    return (
        <div className='card owner'>
            <form className='card-body' onSubmit={onSubmit}>
                <div className='form-group'>
                    <label htmlFor='phone'>Телефон</label>
                    <input
                        className='form-control'
                        id='phone'
                        value={phone}
                        placeholder='Ваш телефон'
                        onChange={onEditOwner}
                    />
                </div>
                <div className='form-group'>
                    <label htmlFor='address'>Адрес доставки</label>
                    <input
                        className='form-control'
                        id='address'
                        value={address}
                        placeholder='Адрес доставки'
                        onChange={onEditOwner}
                    />
                </div>
                <div className='form-group form-check'>
                    <input
                        id='agreement'
                        type='checkbox'
                        className='form-check-input'
                        checked={isAgreeWithRules}
                        onChange={onClick}
                    />
                    <label className='form-check-label' htmlFor='agreement'>
                        Согласен с правилами доставки
                    </label>
                </div>
                <button
                    type='submit'
                    className='btn btn-outline-secondary'
                    onClick={onSubmit}
                    disabled={!isAgreeWithRules}>
                    Оформить
                </button>
            </form>
        </div>
    );
};
const Basket = ({ items, owner, isSuccess, onClose, onRemove, onEditOwner, onSubmit }) => {
    return (
        <Fragment>
            <section className='cart'>
                <h2 className='text-center'>Корзина</h2>
                <Items items={items} onRemove={onRemove} />
            </section>
            <section className='order'>
                <h2 className='text-center'> Оформить заказ </h2>
                <Order {...owner} onEditOwner={onEditOwner} onSubmit={onSubmit} />
            </section>
            <Modal isOpened={isSuccess} onClose={onClose}>
                Заказ успешно отправлен
            </Modal>
        </Fragment>
    );
};
export default Basket;
