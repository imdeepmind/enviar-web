import React from 'react';
import { Container } from 'reactstrap';

const NoPost = props => {
    return (
        <Container className="d-flex justify-content-center align-items-center flex-column text-center" style={{minHeight:"300px"}}>
            <h1 className="display-1"><i className="fas fa-sad-tear text-primary"></i></h1>
            <h2 className="text-uppercase">NO USERS FOUND</h2>
            <p>Check your search query</p>
        </Container>
    )
}

export default NoPost;