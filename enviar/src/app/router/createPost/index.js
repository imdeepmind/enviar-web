import React, { Component, Fragment } from 'react';
import { Container } from 'reactstrap';

import TopNav from '../../container/topNav';


class CreatePost extends Component{
    render(){
        return (
            <Fragment>
                <TopNav />
                <Container>
                    <h1>Component works!</h1>
                </Container>
            </Fragment>
        )
    }
}

export default CreatePost;