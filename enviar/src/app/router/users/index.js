import React, { Component, Fragment } from 'react';
import InfiniteScroll from 'react-infinite-scroller';
import { Container } from 'reactstrap';
import { BeatLoader } from 'react-spinners';
import { connect } from 'react-redux';

import TopNav from '../../container/topNav';
import Ucard from './components/ucard';
import NoUsers from './components/noUsers';

import { users, userAction } from '../../redux/actions';
import { defaultPageSize } from '../../../constants/configs';
import FloatingActionButton from '../../container/floatingActionButton';

const loading = {
    display: 'flex',
    justifyContent: 'center',
}

class Users extends Component{
    componentDidMount(){
        this.dataListRender();
    }
    dataListRender = () => {
        if (this.props.userReducer.loading){
            const data = {
                page:  1,
                limit: defaultPageSize
            }
            this.props.users(data, this.props.history);
        } 
    }
    loadMore = () => {
        if (this.props.userReducer.loading === false){
            const data = {
                page: this.props.userReducer.page + 1,
                limit: defaultPageSize
            }
            this.props.users(data, this.props.history);
        }
    }

    userAction = (what, username) => {
        const data = {
            what: what,
            username: username
        }
        this.props.userAction(data, this.props.history);
    }
    render(){
        const items = this.props.userReducer.users.map(val => {
            return (
                <Ucard 
                    key={val._id}
                    avatar={val.avatar} 
                    username={val.username} 
                    name={val.name}
                    status={val.status}
                    isBlocked={val.isBlocked}
                    isFollowers={val.isFollowers}
                    isFollowee={val.isFollowee}
                    action={this.userAction}
                />
            )
        })

        return (
            <Fragment>
                <TopNav history={this.props.history} />
                <Container>
                    <InfiniteScroll
                        pageStart={1}
                        loadMore={this.loadMore}
                        hasMore={this.props.userReducer.pages >= this.props.userReducer.page}
                        loader={<BeatLoader key={0} css={loading} />}
                    >
                        {items}
                    </InfiniteScroll>

                    {items.length < 1 && this.props.userReducer.loading === false ? <NoUsers /> : ""}
                </Container>

                <FloatingActionButton history={this.props.history} />
            </Fragment>
        )
    }
}
const mapStateToProps = (state) => state;
  
export default connect(
    mapStateToProps,
    {
        users, userAction
    }
)(Users);