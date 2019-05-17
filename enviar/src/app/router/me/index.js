import React, { Component, Fragment } from 'react';
import { connect } from 'react-redux';
import { BeatLoader } from 'react-spinners';
import { Container } from 'reactstrap';

import { getMe } from '../../../app/redux/actions';

import FloatingActionButton from '../../container/floatingActionButton';
import Hero from './components/hero';
import Detail from './components/detail';
import AError from './components/error';

const loading = {
    display: 'flex',
    justifyContent: 'center',
}

class Me extends Component {
    componentDidMount(){
        this.dataListRender();
    }
    buildAddress = () => {
        let arr = []
        const detail = this.props.meReducer.me;
        if (detail.city)
            arr.push(detail.city)
            
        if (detail.state)
            arr.push(detail.state)
        
        if (detail.country)
            arr.push(detail.country)

        return arr.join(', ');
    }
    dataListRender = () => {
        this.props.getMe();
    }
    render(){
        console.log(this.props);
        return (
            <Fragment>
                <Container>
                    {this.props.meReducer.loading ? <BeatLoader key={0} css={loading} /> : (
                        !this.props.meReducer.error ? 
                        <Fragment>
                             <Hero 
                                name={this.props.meReducer.me.name} 
                                username={this.props.meReducer.me.username} 
                                avatar={this.props.meReducer.me.avatar} 
                                history={this.props.history}
                                status={this.props.meReducer.me.status}
                            />
                            <Detail 
                                location={this.buildAddress()} 
                                dob={this.props.meReducer.me.dob} 
                                bio={this.props.meReducer.me.bio}
                            />
                        </Fragment>
                        : <AError title={this.props.meReducer.error} />
                    )}
                    <FloatingActionButton history={this.props.history} />
                </Container>
            </Fragment>
            
        )
    }
}

const mapStateToProps = (state) => state;
  
export default connect(
    mapStateToProps,
    {
        getMe
    }
)(Me);