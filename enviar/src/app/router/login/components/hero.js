import React from 'react';
import { Row, Col } from 'reactstrap';
import { Link } from 'react-router-dom';

const Hero = () => {
    return (
        <div className="d-flex align-items-start justify-content-center flex-column p-5 w-100 mh-100v" id="hero">
            <Row>
                <Col xs="12" lg="6">
                    <h1 className="display-3 text-white">enviar</h1>
                    <h2 className="text-light">a open source add free social network that respects your privacy and private data</h2>
                    <p className="text-light">
                        please <b>login</b>{" "}or{" "}
                        <Link to="/register" className="text-light font-weight-bold text-decoration-none">register</Link> to continue
                    </p>
                </Col>
            </Row>
        </div>
    )
}

export default Hero;