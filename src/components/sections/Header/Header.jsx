import React from 'react';
import { Link } from 'react-router-dom';
import nanoid from 'nanoid';
import './Header.css';

const Header = () => {
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
                                {links.map(({ key, href, title }) => {
                                    return (
                                        <li key={key} className='nav-item'>
                                            <Link className='nav-link' to={href}>
                                                {title}
                                            </Link>
                                        </li>
                                    );
                                })}
                            </ul>
                            <div>
                                <div className='header-controls-pics'>
                                    <div
                                        data-id='search-expander'
                                        className='header-controls-pic header-controls-search'
                                    />

                                    <div className='header-controls-pic header-controls-cart'>
                                        <div className='header-controls-cart-full'></div>
                                        <div className='header-controls-cart-menu'></div>
                                    </div>
                                </div>
                                <form
                                    data-id='search-form'
                                    className='header-controls-search-form form-inline invisible'>
                                    <input className='form-control' placeholder='Поиск' />
                                </form>
                            </div>
                        </div>
                    </nav>
                </div>
            </div>
        </header>
    );
};
export default Header;
