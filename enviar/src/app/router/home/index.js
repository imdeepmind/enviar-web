import React, { Component, Fragment } from 'react';
import { Container, Row, Col } from 'reactstrap';
import { BeatLoader } from 'react-spinners';
import InfiniteScroll from 'react-infinite-scroller';
import { connect } from 'react-redux';

import TopNav from '../../container/topNav';
import Post from './components/posts';
import New from './components/new';
import NoPost from './components/nopost';

import { posts } from '../../redux/actions';

const loading = {
    display: 'flex',
    justifyContent: 'center',
}

class Home extends Component{
    componentDidMount(){
        this.dataListRender();
    }
    dataListRender = () => {
        if (this.props.homeReducer.loading){
            const data = {
                page:  1,
                limit: 3
            }
            this.props.posts(data, this.props.history);
        } 
    }
    loadMore = () => {
        if (this.props.homeReducer.loading === false){
            const data = {
                page: this.props.homeReducer.page + 1,
                limit: 3
            }
            this.props.posts(data, this.props.history);
        }
    }
    render(){
        const items = this.props.homeReducer.posts.map(val => {
            return (
                <Post 
                    key={val._id}
                    id={val._id}
                    postImage={val.content} 
                    author={val.author[0].username} 
                    avatar={val.author[0].avatar}
                    dateTime={val.author.status ? val.author.status : val.createdAt}
                    caption={val.caption} 
                />
            )
        })
        return (
            <Fragment>
                <TopNav />
                <Container>
                    <Row>
                        <Col xs="12"><New /></Col>
                        <Col xs="12" lg="7" className="mt-4 ">
                        <InfiniteScroll
                            pageStart={1}
                            loadMore={this.loadMore}
                            hasMore={this.props.homeReducer.pages >= this.props.homeReducer.page}
                            loader={<BeatLoader key={0} css={loading} />}
                        >
                            {items}
                        </InfiniteScroll>

                        {items.length < 1 && this.props.homeReducer.loading === false ? <NoPost /> : ""}


{/*                                 
                            {this.props.userReducer.loading ? "" : 
                                items.length < 1 ? <NoPost /> : 
                            (
                                <InfiniteScroll
                                    pageStart={1}
                                    loadMore={this.loadMore}
                                    hasMore={this.props.homeReducer.pages >= this.props.homeReducer.page}
                                    loader={<BeatLoader css={loading} />}
                                >
                                    {items}
                                </InfiniteScroll>
                            )} */}
                        </Col>
                        <Col xs="12" lg="5" className="mt-4 d-none d-lg-block">
                            Controllers
                        </Col>
                    </Row>
                </Container>
            </Fragment>
        )
    }
}
const mapStateToProps = (state) => state;
  
export default connect(
    mapStateToProps,
    {
        posts
    }
)(Home);