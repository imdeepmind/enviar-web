import React, { Component } from 'react';
import { Row, Col, ButtonGroup, Container } from 'reactstrap';
import { Link } from 'react-router-dom';

import Avatar from '../../../components/avatar';

class Hero extends Component{
    render(){
        const styleGender = {
            width: '100%',
            height: '5px'
        };
        if (this.props.gender === 'm') styleGender['background'] = 'deepskyblue';
        else styleGender['background'] = 'hotpink';

        return(
            <div className="bg-primary w-100">
                <button onClick={() => this.props.history.goBack()} className="border-0 text-white bg-transparent p-2 pt-4  pl-md-4 no-focus"><i style={{fontSize:"1.2rem"}} className="fas fa-chevron-circle-left"></i></button>
                <span className="text-light p-2 pt-4 pr-md-4 float-right font-weight-bold">{this.props.username}</span>
                <Container>
                    <Row>
                        <Col xs="12" md="4" className="text-center p-3 p-md-5">
                            <Avatar source={this.props.avatar} title={this.props.name} width="160px" border="light" quality="medium"/>
                        </Col>
                        <Col xs="12" md="8" className="text-center text-md-left text-light d-md-flex justify-content-center flex-column align-items-start">
                            <h1 className="text-light">{this.props.name}</h1>
                            <h4 className="text-light">{this.props.status}</h4>
                            <ButtonGroup>
                                <Link to="/edit" className="text-light m-3 ml-md-0 text-center text-decoration-none">
                                    <i className="fas fa-user-edit"></i><br />Edit
                                </Link>
                                <Link to="/settings/" className="text-light m-3 ml-md-0 text-center text-decoration-none">
                                    <i className="fas fa-user-cog"></i><br />Settings
                                </Link>
                            </ButtonGroup>
                        </Col>
                    </Row>
                </Container>
                <div style={styleGender}></div>
            </div>
        )
            
           
    }
}

export default Hero;