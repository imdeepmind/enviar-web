import React, { Component, Fragment } from 'react';
import { Row, Col, Button, ButtonGroup } from 'reactstrap';
import { Link } from 'react-router-dom';

import Avatar from '../../../components/avatar';

class Hero extends Component{
    render(){
        return(
            <Row className="bg-primary">
                <Col xs="12">
                    <button onClick={() => this.props.history.goBack()} className="border-0 text-white bg-transparent p-2 pt-4"><i style={{fontSize:"1.2rem"}} className="fas fa-chevron-circle-left"></i></button>
                    <span className="text-light p-2 pt-4 float-right font-weight-bold">{this.props.username}</span>
                </Col>
                <Col xs="12" md="6" className="text-center pb-3 pt-5 pl-5 pr-5 ">
                    <Avatar source={this.props.avatar} title={this.props.name} width="200px" border="light" quality="medium"/>
                </Col>
                <Col xs="12" md="6" className="text-center text-light">
                    <h1 className="text-light">{this.props.name}</h1>
                    {/* <h3 className="text-light">@{this.props.username}</h3> */}
                    <h4 className="text-light">{this.props.status}</h4>
                    {/* <ButtonGroup className="mb-2 mt-2">
                        <Button onClick={this.handleFriendRequest} color="primary">
                            {this.state.isFollower ? 
                                <Fragment><i className="fas fa-user-times"></i>{" "}Unfollow</Fragment> : 
                                <Fragment><i className="fas fa-user-plus"></i>{" "}Follow</Fragment>
                            }
                        </Button>
                        
                        {this.state.isFollower ? <Button color="primary"><Link to={"/messages/" + this.props.username} className="text-light"><i className="fas fa-comments"></i>{" "}Message</Link></Button> : <Button color="primary" disabled><i className="fas fa-comments"></i>{" "}Message</Button>}
                        
                        <Button onClick={this.handleBlockRequest} color="primary">
                            {this.state.isBlocked ? 
                                <Fragment><i className="fas fa-user"></i>{" "}Unblock</Fragment> : 
                                <Fragment><i className="fas fa-user-slash"></i>{" "}Block</Fragment>
                            }
                        </Button>
                    </ButtonGroup> */}
                </Col>
            </Row>
        )
    }
}

export default Hero;