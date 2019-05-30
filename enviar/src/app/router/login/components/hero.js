import React from 'react';
import { Row, Col } from 'reactstrap';

const Hero = () => {
    return (
        <div className="d-flex align-items-start justify-content-center flex-column p-5 w-100 mh-100v">
            <Row>
                <Col xs="12" lg="6">
                    <h1 className="display-3 text-white">enviar</h1>
                    <h2 className="text-light">a open source add free social network that respects your privacy and private data</h2>
                    <p className="text-light">
                        please <b>login</b>{" "}or{" "}
                        <b>register</b> to continue
                    </p>
                </Col>
            </Row>
        </div>
    )
}

export default Hero;