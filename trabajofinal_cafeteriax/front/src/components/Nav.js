import React from 'react';
import { NavLink } from "react-router-dom";
import '../styles/Nav.css';

const Nav = (props) => {

    return(
        <nav>
            <div>
                <ul>
                    <li><NavLink to="/" className={({isActive}) => isActive ? "activo" : undefined }>Home</NavLink> </li>
                    <li><NavLink to="/nosotros" className={({isActive}) => isActive ? "activo" : undefined }>Nosotros</NavLink> </li>
                    <li><NavLink to="/sucursales" className={({isActive}) => isActive ? "activo" : undefined }>Sucursales</NavLink> </li>
                    <li><NavLink to="/productos" className={({isActive}) => isActive ? "activo" : undefined }>Productos</NavLink> </li>
                    <li><NavLink to="/contacto" className={({isActive}) => isActive ? "activo" : undefined }>Contacto</NavLink></li>
                </ul>
            </div>
        </nav>
    )
}

export default Nav;