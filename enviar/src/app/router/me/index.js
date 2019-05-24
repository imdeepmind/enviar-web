import React, { Component, Fragment } from 'react';
import { connect } from 'react-redux';
import { BeatLoader } from 'react-spinners';
import { Container, TabContent, TabPane, Button } from 'reactstrap';
import classnames from 'classnames';

import { getMe, getFollowersList, getFollowingList, getBlockedList, userAction } from '../../../app/redux/actions';

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

class Me extends Component {
    constructor(props) {
        super(props);
        this.state = {
          activeTab: '1'
        };
    }
    componentDidMount(){
        this.dataListRender();
    }
    loadData = () => {
        const tab = this.state.activeTab;

        if (tab === '2'){
            this.props.getFollowingList();
        } else if (tab === '3'){
            this.props.getFollowersList();
        } else if (tab === '4'){
            this.props.getBlockedList();
        }
    }
    toggle = tab => {
        if (this.state.activeTab !== tab) {
          this.setState({
            activeTab: tab
          }, () => this.loadData());
        }
    }
    buildAddress = () => {
        let arr = []
        const detail = this.props.meReducer.me;
        if (detail.city)
            arr.push(detail.city)
            
        if (detail.state)
            arr.push(detail.state)
        
        if (detail.country)
            arr.push(detail.country)

        return arr.join(', ');
    }
    dataListRender = () => {
        this.props.getMe();
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
                    {this.props.meReducer.loading ? <BeatLoader key={0} css={loading} /> : (
                        !this.props.meReducer.error ? 
                        <Fragment>
                             <Hero 
                                name={this.props.meReducer.me.name} 
                                username={this.props.meReducer.me.username} 
                                avatar={this.props.meReducer.me.avatar} 
                                history={this.props.history}
                                status={this.props.meReducer.me.status}
                                gender={this.props.meReducer.me.gender}
                            />
                            <div className="d-flex justify-content-between align-items-center" style={tabStyle}>
                                <Button className={classnames({ 'border-bottom border-primary': this.state.activeTab === '1' })} onClick={() => { this.toggle('1'); }}><i className="fas fa-book-open"></i></Button>
                                <Button className={classnames({ 'border-bottom border-primary': this.state.activeTab === '2' })} onClick={() => { this.toggle('2'); }}><i className="fas fa-user-friends"></i></Button>
                                <Button className={classnames({ 'border-bottom border-primary': this.state.activeTab === '3' })} onClick={() => { this.toggle('3'); }}><i className="fas fa-users"></i></Button>
                                <Button className={classnames({ 'border-bottom border-primary': this.state.activeTab === '4' })} onClick={() => { this.toggle('4'); }}><i className="fas fa-user-slash"></i></Button>
                            </div>
                            <TabContent activeTab={this.state.activeTab}>
                                <TabPane tabId="1">
                                    <Detail 
                                        location={this.buildAddress()} 
                                        dob={this.props.meReducer.me.dob} 
                                        bio={this.props.meReducer.me.bio}
                                    />
                                </TabPane>
                                <TabPane tabId="2">
                                    {this.props.meReducer.loadingSmall ? <BeatLoader key={0} css={loading} /> : 
                                        this.props.meReducer.following.length > 0 ? 
                                        this.props.meReducer.following.map(val => {
                                            return (
                                                <Ucard 
                                                    key={val._id}
                                                    avatar={val.avatar} 
                                                    username={val.username} 
                                                    name={val.name}
                                                    status={val.status}
                                                    followee={true}
                                                    action={this.userAction}
                                                />
                                            )
                                        }) : <div className="text-center mt-2">please follow someone to see them in this list</div>
                                    }
                                </TabPane>
                                <TabPane tabId="3">
                                    {this.props.meReducer.loadingSmall ? <BeatLoader key={0} css={loading} /> : 
                                        this.props.meReducer.followers.length > 0 ? 
                                        this.props.meReducer.followers.map(val => {
                                            return (
                                                <Ucard 
                                                    key={val._id}
                                                    avatar={val.avatar} 
                                                    username={val.username} 
                                                    name={val.name}
                                                    status={val.status}
                                                    followers={true}
                                                    action={this.userAction}
                                                />
                                            )
                                        }) : <div className="text-center mt-2">hey do want to know the secret to get more followers, well the answer is just to ask all your friends to join enviar</div>
                                    }
                                </TabPane>
                                <TabPane tabId="4">
                                    {this.props.meReducer.loadingSmall ? <BeatLoader key={0} css={loading} /> : 
                                        this.props.meReducer.blocked.length > 0 ? 
                                        this.props.meReducer.blocked.map(val => {
                                            return (
                                                <Ucard 
                                                    key={val._id}
                                                    avatar={val.avatar} 
                                                    username={val.username} 
                                                    name={val.name}
                                                    status={val.status}
                                                    blocked={true}
                                                    action={this.userAction}
                                                />
                                            )
                                        }) : <div className="text-center mt-2">i really love empty lists</div>
                                    }
                                </TabPane>
                            </TabContent>
                        </Fragment>
                        : <AError title={this.props.meReducer.error} />
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
        getMe, getFollowersList, getFollowingList, getBlockedList, userAction
    }
)(Me);