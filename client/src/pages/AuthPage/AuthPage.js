import React, {useContext, useEffect, useState} from "react";
import {useHttp} from "../../hooks/http.hook";
import {useMessage} from "../../hooks/message.hook";
import {AuthContext} from "../../context/AuthContext";
import '../../styles/style.css';

export const AuthPage = () => {
    const auth = useContext(AuthContext);
    const message = useMessage();
    const {loading, request, error, clearError} = useHttp();
    const [form, setForm] = useState({
        email: '', password: ''
    });

    useEffect(() => {
        message(error);
        clearError();
    }, [error, message, clearError]);

    const changeHandler = event => {
        setForm({...form, [event.target.name]: event.target.value});
    };

    const registerHandler = async () => {
        try {
            const data = await request('/api/auth/register', 'POST', {...form});
            message(data.message);
        } catch (e) {
        }
    };

    const loginHandler = async () => {
        try {
            const data = await request('/api/auth/login', 'POST', {...form});
            auth.login(data.token, data.userId);
        } catch (e) {
        }
    };

    return (
        <div className="auth">
            {/*left side*/}
            <div className="auth__login">

                <div className="auth__label">
                    <h1>Login form</h1>
                </div>

                <div className="auth__card">

                    <input
                        placeholder="E-mail"
                        id="email"
                        type="text"
                        name="email"
                        onChange={changeHandler}
                    />
                    <input
                        placeholder="Password"
                        id="password"
                        type="password"
                        name="password"
                        onChange={changeHandler}
                    />

                    <div className="auth__buttons">
                        <button
                            className="auth__buttons-login"
                            onClick={loginHandler}
                            disabled={loading}
                        >log in</button>
                        {/*TODO: change button to link and add modal window registration*/}
                        <button
                            className="auth__buttons-signin"
                            onClick={registerHandler}
                            disabled={loading}
                        >sign in</button>
                    </div>

                    <div className="auth__sign">
                        <h2>Created by Andrey Dodonov 2020</h2>
                    </div>

                </div>
            </div>
            {/*right side*/}
            <div className="auth__info">
                <h1>login info </h1>
            </div>
        </div>
    )
};
