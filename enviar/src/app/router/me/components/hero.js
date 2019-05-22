import React, { Component } from 'react';
import { Row, Col, Button, ButtonGroup } from 'reactstrap';
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
            <Row className="bg-primary">
                <Col xs="12">
                    <button onClick={() => this.props.history.goBack()} className="border-0 text-white bg-transparent p-2 pt-4"><i style={{fontSize:"1.2rem"}} className="fas fa-chevron-circle-left"></i></button>
                    <span className="text-light p-2 pt-4 float-right font-weight-bold">{this.props.username}</span>
                </Col>
                <Col xs="12" md="6" className="text-center p-3">
                    <Avatar source={this.props.avatar} title={this.props.name} width="160px" border="light" quality="medium"/>
                </Col>
                <Col xs="12" md="6" className="text-center text-light">
                    <h1 className="text-light">{this.props.name}</h1>
                    <h4 className="text-light">{this.props.status}</h4>
                    <ButtonGroup className="mb-2 mt-2">
                        <Button color="primary">
                            <Link to="/edit" className="text-light">
                                <i className="fas fa-user-edit"></i><br />Edit
                            </Link>
                        </Button>
                        <Button color="primary">
                            <Link to="/settings/" className="text-light">
                                <i className="fas fa-user-cog"></i><br />Settings
                            </Link>
                        </Button>
                    </ButtonGroup>
                </Col>
                <Col xs="12" style={styleGender}></Col>
            </Row>
        )
    }
}

export default Hero;