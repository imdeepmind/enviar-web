import React, { Component, Fragment } from 'react';
import InfiniteScroll from 'react-infinite-scroller';
import { Container } from 'reactstrap';
import { connect } from 'react-redux';

import TopNav from '../../container/topNav';
import Ucard from './components/ucard';
import More from './components/more';

import { users } from '../../redux/actions';



class Users extends Component{
    constructor(props){
        super(props);
        this.state = {
            page: 1,
            limit: 3,
        }
    }
    componentDidMount(){
        this.dataListRender();
    }
    dataListRender = () => {
        const data = {
            page: this.state.page,
            limit: this.state.limit
        }
        this.props.users(data, this.props.history);
    }
    loadMore = () => {
        this.setState({
            page: this.state.page + 1,
            limit: this.state.limit
        }, () => this.dataListRender());
    }
    render(){
        console.log('props',this.props);
        console.log('state', this.state);
        console.log(this.props.userReducer.pages)
        console.log(this.state.page)
        console.log(this.props.userReducer.pages >= this.state.page);

        const items = this.props.userReducer.users.map(val => {
            return (
                <Ucard 
                    key={val._id}
                    avatar={val.avatar} 
                    username={val.username} 
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
                            hasMore={this.props.userReducer.pages >= this.state.page}
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