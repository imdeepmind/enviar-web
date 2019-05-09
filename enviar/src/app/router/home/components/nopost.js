import React from 'react';
import { Container } from 'reactstrap';

const NoPost = props => {
    return (
        <Container className="d-flex justify-content-center align-items-center flex-column text-center">
            <h1 className="display-1"><i className="fas fa-sad-tear"></i></h1>
            <h2 className="text-uppercase">YOU ARE SO ALONE</h2>
            <p>Hey follow someone to see their posts</p>
        </Container>
    )
}

export default NoPost;