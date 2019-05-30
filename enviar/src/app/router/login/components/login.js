import React from 'react';
import { Link } from 'react-router-dom';

import LoginForm from './loginForm';

const Login = props => {
    return (
        <div className="d-flex align-items-center justify-content-center flex-column w-100 mh-100v" id="login-form">
            <div className="text-center p-3" id="login-form-box">
                <h2 className="text-light mb-4">Login</h2>
                <LoginForm onSubmit={props.onSubmit} />
                <p className="mt-2 text-light">newbie, create an <Link to="/register" className="font-weight-bold text-light">account</Link> here</p>
            </div>
        </div>
    )
}

export default Login;