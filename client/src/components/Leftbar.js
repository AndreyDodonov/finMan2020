import React, {useContext} from 'react';
import {NavLink, useHistory} from "react-router-dom";
import {AuthContext} from "../context/AuthContext";
import '../styles/style.css';

export const Leftbar = () => {
    const history = useHistory();
    const auth = useContext(AuthContext);
    const logoutHandler = event => {
        event.preventDefault();
        auth.logout();
        history.push('/');
    };

    return (
        <nav className="leftbar">
            <ul className="leftbar__menu">
                <li className="leftbar__menu-item"><a href="#" className="leftbar__menu-link">Dashboard</a></li>
                <li className="leftbar__menu-item"><a href="#" className="leftbar__menu-link">Income +</a></li>
                <li className="leftbar__menu-item"><a href="#" className="leftbar__menu-link">Expenses -</a></li>
                <li className="leftbar__menu-item"><a href="#" className="leftbar__menu-link">Deposit</a></li>
                <li className="leftbar__menu-item"><a href="#" className="leftbar__menu-link">Plans</a></li>
            </ul>
        </nav>
    )
};
