import React, { Component, Fragment } from 'react';
import { connect } from 'react-redux';

import { usersIndividual } from '../../../app/redux/actions';

import Hero from './components/hero';

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
            <Fragment>
                {this.props.userReducer.loading ? "loading" : (
                    <Hero 
                        name={this.props.userReducer.user.name} 
                        username={this.props.userReducer.user.username} 
                        avatar={this.props.userReducer.user.avatar} 
                    />
                )}
            </Fragment>
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