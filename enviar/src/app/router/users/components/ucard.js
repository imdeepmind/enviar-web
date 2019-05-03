import React from 'react';
import { Card, CardBody, CardTitle, CardSubtitle, Row, Col, Button } from 'reactstrap';
import { Link } from 'react-router-dom';

import Avatar from '../../../components/avatar';

const Ucard = (props) => {
    return (
        <Card className="mb-3">
            <CardBody>
                <Row>
                    <Col xs="3" md="2" className="d-flex justify-content-center align-items-center">
                        <Avatar source={props.avatar} title={props.name} />
                    </Col>
                    <Col xs="7" md="9" className="text-left">
                        <CardTitle><Link to={`users/${props.username}`}>{props.username}</Link></CardTitle>
                        <CardSubtitle>{props.status}</CardSubtitle>
                    </Col>
                    <Col xs="1" className="d-flex justify-content-center align-items-center">
                        {props.isBlocked ? 
                            <Button onClick={null}><i className="fas fa-user-slash"></i></Button> : 
                            props.isFollowee ? 
                            <Button onClick={null}><i className="fas fa-user-times"></i></Button> :
                            <Button onClick={null}><i className="fas fa-user-plus"></i></Button>
                        }
                    </Col>
                </Row>
            </CardBody>
        </Card>
    )
}

export default Ucard;