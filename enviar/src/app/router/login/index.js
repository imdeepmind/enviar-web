import React, { Component } from 'react';
import { Row, Col, Container } from 'reactstrap';
import { connect } from 'react-redux';

import Hero from './components/hero';
import Login from './components/login';
import Registration from './components/registration'
import WhyJoin from './components/whyJoin';

import { loginUser, registerUser } from '../../redux/actions';

const style = {
    'background' : 'linear-gradient(to right, #4A00E0, #8E2DE2)',
    'minHeight'     : '100vh',
    'width'      : '100%' 
}

class Index extends Component {
    onLogin = data => {
        this.props.loginUser(data, this.props.history);
    }

    onRegister = data => {
        this.props.registerUser(data, this.props.history);
    }
    render(){
        return (
            <Container fluid style={style}>
                 <Row>
                    <Col xs="12" md="8">
                        <Hero />
                    </Col>
                    <Col xs="12" md="4">
                        <Login onSubmit={this.onLogin}/>
                    </Col>
                    <Col xs="12" md="4">
                        <Registration onSubmit={this.onRegister}/>
                    </Col>
                    <Col xs="12" md="8" className="d-none d-md-block">
                        <WhyJoin />
                    </Col>
                </Row>
            </Container>
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
)(Index);