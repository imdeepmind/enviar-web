import React, { Component } from 'react';
import { Card, CardBody, CardTitle, CardSubtitle, Row, Col, Button } from 'reactstrap';
import { Link } from 'react-router-dom';

import Avatar from '../../../components/avatar';

class Ucard extends Component{
    action = (what, username) => {
        this.props.action(what, username);
        this.setState({
            selected: !this.state.selected
        })
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
                            {this.props.followee ? 
                            <Button onClick={() => this.action('unfollow', this.props.username)}><i className="fas fa-user-times text-primary"></i></Button>  :
                            this.props.followers ? 
                            <Button onClick={() => this.action('follow', this.props.username)}><i className="fas fa-user-plus text-primary"></i></Button> : 
                            this.props.blocked ? 
                            <Button onClick={() => this.action('unblock', this.props.username)}><i className="fas fa-fa-user text-primary"></i></Button> : ""}
                        </Col>
                    </Row>
                </CardBody>
            </Card>
        )
    }
}

export default Ucard;