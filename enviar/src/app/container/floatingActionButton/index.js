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
    backgroundColor: '#6f42c1',
    outline: 'none'
}

const actionButtonStyles = {
    backgroundColor: '#6f42c1',
    outline: 'none'
}

const actionButtons = history => {
    const actions = [];
    const page = history ? history.location.pathname : null;

    if (page !== '/')
        actions.push(
            <Action key={0} text="Home" style={actionButtonStyles} onClick={null}>
                <NavLink to="/"><i className="fas fa-home text-white"></i></NavLink>
            </Action> 
        );

    if (page !== '/post')
        actions.push(
            <Action key={1} text="New Post" style={actionButtonStyles} onClick={null}>
                <NavLink to="/post"><i className="fas fa-camera text-white"></i></NavLink>
            </Action>
        );

    if (page !== '/messages')
        actions.push(
            <Action key={2} text="Messages" style={actionButtonStyles} onClick={null}>
                <NavLink to="/messages"><i className="fas fa-comments text-white"></i></NavLink>
            </Action>
        );

    if (page !== '/users')
        actions.push(
            <Action key={3} text="Users" style={actionButtonStyles} onClick={null}>
                <NavLink to="/users"><i className="fas fa-users text-white"></i></NavLink>
            </Action>
        );

    return actions;
}

const FloatingActionButton = props => {
    return (
        <Fragment>
            <Fab icon={<i className="fas fa-plus"></i>} event={'click'} position={position} mainButtonStyles={mainButtonStyles} actionButtonStyles={actionButtonStyles}>
                {props.history ? (
                    actionButtons(props.history)
                ) : ""}
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