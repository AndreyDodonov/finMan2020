import React, {useContext, useEffect, useState} from "react";
import {useHttp} from "../hooks/http.hook";
import {useMessage} from "../hooks/message.hook";
import {AuthContext} from "../context/AuthContext";
import '../styles/style.css';

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

    // // исправление label. См. https://materializecss.com/text-inputs.html
    // useEffect(()=>{
    //     window.M.updateTextFields();
    // }, []);


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
            <div className="auth__login">
                {/*<h1>auth login</h1>*/}
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
                        <button
                            className="auth__buttons-signin"
                            onClick={registerHandler}
                            disabled={loading}
                        >sign in</button>
                    </div>


                </div>
            </div>
            <div className="auth__info">
                <h1>auth info</h1>
            </div>
        </div>
    )
};


//
//     <div className="auth">
//         // <div className="col s6 offset-s3">
//         // <h1>FinMan 2020</h1>
//         // <div className="card blue darken-1">
//         // <div className="card-content white-text">
//         // <span className="card-title">Authorization</span>
//         // <div>
//         // <div className="input-field">
//         // <input
//                             placeholder="E-mail"
//                             id="email"
//                             type="text"
//                             name="email"
//                             className="yellow-input"
//                             onChange={changeHandler}
//                         />
//                         <label htmlFor="email">Enter e-mail</label>
//                     </div>
//                     <div className="input-field">
//                         <input
//                             placeholder="Password"
//                             id="password"
//                             type="password"
//                             name="password"
//                             className="yellow-input"
//                             onChange={changeHandler}
//                         />
//                         <label htmlFor="password">Enter password</label>
//                     </div>
//                 </div>
//             </div>
//             <div className="card-action">
//                 <button
//                     className="btn waves-effect waves-light yellow darken-4"
//                     onClick={loginHandler}
//                     disabled={loading}
//                 >Login
//                 </button>
//                 <button
//                     className="btn waves-effect waves-light grey lighten-1 black-text"
//                     onClick={registerHandler}
//                     disabled={loading}
//                 >Sign in
//                 </button>
//             </div>
//         </div>
//     </div>
// </div>
