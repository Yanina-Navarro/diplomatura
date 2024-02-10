import React from 'react';
import '../styles/Header.css';

const Header = (props) => {

    return(
        <header>
            <div className="holder">
                <img src="/img/logo.png" width="100" alt="Cafeteria X"/>
                <h1>Cafeteria X</h1>
            </div>
        </header>
    )
}

export default Header;