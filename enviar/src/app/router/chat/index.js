import React, { Component } from 'react';
import InfiniteScroll from 'react-infinite-scroller';
import { connect } from 'react-redux';
import { BeatLoader } from 'react-spinners';

import Box from './components/box';
import Head from './components/head';
import Sender from './components/sender';

import { getChat, usersIndividual, sendMessage } from '../../redux/actions';
import { defaultPageSize } from '../../../constants/configs';

const loading = {
    display: 'flex',
    justifyContent: 'center',
}

class Chat extends Component{
    constructor(props){
        super(props);
        this.state = {
                list: [],
                page: 1
        }
    }
    isNewData(newData, existingData){
        if (newData.length < 1)
            return false;
        
        if (existingData.length < 1)
            return true;

        const newId = newData[0]._id;
        let ans = true;

        existingData.map(val => {
            if (val._id === newId){
                ans = false;
            }
            return 0;
        })

        return ans;
    }
    componentDidMount(){
        this.props.usersIndividual({username: this.props.match.params.username}, this.props.history);
        this.setState({list:[],page:1}, () => this.dataListRender());
    }
    componentDidUpdate(nextProps){
        if (nextProps.chatsReducer.loading === false){
            if (this.isNewData(nextProps.chatsReducer.chats, this.state.list)){
                let data = [...this.state.list, ...nextProps.chatsReducer.chats];
                this.setState({list: data});
            }
        }
    }
    dataListRender = () => {
        const data = {
            page:  this.state.page,
            limit: defaultPageSize,
            username: this.props.match.params.username
        }
        this.setState({page: this.state.page + 1}, () =>  this.props.getChat(data, this.props.history));
    }

    sendMessage = (message) => {
        const data = {
            message,
            username:  this.props.match.params.username
        }

        this.props.sendMessage(data, this.props.history);
    }
    render(){
        let items = this.state.list.map(val => {
            return (
                <Box 
                    key={val._id}
                    message={val.message}
                    createdAt={val.createdAt}
                    author={val.author}
                    to={val.to}
                    leftSide={this.props.match.params.username === val.author ? true: false}
                />
            )
        });

        items.reverse();
        return(
            <div className="overflow-hidden">
                {this.props.userReducer.loading ? "" : 
                <Head 
                    history={this.props.history}
                    avatar={this.props.userReducer.user.avatar}
                    name={this.props.userReducer.user.name}
                    username={this.props.userReducer.user.username}
                />}
                <div id="chatbox">
                    <InfiniteScroll
                        pageStart={1}
                        loadMore={this.dataListRender}
                        hasMore={this.props.chatsReducer.more}
                        loader={<BeatLoader key={0} css={loading} />}
                    >
                        {items}
                    </InfiniteScroll> 
                </div>

                <Sender onSubmit={this.sendMessage}/>
            </div>
        )
    }
}

const mapStateToProps = (state) => state;
  
export default connect(
    mapStateToProps,
    {
        getChat, usersIndividual, sendMessage
    }
)(Chat);