import React, { Component, Fragment } from 'react';
import { Container } from 'reactstrap';
import { connect } from 'react-redux';

import TopNav from '../../container/topNav';
import PostForm from './components/postForm';
import FloatingActionButton from '../../container/floatingActionButton';

import { createPost } from '../../redux/actions';


class CreatePost extends Component{
    submitPost = data => {
        this.props.createPost(data, this.props.history);
    }
    render(){
        return (
            <Fragment>
                <TopNav />
                <Container>
                    <PostForm onSubmit={this.submitPost} />
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
        createPost
    }
)(CreatePost);