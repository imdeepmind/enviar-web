import React from 'react';

import LoginForm from './loginForm';

const style = {
    'height'     : '100vh',
    'width'      : '100%' 
}

const loginBoxStyle = {
    width: "350px",
    padding: "20px",
    background: "rgba(255,255,255,01)",
    textAlign: "center"
}

const Login = props => {
    return (
        <div className="d-flex align-items-center justify-content-center flex-column p-5" style={style}>
            <div className="" style={loginBoxStyle}>
                <h2 className="text-primary">Login</h2>
                <LoginForm onSubmit={props.onSubmit} />
            </div>
            
        </div>
    )
}

export default Login;