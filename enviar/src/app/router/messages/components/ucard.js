import React, { Component } from 'react';
import { Card, CardBody, CardTitle, CardSubtitle, Row, Col } from 'reactstrap';
import { Link } from 'react-router-dom';

import Avatar from '../../../components/avatar';

class Ucard extends Component{
    render(){
        return (
            <Card className="mb-3">
                <CardBody>
                    <Row>
                        <Col xs="3" md="2" className="d-flex justify-content-center align-items-center">
                            <Avatar source={this.props.avatar} title={this.props.name} />
                        </Col>
                        <Col xs="7" md="9" className="text-left">
                            <CardTitle><Link to={`messages/${this.props.username}`}>{this.props.name}<br /><small>@{this.props.username}</small></Link></CardTitle>
                            <CardSubtitle>{this.props.status}</CardSubtitle>
                        </Col>
                    </Row>
                </CardBody>
            </Card>
        )
    }
}

export default Ucard;