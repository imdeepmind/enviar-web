import React from 'react';
import { Button } from 'reactstrap';
import { Link } from 'react-router-dom';

import LoginForm from './loginForm';

const Login = props => {
    return (
        <div className="d-flex align-items-center justify-content-center flex-column w-100 mh-100v" id="login-form">
            <div className="text-center p-3" id="login-form-box">
                <h1 className="text-primary">Login</h1>
                <p className="mb-4 text-primary">Please login with your username and password</p>
                <LoginForm onSubmit={props.onSubmit} />
                <Link to="/register" className="font-weight-bold text-decoration-none">
                    <Button color="primary" outline={true} className="w-100 mt-3  border border-primary"> or Register</Button>
                </Link>
            </div>
        </div>
    )
}

export default Login;