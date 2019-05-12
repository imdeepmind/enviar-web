import React, { Component } from 'react';
import {
    Collapse,
    Navbar,
    NavbarToggler,
    Nav,
    NavItem,
} from 'reactstrap';

import { NavLink } from 'react-router-dom';
import { connect } from 'react-redux';

import { logoutUser } from '../../redux/actions';

import decode from 'jwt-decode';

import Avatar from '../../components/avatar';

const me = decode(localStorage.getItem('user'));


class TopNav extends Component{
    constructor(props) {
        super(props);
        this.toggle = this.toggle.bind(this);
        this.state = {
            isOpen: false
        };
    }
    toggle() {
        this.setState({
            isOpen: !this.state.isOpen
        });
    }
    logout = () => {
        this.props.logoutUser(this.props.history);
    }
    render(){
        console.log(me);
        return (
            <div>
                <Navbar color="primary" dark expand="xs" className="position-fixed w-100 border-bottom " style={{zIndex:"1030"}}>
                    <NavLink className="navbar-brand font-weight-bold" to="/">enviar</NavLink>
                    <NavbarToggler onClick={this.toggle} />
                    <Collapse isOpen={this.state.isOpen} navbar>
                        <Nav className="ml-auto" navbar>
                            <NavItem>
                                <NavLink className="m-1 text-dark"  title="profile" to="/profile">
                                    <Avatar source={me.avatar} title={me.name} width="24px" border="light" />
                                </NavLink>
                            </NavItem>
                            <NavItem>
                                <NavLink className="m-1 text-dark"  title="log out" to="#" onClick={this.logout}><i className="fas fa-sign-out-alt text-white"></i></NavLink>
                            </NavItem>
                        </Nav>
                    </Collapse>
                </Navbar>
                <div style={{height:"80px"}}></div>
            </div>
        )
    }
}

const mapStateToProps = (state) => state;
  
export default connect(
    mapStateToProps,
    {
        logoutUser
    }
)(TopNav);