import React, { Component, Fragment } from 'react';
import { connect } from 'react-redux';
import { BeatLoader } from 'react-spinners';
import { Container } from 'reactstrap';

import { usersIndividual } from '../../../app/redux/actions';

import TopNav from '../../container/topNav';
import FloatingActionButton from '../../container/floatingActionButton';
import Hero from './components/hero';

const loading = {
    display: 'flex',
    justifyContent: 'center',
}

class UserDetail extends Component {
    componentDidMount(){
        this.dataListRender();
    }
    dataListRender = () => {
        this.props.usersIndividual({username: this.props.match.params.username}, this.props.history);
    }
    render(){
        console.log(this.props);
        return (
            <Fragment>
                <TopNav history={this.props.history} />
                <Container>
                    
                    {this.props.userReducer.loading ? <BeatLoader key={0} css={loading} /> : (
                        <Hero 
                            name={this.props.userReducer.user.name} 
                            username={this.props.userReducer.user.username} 
                            avatar={this.props.userReducer.user.avatar} 
                        />
                    )}

                    <FloatingActionButton history={this.props.history} />
                </Container>
            </Fragment>
            
        )
    }
}

const mapStateToProps = (state) => state;
  
export default connect(
    mapStateToProps,
    {
        usersIndividual
    }
)(UserDetail);