import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';

export default function Navbar() {
    useEffect(() => {
        const hamMenuBtn = document.querySelector('.header__main-ham-menu-cont');
        const smallMenu = document.querySelector('.header__sm-menu');
        const headerHamMenuBtn = document.querySelector('.header__main-ham-menu');
        const headerHamMenuCloseBtn = document.querySelector('.header__main-ham-menu-close');

        const toggleMenu = () => {
            if (smallMenu.classList.contains('header__sm-menu--active')) {
                smallMenu.classList.remove('header__sm-menu--active');
            } else {
                smallMenu.classList.add('header__sm-menu--active');
            }
            if (headerHamMenuBtn.classList.contains('d-none')) {
                headerHamMenuBtn.classList.remove('d-none');
                headerHamMenuCloseBtn.classList.add('d-none');
            } else {
                headerHamMenuBtn.classList.add('d-none');
                headerHamMenuCloseBtn.classList.remove('d-none');
            }
        };

        hamMenuBtn.addEventListener('click', toggleMenu);

        return () => {
            hamMenuBtn.removeEventListener('click', toggleMenu);
        };
    }, []);

    return (
        <>
            <header className="header">
                <div className="header__content">
                    <div className="header__logo-container">
                        <div className="header__logo-img-cont">
                            <img src="./assets/jpeg/pic.jpg" alt="Anand Dwivedi Logo" className="header__logo-img" />
                        </div>
                        <span className="header__logo-sub">Anand Dwivedi</span>
                    </div>
                    <div className="header__main">
                        <ul className="header__links">
                            <li className="header__link-wrapper">
                                <Link to="/" className="header__link"> Home </Link>
                            </li>
                            <li className="header__link-wrapper">
                                <Link to="/about" className="header__link">About </Link>
                            </li>
                            <li className="header__link-wrapper">
                                <Link to="/project" className="header__link"> Projects </Link>
                            </li>
                            <li className="header__link-wrapper">
                                <Link to="/contact" className="header__link"> Contact </Link>
                            </li>
                        </ul>
                        <div className="header__main-ham-menu-cont">
                            <img
                                src="./assets/svg/ham-menu.svg"
                                alt="hamburger menu"
                                className="header__main-ham-menu"
                            />
                            <img
                                src="./assets/svg/ham-menu-close.svg"
                                alt="hamburger menu close"
                                className="header__main-ham-menu-close d-none"
                            />
                        </div>
                    </div>
                </div>
                <div className="header__sm-menu">
                    <div className="header__sm-menu-content">
                        <ul className="header__sm-menu-links">
                            <li className="header__sm-menu-link">
                                <Link to="/"> Home </Link>
                            </li>
                            <li className="header__sm-menu-link">
                                <Link to="/about"> About </Link>
                            </li>
                            <li className="header__sm-menu-link">
                                <Link to="/project"> Projects </Link>
                            </li>
                            <li className="header__sm-menu-link">
                                <Link to="/contact"> Contact </Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </header>
        </>
    );
}
