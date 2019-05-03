import React, { Component, Fragment } from 'react';
import { Container } from 'reactstrap';
import { connect } from 'react-redux';

import TopNav from '../../container/topNav';
import Ucard from './components/ucard';
import More from './components/more';

import { users } from '../../redux/actions';



class Users extends Component{
    constructor(props){
        super(props);
        this.state = {
            page: 0,
            limit: 3,
        }
    }
    componentDidMount(){
        this.dataListRender();
    }
    dataListRender = () => {
        const data = {
            page: this.state.page,
            limit: this.state.limit
        }
        this.props.users(data, this.props.history);
    }
    moreContent = () => {
        this.setState({
            page: this.state.page + 1,
            limit: 3
        }, () => this.dataListRender());
    }
    render(){
        console.log('props',this.props);
        return (
            <Fragment>
                <TopNav />
                <Container>
                    {this.props.userReducer.loading ? "loading" : 
                        this.props.userReducer.users.length > 0 ? (
                            <Fragment>
                                {this.props.userReducer.users.map(val => {
                                return (
                                    <Ucard 
                                        key={val._id} a
                                        vatar={val.avatar} 
                                        username={val.username} 
                                        status={val.status}
                                        isBlocked={val.isBlocked}
                                        isFollowers={val.isFollowers}
                                        isFollowee={val.isFollowee}
                                    />
                                )
                                })}
                                <More moreContent={this.moreContent} />
                            </Fragment>
                            
                        )
                            
                        : "no users"
                    }
                </Container>
            </Fragment>
        )
    }
}
const mapStateToProps = (state) => state;
  
export default connect(
    mapStateToProps,
    {
        users
    }
)(Users);