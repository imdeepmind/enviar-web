import React, { Fragment } from 'react';
import { Container } from 'reactstrap';

import TopNav from '../../container/topNav';


const e404 = (props) => {
    return (
        <Fragment>
            <TopNav />
            <Container className="d-flex justify-content-center align-items-center flex-column text-center">
                <h1 className="display-1"><i className="fas fa-skull-crossbones"></i></h1>
                <h2>404 PAGE NOT FOUND</h2>
                <p>I think you should learn typing properly</p>
            </Container>
        </Fragment>
    )
}

export default e404;