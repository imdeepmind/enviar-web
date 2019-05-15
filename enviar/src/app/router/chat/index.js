import React, { Component, Fragment } from 'react';
import InfiniteScroll from 'react-infinite-scroller';
import { Container } from 'reactstrap';
import { connect } from 'react-redux';
import { BeatLoader } from 'react-spinners';
import decode from 'jwt-decode';

import TopNav from '../../container/topNav';
import Box from './components/box';

import { getChat } from '../../redux/actions';
import { defaultPageSize } from '../../../constants/configs';

const me = localStorage.getItem('user') ? decode(localStorage.getItem('user')) : {};

const loading = {
    display: 'flex',
    justifyContent: 'center',
}

class Chat extends Component{
    componentDidMount(){
        this.dataListRender();
    }
    dataListRender = () => {
        if (this.props.chatsReducer.loading){
            const data = {
                page:  1,
                limit: defaultPageSize,
                username: this.props.match.params.username
            }
            this.props.getChat(data, this.props.history);
        } 
    }
    loadMore = () => {
        if (this.props.chatsReducer.loading === false){
            const data = {
                page: this.props.chatsReducer.page + 1,
                limit: defaultPageSize,
                username: this.props.match.params.username
            }
            this.props.getChat(data, this.props.history);
        }
    }
    render(){
        console.log(this.props, me);
        const you = this.props.match.params.username;
        let items = this.props.chatsReducer.chats.map(val => {
            return (
                <Box 
                    key={val._id}
                    message={val.message}
                    createdAt={val.createdAt}
                    author={val.author}
                    to={val.to}
                    leftSide={you === val.author ? true: false}
                    avatar={you === val.author ? this.props.chatsReducer.friend.avatar : me.avatar}
                />
            )
        });

        items.reverse();
        return(
            <Fragment>
                <TopNav history={this.props.history} />
                <Container>
                    <InfiniteScroll
                        pageStart={1}
                        loadMore={this.loadMore}
                        hasMore={this.props.chatsReducer.pages >= this.props.chatsReducer.page}
                        loader={<BeatLoader key={0} css={loading} />}
                    >
                        {items}
                    </InfiniteScroll>

                    {/* {items.length < 1 && this.props.userReducer.loading === false ? <NoUsers /> : ""} */}
                </Container>
            </Fragment>
        )
    }
}

const mapStateToProps = (state) => state;
  
export default connect(
    mapStateToProps,
    {
        getChat
    }
)(Chat);