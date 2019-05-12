import React, { Fragment } from 'react';

import { connect } from 'react-redux';

import { logoutUser } from '../../redux/actions';

import { Fab, Action } from 'react-tiny-fab';
import 'react-tiny-fab/dist/styles.min.css';

import { NavLink } from 'react-router-dom';

const position = {
    bottom: 0,
    right: 0,
}

const mainButtonStyles = {
    backgroundColor: '#6f42c1'
}

const actionButtonStyles = {
    backgroundColor: '#6f42c1' //#6610f2
}

const FloatingActionButton = props => {
    return (
        <Fragment>
            <Fab icon={<i className="fas fa-plus"></i>} event={'click'} position={position} mainButtonStyles={mainButtonStyles} actionButtonStyles={actionButtonStyles}>
                <Action text="Email" style={actionButtonStyles} onClick={null}>
                    <NavLink to="/messages"><i className="fas fa-comments text-white"></i></NavLink>
                </Action>
                <Action text="Email" style={actionButtonStyles} onClick={null}>
                    <NavLink to="/post"><i className="fas fa-camera text-white"></i></NavLink>
                </Action>
                <Action text="Email" style={actionButtonStyles} onClick={null}>
                    <NavLink to="/users"><i className="fas fa-users text-white"></i></NavLink>
                </Action>
            </Fab>
        </Fragment>
        
    )
}

const mapStateToProps = (state) => state;
  
export default connect(
    mapStateToProps,
    {
        logoutUser
    }
)(FloatingActionButton);