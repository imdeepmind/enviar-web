import React, { Component } from 'react';
import {
    Collapse,
    Navbar,
    NavbarToggler,
    Nav,
    NavItem,
    ButtonDropdown, DropdownToggle, DropdownMenu, DropdownItem
} from 'reactstrap';

import { NavLink, Link } from 'react-router-dom';
import { connect } from 'react-redux';

import { logoutUser } from '../../redux/actions';

import decode from 'jwt-decode';

import Avatar from '../../components/avatar';

const me = localStorage.getItem('user') ? decode(localStorage.getItem('user')) : {};

const buttonStyle = {
    padding: "0",
    margin: "0",
    backgroundColor: "rgba(0,0,0,0)"
}

class TopNav extends Component{
    constructor(props) {
        super(props);
        this.toggle = this.toggle.bind(this);
        this.state = {
            isOpen: false,
            dropdownOpen: false
        };
    }
    toggle() {
        this.setState({
            isOpen: !this.state.isOpen
        });
    }
    toggleDropdown = () => {
        this.setState({
          dropdownOpen: !this.state.dropdownOpen
        });
    }
    back = () => {
        // if 
        this.props.history.goBack()   
    }
    logout = () => {
        this.props.logoutUser(this.props.history);
    }
    render(){
        return (
            <div>
                <Navbar color="primary" dark expand="xs" className="position-fixed w-100" style={{zIndex:"1030"}}>
                    <button style={{marginTop:"3px"}} onClick={this.back} className="border-0 text-white bg-transparent"><i className="fas fa-chevron-circle-left"></i></button>
                    <NavLink className="navbar-brand font-weight-bold" to="/">enviar</NavLink>
                    <NavbarToggler onClick={this.toggle} />
                    <Collapse isOpen={this.state.isOpen} navbar>
                        <Nav className="ml-auto" navbar>
                            <NavItem>
                                <ButtonDropdown isOpen={this.state.dropdownOpen} toggle={this.toggleDropdown}>
                                    <DropdownToggle caret  style={buttonStyle} className="no-focus cursor-pointer text-light">
                                        <Avatar source={me.avatar} title={me.name} width="20px" border="light" />
                                    </DropdownToggle>
                                    <DropdownMenu>
                                        <DropdownItem><Link to="/me" className="text-decoration-none text-dark"><i className="fas fa-user text-dark" style={{width: "18px"}}></i>{" "}Profile</Link></DropdownItem>
                                        <DropdownItem><Link to="/edit" className="text-decoration-none text-dark"><i className="fas fa-user-edit text-dark" style={{width: "18px"}}></i>{" "}Edit</Link></DropdownItem>
                                        <DropdownItem><Link to="/settings" className="text-decoration-none text-dark"><i className="fas fa-user-cog text-dark" style={{width: "18px"}}></i>{" "}Settings</Link></DropdownItem>
                                        <DropdownItem divider />
                                        <DropdownItem><Link to="/contributors" className="text-decoration-none text-dark"><i className="fas fa-hands-helping text-dark" style={{width: "18px"}}></i>{" "}Contributors</Link></DropdownItem>
                                        <DropdownItem><Link to="/support" className="text-decoration-none text-dark"><i className="fas fa-donate text-dark" style={{width: "18px"}}></i>{" "}Support</Link></DropdownItem>
                                        <DropdownItem divider />
                                        <DropdownItem onClick={this.logout}><i className="fas fa-sign-out-alt" style={{width: "18px"}}></i>{" "}Logout</DropdownItem>
                                    </DropdownMenu>
                                </ButtonDropdown>
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