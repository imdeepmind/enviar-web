import React from 'react';
import { Col, Row, Card, CardBody } from 'reactstrap';
import { Link } from 'react-router-dom';

const Actions = props => {
    return(
        <Row id="actions">
            <Col xs="4">
                <Card>
                    <CardBody className="text-center">
                        <Link to="/post" className="text-dark text-decoration-none ">
                            <h1><i className="fas fa-camera text-dark"></i></h1>
                            Post
                        </Link>
                    </CardBody>
                </Card>
            </Col>

            <Col xs="4">
                <Card>
                    <CardBody className="text-center">
                        <Link to="/messages" className="text-dark text-decoration-none ">
                            <h1><i className="fas fa-comments text-dark"></i></h1>
                            Messages
                        </Link>
                    </CardBody>
                </Card>
            </Col>

            <Col xs="4">
                <Card>
                    <CardBody className="text-center">
                        <Link to="/users" className="text-dark text-decoration-none ">
                            <h1><i className="fas fa-users text-dark"></i></h1>
                            Users
                        </Link>
                    </CardBody>
                </Card>
            </Col>


            <Col xs="4">
                <Card>
                    <CardBody className="text-center">
                        <Link to="/me" className="text-dark text-decoration-none ">
                            <h1><i className="fas fa-user text-dark"></i></h1>
                            Profile
                        </Link>
                    </CardBody>
                </Card>
            </Col>

            <Col xs="4">
                <Card>
                    <CardBody className="text-center">
                        <Link to="/edit" className="text-dark text-decoration-none ">
                            <h1><i className="fas fa-user-edit text-dark"></i></h1>
                            Edit
                        </Link>
                    </CardBody>
                </Card>
            </Col>

            <Col xs="4">
                <Card>
                    <CardBody className="text-center">
                        <Link to="/settings" className="text-dark text-decoration-none ">
                            <h1><i className="fas fa-user-cog text-dark"></i></h1>
                            Settings
                        </Link>
                    </CardBody>
                </Card>
            </Col>


            <Col xs="4">
                <Card>
                    <CardBody className="text-center">
                        <Link to="/contributors" className="text-dark text-decoration-none ">
                            <h1><i className="fas fa-hands-helping text-dark"></i></h1>
                            Contributors
                        </Link>
                    </CardBody>
                </Card>
            </Col>

            <Col xs="4">
                <Card>
                    <CardBody className="text-center">
                        <Link to="/support" className="text-dark text-decoration-none">
                            <h1><i className="fas fa-donate text-dark"></i></h1>
                            Support
                        </Link>
                    </CardBody>
                </Card>
            </Col>

            <Col xs="4">
                <Card>
                    <CardBody className="text-center">
                        <Link to="" className="text-dark text-decoration-none" onClick={props.logout}>
                            <h1><i className="fas fa-sign-out-alt text-dark"></i></h1>
                            Logout
                        </Link>
                    </CardBody>
                </Card>
            </Col>
        </Row>
    )
}

export default Actions;