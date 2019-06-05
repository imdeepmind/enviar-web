import React, { Component, Fragment } from 'react';
import { Row, Col, ButtonGroup, Container } from 'reactstrap';
import { Link } from 'react-router-dom';

import Avatar from '../../../components/avatar';

class Hero extends Component{
    constructor(){
        super();
        this.state = {
            isActive: true,
            isFollower: true,
            isFollowee: true,
            isBlocked: true
        }
    }
    componentDidMount(){
        this.setState({
            isActive: this.props.isActive,
            isFollower: this.props.isFollower,
            isFollowee: this.props.isFollowee,
            isBlocked: this.props.isBlocked
        });
    }
    handleFriendRequest = () => {
        const name = this.state.isFollowee ? 'unfollow' : 'follow';
        this.props.action(name, this.props.username);
        this.setState({
            isFollower: !this.state.isFollower,
            isFollowee: !this.state.isFollowee
        })
    }
    handleBlockRequest = () => {
        const name = this.state.isBlocked ? 'unblock' : 'block';
        this.props.action(name, this.props.username);
        this.setState({
            isBlocked: !this.state.isBlocked
        })
    }
    render(){
        const styleGender = {
            width: '100%',
            height: '5px'
        };
        if (this.props.gender === 'm') styleGender['background'] = 'deepskyblue';
        else styleGender['background'] = 'hotpink';

        return(
            <div className="bg-primary w-100">
                <button onClick={() => this.props.history.goBack()} className="border-0 text-white bg-transparent p-3 pt-4  pl-md-4 no-focus"><i style={{fontSize:"1.2rem"}} className="fas fa-chevron-circle-left"></i></button>
                <span className="text-light p-3 pt-4 pr-md-4 float-right font-weight-bold">{this.props.username}</span>
                <Container>
                    <Row className="bg-primary">
                        <Col xs="12" md="4" className="text-center p-3 p-md-5">
                            <Avatar source={this.props.avatar} title={this.props.name} width="160px" border="light" quality="medium"/>
                        </Col>
                        <Col xs="12" md="8" className="text-center text-md-left text-light d-md-flex justify-content-center flex-column align-items-start">
                            <h1 className="text-light">{this.props.name}</h1>
                            <h4 className="text-light">{this.props.status}</h4>
                            <ButtonGroup>
                                <span onClick={this.handleFriendRequest} className="text-light m-3 ml-md-0 text-center text-decoration-none cursor-pointer">
                                    {this.state.isFollowee ? 
                                        <Fragment><i className="fas fa-user-times"></i>{" "}Unfollow</Fragment> : 
                                        <Fragment><i className="fas fa-user-plus"></i>{" "}Follow</Fragment>
                                    }
                                </span>
                                
                                {this.state.isFollower || this.state.isFollowee ? 
                                    <span className="text-light m-3 ml-md-0 text-center text-decoration-none cursor-pointer" >
                                        <Link to={"/messages/" + this.props.username} className="text-light text-decoration-none">
                                            <i className="fas fa-comments"></i>{" "}
                                            Message
                                        </Link>
                                    </span> : 
                                    <span className="text-light m-3 ml-md-0 text-center text-decoration-none cursor-pointer opacity-50">
                                        <i className="fas fa-comments"></i>{" "}Message
                                    </span>}
                                
                                <span onClick={this.handleBlockRequest} className="text-light m-3 ml-md-0 text-center text-decoration-none cursor-pointer">
                                    {this.state.isBlocked ? 
                                        <Fragment><i className="fas fa-user"></i>{" "}Unblock</Fragment> : 
                                        <Fragment><i className="fas fa-user-slash"></i>{" "}Block</Fragment>
                                    }
                                </span>
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