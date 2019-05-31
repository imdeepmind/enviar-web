import React from 'react';
import { Container } from 'reactstrap';

import RegisterForm from './registerForm';

const Register = props => {
    return (
        <div className="d-flex align-items-center justify-content-center flex-column w-100 mh-100v" id="registration-form">
            <Container className="text-center p-3">
                <h1 className="text-primary">Register</h1>
                <p className="text-primary mb-4">Create an account with some basic information</p>
                <RegisterForm onSubmit={props.onSubmit} />
            </Container>
        </div>
    )
}

export default Register;