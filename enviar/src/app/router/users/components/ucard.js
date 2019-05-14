import React, { Component } from 'react';
import { Card, CardBody, CardTitle, CardSubtitle, Row, Col, Button } from 'reactstrap';
import { Link } from 'react-router-dom';

import Avatar from '../../../components/avatar';

class Ucard extends Component{
    constructor(props){
        super(props);
        this.state = {
            selected: true
        }
    }

    componentDidMount(){
        this.setState({
            selected: this.props.isFollowee
        })
    }

    action = (what, username) => {
        this.props.action(what, username);
        this.setState({
            selected: !this.state.selected
        })
    }
    render(){
        return (
            <Card className="mb-3">
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
                            {this.state.selected ? 
                            <Button onClick={() => this.action('unfollow', this.props.username)}><i className="fas fa-user-times text-primary"></i></Button>  : 
                            <Button onClick={() => this.action('follow', this.props.username)}><i className="fas fa-user-plus text-primary"></i></Button>}
                        </Col>
                    </Row>
                </CardBody>
            </Card>
        )
    }
}

export default Ucard;