import React from 'react';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';

import LoginForm from './loginForm';
import RegisterForm from './registerForm';

const MyModal = props => {
    return (
        <Modal isOpen={props.isOpen} toggle={props.toggle}>
            <ModalHeader toggle={props.toggle} className="text-capitalize">{props.type}</ModalHeader>
            <ModalBody>
                {props.type === 'login' ? <LoginForm onSubmit={props.onSubmit} myError={props.error ? props.error : null}/> : <RegisterForm onSubmit={data => props.onSubmit(data)} myError={props.error ? props.error : null}/>}
            </ModalBody>
            <ModalFooter>
                <Button color="secondary" onClick={props.toggle}>Cancel</Button>
            </ModalFooter>
        </Modal>
    )
}

export default MyModal;