import React, { Component, Fragment } from 'react';
import { connect } from 'react-redux';

import Hero from './components/hero';
import Modal from './components/modal';

import { loginUser, registerUser } from '../../redux/actions';

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

    onLogin = data => {
        this.props.loginUser(data, this.props.history);
    }

    onRegister = data => {
        this.props.registerUser(data, this.props.history);
    }
    render(){
        return (
            <Fragment>
                <Hero registerMethod={this.toggleRegisterModal} loginMethod={this.toggleLoginModal}/>
                <Modal isOpen={this.state.loginModal} toggle={this.toggleLoginModal} type="login" onSubmit={this.onLogin} error={this.props.authReducer ? this.props.authReducer : null}/> 
                <Modal isOpen={this.state.registerModal} toggle={this.toggleRegisterModal} type="register" onSubmit={this.onRegister} error={this.props.authReducer ? this.props.authReducer : null}/> 
            </Fragment>
        )
    }
}

const mapStateToProps = (state) => state;
  
export default connect(
    mapStateToProps,
    {
        loginUser,
        registerUser
    }
)(Login);