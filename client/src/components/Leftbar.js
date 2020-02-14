import React, {useContext} from 'react';
import {NavLink, useHistory} from "react-router-dom";
import {AuthContext} from "../context/AuthContext";
import '../styles/style.css';

export const Leftbar = () => {
    // const history = useHistory();
    // const auth = useContext(AuthContext);
    // const logoutHandler = event => {
    //     event.preventDefault();
    //     auth.logout();
    //     history.push('/');
    // };

    return (
        <nav className="leftbar">
            <ul className="leftbar__menu">
                <li className="leftbar__menu-item"><NavLink to="/dashboard" className="leftbar__menu-link">Dashboard</NavLink></li>
                <li className="leftbar__menu-item"><NavLink to="/income" className="leftbar__menu-link">Income +</NavLink></li>
                <li className="leftbar__menu-item"><NavLink to="/expenses" className="leftbar__menu-link">Expenses -</NavLink></li>
                <li className="leftbar__menu-item"><NavLink to="/deposit" className="leftbar__menu-link">Deposit</NavLink></li>
                <li className="leftbar__menu-item"><NavLink to="/plans" className="leftbar__menu-link">Plans</NavLink></li>
            </ul>
        </nav>
    )
};
