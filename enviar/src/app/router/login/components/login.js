import React from 'react';

import LoginForm from './loginForm';

const Login = props => {
    return (
        <div className="d-flex align-items-center justify-content-center flex-column fulls">
            <div className="index-form-box">
                <h2 className="text-primary">Login</h2>
                <LoginForm onSubmit={props.onSubmit} />
            </div>
            
        </div>
    )
}

export default Login;