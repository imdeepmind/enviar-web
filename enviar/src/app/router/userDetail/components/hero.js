import React, { Component, Fragment } from 'react';
import { Row, Col, Button, ButtonGroup } from 'reactstrap';

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
        this.setState({
            isFollower: !this.state.isFollower,
            isFollowee: !this.state.isFollowee
        })
    }
    handleBlockRequest = () => {
        this.setState({
            isBlocked: !this.state.isBlocked
        })
    }
    render(){
        return(
            <Row>
            <Col xs="12" md="6" className="text-center p-5">
                <Avatar source={this.props.avatar} title={this.props.name} width="128px" quality="medium"/>
            </Col>
            <Col xs="12" md="6" className="text-center">
                <h1>{this.props.name}</h1>
                <h3>@{this.props.username}</h3>
            </Col>
            <Col xs="12" className="text-center">
                <ButtonGroup>
                    <Button onClick={this.handleFriendRequest}>
                        {this.state.isFollower ? 
                            <Fragment><i className="fas fa-user-plus"></i>{" "}Unfollow</Fragment> : 
                            <Fragment><i className="fas fa-user-times"></i>{" "}Follow</Fragment>
                        }
                    </Button>
                    
                    {this.state.isFollower ? <Button><i className="fas fa-comments"></i>{" "}Message</Button> : <Button disabled><i className="fas fa-comments"></i>{" "}Message</Button>}
                    
                    <Button onClick={this.handleBlockRequest}>
                        {this.state.isBlocked ? 
                            <Fragment><i className="fas fa-user"></i>{" "}Unblock</Fragment> : 
                            <Fragment><i className="fas fa-user-slash"></i>{" "}Block</Fragment>
                        }
                    </Button>
                </ButtonGroup>
            </Col>
        </Row>
        )
    }
}

export default Hero;