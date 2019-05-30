import React, { Component } from 'react';
import { connect } from 'react-redux';

import Registration from './components/registration';

import { registerUser } from '../../redux/actions';

class Register extends Component {
    onRegister = data => {
        this.props.registerUser(data, this.props.history);
    }
    render(){
        return (
            <div  className="w-100 mh-100v" id="index">
                <div id="index-child"   className="w-100 mh-100v">
                    <Registration onSubmit={this.onRegister}/>
                </div>
            </div>
        )
    }
}

const mapStateToProps = (state) => state;
  
export default connect(
    mapStateToProps,
    {
        registerUser
    }
)(Register);