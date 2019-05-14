import React, { Component, Fragment } from 'react';
import { Container, Row, Col } from 'reactstrap';
import { BeatLoader } from 'react-spinners';
import InfiniteScroll from 'react-infinite-scroller';
import { connect } from 'react-redux';

import TopNav from '../../container/topNav';
import FloatingActionButton from '../../container/floatingActionButton';
import Post from './components/posts';
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
                limit: 10
            }
            this.props.posts(data, this.props.history);
        } 
    }
    loadMore = () => {
        if (this.props.homeReducer.loading === false){
            const data = {
                page: this.props.homeReducer.page + 1,
                limit: 10
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
                    dateTime={val.createdAt}
                    status={val.author[0].status}
                    caption={val.caption} 
                />
            )
        })
        return (
            <Fragment>
                <TopNav />
                <Container>
                    <Row>
                        <Col xs="12" lg="7">
                        <InfiniteScroll
                            pageStart={1}
                            loadMore={this.loadMore}
                            hasMore={this.props.homeReducer.pages >= this.props.homeReducer.page}
                            loader={<BeatLoader key={0} css={loading} />}
                        >
                            {items}
                        </InfiniteScroll>

                        {items.length < 1 && this.props.homeReducer.loading === false ? <NoPost /> : ""}
                        </Col>
                        <Col xs="12" lg="5" className="mt-4 d-none d-lg-block">
                            Controllers
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
        posts
    }
)(Home);