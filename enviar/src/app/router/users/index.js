import React, { Component, Fragment } from 'react';
import InfiniteScroll from 'react-infinite-scroller';
import { Container } from 'reactstrap';
import { connect } from 'react-redux';

import TopNav from '../../container/topNav';
import Ucard from './components/ucard';

import { users } from '../../redux/actions';

class Users extends Component{
    constructor(props){
        super(props);
    }
    componentDidMount(){
        this.dataListRender();
    }
    componentDidUpdate(nextProps){
        
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
                    {this.props.userReducer.loading ? "" : (
                        <InfiniteScroll
                            pageStart={1}
                            loadMore={this.loadMore}
                            hasMore={this.props.userReducer.pages >= this.props.userReducer.page}
                            loader={<div className="loader" key={0}>Loading ...</div>}
                        >
                            {items}
                        </InfiniteScroll>
                    )}
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