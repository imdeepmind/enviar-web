import React, { Component, Fragment } from 'react';
import InfiniteScroll from 'react-infinite-scroller';
import { Container } from 'reactstrap';
import { connect } from 'react-redux';
import { BeatLoader } from 'react-spinners';
import decode from 'jwt-decode';

import Box from './components/box';
import Head from './components/head';
import Sender from './components/sender';

import { getChat, usersIndividual, sendMessage } from '../../redux/actions';
import { defaultPageSize } from '../../../constants/configs';

const me = localStorage.getItem('user') ? decode(localStorage.getItem('user')) : {};

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
        console.log('compoent did mount');
        this.props.usersIndividual({username: this.props.match.params.username}, this.props.history);
        this.setState({list:[],page:1}, () => this.dataListRender());
    }
    componentDidUpdate(nextProps){
        if (this.props.chatsReducer.loading === false){
            if (this.isNewData(this.props.chatsReducer.chats, this.state.list)){
                let data = [...this.state.list, ...this.props.chatsReducer.chats];
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
        console.log(this.props);
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

        // items.reverse();
        return(
            <Fragment>
                {this.props.userReducer.loading ? "" : 
                <Head 
                    history={this.props.history}
                    avatar={this.props.userReducer.user.avatar}
                    name={this.props.userReducer.user.name}
                    username={this.props.userReducer.user.username}
                />}
                 <InfiniteScroll
                    pageStart={1}
                    loadMore={this.dataListRender}
                    hasMore={this.props.chatsReducer.more}
                    loader={<BeatLoader key={0} css={loading} />}
                >
                    {items}
                </InfiniteScroll> 
                
                <Container>

               

                    {/* {items.length < 1 && this.props.userReducer.loading === false ? <NoUsers /> : ""} */}


                    

                    
                </Container>

                <Sender onSubmit={this.sendMessage}/>
            </Fragment>
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