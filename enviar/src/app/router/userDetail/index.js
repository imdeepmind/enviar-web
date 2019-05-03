import React, { Component } from 'react';
import { connect } from 'react-redux';

import { usersIndividual } from '../../../app/redux/actions';

class UserDetail extends Component {
    componentDidMount(){
        this.dataListRender();
    }
    dataListRender = () => {
        this.props.usersIndividual({username: this.props.match.params.username}, this.props.history);
    }
    render(){
        console.log(this.props);
        return (
            <h1>Hello</h1>
        )
    }
}

const mapStateToProps = (state) => state;
  
export default connect(
    mapStateToProps,
    {
        usersIndividual
    }
)(UserDetail);