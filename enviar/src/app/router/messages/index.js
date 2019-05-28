import React, { Component, Fragment } from 'react';
import { Container } from 'reactstrap';
import { connect } from 'react-redux';
import { BeatLoader } from 'react-spinners';
import InfiniteScroll from 'react-infinite-scroller';

import TopNav from '../../container/topNav';
import FloatingActionButton from '../../container/floatingActionButton';
import UCard from './components/ucard';

import { getAllPeoples } from '../../redux/actions';
import { defaultPageSize } from '../../../constants/configs';

const loading = {
    display: 'flex',
    justifyContent: 'center',
}

class Messages extends Component{
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
        this.dataListRender();
    }
    dataListRender = () => {
        const data = {
            page:  this.state.page,
            limit: defaultPageSize
        }
        this.setState({page: this.state.page + 1}, () =>  this.props.getAllPeoples(data));
    }
    componentDidUpdate(nextProps){
        if (this.props.chatsReducer.loading === false){
            if (this.isNewData(this.props.chatsReducer.peoples, this.state.list)){
                let data = [...this.state.list, ...this.props.chatsReducer.peoples];
                this.setState({list: data});
            }
        }
    }
    render(){
        console.log(this.props);
        const items = this.state.list.map(val => {
            return (
                <UCard 
                    key={val._id}
                    avatar={val.avatar}
                    status={val.status}
                    username={val.username}
                    name={val.name}  
                />
            )
        })
        return(
            <Fragment>
                <TopNav history={this.props.history} />
                <Container>
                    <InfiniteScroll
                        pageStart={1}
                        loadMore={this.dataListRender}
                        hasMore={this.props.chatsReducer.more}
                        loader={<BeatLoader key={0} css={loading} />}
                    >
                        {items}
                    </InfiniteScroll>

                    {items.length < 1 && this.props.homeReducer.loading === false ? "no post" : ""}
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
        getAllPeoples
    }
)(Messages);