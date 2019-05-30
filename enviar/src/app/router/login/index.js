import React, { Component } from 'react';
import { Row, Col, Container } from 'reactstrap';
import { connect } from 'react-redux';

import Hero from './components/hero';
import Login from './components/login';
import Footer from './components/footer';
import Registration from './components/registration'
import WhyJoin from './components/whyJoin';

import { loginUser, registerUser } from '../../redux/actions';

class Index extends Component {
    onLogin = data => {
        this.props.loginUser(data, this.props.history);
    }

    onRegister = data => {
        this.props.registerUser(data, this.props.history);
    }
    render(){
        return (
            <div  className="w-100 mh-100v" id="index">
                <div id="index-child"   className="w-100 mh-100v">
                    <Hero />
                    <Login onSubmit={this.onLogin}/>
                    <Footer />
                </div>
                




                 {/* <Row>
                    <Col xs="12">
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
                </Row> */}
            </div>
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