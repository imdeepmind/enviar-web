import React from 'react';
import { Row, Col } from 'reactstrap';

const styleHero = {
    'background' : 'linear-gradient(to right, #4A00E0, #8E2DE2)',
    'height'     : '100vh',
    'width'      : '100%' 
}

const Hero = (props) => {
    return (
        <div className="d-flex align-items-start justify-content-center flex-column p-5" style={styleHero}>
            <Row>
                <Col xs="12" lg="6">
                    <h1 className="display-3 text-white">enviar</h1>
                    <h2 className="text-light">a open source social network that respects your privacy and private data</h2>
                    <p className="text-light">
                        please <b className="cursor-pointer" onClick={props.loginMethod}>login</b>{" "}or{" "}
                        <b className="cursor-pointer" onClick={props.registerMethod}>register</b> to continue
                    </p>
                </Col>
            </Row>
        </div>
    )
}

export default Hero;