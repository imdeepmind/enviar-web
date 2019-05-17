import React from 'react';
import { Container } from 'reactstrap';

const AError = props => {
    return (
        <Container className="d-flex justify-content-center align-items-center flex-column text-center" style={{minHeight:"300px"}}>
            <h1 className="display-1"><i className="fas fa-skull-crossbones text-primary"></i></h1>
            <h2 className="text-uppercase">{props.title}</h2>
        </Container>
    )
}

export default AError;