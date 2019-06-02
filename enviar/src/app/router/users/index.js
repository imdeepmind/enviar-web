import React, { Component, Fragment } from 'react';
import InfiniteScroll from 'react-infinite-scroller';
import { Container } from 'reactstrap';
import { BeatLoader } from 'react-spinners';
import { connect } from 'react-redux';

import TopNav from '../../container/topNav';
import Ucard from './components/ucard';
import NoUsers from './components/noUsers';
import Search from './components/search';

import { users, userAction } from '../../redux/actions';
import { defaultPageSize } from '../../../constants/configs';
import FloatingActionButton from '../../container/floatingActionButton';

const loading = {
    display: 'flex',
    justifyContent: 'center',
}

class Users extends Component{
    constructor(props){
        super(props);
        this.state = {
            list: [],
            page: 1,
            q: ''
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
        this.dataListRender();
    }
    componentDidUpdate(nextProps){
        if (nextProps.userReducer.loading === false){
            if (this.isNewData(nextProps.userReducer.users, this.state.list)){
                let data = [...this.state.list, ...nextProps.userReducer.users];
                this.setState({list: data});
            }
        }
    }
    dataListRender = () => {
        const data = {
            page:  this.state.page,
            limit: defaultPageSize,
            q: this.state.q
        }
        this.setState({page: this.state.page + 1}, () => this.props.users(data, this.props.history));
    }
    userAction = (what, username) => {
        const data = {
            what: what,
            username: username
        }
        this.props.userAction(data, this.props.history);
    }
    handleSearch = data => {
        this.setState({
            list: [],
            page: 1,
            q: data.q
        }, () => this.dataListRender());
    }
    render(){
        const items = this.state.list.map(val => {
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
                    <Search onSubmit={this.handleSearch} />
                    { this.props.userReducer.loading ? <BeatLoader key={0} css={loading} /> : ""}
                    <InfiniteScroll
                        pageStart={1}
                        loadMore={this.dataListRender}
                        hasMore={this.props.userReducer.more}
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