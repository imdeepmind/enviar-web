import React, { Component, Fragment } from 'react';
import { connect } from 'react-redux';
import { BeatLoader } from 'react-spinners';
import { Container,  TabContent, TabPane, Button } from 'reactstrap';
import classnames from 'classnames';

import { usersIndividual, userAction, usersFollowee, usersFollowers } from '../../../app/redux/actions';

import FloatingActionButton from '../../container/floatingActionButton';
import Hero from './components/hero';
import Detail from './components/detail';
import AError from './components/error';
import Ucard from './components/ucard';

const loading = {
    display: 'flex',
    justifyContent: 'center',
    padding: '30px'
}

const tabStyle = {
    marginRight: "-15px",
    marginLeft: "-15px"
}

class UserDetail extends Component {
    constructor(props) {
        super(props);
        this.state = {
          activeTab: '1'
        };
    }
    componentDidMount(){
        this.dataListRender();
    }
    toggle = tab => {
        if (this.state.activeTab !== tab) {
          this.setState({
            activeTab: tab
          }, () => this.loadData());
        }
    }
    loadData = () => {
        const tab = this.state.activeTab;

        if (tab === '2'){
            this.props.usersFollowee({username: this.props.match.params.username});
        } else if (tab === '3'){
            this.props.usersFollowers({username: this.props.match.params.username});
        }
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
        return (
            <Fragment>
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
                                gender={this.props.userReducer.user.gender}
                            />
                             <div className="d-flex justify-content-between align-items-center" style={tabStyle}>
                                <Button className={classnames({ 'border-bottom border-primary': this.state.activeTab === '1' })} onClick={() => { this.toggle('1'); }}><i className="fas fa-book-open"></i></Button>
                                <Button className={classnames({ 'border-bottom border-primary': this.state.activeTab === '2' })} onClick={() => { this.toggle('2'); }}><i className="fas fa-user-friends"></i></Button>
                                <Button className={classnames({ 'border-bottom border-primary': this.state.activeTab === '3' })} onClick={() => { this.toggle('3'); }}><i className="fas fa-users"></i></Button>
                            </div>

                            <TabContent activeTab={this.state.activeTab}>
                                <TabPane tabId="1">
                                    <Detail 
                                        location={this.buildAddress()} 
                                        dob={this.props.userReducer.user.dob} 
                                        bio={this.props.userReducer.user.bio}
                                    />
                                </TabPane>
                                <TabPane tabId="2">
                                    {this.props.userReducer.loadingSmall ? <BeatLoader key={0} css={loading} /> : 
                                            this.props.userReducer.following.length > 0 ? 
                                            this.props.userReducer.following.map(val => {
                                                return (
                                                    <Ucard 
                                                        key={val._id}
                                                        avatar={val.avatar} 
                                                        username={val.username} 
                                                        name={val.name}
                                                        isBlocked={val.isBlocked}
                                                        isFollowee={val.isFollowee}
                                                        isFollowers={val.isFollowers}
                                                        status={val.status}
                                                        followee={true}
                                                        action={this.userAction}
                                                    />
                                                )
                                            }) : <div className="text-center mt-2">this is not fair, this creature don't follow anyone</div>
                                        }
                                </TabPane>
                                <TabPane tabId="3">
                                {this.props.userReducer.loadingSmall ? <BeatLoader key={0} css={loading} /> : 
                                            this.props.userReducer.followers.length > 0 ? 
                                            this.props.userReducer.followers.map(val => {
                                                return (
                                                    <Ucard 
                                                        key={val._id}
                                                        avatar={val.avatar} 
                                                        username={val.username} 
                                                        name={val.name}
                                                        status={val.status}
                                                        isBlocked={val.isBlocked}
                                                        isFollowee={val.isFollowee}
                                                        isFollowers={val.isFollowers}
                                                        action={this.userAction}
                                                    />
                                                )
                                            }) : <div className="text-center mt-2">no one follow me :(, please follow me</div>
                                        }
                                </TabPane>
                            </TabContent>
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
        usersIndividual, userAction, usersFollowee, usersFollowers
    }
)(UserDetail);