import React, { Component } from 'react';
import { Card, CardBody, CardTitle, CardSubtitle, Row, Col, Button } from 'reactstrap';
import { Link } from 'react-router-dom';

import Avatar from '../../../components/avatar';

class Ucard extends Component{
    constructor(props){
        super(props);
        this.state = {
            followee: false,
            followers: false,
            blocked: false
        }
    }

    componentDidMount(){
        this.setState({
            followee: this.props.followee,
            followers: this.props.followers,
            blocked: this.props.blocked
        });
    }
    action = (what, username) => {
        this.props.action(what, username);

        if (what === 'unfollow')
            this.setState({followers: true, followee: false, blocked: false});
        else if (what === 'follow')
            this.setState({followers: false, followee: true, blocked: false});
        else if (what === 'unblock')
            this.setState({followers: true, followee: false, blocked: false});
    }
    actionButton = () => {
        if (this.state.followee)
            return <Button onClick={() => this.action('unfollow', this.props.username)}><i className="fas fa-user-times text-primary"></i></Button>;
        else if (this.state.followers)
            return <Button onClick={() => this.action('follow', this.props.username)}><i className="fas fa-user-plus text-primary"></i></Button>;
        else if (this.state.blocked)
            return <Button onClick={() => this.action('unblock', this.props.username)}><i className="fas fa-user text-primary"></i></Button>;
    }
    render(){
        
        return (
            <Card className="mb-2 mt-2">
                <CardBody>
                    <Row>
                        <Col xs="3" md="2" className="d-flex justify-content-center align-items-center">
                            <Avatar source={this.props.avatar} title={this.props.name} />
                        </Col>
                        <Col xs="7" md="9" className="text-left">
                            <CardTitle><Link to={`users/${this.props.username}`}>{this.props.name}<br /><small>@{this.props.username}</small></Link></CardTitle>
                            <CardSubtitle>{this.props.status}</CardSubtitle>
                        </Col>
                        <Col xs="1" className="d-flex justify-content-center align-items-center">
                            {this.actionButton()}
                        </Col>
                    </Row>
                </CardBody>
            </Card>
        )
    }
}

export default Ucard;