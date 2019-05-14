import React, { Fragment } from 'react';
import { Container } from 'reactstrap';

import TopNav from '../../container/topNav';
import FloatingActionButton from '../../container/floatingActionButton';


const e404 = (props) => {
    return (
        <Fragment>
            <TopNav />
            <Container className="d-flex justify-content-center align-items-center flex-column text-center" style={{minHeight:"300px"}}>
                <h1 className="display-1"><i className="fas fa-skull-crossbones text-primary"></i></h1>
                <h2>404 PAGE NOT FOUND</h2>
                <p>I think you should learn typing properly</p>
            </Container>

            <FloatingActionButton history={props.history} />
        </Fragment>
    )
}

export default e404;