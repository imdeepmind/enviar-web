import React, { Component } from 'react';
import { connect } from 'react-redux';

import Hero from './components/hero';
import Login from './components/login';
import Footer from './components/footer';

import { loginUser } from '../../redux/actions';

class Index extends Component {
    onLogin = data => {
        this.props.loginUser(data, this.props.history);
    }
    render(){
        return (
            <div  className="w-100 mh-100v" id="index">
                <Hero />
                <Login onSubmit={this.onLogin}/>
                <Footer />
            </div>
        )
    }
}

const mapStateToProps = (state) => state;
  
export default connect(
    mapStateToProps,
    {
        loginUser
    }
)(Index);