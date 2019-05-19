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
            <Row className="bg-primary">
                <Col xs="12">
                    <button onClick={() => this.props.history.goBack()} className="border-0 text-white bg-transparent p-2 pt-4"><i style={{fontSize:"1.2rem"}} className="fas fa-chevron-circle-left"></i></button>
                    <span className="text-light p-2 pt-4 float-right font-weight-bold">{this.props.username}</span>
                </Col>
                <Col xs="12" md="6" className="text-center p-5">
                    <Avatar source={this.props.avatar} title={this.props.name} width="120px" border="light" quality="medium"/>
                </Col>
                <Col xs="12" md="6" className="text-center text-light">
                    <h1 className="text-light">{this.props.name}</h1>
                    <h4 className="text-light">{this.props.status}</h4>
                    <ButtonGroup className="mb-2 mt-2">
                        <Button onClick={this.handleFriendRequest} color="primary">
                            {this.state.isFollowee ? 
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
                    </ButtonGroup>
                </Col>
                <Col xs="12" style={styleGender}></Col>
            </Row>
        )
    }
}

export default Hero;