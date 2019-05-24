import React from 'react';

import RegisterForm from './registerForm';

const Register = props => {
    return (
        <div className="d-flex align-items-center justify-content-center flex-column fulls">
            <div className="index-form-box">
                <h2 className="text-primary">Register</h2>
                <RegisterForm onSubmit={props.onSubmit} />
            </div>
            
        </div>
    )
}

export default Register;