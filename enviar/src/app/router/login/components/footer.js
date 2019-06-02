import React from 'react';
import { Row, Col } from 'reactstrap';
import { Link } from 'react-router-dom';

const Footer = () => {
    return (
        <footer className="bg-pure-dark text-light p-5" id="login-footer">
            <Row>
                <Col xs="12" md="3">
                    <h2>About</h2>
                    <hr className="bg-light" />
                    <p>enviar is open source social network and photo sharing platform. its code is completely available under MIT license.</p>
                </Col>
                <Col xs="12" md="3">
                    <h2>Site Links</h2>
                    <hr className="bg-light" />
                    <ul>
                        <li><Link className="text-light font-weight-regular" to="/login">Login</Link></li>
                        <li><Link className="text-light font-weight-regular" to="/register">Register</Link></li>
                        <li><Link className="text-light font-weight-regular" to="/contributors">Contributions</Link></li>
                        <li><Link className="text-light font-weight-regular" to="/support">Support</Link></li>
                    </ul>
                </Col>
                <Col xs="12" md="3">
                    <h2>Project Links</h2>
                    <hr className="bg-light" />
                    <ul>
                        <li><Link className="text-light font-weight-regular" to="https://github.com/imdeepmind/enviar/">Back-end</Link></li>
                        <li><Link className="text-light font-weight-regular" to="https://github.com/imdeepmind/enviar-web/">Front-end</Link></li>
                        <li><Link className="text-light font-weight-regular" to="#">Documentation</Link></li>
                    </ul>
                </Col>
                <Col xs="12" md="3">
                    <h2>Contact</h2>
                    <hr className="bg-light" />
                    <ul>
                        <li><a className="text-light font-weight-regular" href="mailto:abhishekchatterjeejit@gmail.com">abhishekchatterjeejit@gmail.com</a></li>
                    </ul>
                </Col>
            </Row>
        </footer>
    )
}

export default Footer;