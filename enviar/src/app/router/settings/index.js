import React, { Component, Fragment } from 'react';
import { Container } from 'reactstrap';

import TopNav from '../../container/topNav';
import FloatingActionButton from '../../container/floatingActionButton';

class Settings extends Component{
    render(){
        return(
            <Fragment>
                <TopNav />
                <Container>
                    <h1>Welcome to Settings page</h1>
                </Container>
                <FloatingActionButton history={this.props.history} />
            </Fragment>
        )
    }
}

export default Settings;