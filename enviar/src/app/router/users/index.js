import React, { Component, Fragment } from 'react';
import InfiniteScroll from 'react-infinite-scroller';
import { Container } from 'reactstrap';
import { BeatLoader } from 'react-spinners';
import { connect } from 'react-redux';

import TopNav from '../../container/topNav';
import Ucard from './components/ucard';
import NoUsers from './components/noUsers';

import { users } from '../../redux/actions';

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
                limit: 3
            }
            this.props.users(data, this.props.history);
        } 
    }
    loadMore = () => {
        if (this.props.userReducer.loading === false){
            const data = {
                page: this.props.userReducer.page + 1,
                limit: 3
            }
            this.props.users(data, this.props.history);
        }
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
                />
            )
        })

        return (
            <Fragment>
                <TopNav />
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
            </Fragment>
        )
    }
}
const mapStateToProps = (state) => state;
  
export default connect(
    mapStateToProps,
    {
        users
    }
)(Users);