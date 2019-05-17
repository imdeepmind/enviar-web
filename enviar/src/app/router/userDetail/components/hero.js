import React, { Component, Fragment } from 'react';
import { Row, Col, Button, ButtonGroup } from 'reactstrap';
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
        const name = this.state.isFollower ? 'unfollow' : 'follow';
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
        return(
            <Row>
            <Col xs="12" md="6" className="text-center p-5">
                <Avatar source={this.props.avatar} title={this.props.name} width="200px" quality="medium"/>
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
                    
                    {this.state.isFollower ? <Button><Link to={"/messages/" + this.props.username} className="text-dark"><i className="fas fa-comments"></i>{" "}Message</Link></Button> : <Button disabled><i className="fas fa-comments"></i>{" "}Message</Button>}
                    
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