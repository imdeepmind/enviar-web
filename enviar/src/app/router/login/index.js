import React, { Component, Fragment } from 'react';

import Hero from './components/hero';
import Modal from './components/modal';

class Login extends Component {
    constructor(props){
        super(props);
        this.state = {
            loginModal: false,
            registerModal: false
        }
    }

    toggleLoginModal = () => {
        this.setState(prevState => ({
            loginModal: !prevState.loginModal
        }));
    }

    toggleRegisterModal = () => {
        this.setState(prevState => ({
            registerModal: !prevState.registerModal
        }));
    }

    onLogin = (username, password) => {
        console.log(username, password);
    }
    render(){
        return (
            <Fragment>
                <Hero registerMethod={this.toggleRegisterModal} loginMethod={this.toggleLoginModal}/>
                <Modal isOpen={this.state.loginModal} toggle={this.toggleLoginModal} type="login" onSubmit={this.onLogin}/> 
                <Modal isOpen={this.state.registerModal} toggle={this.toggleRegisterModal} type="register" onSubmit={this.onLogin}/> 
            </Fragment>
        )
    }
}

export default Login;