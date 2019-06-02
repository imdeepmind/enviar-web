import React, { Component, Fragment } from 'react';
import { Container, Row, Col, Card, CardBody } from 'reactstrap';
import { BeatLoader } from 'react-spinners';
import InfiniteScroll from 'react-infinite-scroller';
import { connect } from 'react-redux';

import TopNav from '../../container/topNav';
import FloatingActionButton from '../../container/floatingActionButton';
import Post from './components/posts';
import NoPost from './components/nopost';
import ProfileCard from '../../components/profileCard';
import Actions from './components/actions';

import { posts, getMe, logoutUser } from '../../redux/actions';
import { defaultPageSize } from '../../../constants/configs';

const loading = {
    display: 'flex',
    justifyContent: 'center',
}

class Home extends Component{
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
        this.props.getMe();
        this.dataListRender();
    }
    componentDidUpdate(nextProps){
        if (this.props.homeReducer.loading === false){
            if (this.isNewData(this.props.homeReducer.posts, this.state.list)){
                let data = [...this.state.list, ...this.props.homeReducer.posts];
                this.setState({list: data});
            }
        }
    }
    dataListRender = () => {
        const data = {
            page:  this.state.page,
            limit: defaultPageSize
        }
        this.setState({page: this.state.page + 1}, () => this.props.posts(data, this.props.history));
    }
    render(){
        const items = this.state.list.map(val => {
            return (
                <Post 
                    key={val._id}
                    id={val._id}
                    postImage={val.content} 
                    author={val.author[0].username} 
                    avatar={val.author[0].avatar}
                    dateTime={val.createdAt}
                    status={val.author[0].status}
                    caption={val.caption} 
                />
            )
        })
        return (
            <Fragment>
                <TopNav history={this.props.history} />
                <Container>
                    <Row>
                        <Col xs="12" xl="3" className="d-none d-xl-block">
                            <Card>
                                <CardBody>
                                    <ProfileCard 
                                        name={this.props.meReducer.me.name} 
                                        avatar={this.props.meReducer.me.avatar} 
                                        text={this.props.meReducer.me.status}
                                        me={true}
                                    />
                                </CardBody>
                            </Card>
                        </Col>
                        <Col xs="12" md="6" xl="5">
                        { this.props.homeReducer.loading ? <BeatLoader key={0} css={loading} /> : ""}
                        <InfiniteScroll
                            pageStart={1}
                            loadMore={this.dataListRender}
                            hasMore={this.props.homeReducer.more}
                            loader={<BeatLoader key={0} css={loading} />}
                        >
                            {items}
                        </InfiniteScroll>

                        {items.length < 1 && this.props.homeReducer.loading === false ? <NoPost /> : ""}
                        </Col>
                        <Col xs="12" md="6" xl="4" className="d-none d-md-block">
                            <Actions logout={this.props.logoutUser}/>
                        </Col>
                    </Row>
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
        posts, getMe, logoutUser
    }
)(Home);