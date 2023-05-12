import React from 'react';
import '../index.css'
import headerLogo from '../images/logo/header__logo.svg';

function Header() {
    return (
        <header className="header">
            <a href="#"><img src={headerLogo} className="header__logo" alt="Логотип Место"/></a>
        </header>
    )
}

export default Header;