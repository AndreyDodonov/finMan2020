import React, {useContext} from 'react';
import {NavLink, useHistory} from "react-router-dom";
import {AuthContext} from "../context/AuthContext";
import '../styles/style.css';

export const Navbar = () => {
    const history = useHistory();
    const auth = useContext(AuthContext);
    const logoutHandler = event => {
        event.preventDefault();
        auth.logout();
        history.push('/');
    };

    return (
        <div className="container">
            <div className="header">
                <h1 className="header__logo">FinMan2020</h1>
                <nav className="header__menu">
                    <ul className="header__menu-list">
                        <li className="header__menu-item"><a href="#" className="header__menu-link">blog</a></li>
                        <li className="header__menu-item"><a href="#" className="header__menu-link">profile</a></li>
                        <li className="header__menu-item"><a href="/" onClick={logoutHandler} className="header__menu-link">logout</a></li>
                    </ul>
                </nav>
            </div>
        </div>
    )
};



/*
 <nav>
            <div className="nav-wrapper blue darken-1">
                <span className="brand-logo">TicTac Toe</span>
                <ul id="nav-mobile" className="right hide-on-med-and-down">
                    <li><NavLink to="/game">IncomePage</NavLink></li>
                    <li><NavLink to="/links">Statistics</NavLink></li>
                    <li><a href="/" onClick={logoutHandler}>Logout</a></li>
                </ul>
            </div>
        </nav>




 */
