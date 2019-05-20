import React, { Component, Fragment } from 'react';
import { Container } from 'reactstrap';
import { connect } from 'react-redux';

import TopNav from '../../container/topNav';
import FloatingActionButton from '../../container/floatingActionButton';
import UCard from './components/ucard';

import { getAllPeoples } from '../../redux/actions';

class Messages extends Component{
    componentDidMount(){
        this.props.getAllPeoples();
    }
    render(){
        console.log(this.props);
        return(
            <Fragment>
                <TopNav history={this.props.history} />
                <Container>
                    {this.props.chatsReducer.loading ? "loading" : 
                        this.props.chatsReducer.peoples.map(val => {
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
                    }
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