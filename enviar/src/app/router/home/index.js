import React, { Component, Fragment } from 'react';
import { Container, Row, Col } from 'reactstrap';
import { BeatLoader } from 'react-spinners';
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
    constructor(props){
        super(props);
        this.state = {
            something: false,
        }
    }
    componentDidMount(){
        const data = {
            page: 0,
            limit: 10
        }
        this.props.posts(data, this.props.history);
    }
    render(){
        return (
            <Fragment>
                <TopNav />
                <Container>
                    <Row>
                        <Col xs="12"><New /></Col>
                        <Col xs="12" lg="7" className="mt-4 ">
                            {!this.props.homeReducer.loading ? 
                                    this.props.homeReducer.posts.length > 0 ? 
                                        this.props.homeReducer.posts.map((val, index) => {
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
                                    : <NoPost />
                                : (
                                    <BeatLoader 
                                        css={loading} 
                                    />
                                  )} 
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