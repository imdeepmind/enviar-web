import React, { Component, Fragment } from 'react';
import { Container, Row, Col } from 'reactstrap';

import TopNav from '../../container/topNav';
import Posts from './components/posts';

class Home extends Component{
    render(){
        return (
            <Fragment>
                <TopNav />
                <Container>
                    <Row>
                        <Col xs="12">Post Something</Col>
                        <Col xs="12" lg="7" className="mt-4 ">
                            Posts
                        </Col>
                        <Col xs="12" lg="5" className="mt-4 d-none d-lg-block">
                            Controllers
                        </Col>
                    </Row>
                </Container>
            </Fragment>
        )
    }
}
export default Home;