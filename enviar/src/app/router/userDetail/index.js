import React, { Component, Fragment } from 'react';
import { connect } from 'react-redux';
import { BeatLoader } from 'react-spinners';
import { Container } from 'reactstrap';

import { usersIndividual, userAction } from '../../../app/redux/actions';

import TopNav from '../../container/topNav';
import FloatingActionButton from '../../container/floatingActionButton';
import Hero from './components/hero';
import Detail from './components/detail';
import AError from './components/error';

const loading = {
    display: 'flex',
    justifyContent: 'center',
}

class UserDetail extends Component {
    componentDidMount(){
        this.dataListRender();
    }
    buildAddress = () => {
        let arr = []
        const detail = this.props.userReducer.user;
        if (detail.city)
            arr.push(detail.city)
            
        if (detail.state)
            arr.push(detail.state)
        
        if (detail.country)
            arr.push(detail.country)

        return arr.join(', ');
    }
    dataListRender = () => {
        this.props.usersIndividual({username: this.props.match.params.username}, this.props.history);
    }
    userAction = (what, username) => {
        const data = {
            what: what,
            username: username
        }
        this.props.userAction(data, this.props.history);
    }
    render(){
        console.log(this.props);
        return (
            <Fragment>
                {/* <TopNav history={this.props.history} /> */}
                <Container>
                    {this.props.userReducer.loading ? <BeatLoader key={0} css={loading} /> : (
                        !this.props.userReducer.error ? 
                        <Fragment>
                             <Hero 
                                name={this.props.userReducer.user.name} 
                                username={this.props.userReducer.user.username} 
                                avatar={this.props.userReducer.user.avatar} 
                                isActive={this.props.userReducer.user.isActive}
                                isFollower={this.props.userReducer.user.isFollowers}
                                isFollowee={this.props.userReducer.user.isFollowee}
                                isBlocked={this.props.userReducer.user.isBlocked}
                                action={this.userAction}
                                history={this.props.history}
                                status={this.props.userReducer.user.status}
                            />
                            <Detail 
                                location={this.buildAddress()} 
                                dob={this.props.userReducer.user.dob} 
                                bio={this.props.userReducer.user.bio}
                            />
                        </Fragment>
                        : <AError title={this.props.userReducer.error} />
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
        usersIndividual, userAction
    }
)(UserDetail);