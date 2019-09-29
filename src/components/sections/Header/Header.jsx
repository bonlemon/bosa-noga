import React from 'react';
import nanoid from 'nanoid';
import './Header.css';
import { Links } from '../../core';
import { SearchWidget } from '../../widgets';

const Header = ({ amountInBasket, isVisible, onToggleForm, onClickGoToBasket }) => {
    const links = [
        { key: nanoid(), title: 'Главная', href: '/' },
        { key: nanoid(), title: 'Каталог', href: '/catalog' },
        { key: nanoid(), title: 'О магазине', href: '/about' },
        { key: nanoid(), title: 'Контакты', href: '/contacts' },
    ];

    return (
        <header className='container'>
            <div className='row'>
                <div className='col'>
                    <nav className='navbar navbar-expand-sm navbar-light bg-light'>
                        <a className='navbar-brand' href='/'>
                            <img src='/img/header-logo.png' alt='Bosa Noga' />
                        </a>

                        <div className='collapase navbar-collapse' id='navbarMain'>
                            <ul className='navbar-nav mr-auto'>
                                <Links links={links} />
                            </ul>
                            <div>
                                <div className='header-controls-pics'>
                                    <div
                                        onClick={onToggleForm}
                                        data-id='search-expander'
                                        className='header-controls-pic header-controls-search'
                                    />

                                    <div
                                        className='header-controls-pic header-controls-cart'
                                        onClick={amountInBasket ? onClickGoToBasket : null}>
                                        {amountInBasket ? (
                                            <div className='header-controls-cart-full' onClick={onClickGoToBasket}>
                                                {amountInBasket}
                                            </div>
                                        ) : null}
                                        <div className='header-controls-cart-menu' />
                                    </div>
                                </div>
                                <SearchWidget invisible={!isVisible} isHeader />
                            </div>
                        </div>
                    </nav>
                </div>
            </div>
        </header>
    );
};
export default Header;
